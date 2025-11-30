import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostCard } from "@/components/blog-post-card"
import { getBlogPostsSafeServer } from "@/lib/firebase/site-content-server"

export default async function BlogPage() {
  const { posts, error } = await getBlogPostsSafeServer('en');
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Legal Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear insight on new laws. Empowering your decisions.
            </p>
          </div>
          
          <div className="grid gap-8 md:gap-12">
            {error && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Unable to load blog posts. Please try again later.
                </p>
              </div>
            )}
            
            {posts.length === 0 && !error ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No blog posts available at the moment. Check back soon!
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <BlogPostCard key={post.id} post={post} language="en" />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
