import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState } from 'react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 672 : 800,
      period: "month",
      description: "Ideal for businesses ready to explore AI and intelligent automation",
      features: [
        "Basic AI Tools",
        "Email Support",
        "5 Automation Workflows",
        "Basic Analytics",
        "1 User Account"
      ]
    },
    {
      name: "Professional",
      price: isYearly ? 1260 : 1500,
      period: "month", 
      description: "Perfect for growing teams that need advanced AI capabilities",
      features: [
        "Advanced AI Tools",
        "Priority Support",
        "25 Automation Workflows",
        "Advanced Analytics",
        "5 User Accounts",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex needs",
      features: [
        "Custom AI Solutions",
        "Dedicated Support",
        "Unlimited Workflows",
        "Enterprise Analytics",
        "Unlimited Users",
        "Custom Development",
        "SLA Guarantee"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full shadow-medium px-4 py-2">
            PRICING
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple Price For All
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing plans that fit your budget & scale with needs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shadow-medium ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge variant="default" className="ml-2 rounded-full shadow-medium">
                30% off
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-border shadow-strong hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 rounded-2xl ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="px-4 py-1 rounded-full shadow-medium">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-foreground">
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <Button 
                  size="lg" 
                  className={`w-full mb-8 rounded-2xl shadow-strong transform hover:-translate-y-0.5 transition-all duration-300 h-11 py-3 ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                  }`}
                >
                  Get Started
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="p-1 bg-primary/10 rounded-full shadow-soft">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;