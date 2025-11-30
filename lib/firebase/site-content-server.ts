import { adminDb } from "./admin";
import { SiteContentDocument, HomepageContent, defaultHomepageContent, BlogPost } from "../types/site-content";

/**
 * Server-side function to fetch site content from Firestore using Admin SDK
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<HomepageContent> - The homepage content or default fallback
 */
export async function getSiteContentServer(language: string = 'en'): Promise<HomepageContent> {
  try {
    const docRef = adminDb.collection('siteContent').doc(`homepage_${language}`);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const data = docSnap.data() as SiteContentDocument;
      return data.homepage;
    } else {
      console.warn(`No site content found for language: ${language}. Using default content.`);
      return defaultHomepageContent;
    }
  } catch (error) {
    console.error('Error fetching site content:', error);
    return defaultHomepageContent;
  }
}

/**
 * Server-side function to fetch site content with error handling and fallback
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<{ content: HomepageContent; error?: string }>
 */
export async function getSiteContentSafeServer(language: string = 'en'): Promise<{ 
  content: HomepageContent; 
  error?: string 
}> {
  try {
    const content = await getSiteContentServer(language);
    return { content };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in getSiteContentSafeServer:', errorMessage);
    return { 
      content: defaultHomepageContent, 
      error: errorMessage 
    };
  }
}

/**
 * Server-side function to fetch all published blog posts from Firestore using Admin SDK
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<BlogPost[]> - Array of published blog posts
 */
export async function getBlogPostsServer(language: string = 'en'): Promise<BlogPost[]> {
  try {
    const blogRef = adminDb.collection('siteBlog');
    const querySnapshot = await blogRef.get();
    
    const blogPosts: BlogPost[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data() as BlogPost;
      // Filter for published posts and sort by publishedAt
      if (data.status === 'published') {
        blogPosts.push(data);
      }
    });
    
    // Sort by publishedAt in descending order (newest first)
    blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Server-side function to fetch a specific blog post by ID from Firestore using Admin SDK
 * @param id - The blog post ID
 * @returns Promise<BlogPost | null> - The blog post or null if not found
 */
export async function getBlogPostByIdServer(id: number): Promise<BlogPost | null> {
  try {
    const docRef = adminDb.collection('siteBlog').doc(id.toString());
    const docSnap = await docRef.get();
    
    if (docSnap.exists) {
      return docSnap.data() as BlogPost;
    } else {
      console.warn(`No blog post found with ID: ${id}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

/**
 * Server-side function to fetch blog posts with error handling and fallback
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<{ posts: BlogPost[]; error?: string }>
 */
export async function getBlogPostsSafeServer(language: string = 'en'): Promise<{ 
  posts: BlogPost[]; 
  error?: string 
}> {
  try {
    const posts = await getBlogPostsServer(language);
    return { posts };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in getBlogPostsSafeServer:', errorMessage);
    return { 
      posts: [], 
      error: errorMessage 
    };
  }
}
