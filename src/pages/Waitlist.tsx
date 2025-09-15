import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    email: '',
    twitter: '',
    telegram: '',
    project_name: '',
    use_cases: [] as string[],
    other_use_case: '',
    project_description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const { toast } = useToast();

  const useCaseOptions = [
    'AI agent integration',
    'Trading / bots', 
    'Personal',
    'Product embedding',
    'Other (please specify below)'
  ];

  const handleUseCaseChange = (useCase: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        use_cases: [...prev.use_cases, useCase]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        use_cases: prev.use_cases.filter(item => item !== useCase)
      }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check (5 minute cooldown)
    const now = Date.now();
    const cooldownPeriod = 5 * 60 * 1000; // 5 minutes
    if (lastSubmission && (now - lastSubmission) < cooldownPeriod) {
      const remainingTime = Math.ceil((cooldownPeriod - (now - lastSubmission)) / 60000);
      toast({
        title: "Please wait",
        description: `You can submit again in ${remainingTime} minute(s).`,
        variant: "destructive"
      });
      return;
    }
    
    // Input validation
    if (!formData.email || !formData.project_description) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your email and project description.",
        variant: "destructive"
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email format",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Content validation
    if (formData.project_description.length < 10) {
      toast({
        title: "Description too short",
        description: "Please provide more details about your project (at least 10 characters).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          email: formData.email.toLowerCase().trim(),
          twitter: formData.twitter?.trim() || null,
          telegram: formData.telegram?.trim() || null,
          project_name: formData.project_name?.trim() || null,
          use_cases: formData.use_cases,
          other_use_case: formData.other_use_case?.trim() || null,
          project_description: formData.project_description.trim()
        }]);

      if (error) throw error;

      setLastSubmission(now);
      setIsSubmitted(true);
      toast({
        title: "Successfully joined waitlist!",
        description: "We'll be in touch with early access details soon."
      });
    } catch (error) {
      // Replace console.error with proper error handling
      let errorMessage = "Please try again later or contact support.";
      
      if (error instanceof Error) {
        // Handle specific Supabase errors
        if (error.message.includes("duplicate key value")) {
          errorMessage = "This email is already on our waitlist.";
        } else if (error.message.includes("invalid input")) {
          errorMessage = "Please check your input and try again.";
        }
      }
      
      toast({
        title: "Error joining waitlist",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <Header />
        <main className="pt-24 pb-16 px-4 sm:px-6">
          <div className="container-max relative z-10 max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 shadow-strong border border-border">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                You're on the list!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for joining our waitlist. We'll contact you with early access details and updates about our cybersecurity solutions.
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-2xl shadow-depth"
                onClick={() => window.location.href = '/'}
              >
                Return Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container-max relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium rounded-full shadow-glass border border-border/40">
              <Sparkles className="w-4 h-4 mr-2" />
              EARLY ACCESS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tell Us About You
            </h1>
            <p className="text-xl text-muted-foreground">
              Request early access to advanced cybersecurity insights and custom solutions.
            </p>
          </div>

          <Card className="bg-card/60 backdrop-blur-glass shadow-strong border border-border/60 rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-background/50 border-border/60 rounded-xl h-12 shadow-glass focus:shadow-glass-hover transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Twitter Field */}
                <div className="space-y-2">
                  <Label htmlFor="twitter" className="text-sm font-medium text-muted-foreground">
                    Twitter <span className="text-xs">(optional)</span>
                  </Label>
                  <Input
                    id="twitter"
                    type="text"
                    value={formData.twitter}
                    onChange={(e) => handleInputChange('twitter', e.target.value)}
                    className="bg-background/50 border-border/60 rounded-xl h-12 shadow-glass focus:shadow-glass-hover transition-all"
                    placeholder="@username"
                  />
                </div>

                {/* Telegram Field */}
                <div className="space-y-2">
                  <Label htmlFor="telegram" className="text-sm font-medium text-muted-foreground">
                    Telegram <span className="text-xs">(optional)</span>
                  </Label>
                  <Input
                    id="telegram"
                    type="text"
                    value={formData.telegram}
                    onChange={(e) => handleInputChange('telegram', e.target.value)}
                    className="bg-background/50 border-border/60 rounded-xl h-12 shadow-glass focus:shadow-glass-hover transition-all"
                    placeholder="@username"
                  />
                </div>

                {/* Project Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="project_name" className="text-sm font-medium text-muted-foreground">
                    Project name <span className="text-xs">(optional)</span>
                  </Label>
                  <Input
                    id="project_name"
                    type="text"
                    value={formData.project_name}
                    onChange={(e) => handleInputChange('project_name', e.target.value)}
                    className="bg-background/50 border-border/60 rounded-xl h-12 shadow-glass focus:shadow-glass-hover transition-all"
                    placeholder="Your project or company name"
                  />
                </div>

                {/* Use Cases */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium text-foreground">
                    How will you use our cybersecurity solutions? <span className="text-destructive">*</span>
                  </Label>
                  <div className="space-y-3">
                    {useCaseOptions.map((useCase) => (
                      <div key={useCase} className="flex items-center space-x-3">
                        <Checkbox
                          id={useCase}
                          checked={formData.use_cases.includes(useCase)}
                          onCheckedChange={(checked) => handleUseCaseChange(useCase, checked as boolean)}
                          className="border-border/60"
                        />
                        <Label
                          htmlFor={useCase}
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          {useCase}
                        </Label>
                      </div>
                    ))}
                  </div>

                  {/* Other Use Case Specification */}
                  {formData.use_cases.includes('Other (please specify below)') && (
                    <Input
                      value={formData.other_use_case}
                      onChange={(e) => handleInputChange('other_use_case', e.target.value)}
                      className="bg-background/50 border-border/60 rounded-xl h-12 shadow-glass focus:shadow-glass-hover transition-all mt-2"
                      placeholder="Please specify your use case"
                    />
                  )}
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label htmlFor="project_description" className="text-sm font-medium text-foreground">
                    Tell us about your project <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="project_description"
                    value={formData.project_description}
                    onChange={(e) => handleInputChange('project_description', e.target.value)}
                    required
                    rows={4}
                    className="bg-background/50 border-border/60 rounded-xl shadow-glass focus:shadow-glass-hover transition-all resize-none"
                    placeholder="Describe your cybersecurity needs, current challenges, or how you plan to use our solutions..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 h-12 rounded-2xl shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 font-medium"
                >
                  {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Waitlist;
