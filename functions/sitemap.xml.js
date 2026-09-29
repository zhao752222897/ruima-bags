const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ruima-bags.pages.dev/</loc>
  </url>
  <url>
    <loc>https://ruima-bags.pages.dev/products</loc>
  </url>
</urlset>
`;

export function onRequestGet() {
  return new Response(SITEMAP_XML, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    },
  });
}
