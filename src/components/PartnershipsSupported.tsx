import { partnerships } from '../content/pages/partnerships';

export function PartnershipsSupported() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest font-semibold mb-12">
          {partnerships.supportStatement}
        </p>
        
        {/* Logos Grid - Updated for 7 items */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-10 items-center">
          {partnerships.organizations.map((org) => (
            <a 
              key={org.name}
              href={org.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-20 px-3 opacity-70 hover:opacity-100 transition-opacity duration-300"
              title={`Visit ${org.name}`}
              aria-label={`Visit ${org.name}`}
            >
              <img 
                src={org.logoUrl}
                alt={org.name}
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}