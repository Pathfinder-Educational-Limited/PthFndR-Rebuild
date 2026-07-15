interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Pathfinder Educational Limited (PthFndR)',
  description = 'A mission-led Social Innovation Education Company closing the underemployment gap through dignity-infused learning.',
  type = 'website',
  name = 'PthFndR',
  image = 'https://pthfndr.org/og-image.png',
  url,
}: SEOProps) {
  // React 19 hoists <title>, <meta> and <link> rendered here into <head>.
  return (
    <>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}

      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
