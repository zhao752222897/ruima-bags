import { useEffect } from 'react';

const SITE_ORIGIN = 'https://ruima-bags.pages.dev';

const upsertMeta = (name, content, attribute = 'name') => {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

export const usePageSeo = ({ title, description, path = '/', type = 'website' }) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_ORIGIN}${path === '/' ? '/' : path}`;
    document.title = title;
    upsertMeta('description', description);
    upsertMeta('og:title', title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:type', type, 'property');
    upsertMeta('og:url', canonicalUrl, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    upsertLink('canonical', canonicalUrl);

    const schemaId = 'ruima-page-schema';
    let schema = document.getElementById(schemaId);
    if (!schema) {
      schema = document.createElement('script');
      schema.id = schemaId;
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_ORIGIN}/#organization`,
          name: 'Shanxi Ruima Trading Co., Ltd.',
          alternateName: 'SHANXI RUIMA',
          url: SITE_ORIGIN,
          description: 'OEM and ODM manufacturer of luggage, backpacks and casual bags in Shanxi, China.',
          areaServed: ['North America', 'Europe', 'Southeast Asia']
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_ORIGIN}/#website`,
          url: SITE_ORIGIN,
          name: 'SHANXI RUIMA',
          publisher: { '@id': `${SITE_ORIGIN}/#organization` }
        }
      ]
    });
  }, [title, description, path, type]);
};

export { SITE_ORIGIN };
