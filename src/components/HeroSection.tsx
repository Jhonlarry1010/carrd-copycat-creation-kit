
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="section bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            Create stunning <span className="text-gradient">one-page</span> sites
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Build beautiful, responsive single-page websites with our easy-to-use platform. No coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button className="bg-carrd-purple hover:bg-carrd-darkPurple text-lg px-6 py-6 h-auto">
              Get Started Free
            </Button>
            <Button variant="outline" className="group text-lg px-6 py-6 h-auto">
              See Templates
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 w-full max-w-4xl relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-purple-100 to-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800">Your beautiful website</h3>
                    <p className="text-gray-500">Preview of your design</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute -left-16 -bottom-16 w-32 h-32 bg-purple-200 rounded-full opacity-30"></div>
            <div className="hidden md:block absolute -right-8 -top-8 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
