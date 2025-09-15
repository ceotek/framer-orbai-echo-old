import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, PenTool } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    const title = 'Cybersecurity Blog | DEFEND INFO';
    const description = 'Cybersecurity insights, threat intelligence, and digital investigations from DEFEND INFO.';
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', window.location.origin + '/blog');
    if (!canonical.parentNode) document.head.appendChild(canonical);

    // Structured data (Blog)
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'DEFEND INFO Blog',
      description,
      url: window.location.origin + '/blog'
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  const posts = [
    {
      title: 'Advanced Threat Intelligence: What 2025 Brings',
      excerpt: 'From AI-driven phishing to deepfake-enabled fraud, explore the biggest threats emerging in 2025 and how to counter them effectively.',
      tag: 'Threat Intelligence',
      date: '2025-09-10'
    },
    {
      title: 'Digital Footprint Removal: Myths vs Reality',
      excerpt: 'Understand what can and cannot be permanently removed from the internet, and how enterprises should approach reputation defense.',
      tag: 'Footprint Removal',
      date: '2025-08-22'
    },
    {
      title: 'Recovering Stolen Crypto: A Practical Guide',
      excerpt: 'How blockchain analysis and coordinated operations can maximize the chance of recovering digital assets.',
      tag: 'Asset Recovery',
      date: '2025-08-01'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-primary/[0.03] pointer-events-none z-0"></div>

      <Header />

      <main className="pt-24 relative z-10 pb-16">
        <section className="py-16 px-4 sm:px-6 lg:py-20">
          <div className="container-max max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium rounded-full shadow-medium">
                <PenTool className="w-4 h-4 mr-2" />
                DEFEND INFO BLOG
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Cybersecurity Blog
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Research, case studies, and actionable guidance from our investigations and security operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {posts.map((post, idx) => (
                <Card key={idx} className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{post.tag}</Badge>
                    <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="story-link px-0">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter signup section */}
            <div className="text-center py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl border border-border/30">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our cybersecurity newsletter for the latest threat intelligence and security insights.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 h-14 text-lg font-medium shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
