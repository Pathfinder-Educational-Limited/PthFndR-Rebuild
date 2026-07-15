import SEO from '../components/SEO';

export default function Partners() {
  return (
    <>
      <SEO 
        title="Our Partners | PthFndR" 
        description="Collaborating with industry leaders to provide unparalleled dignity infused learning and solutions."
      />
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-pth-navy sm:text-4xl">Our Partners</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Collaborating with industry leaders to provide unparalleled dignity infused learning and solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 flex flex-wrap justify-center items-center gap-12 sm:gap-16 lg:gap-24">
            <div className="flex items-center justify-center">
              <img 
                src="https://portal.cpduk.co.uk/storage/20170720145208_eql.JPG" 
                alt="CPD UK Partner Logo" 
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://i0.wp.com/meap.org.uk/wp-content/uploads/2023/05/New-Project-3.png?w=639&ssl=1" 
                alt="MEaP Partner Logo" 
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
