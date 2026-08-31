import SEO from '../components/SEO';

export default function Partners() {
  return (
    <>
      <SEO
        title="Our Partners | PthFndR"
        description="We work with organisations who share our commitment to helping young people find real opportunity."
      />
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-pth-navy sm:text-4xl">Our Partners</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work with organisations who share our commitment to helping young people find real opportunity.
            </p>
          </div>
          <div className="mx-auto mt-16 flex flex-wrap justify-center items-center gap-12 sm:gap-16 lg:gap-24">
            <div className="flex items-center justify-center">
              <img
                src="https://portal.cpduk.co.uk/storage/20170720145208_eql.JPG"
                alt="eQL Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/logos/meap.png"
                alt="Making Education a Priority Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/logos/flourish-together-cic.png"
                alt="Flourish Together CIC Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/logos/gift.png"
                alt="GIFT Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/logos/elevate-young-minds.png"
                alt="Elevate Young Minds Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/logos/breakout-charity.png"
                alt="BreakOut Charity Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/logos/new-wine-nation.png"
                alt="New Wine Nation Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
          <div className="mx-auto mt-12 flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center justify-center">
              <img
                src="/logos/creative-ideation-hub.png"
                alt="Creative Ideation Hub Partner Logo"
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
