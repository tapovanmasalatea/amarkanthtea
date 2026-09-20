import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DEFAULT_DOMAIN = 'https://www.amarkanth.com';
const DEFAULT_IMAGE = `${DEFAULT_DOMAIN}/amarkanth_bold_tea.webp`;
const DEFAULT_KEYWORDS = 'Assam tea, CTC chai, Tapovan tea, Amarkanth tea, buy kadak chai online, cardamom chai, tea distributor India, premium black tea';

const SEO = ({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false,
  schema = null,
}) => {
  const location = useLocation();
  const currentUrl = canonical ? canonical : `${DEFAULT_DOMAIN}${location.pathname}${location.search}`;

  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${DEFAULT_DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  const formattedTitle = title
    ? title.includes('Amarkanth')
      ? title
      : `${title} | Amarkanth Tea Group`
    : 'Amarkanth Tea Group | Premium Assam CTC & Tapovan Tea';

  const schemasToRender = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Robots Tag */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph Tags */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content="Amarkanth Tea Group" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* JSON-LD Schemas */}
      {schemasToRender.map((schemaObj, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
