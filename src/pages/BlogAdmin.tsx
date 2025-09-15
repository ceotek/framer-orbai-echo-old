import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, LogOut, PenTool } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { User, Session } from '@supabase/supabase-js';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  image_url: string | null;
  tags: string[] | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

const BlogAdmin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate('/auth');
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate('/auth');
      } else {
        fetchPosts();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to fetch blog posts',
          variant: 'destructive',
        });
        return;
      }

      setPosts(data || []);
    } catch (error) {
      // Replace console.error with toast notification
      toast({
        title: 'Error',
        description: 'Failed to fetch blog posts',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to delete post',
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Success',
        description: 'Post deleted successfully',
      });

      fetchPosts();
    } catch (error) {
      // Replace console.error with toast notification
      toast({
        title: 'Error',
        description: 'Failed to delete post',
        variant: 'destructive',
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      published: 'bg-green-500 text-white',
      draft: 'bg-yellow-500 text-white',
      archived: 'bg-gray-500 text-white'
    };

    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || 'bg-gray-500 text-white'}>
        {status}
      </Badge>
    );
  };

  useEffect(() => {
    document.title = 'Blog Admin | DEFEND INFO';
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-primary/[0.03] pointer-events-none z-0"></div>
      
      <div className="relative z-10 container-max px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full shadow-medium">
              <PenTool className="w-4 h-4 mr-2" />
              BLOG ADMIN
            </Badge>
            <h1 className="text-3xl font-bold text-foreground">Blog Management</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => navigate('/blog-editor')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/blog')}
              className="border-border/60"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Blog
            </Button>
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="text-muted-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass text-center py-12">
            <CardContent>
              <PenTool className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">No blog posts yet</h2>
              <p className="text-muted-foreground mb-6">Create your first blog post to get started.</p>
              <Button
                onClick={() => navigate('/blog-editor')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create First Post
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass hover:shadow-glass-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {getStatusBadge(post.status)}
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => navigate(`/blog-editor/${post.id}`)}
                        className="h-8 w-8 p-0"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeletePost(post.id)}
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {post.status === 'published' && post.published_at 
                      ? `Published ${new Date(post.published_at).toLocaleDateString()}`
                      : `Created ${new Date(post.created_at).toLocaleDateString()}`
                    }
                  </p>
                </CardHeader>
                <CardContent>
                  {post.excerpt && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;