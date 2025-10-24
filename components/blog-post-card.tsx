import { BlogPost } from "@/lib/types/site-content";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface BlogPostCardProps {
  post: BlogPost;
  language?: string;
}

export function BlogPostCard({ post, language = 'en' }: BlogPostCardProps) {
  const translation = post.translations[language as keyof typeof post.translations] || post.translations.en;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="p-8 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="space-y-4">
          {/* Category and Tags */}
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
              {post.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-muted rounded-md text-xs">
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="font-serif text-2xl font-semibold text-foreground hover:text-primary transition-colors">
            {translation.title}
          </h2>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed">
            {translation.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
            <div className="flex items-center gap-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </div>
      </Card>
    </Link>
  );
}
