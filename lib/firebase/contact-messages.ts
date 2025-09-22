import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: any; // Firestore serverTimestamp
}

/**
 * Submits a contact message to Firestore
 * @param messageData - The contact form data
 * @returns Promise<string> - The document ID of the created message
 */
export async function submitContactMessage(messageData: Omit<ContactMessage, 'createdAt'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      ...messageData,
      createdAt: serverTimestamp()
    });
    
    console.log('Contact message submitted with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact message:', error);
    throw new Error('Failed to submit contact message. Please try again.');
  }
}

/**
 * Submits a contact message with error handling
 * @param messageData - The contact form data
 * @returns Promise<{ success: boolean; messageId?: string; error?: string }>
 */
export async function submitContactMessageSafe(messageData: Omit<ContactMessage, 'createdAt'>): Promise<{ 
  success: boolean; 
  messageId?: string; 
  error?: string 
}> {
  try {
    const messageId = await submitContactMessage(messageData);
    return { success: true, messageId };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in submitContactMessageSafe:', errorMessage);
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}
