
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-carrd-purple/90 to-carrd-darkPurple text-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start building your site today
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            Join thousands of creators, businesses, and developers building beautiful websites with CarrdClone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-carrd-purple hover:bg-gray-100 text-lg px-6 py-6 h-auto">
              Create Your Site
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-6 py-6 h-auto group">
              View Examples
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
