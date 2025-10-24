import { BlogPost } from "@/lib/types/site-content";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPostContentProps {
  post: BlogPost;
  language?: string;
}

export function BlogPostContent({ post, language = 'en' }: BlogPostContentProps) {
  const translation = post.translations[language as keyof typeof post.translations] || post.translations.en;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convert markdown-style content to HTML (basic conversion)
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gim, '<h1 class="font-serif text-3xl font-semibold text-foreground mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="font-serif text-2xl font-semibold text-foreground mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="font-serif text-xl font-semibold text-foreground mb-3 mt-4">$1</h3>')
      .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed mb-4">')
      .replace(/^(?!<[h|l])(.*$)/gim, '<p class="text-muted-foreground leading-relaxed mb-4">$1</p>');
  };

  const formattedIntroduction = formatContent(translation.introduction);
  const formattedMainContent = formatContent(translation.main_content);
  const formattedSummary = formatContent(translation.summary);
  const formattedConclusion = formatContent(translation.conclusion);

  return (
    <article className="space-y-8">
      {/* Back to Blog Link */}
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6">
        {/* Category and Tags */}
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-medium">
            {post.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          {post.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-muted rounded-md text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
          {translation.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground pb-6 border-b">
          <div className="flex items-center gap-4">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>
      </header>

      {/* Article Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedIntroduction }}
          />
        </section>

        {/* Main Content */}
        <section>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedMainContent }}
          />
        </section>

        {/* Summary */}
        <section className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Summary</h3>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedSummary }}
          />
        </section>

        {/* Conclusion */}
        <section className="bg-card p-6 rounded-lg">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Conclusion</h3>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedConclusion }}
          />
        </section>
      </div>

      {/* Article Footer */}
      <footer className="pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <p>Published on {formatDate(post.publishedAt)}</p>
            {post.updatedAt !== post.publishedAt && (
              <p>Last updated on {formatDate(post.updatedAt)}</p>
            )}
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </footer>
    </article>
  );
}
