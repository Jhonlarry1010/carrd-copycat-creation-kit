
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Template categories
const categories = ["All", "Portfolio", "Business", "Personal", "Landing Page", "Events"];

// Template items
const templates = [
  {
    id: 1,
    name: "Minimalist",
    category: "Portfolio",
    image: "bg-gradient-to-br from-indigo-100 to-indigo-200",
    tags: ["Clean", "Portfolio", "Minimal"]
  },
  {
    id: 2,
    name: "Corporate",
    category: "Business",
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    tags: ["Professional", "Business", "Modern"]
  },
  {
    id: 3,
    name: "Creative",
    category: "Personal",
    image: "bg-gradient-to-br from-pink-100 to-purple-200",
    tags: ["Creative", "Bold", "Colorful"]
  },
  {
    id: 4,
    name: "Launch",
    category: "Landing Page",
    image: "bg-gradient-to-br from-emerald-100 to-teal-200",
    tags: ["Product", "Startup", "Launch"]
  },
  {
    id: 5,
    name: "Event Pro",
    category: "Events",
    image: "bg-gradient-to-br from-amber-100 to-orange-200",
    tags: ["Event", "Promotion", "Conference"]
  },
  {
    id: 6,
    name: "Portfolio Plus",
    category: "Portfolio",
    image: "bg-gradient-to-br from-gray-100 to-gray-200",
    tags: ["Portfolio", "Gallery", "Professional"]
  }
];

const TemplatesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredTemplates = activeCategory === "All" 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <section id="templates" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start with a template</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our professionally designed templates or start from scratch.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category 
                  ? 'bg-carrd-purple text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              {/* Template preview */}
              <div className={`${template.image} aspect-[4/3] relative`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/30 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-50">
                    Preview
                  </Button>
                </div>
              </div>
              
              {/* Template info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{template.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {template.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all templates button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="group">
            View all templates
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
