import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

const siteUrl = 'https://astrakodes.com';

export default function ServicePageTemplate({
  slug,
  title,
  description,
  h1,
  intro,
  sections,
  faq,
  serviceName,
}) {
  const canonicalUrl = `${siteUrl}/${slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: title,
    description,
    provider: {
      '@type': 'Organization',
      name: 'AstraKodes',
      url: siteUrl,
    },
    areaServed: 'Global',
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: serviceName,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/Images/log.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/Images/log.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{h1}</h1>
          <p className="page-intro">{intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            {sections.map((section) => (
              <article key={section.title} className="content-card">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-faq" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <article key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to start your project?</h2>
          <p>Talk to AstraKodes about timelines, technical scope, and delivery plans tailored to your business goals.</p>
          <div className="cta-links">
            <Link href="/#contact">Contact AstraKodes</Link>
            <Link href="/blog">Read Our Blog</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
