import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { SiteContentDocument, HomepageContent, defaultHomepageContent } from "../types/site-content";

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
