import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

const siteUrl = 'https://astrakodes.com';

export default function LocalSeoPageTemplate({
  slug,
  title,
  description,
  h1,
  intro,
  primaryService,
  area,
  bullets,
}) {
  const canonical = `${siteUrl}/${slug}`;

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AstraKodes',
    serviceType: primaryService,
    areaServed: area,
    url: canonical,
    telephone: '+1-555-123-4567',
    email: 'contact@astrakodes.com',
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      </Head>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{h1}</h1>
          <p className="page-intro">{intro}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <article className="content-card">
            <h2>{primaryService} in {area}</h2>
            <p>AstraKodes helps businesses in {area} with modern engineering, practical delivery plans, and measurable outcomes.</p>
            <ul>
              {bullets.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p><Link href="/contact">Talk to AstraKodes</Link></p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
