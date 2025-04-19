
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "1 site",
      "Carrd.co subdomain",
      "Basic elements",
      "Responsive design",
      "SSL security"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$5",
    period: "per month",
    description: "For creators and professionals",
    features: [
      "10 sites",
      "Custom domain",
      "Advanced elements",
      "Forms & embeds",
      "Remove branding",
      "Premium templates",
      "Priority support"
    ],
    cta: "Get Pro",
    highlighted: true
  },
  {
    name: "Pro Plus",
    price: "$12",
    period: "per month",
    description: "For businesses and teams",
    features: [
      " 27 sites",
      "Multiple custom domains",
      "All Pro features",
      "Form submissions (100/mo)",
      "Google Analytics",
      "Password protection",
      "Priority support"
    ],
    cta: "Get Pro Plus",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${
                plan.highlighted 
                  ? 'border-carrd-purple shadow-lg' 
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {/* Plan header */}
              <div className={`p-6 ${plan.highlighted ? 'bg-purple-50' : 'bg-gray-50'}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
              
              {/* Plan features */}
              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className={`h-5 w-5 mr-2 ${plan.highlighted ? 'text-carrd-purple' : 'text-gray-400'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-carrd-purple hover:bg-carrd-darkPurple' 
                      : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p>All plans include a 7-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
