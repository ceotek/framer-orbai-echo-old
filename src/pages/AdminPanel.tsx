import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, UserPlus, Users, Settings, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { User } from '@supabase/supabase-js';

const AdminPanel = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [isAssigning, setIsAssigning] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        navigate('/auth');
        return;
      }

      setUser(session.user);

      // Check if user has admin role
      const { data: userRoles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin');

      setIsAdmin(userRoles && userRoles.length > 0);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to check admin status',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAssignAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newAdminEmail.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter an email address',
        variant: 'destructive',
      });
      return;
    }

    setIsAssigning(true);

    try {
      // For security, we can't directly assign admin roles to arbitrary emails
      // Instead, we'll add to a pending admin requests table or use a secure process
      
      toast({
        title: 'Admin Role Assignment',
        description: 'For security reasons, admin roles must be assigned manually through the database. Please contact a system administrator.',
        variant: 'destructive',
      });
      
      setNewAdminEmail('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to assign admin role',
        variant: 'destructive',
      });
    } finally {
      setIsAssigning(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass text-center">
          <CardContent className="p-8">
            <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
            <p className="text-muted-foreground mb-6">
              You need administrator privileges to access this panel.
            </p>
            <Button onClick={() => navigate('/')} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground">Manage system administration and security</p>
          </div>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {/* Current User Info */}
          <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Admin Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-500/20 text-green-700 border-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Administrator
                </Badge>
                <span className="text-muted-foreground">
                  Logged in as: {user?.email}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Security Tools */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Manage user roles and permissions. Currently viewing waitlist entries requires admin access.
                </p>
                <Button 
                  onClick={() => navigate('/blog-admin')}
                  className="w-full"
                >
                  Manage Blog Posts
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Admin Role Assignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAssignAdmin} className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Assign administrator privileges to a user account.
                  </p>
                  <Input
                    type="email"
                    placeholder="user@domain.com"
                    value={newAdminEmail}
                    onChange={(e) => setNewAdminEmail(e.target.value)}
                    className="rounded-xl"
                  />
                  <Button 
                    type="submit" 
                    disabled={isAssigning}
                    className="w-full"
                  >
                    {isAssigning ? 'Processing...' : 'Request Admin Assignment'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Security Notice */}
          <Card className="bg-gradient-to-r from-yellow-500/5 via-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Settings className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Security Recommendations
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enable leaked password protection in Supabase Auth settings</li>
                    <li>• Enable email confirmation for production</li>
                    <li>• Regularly review user access and permissions</li>
                    <li>• Monitor authentication logs for suspicious activity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;