
import { LayoutGrid, Layers, Monitor, Smartphone, Code, Settings, PenTool, Stars } from "lucide-react";

const features = [
  {
    icon: <LayoutGrid className="h-6 w-6 text-carrd-purple" />,
    title: "Drag & Drop Builder",
    description: "Easily build your site with our intuitive drag and drop interface."
  },
  {
    icon: <Layers className="h-6 w-6 text-carrd-purple" />,
    title: "Beautiful Templates",
    description: "Start with professionally designed templates that look great on any device."
  },
  {
    icon: <Monitor className="h-6 w-6 text-carrd-purple" />,
    title: "Responsive Design",
    description: "Your site automatically adjusts to look perfect on any screen size."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-carrd-purple" />,
    title: "Mobile Optimized",
    description: "Specifically designed for optimal mobile performance and experience."
  },
  {
    icon: <Code className="h-6 w-6 text-carrd-purple" />,
    title: "No Coding Required",
    description: "Create professional sites without touching a line of code."
  },
  {
    icon: <Settings className="h-6 w-6 text-carrd-purple" />,
    title: "Custom Domains",
    description: "Connect your own domain or use our free subdomain."
  },
  {
    icon: <PenTool className="h-6 w-6 text-carrd-purple" />,
    title: "Custom Styling",
    description: "Adjust colors, fonts, and layouts to match your brand perfectly."
  },
  {
    icon: <Stars className="h-6 w-6 text-carrd-purple" />,
    title: "Fast Performance",
    description: "Optimized sites that load quickly and perform smoothly."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful yet simple</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create stunning websites, without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
