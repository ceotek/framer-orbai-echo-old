import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, BookOpen, Shield, Target, Clock } from 'lucide-react';

const Mentoring = () => {
  const phases = [
    {
      phase: "Phase I",
      level: "Intermediate",
      description: "Comprehensive foundation in cybersecurity fundamentals",
      chapters: [
        {
          title: "Chapter I: Introduction & Beginners Guide",
          objective: "Introduce participants to cybersecurity basics and secure hardware/software setup",
          topics: [
            "Hardware Guide - Selecting secure phones and laptops",
            "Setup Guide - BIOS security, disk encryption, VPN configuration",
            "Password management with KeePassXC",
            "Browser security configuration",
            "Virtual machine setup for isolated operations"
          ]
        },
        {
          title: "Chapter II: Web Forensics",
          objective: "Collection, analysis, and preservation of digital evidence from the internet",
          topics: [
            "Open-Source Intelligence (OSINT) techniques",
            "Web Intelligence (WEBHINT) methods",
            "Linguistic Forensics for identity analysis",
            "Digital evidence preservation"
          ]
        },
        {
          title: "Chapter III: Information Security for Companies & Governments",
          objective: "Essential components of operational and information security",
          topics: [
            "Operational Security (Opsec) vs Information Security (Infosec)",
            "Common security failures in organizations",
            "Two-factor authentication implementation",
            "Security policy development"
          ]
        },
        {
          title: "Chapter IV: Anti-Phishing & Social Engineering Defense",
          objective: "Advanced techniques to identify and counter social engineering attacks",
          topics: [
            "Phishing attack identification",
            "Social engineering tactics and defenses",
            "Email security best practices",
            "User awareness training"
          ]
        }
      ]
    },
    {
      phase: "Phase II",
      level: "Advanced",
      description: "Deep dive into advanced cybersecurity techniques and tools",
      chapters: [
        {
          title: "Advanced Penetration Testing",
          objective: "Master advanced penetration testing methodologies",
          topics: [
            "Network reconnaissance techniques",
            "Vulnerability assessment and exploitation",
            "Post-exploitation techniques",
            "Reporting and remediation"
          ]
        },
        {
          title: "Incident Response & Forensics",
          objective: "Develop expertise in incident response and digital forensics",
          topics: [
            "Incident response planning and execution",
            "Digital forensics tools and techniques",
            "Malware analysis",
            "Evidence collection and preservation"
          ]
        }
      ]
    },
    {
      phase: "Phase III",
      level: "Veteran",
      description: "Expert-level cybersecurity leadership and specialized domains",
      chapters: [
        {
          title: "Cybersecurity Leadership",
          objective: "Develop leadership skills in cybersecurity management",
          topics: [
            "Security program development",
            "Risk management frameworks",
            "Team leadership and mentoring",
            "Strategic security planning"
          ]
        },
        {
          title: "Specialized Security Domains",
          objective: "Master specialized areas of cybersecurity",
          topics: [
            "Cloud security architecture",
            "IoT and embedded systems security",
            "Critical infrastructure protection",
            "Threat intelligence analysis"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 overflow-x-hidden">
      {/* Ultra-realistic glassmorphism overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-primary/[0.03] pointer-events-none z-0"></div>
      
      <Header />
      
      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:py-20">
          <div className="container-max max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium rounded-full shadow-medium">
                <Shield className="w-4 h-4 mr-2" />
                DEFEND INFO MENTORING PROGRAM
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Cybersecurity Mentoring
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Comprehensive cybersecurity education program designed to take you from beginner to expert. 
                Learn practical skills, gain hands-on experience, and become a cybersecurity professional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 h-12 text-base font-medium shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                  <Users className="mr-2 h-5 w-5" />
                  Enroll Now
                </Button>
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-8 py-3 h-12 text-base font-medium shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1 transition-all duration-300 border border-border/60 rounded-2xl">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Syllabus
                </Button>
              </div>
            </div>

            {/* Program Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {phases.map((phase, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                  <CardHeader className="text-center pb-4">
                    <Badge variant="outline" className="mb-4 mx-auto w-fit">
                      {phase.phase}
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {phase.level}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {phase.chapters.length} Chapters
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Curriculum */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Program Curriculum</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our structured approach ensures comprehensive learning through hands-on practice and expert mentorship
                </p>
              </div>

              {phases.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {phase.phase}: {phase.level}
                    </h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>

                  <div className="grid gap-6">
                    {phase.chapters.map((chapter, chapterIndex) => (
                      <Card key={chapterIndex} className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Target className="w-6 h-6 text-primary" />
                            <div>
                              <CardTitle className="text-xl font-semibold text-foreground">
                                {chapter.title}
                              </CardTitle>
                              <p className="text-muted-foreground mt-1">
                                {chapter.objective}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold text-foreground mb-3">Topics Covered:</h4>
                          <div className="grid gap-2">
                            {chapter.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl border border-border/30">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Cybersecurity Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our comprehensive mentoring program and become a cybersecurity expert with hands-on training and expert guidance.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 h-14 text-lg font-medium shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <Users className="mr-2 h-6 w-6" />
                Enroll in Program
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mentoring;