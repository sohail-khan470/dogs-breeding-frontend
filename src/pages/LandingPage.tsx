// LandingPage.tsx
import React, { useState } from "react";
import {
  Menu,
  X,
  PawPrint,
  Shield,
  BarChart3,
  Users,
  GitBranch,
  Heart,
  FileText,
  MapPin,
  TrendingUp,
  Star,
  Award,
  Microchip,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import dogImage from "../assets/images/dog.jpg";

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--gray-200)] bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-500)]">
                <PawPrint className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--black)]">
                  DogsBreeder
                </h1>
                <p className="text-xs text-[var(--gray-600)]">
                  Professional Dog Breeding Management
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {/* {["Features", "Testimonials", "Pricing", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--gray-700)] transition-colors hover:text-[var(--brand-500)]"
                >
                  {item}
                </a>
              ))} */}
              <a
                href="/signin"
                className="rounded-lg bg-[var(--brand-500)] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[var(--brand-600)] hover:shadow-md"
              >
                Login
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[var(--gray-700)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--gray-700)]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <div className="flex flex-col space-y-3 py-4">
                {/* {["Features", "Testimonials", "Pricing", "About"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--gray-700)] transition-colors hover:bg-[var(--gray-50)] hover:text-[var(--brand-500)]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )} */}
                <a
                  href="/signin"
                  className="rounded-lg bg-[var(--brand-500)] px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:bg-[var(--brand-600)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-b from-[var(--brand-25)] via-white to-white">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-[var(--brand-50)] px-3 py-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-700)]">
                  Trusted by Breeders Worldwide
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-[var(--black)] md:text-5xl lg:text-6xl">
                Professional{" "}
                <span className="bg-gradient-to-r from-[var(--brand-500)] to-[var(--theme-purple)] bg-clip-text text-transparent">
                  Dog Breeding
                </span>{" "}
                Management
              </h1>

              <p className="mb-8 text-lg text-[var(--gray-700)] md:text-xl">
                DogBreeder is the comprehensive platform that helps responsible
                breeders manage pedigrees, health records, and breeding
                operations with precision and care.
              </p>

              {/* <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/signin"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand-500)] px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-[var(--brand-600)] hover:shadow-lg"
                >
                  Get Started Free
                  <ChevronRight className="h-5 w-5" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--gray-300)] bg-white px-8 py-3 text-lg font-semibold text-[var(--gray-700)] transition-all hover:border-[var(--brand-300)] hover:bg-[var(--brand-25)]"
                >
                  Watch Demo
                </a>
              </div> */}

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[var(--success-500)]" />
                    <span className="text-2xl font-bold text-[var(--black)]">
                      10K+
                    </span>
                  </div>
                  <p className="text-sm text-[var(--gray-600)]">Dogs Managed</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[var(--brand-500)]" />
                    <span className="text-2xl font-bold text-[var(--black)]">
                      5K+
                    </span>
                  </div>
                  <p className="text-sm text-[var(--gray-600)]">
                    Litters Tracked
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[var(--theme-purple)]" />
                    <span className="text-2xl font-bold text-[var(--black)]">
                      1K+
                    </span>
                  </div>
                  <p className="text-sm text-[var(--gray-600)]">
                    Active Breeders
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={dogImage}
                  alt="Professional dog breeder with champion dogs"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/40 to-transparent" />

                {/* Image Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-100)]">
                      <Award className="h-6 w-6 text-[var(--brand-600)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--black)]">
                        Champion Lineage Tracking
                      </h4>
                      <p className="text-sm text-[var(--gray-600)]">
                        Maintain accurate pedigree records for show dogs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-[var(--gray-25)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-600)]">
              Features
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[var(--black)] md:text-4xl lg:text-5xl">
              Everything You Need for{" "}
              <span className="text-[var(--brand-500)]">
                Professional Breeding
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--gray-600)]">
              Comprehensive tools designed specifically for dog breeders to
              manage every aspect of their kennel operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6 transition-all hover:border-[var(--brand-300)] hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-50)]">
                <GitBranch className="h-6 w-6 text-[var(--brand-600)]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--black)]">
                Pedigree Tracking
              </h3>
              <p className="text-[var(--gray-600)]">
                Build and visualize multi-generational family trees up to 5
                generations with detailed lineage information.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6 transition-all hover:border-[var(--success-300)] hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--success-50)]">
                <Heart className="h-6 w-6 text-[var(--success-600)]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--black)]">
                Health Monitoring
              </h3>
              <p className="text-[var(--gray-600)]">
                Record vaccinations, treatments, sickness episodes, and training
                progress for comprehensive health management.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6 transition-all hover:border-[var(--theme-purple)] hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--theme-purple)]/10">
                <Users className="h-6 w-6 text-[var(--theme-purple)]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--black)]">
                Breeding Operations
              </h3>
              <p className="text-[var(--gray-600)]">
                Manage stud certificates, litter records, and progeny tracking
                with detailed mating and whelping information.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6 transition-all hover:border-[var(--orange-300)] hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--orange-50)]">
                <FileText className="h-6 w-6 text-[var(--orange-600)]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--black)]">
                Digital Kennel Book
              </h3>
              <p className="text-[var(--gray-600)]">
                Maintain complete digital records replacing traditional paper
                kennel books with searchable, organized data.
              </p>
            </div>
          </div>

          {/* More Features Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 5 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-50)]">
                <MapPin className="h-6 w-6 text-[var(--brand-600)]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--black)]">
                Location Management
              </h3>
              <p className="text-[var(--gray-600)]">
                Track dogs by countries, cities, breeders, and kennels with
                geographical organization.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--success-50)]">
                <TrendingUp className="h-6 w-6 text-[var(--success-600)]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--black)]">
                Business Analytics
              </h3>
              <p className="text-[var(--gray-600)]">
                Monitor sales, loans, transfers with financial tracking and
                business intelligence reports.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--theme-purple)]/10">
                <Microchip className="h-6 w-6 text-[var(--theme-purple)]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--black)]">
                Microchip Management
              </h3>
              <p className="text-[var(--gray-600)]">
                Assign and track microchip IDs for secure identification and
                registration compliance.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          {/* <div className="mt-16 rounded-2xl bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-700)] p-8 text-center text-white">
            <h3 className="text-2xl font-bold md:text-3xl">
              Ready to Transform Your Breeding Operations?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Join thousands of professional breeders who trust DogBreeder for
              their kennel management.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/signin"
                className="rounded-lg bg-white px-8 py-3 font-semibold text-[var(--brand-600)] transition-all hover:bg-[var(--gray-100)] hover:shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold transition-all hover:bg-white/10"
              >
                Schedule a Demo
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--success-600)]">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[var(--black)] md:text-4xl lg:text-5xl">
              Trusted by{" "}
              <span className="text-[var(--brand-500)]">Leading Breeders</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--gray-600)]">
              Hear from professional breeders who have transformed their
              operations with DogBreeder.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-8">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Sarah Johnson"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[var(--black)]">
                    Sarah Johnson
                  </h4>
                  <p className="text-sm text-[var(--gray-600)]">
                    German Shepherd Breeder
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[var(--warning-500)] text-[var(--warning-500)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[var(--gray-700)] italic">
                "DogsBreeder revolutionized how we manage our kennel. The
                pedigree tracking alone has saved us countless hours and
                eliminated paperwork errors."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-8">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Michael Chen"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[var(--black)]">
                    Michael Chen
                  </h4>
                  <p className="text-sm text-[var(--gray-600)]">
                    Labrador Specialist
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[var(--warning-500)] text-[var(--warning-500)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[var(--gray-700)] italic">
                "The health monitoring features have been invaluable. Tracking
                vaccinations and treatments has never been easier. Highly
                recommended!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-8">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Elena Rodriguez"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[var(--black)]">
                    Elena Rodriguez
                  </h4>
                  <p className="text-sm text-[var(--gray-600)]">
                    Bulldog Breeder
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[var(--warning-500)] text-[var(--warning-500)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[var(--gray-700)] italic">
                "From managing litters to tracking microchips, DogBreeder covers
                everything a serious breeder needs. The support team is
                fantastic too!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--gray-950)] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-500)]">
                  <PawPrint className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">DogBreeder</h2>
                  <p className="text-sm text-[var(--gray-400)]">
                    Professional Dog Breeding Management
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[var(--gray-400)]">
                Comprehensive dog breeding management application designed to
                assist breeders in maintaining detailed records of their dogs
                and breeding operations.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="text-[var(--gray-400)] hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-[var(--gray-400)] hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-[var(--gray-400)] hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-[var(--gray-400)] hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Features",
                  "Testimonials",
                  "Pricing",
                  "About Us",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-[var(--gray-400)] hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Blog", "Help Center", "API", "Status"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[var(--gray-400)] hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
              <p className="mb-4 text-[var(--gray-400)]">
                Subscribe to our newsletter for the latest updates and breeding
                tips.
              </p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[var(--gray-700)] bg-[var(--gray-900)] px-4 py-2 text-white placeholder-[var(--gray-500)] focus:border-[var(--brand-500)] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[var(--brand-500)] px-4 py-2 font-semibold text-white transition-all hover:bg-[var(--brand-600)]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-[var(--gray-800)] pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-[var(--gray-400)]">
                © {new Date().getFullYear()} DogBreeder. All rights reserved.
              </p>
              <div className="mt-4 flex gap-6 text-sm text-[var(--gray-400)] md:mt-0">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
