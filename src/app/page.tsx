"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, CheckCircle, Layers, Map, HelpCircle, ScanLine, Phone, MapPin, Mail as MailIcon, DraftingCompass, MessageCircle, GitBranch, Shield, User, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useRef, type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

const DashboardMockup = () => (
    <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-black/40 p-2 shadow-2xl shadow-primary/20 backdrop-blur-3xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative aspect-[1376/768] w-full rounded-2xl overflow-hidden border border-white/5 z-10">
            <img 
                src="https://lh3.googleusercontent.com/aida/AOfcidXBM7JK-1fhp1nAqN9vYnU3sB8kYusJaCUUX_vET9lwjMuqog71VjgQIxmNWCu12AM4dNlETNScLEo6mfCi2rLzcJuUHZ1y_7aTvHlCSwfNmvsY3XYKrT_OSQe-2p4NzvQrhsJSFocyiLb7VdEfqo12qHRksghdQRK4iL3fNtXB1j-zJIr1gQuIQxxxznbFGiwWg6CMs4h85KOAN-XLr-sk9zsf7fF4ByG-WLQRxuaFk7ud6uA3mNj7694" 
                alt="Learnivo Dashboard" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute -bottom-20 -right-20 h-64 w-64 bg-primary/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute -top-20 -left-20 h-64 w-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
    </div>
);

const features = [
  {
    icon: <DraftingCompass className="h-6 w-6" />,
    title: "AI Lesson Planner",
    description: "Automate complex lesson plans in minutes, perfectly aligned with Indian curricula.",
  },
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: "Quiz Generator",
    description: "Create Bloom's Taxonomy-aligned assessments from any textbook or topic.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Visual Aids",
    description: "Generate diagrams and charts instantly to explain abstract concepts visually.",
  },
  {
    icon: <MailIcon className="h-6 w-6" />,
    title: "Communication",
    description: "Draft professional, multi-lingual emails to parents with empathy and clarity.",
  },
  {
    icon: <Map className="h-6 w-6" />,
    title: "Hyper-Local Content",
    description: "Explain concepts using local landmarks and regional languages for deeper connection.",
  },
  {
    icon: <ScanLine className="h-6 w-6" />,
    title: "Paper Digitizer",
    description: "Instantly convert handwritten or printed question papers into editable formats.",
  },
];

const SpotlightCard = ({ children, className, ...props }: { children: React.ReactNode; className?: string, onClick?: () => void }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      }
    };
    return (
      <div ref={cardRef} onMouseMove={handleMouseMove} className={cn("spotlight-card border border-white/10 overflow-hidden", className)} {...props}>
        {children}
      </div>
    );
};

export default function LandingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"teacher" | "student" | "admin" | null>(null);
  const router = useRouter();

  const handleRoleSelect = (role: "teacher" | "student" | "admin") => {
    setSelectedRole(role);
    router.push(`/signup/${role}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#050505] text-white font-sans">
      <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-[0.03]"></div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_60%)]"></div>

      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-black shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="font-headline text-2xl font-bold tracking-tight">
              Learnivo <span className="text-primary">Ai</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
              {["Features", "Pricing", "Enterprise"].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors">
                      {item}
                  </Link>
              ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="rounded-full font-bold text-white/70 hover:text-white">
              <Link href="/login">Login</Link>
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-full px-8 font-bold shadow-xl shadow-primary/20 bg-primary text-black hover:bg-primary/90">Get Started</Button>
              </DialogTrigger>
              <DialogContent className="p-0 border-none sm:max-w-2xl bg-transparent">
                <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
                    <div className="p-10 text-center space-y-4 bg-primary/5 border-b border-white/5">
                        <Badge className="font-bold tracking-widest uppercase px-4 py-1 bg-primary text-black">Step 1</Badge>
                        <DialogTitle className="font-headline text-5xl font-bold tracking-tight">Choose Your <span className="text-primary">Journey</span></DialogTitle>
                        <DialogDescription className="text-xl text-white/50">Unlock specialized AI tools tailored for your role.</DialogDescription>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                         {[
                            { id: 'teacher' as const, label: 'Teacher', icon: User, desc: 'Automate content & admin' },
                            { id: 'student' as const, label: 'Student', icon: GraduationCap, desc: 'Personalized AI learning' },
                            { id: 'admin' as const, label: 'Admin', icon: Shield, desc: 'Manage institution scale' }
                         ].map((role) => (
                            <button
                                key={role.id}
                                className={cn(
                                    "group p-8 flex flex-col items-center text-center gap-6 rounded-[2.5rem] border transition-all duration-500 hover:scale-105",
                                    selectedRole === role.id ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10' : 'bg-white/[0.02] border-white/5 hover:border-primary/40'
                                )}
                                onClick={() => handleRoleSelect(role.id)}
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 transition-all duration-500 group-hover:bg-primary/20 group-hover:text-primary group-hover:rotate-6">
                                    <role.icon className="h-10 w-10" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-headline text-2xl font-bold">{role.label}</h3>
                                    <p className="text-xs text-white/40 font-medium leading-relaxed">{role.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container relative py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
              <Badge variant="outline" className="px-6 py-2 border-primary/30 text-primary font-bold tracking-[0.2em] uppercase bg-primary/5 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <Sparkles className="mr-2 h-3.5 w-3.5 fill-primary" /> THE FUTURE OF DATA-DRIVEN EDUCATION
              </Badge>
              <h1 className="font-headline text-6xl md:text-[8rem] font-extrabold tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                  Teach with <br/>
                  <span className="text-primary italic">
                      Data-Driven Intelligence.
                  </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                  Learnivo Ai is the ultimate intelligence layer for Indian educators. Automate administration, personalize content, and track student progress with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
                  <Button size="lg" className="rounded-xl h-14 px-10 text-lg font-extrabold shadow-xl shadow-primary/20 bg-primary text-black hover:scale-[1.02] transition-transform" onClick={() => setIsDialogOpen(true)}>
                      Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-xl h-14 px-10 text-lg font-extrabold border-primary/20 text-white hover:bg-white/5 hover:border-primary/50 transition-all">
                      Explore Tools
                  </Button>
              </div>
              <div className="pt-16 w-full flex justify-center perspective-[2000px] animate-in fade-in zoom-in-95 duration-1000 delay-1000">
                  <div className="rotate-x-6 hover:rotate-x-0 transition-transform duration-1000 ease-out">
                      <DashboardMockup />
                  </div>
              </div>
          </div>
        </section>

        <section id="features" className="container py-32 border-t border-white/5">
            <div className="text-center mb-24 space-y-4">
                <h2 className="font-headline text-5xl font-extrabold tracking-tight">Structured for <span className="text-primary italic">Impact.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Creation Category */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 text-white/30 uppercase tracking-[0.3em] font-bold text-xs after:content-[''] after:h-[1px] after:flex-1 after:bg-white/10 after:border-dashed after:border-t">
                        Creation
                    </div>
                    <div className="space-y-6">
                        {features.slice(0, 2).map((feature, i) => (
                            <SpotlightCard key={i} className="bg-white/[0.02] p-8 rounded-3xl group border-white/5 hover:border-primary/20 transition-all">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">{feature.description}</p>
                                <Link href="#" className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                                </Link>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>

                {/* Communication Category */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 text-white/30 uppercase tracking-[0.3em] font-bold text-xs after:content-[''] after:h-[1px] after:flex-1 after:bg-white/10 after:border-dashed after:border-t">
                        Communication
                    </div>
                    <div className="space-y-6">
                        {features.slice(2, 4).map((feature, i) => (
                            <SpotlightCard key={i} className="bg-white/[0.02] p-8 rounded-3xl group border-white/5 hover:border-primary/20 transition-all">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">{feature.description}</p>
                                <Link href="#" className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                                </Link>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>

                {/* Digitization Category */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 text-white/30 uppercase tracking-[0.3em] font-bold text-xs after:content-[''] after:h-[1px] after:flex-1 after:bg-white/10 after:border-dashed after:border-t">
                        Digitization
                    </div>
                    <div className="space-y-6">
                        {features.slice(4, 6).map((feature, i) => (
                            <SpotlightCard key={i} className="bg-white/[0.02] p-8 rounded-3xl group border-white/5 hover:border-primary/20 transition-all">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">{feature.description}</p>
                                <Link href="#" className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                                </Link>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" className="container py-32 rounded-[4rem] border border-white/5 bg-gradient-to-b from-primary/[0.02] to-transparent">
          <div className="text-center space-y-6 mb-20">
              <h2 className="font-headline text-6xl font-extrabold tracking-tight">Simple <span className="text-primary italic">Data Economics.</span></h2>
              
              <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 self-center">
                      <button className="px-6 py-2 rounded-full text-sm font-bold bg-white/10 text-white">Monthly</button>
                      <button className="px-6 py-2 rounded-full text-sm font-bold text-white/40">Annual</button>
                  </div>
                  <Badge className="bg-primary text-black font-bold text-[10px] uppercase tracking-wider py-1">Save 23%</Badge>
              </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                  { name: "Basic", price: "₹10", desc: "For starting educators", features: ["Unlimited generations", "Premium Visual Aids", "AI Answer Evaluation", "Advanced Paper Digitizer"] },
                  { name: "Pro", price: "₹399", desc: "Most popular for experts", popular: true, features: ["Unlimited generations", "Premium Visual Aids", "Premium Visual Aids", "AI Answer Evaluation", "Advanced Paper Digitizer", "Priority Support"] },
                  { name: "Enterprise", price: "₹1,000", desc: "For institutions at scale", features: ["Unlimited generations", "Premium Visual Aids", "Premium Visual Aids", "AI Answer Evaluation", "Advanced Paper Digitizer", "Priority Support"] }
              ].map((plan, i) => (
                  <SpotlightCard key={i} className={cn("flex flex-col p-10 rounded-[2.5rem] bg-black/40 backdrop-blur-2xl transition-all border-white/10", plan.popular && "border-primary shadow-2xl shadow-primary/10 scale-105 z-10")}>
                      {plan.popular && <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1.5 font-extrabold uppercase tracking-widest bg-primary text-black text-[10px]">Most Popular</Badge>}
                      <h3 className="font-headline text-3xl font-extrabold tracking-tight">{plan.name}</h3>
                      <div className="my-8">
                          <span className="text-5xl font-extrabold tracking-tighter">{plan.price}</span>
                          <span className="text-white/40 text-base ml-2">/ month</span>
                          {plan.name !== "Basic" && <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-2">Billed annually, saved ₹{plan.name === "Pro" ? "600" : "1200"}</p>}
                      </div>
                      <ul className="space-y-4 mb-10 flex-1">
                          {plan.features.map((f, idx) => (
                              <li key={idx} className="flex items-center gap-3 font-medium text-xs text-white/50">
                                  <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                                  {f}
                              </li>
                          ))}
                      </ul>
                      <Button className={cn("rounded-xl h-12 font-extrabold text-sm uppercase tracking-widest", plan.popular ? "bg-primary text-black hover:bg-primary/90" : "bg-white/5 text-white hover:bg-white/10")}>
                          Get Started
                      </Button>
                  </SpotlightCard>
              ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-20 bg-black">
        <div className="container grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black">
                      <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="font-headline text-xl font-extrabold tracking-tight">Learnivo <span className="text-primary">Ai</span></span>
              </Link>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                  High-fidelity redesign of the Learnivo app landing page, variant 3 of 5.
              </p>
          </div>
          <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-white/40">Features</h4>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-white/20">
                  <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Enterprise</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Login</Link></li>
              </ul>
          </div>
          <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-white/40">Resources</h4>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-white/20">
                  <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Resources</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Terms and Conditions</Link></li>
              </ul>
          </div>
          <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-white/40">Contact</h4>
              <ul className="space-y-4 text-xs font-bold text-white/40 tracking-wider">
                  <li className="flex items-center gap-3"><Phone className="h-3 w-3 text-primary" /> +91 12333 3333</li>
                  <li className="flex items-center gap-3"><MailIcon className="h-3 w-3 text-primary" /> learnivo@learnivo.com</li>
                  <li className="flex items-center gap-3"><MapPin className="h-3 w-3 text-primary" /> learnivo.app.com</li>
              </ul>
          </div>
        </div>
        <div className="container mt-20 pt-8 border-t border-white/5 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/10">
            © 2024 LEARNIVO.AI. EMPOWERING INDIA'S FUTURE.
        </div>
      </footer>
    </div>
  );
}
