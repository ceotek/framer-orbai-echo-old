import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { User, Session } from '@supabase/supabase-js';

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
}

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [post, setPost] = useState<BlogPost>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image_url: '',
    tags: [],
    status: 'draft'
  });

  const [tagInput, setTagInput] = useState('');

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
      } else if (id) {
        fetchPost(id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, id]);

  const fetchPost = async (postId: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to fetch blog post',
          variant: 'destructive',
        });
        navigate('/blog-admin');
        return;
      }

      setPost({
        id: data.id,
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt || '',
        content: data.content,
        image_url: data.image_url || '',
        tags: data.tags || [],
        status: data.status as 'draft' | 'published' | 'archived'
      });
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/-+$|^-+/g, '');
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !post.tags.includes(tagInput.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = async (newStatus?: 'draft' | 'published' | 'archived') => {
    if (!user) return;

    setSaving(true);
    const status = newStatus || post.status;

    try {
      const postData = {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        image_url: post.image_url || null,
        tags: post.tags,
        status,
        author_id: user.id,
        ...(status === 'published' && !post.id ? { published_at: new Date().toISOString() } : {})
      };

      let result;
      
      if (post.id) {
        // Update existing post
        result = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', post.id)
          .select()
          .single();
      } else {
        // Create new post
        result = await supabase
          .from('blog_posts')
          .insert(postData)
          .select()
          .single();
      }

      if (result.error) {
        toast({
          title: 'Error',
          description: 'Failed to save blog post',
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Success',
        description: `Post ${post.id ? 'updated' : 'created'} successfully`,
      });

      if (!post.id) {
        navigate(`/blog-editor/${result.data.id}`);
      }

      setPost(prev => ({ ...prev, status }));
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    document.title = `${id ? 'Edit' : 'New'} Blog Post | DEFEND INFO`;
  }, [id]);

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
            <Button
              variant="ghost"
              onClick={() => navigate('/blog-admin')}
              className="text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin
            </Button>
            <h1 className="text-3xl font-bold text-foreground">
              {id ? 'Edit Post' : 'New Post'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Select value={post.status} onValueChange={(value) => setPost(prev => ({ ...prev, status: value as 'draft' | 'published' | 'archived' }))}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              onClick={() => handleSave()}
              disabled={saving || !post.title.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </Button>
            
            {post.status === 'published' && (
              <Button
                variant="outline"
                onClick={() => window.open('/blog', '_blank')}
                className="border-border/60"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            )}
          </div>
        </div>

        {/* Editor Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
              <CardHeader>
                <CardTitle>Post Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={post.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter post title..."
                    className="bg-background/50 backdrop-blur-glass border-border/60"
                  />
                </div>
                
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={post.slug}
                    onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="post-url-slug"
                    className="bg-background/50 backdrop-blur-glass border-border/60"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={post.excerpt}
                    onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief description of the post..."
                    rows={3}
                    className="bg-background/50 backdrop-blur-glass border-border/60"
                  />
                </div>

                <div>
                  <Label htmlFor="image_url">Featured Image URL</Label>
                  <Input
                    id="image_url"
                    value={post.image_url}
                    onChange={(e) => setPost(prev => ({ ...prev, image_url: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                    className="bg-background/50 backdrop-blur-glass border-border/60"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Content */}
            <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
              <CardHeader>
                <CardTitle>Content</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={post.content}
                  onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Write your blog post content here..."
                  rows={20}
                  className="bg-background/50 backdrop-blur-glass border-border/60 font-mono text-sm"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tags */}
            <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add tag..."
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    className="bg-background/50 backdrop-blur-glass border-border/60"
                  />
                  <Button onClick={handleAddTag} size="sm" variant="outline">
                    Add
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  onClick={() => handleSave('draft')}
                  disabled={saving || !post.title.trim()}
                  variant="outline"
                  className="w-full justify-start"
                >
                  Save as Draft
                </Button>
                <Button
                  onClick={() => handleSave('published')}
                  disabled={saving || !post.title.trim() || !post.content.trim()}
                  className="w-full justify-start bg-green-600 hover:bg-green-700 text-white"
                >
                  Publish Post
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;