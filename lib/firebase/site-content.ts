import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { SiteContentDocument, HomepageContent, defaultHomepageContent, BlogPost } from "../types/site-content";

/**
 * Fetches site content from Firestore for a specific language
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<HomepageContent> - The homepage content or default fallback
 */
export async function getSiteContent(language: string = 'en'): Promise<HomepageContent> {
  try {
    const docRef = doc(db, 'siteContent', `homepage_${language}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
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
 * Fetches site content with error handling and fallback
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<{ content: HomepageContent; error?: string }>
 */
export async function getSiteContentSafe(language: string = 'en'): Promise<{ 
  content: HomepageContent; 
  error?: string 
}> {
  try {
    const content = await getSiteContent(language);
    return { content };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in getSiteContentSafe:', errorMessage);
    return { 
      content: defaultHomepageContent, 
      error: errorMessage 
    };
  }
}

/**
 * Fetches all published blog posts from Firestore
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<BlogPost[]> - Array of published blog posts
 */
export async function getBlogPosts(language: string = 'en'): Promise<BlogPost[]> {
  try {
    const blogRef = collection(db, 'siteBlog');
    const querySnapshot = await getDocs(blogRef);
    
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
 * Fetches a specific blog post by ID from Firestore
 * @param id - The blog post ID
 * @returns Promise<BlogPost | null> - The blog post or null if not found
 */
export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  try {
    const docRef = doc(db, 'siteBlog', id.toString());
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
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
 * Fetches blog posts with error handling and fallback
 * @param language - The language code (e.g., 'en', 'es')
 * @returns Promise<{ posts: BlogPost[]; error?: string }>
 */
export async function getBlogPostsSafe(language: string = 'en'): Promise<{ 
  posts: BlogPost[]; 
  error?: string 
}> {
  try {
    const posts = await getBlogPosts(language);
    return { posts };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in getBlogPostsSafe:', errorMessage);
    return { 
      posts: [], 
      error: errorMessage 
    };
  }
}
