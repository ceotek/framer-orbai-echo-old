import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session } from '@supabase/supabase-js';

const Auth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Redirect to admin if authenticated
        if (session?.user) {
          navigate('/blog-admin');
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        navigate('/blog-admin');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handleSignUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const redirectUrl = `${window.location.origin}/`;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });

    if (error) {
      setError(error.message);
    } else {
      setError("Check your email for a confirmation link!");
    }

    setLoading(false);
  };



  const SignInForm = ({ isSignUp }: { isSignUp: boolean }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      // Basic validation
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }
      
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      if (isSignUp) {
        handleSignUp(email, password);
      } else {
        handleSignIn(email, password);
      }
    };

    return (
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="auth-email">Email</Label>
          <Input
            id="auth-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/50 backdrop-blur-glass border-border/60"
            placeholder="your.email@domain.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="auth-password">Password</Label>
          <Input
            id="auth-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="bg-background/50 backdrop-blur-glass border-border/60"
            placeholder={isSignUp ? "Minimum 6 characters" : "Password"}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={loading}
        >
          {loading ? (isSignUp ? 'Creating Account...' : 'Signing In...') : (isSignUp ? 'Create Account' : 'Sign In')}
        </Button>
      </form>
    );
  };

  useEffect(() => {
    document.title = 'Admin Login | DEFEND INFO';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-primary/[0.03] pointer-events-none z-0"></div>
      
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <CardDescription>
            Admin-only access to manage blog posts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            {error && (
              <Alert className={`mb-4 ${error.includes("Check your email") ? "border-green-500/50 bg-green-500/10" : "border-destructive/50 bg-destructive/10"}`}>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <TabsContent value="signin">
              <SignInForm isSignUp={false} />
            </TabsContent>
            
            <TabsContent value="signup">
              <SignInForm isSignUp={true} />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                New accounts require admin approval for access.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;