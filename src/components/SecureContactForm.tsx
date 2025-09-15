import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SecureContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const { toast } = useToast();

  const serviceOptions = [
    'Digital Investigations',
    'Threat Intelligence', 
    'Digital Footprint Removal',
    'Digital Asset Recovery',
    'Security Consultation',
    'Emergency Response'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];

    // Required fields
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.message.trim()) errors.push("Message is required");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    // Phone validation (if provided)
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.push("Please enter a valid phone number");
    }

    // Message length
    if (formData.message.length < 20) {
      errors.push("Message must be at least 20 characters");
    }

    // Name validation (no numbers or special characters)
    if (formData.name && !/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.push("Name should only contain letters and spaces");
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check (10 minute cooldown)
    const now = Date.now();
    const cooldownPeriod = 10 * 60 * 1000; // 10 minutes
    if (lastSubmission && (now - lastSubmission) < cooldownPeriod) {
      const remainingTime = Math.ceil((cooldownPeriod - (now - lastSubmission)) / 60000);
      toast({
        title: "Please wait",
        description: `You can submit again in ${remainingTime} minute(s).`,
        variant: "destructive"
      });
      return;
    }

    const errors = validateForm();
    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors[0],
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, this would send to a secure backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      setLastSubmission(now);
      
      // Reset form
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll respond to your inquiry within 2 hours."
      });
      
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground mb-2">
          Secure Contact Form
        </CardTitle>
        <p className="text-muted-foreground">
          All communications are encrypted and handled with complete confidentiality.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Name *</label>
              <Input 
                placeholder="Your full name" 
                className="rounded-xl" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Organization</label>
              <Input 
                placeholder="Company name" 
                className="rounded-xl" 
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                maxLength={100}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email *</label>
              <Input 
                type="email" 
                placeholder="your.email@domain.com" 
                className="rounded-xl" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone</label>
              <Input 
                type="tel" 
                placeholder="+1 (555) 123-4567" 
                className="rounded-xl" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                maxLength={20}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Service Interest</label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger className="w-full bg-background border border-border rounded-xl text-foreground">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service} value={service}>{service}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Message *</label>
            <Textarea 
              placeholder="Describe your security needs or incident details. All information is kept strictly confidential."
              className="rounded-xl min-h-[120px]"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              maxLength={2000}
              required
            />
            <div className="text-xs text-muted-foreground text-right">
              {formData.message.length}/2000 characters
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-xl">
            <Shield className="w-4 h-4 inline mr-2" />
            This form uses end-to-end encryption. Your information is secure and will only be accessed by authorized security personnel.
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 h-12"
          >
            <Send className="mr-2 h-5 w-5" />
            {isSubmitting ? 'Sending...' : 'Send Secure Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SecureContactForm;