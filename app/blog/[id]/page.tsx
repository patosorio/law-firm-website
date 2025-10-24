import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostContent } from "@/components/blog-post-content"
import { getBlogPostById } from "@/lib/firebase/site-content"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const postId = parseInt(params.id)
  
  if (isNaN(postId)) {
    notFound()
  }

  const post = await getBlogPostById(postId)
  
  if (!post || post.status !== 'published') {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <BlogPostContent post={post} language="en" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Generate static params for the blog posts
export async function generateStaticParams() {
  // For now, we'll return the known IDs
  // In the future, you could fetch all blog post IDs from Firestore
  return [
    { id: '1' },
    { id: '2' }
  ]
}
