import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

const siteUrl = 'https://astrakodes.com';
const pageTitle = 'AI Development Company | SaaS Solutions | AstraKodes';
const pageDescription = 'Astrakodes is an AI development company delivering SaaS, enterprise web, mobile, and IoT solutions with scalable architecture for startups and global businesses.';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AstraKodes',
  url: siteUrl,
  logo: `${siteUrl}/Images/log.png`,
  sameAs: [
    'https://www.linkedin.com/company/astrakodes',
    'https://x.com/astrakodes',
    'https://www.instagram.com/astrakodes',
    'https://www.youtube.com/@astrakodes',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@astrakodes.com',
      telephone: '+1-555-123-4567',
      areaServed: 'Global',
      availableLanguage: ['English', 'Hindi', 'Spanish'],
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AstraKodes',
  url: siteUrl,
  image: `${siteUrl}/Images/brahmastra.png`,
  description: pageDescription,
  telephone: '+1-555-123-4567',
  email: 'contact@astrakodes.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Innovation Street',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78701',
    addressCountry: 'US',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AstraKodes',
  url: `${siteUrl}/`,
  inLanguage: ['en', 'es', 'hi'],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AstraKodes Core Services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'AI Development Services' },
    { '@type': 'ListItem', position: 2, name: 'Custom SaaS Development' },
    { '@type': 'ListItem', position: 3, name: 'Enterprise Software Development' },
    { '@type': 'ListItem', position: 4, name: 'Mobile App Development' },
    { '@type': 'ListItem', position: 5, name: 'IoT Development' },
  ],
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/Images/favicon.ico.png" />
        <link rel="apple-touch-icon" href="/Images/favicon.ico.png" />
        <link rel="canonical" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        <link rel="alternate" hrefLang="hi" href={`${siteUrl}/hi`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AstraKodes" />
        <meta property="og:title" content="AI Development Company | AstraKodes" />
        <meta property="og:description" content="Global AI and SaaS development partner for startups and enterprises." />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/Images/log.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Development Company | AstraKodes" />
        <meta name="twitter:description" content="Global AI and SaaS development partner for startups and enterprises." />
        <meta name="twitter:image" content={`${siteUrl}/Images/log.png`} />
        <meta name="twitter:site" content="@astrakodes" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <Hero />
      <section className="service-focus" aria-labelledby="service-focus-title">
        <div className="container">
          <header className="section-header">
            <h2 id="service-focus-title" className="section-title">AI Development Services and Digital Product Engineering</h2>
            <p className="section-description">
              Astrakodes delivers end-to-end software development for startups and enterprises, with a focus on performance, security, and scalable architecture.
            </p>
          </header>
          <div className="service-focus-grid">
            <article className="service-focus-item">
              <h3>AI Development Services</h3>
              <p>Generative AI, LLM integrations, intelligent automation, and enterprise AI solutions tailored to measurable business outcomes.</p>
            </article>
            <article className="service-focus-item">
              <h3>Custom SaaS Development</h3>
              <p>Cloud-native SaaS applications with secure APIs, multi-tenant architecture, and modern DevOps practices.</p>
            </article>
            <article className="service-focus-item">
              <h3>Enterprise Software Development</h3>
              <p>Legacy modernization, workflow automation, and robust enterprise systems designed for long-term maintainability.</p>
            </article>
            <article className="service-focus-item">
              <h3>Mobile App Development</h3>
              <p>iOS, Android, and cross-platform apps built for reliability, speed, and high user engagement.</p>
            </article>
            <article className="service-focus-item">
              <h3>IoT Product Engineering</h3>
              <p>Device software, firmware, and cloud connectivity for smart products and industrial IoT deployments.</p>
            </article>
          </div>
          <nav className="service-focus-links" aria-label="Service navigation links">
            <Link href="/ai-development-services">AI Development Services</Link>
            <Link href="/saas-development">SaaS Development</Link>
            <Link href="/enterprise-software-development">Enterprise Software Development</Link>
            <Link href="/mobile-app-development">Mobile App Development</Link>
            <Link href="/iot-development">IoT Development</Link>
            <Link href="/blog">Read SEO & Product Engineering Blog</Link>
          </nav>
        </div>
      </section>
      <Services />
      <About />
      <Contact />
      <section className="seo-faq" aria-labelledby="seo-faq-title">
        <div className="container">
          <header className="section-header">
            <span className="section-badge">SEO FAQ</span>
            <h2 id="seo-faq-title" className="section-title">Frequently Asked Questions About AstraKodes Services</h2>
            <p className="section-description">
              Clear answers about AI, SaaS, enterprise web applications, mobile development, and IoT engineering.
            </p>
          </header>
          <div className="faq-list">
            <article className="faq-item">
              <h3>What makes AstraKodes different from other development agencies?</h3>
              <p>
                We combine engineering rigor with business-first delivery. Each engagement maps technology choices to outcomes like faster releases,
                lower operational cost, and better customer experience.
              </p>
            </article>
            <article className="faq-item">
              <h3>Can AstraKodes modernize existing web or software systems?</h3>
              <p>
                Yes. We audit your stack, identify critical technical debt, and deliver phased modernization plans without disrupting core operations.
              </p>
            </article>
            <article className="faq-item">
              <h3>Do you provide end-to-end AI and automation implementation?</h3>
              <p>
                Yes. We cover discovery, architecture, implementation, integration, and monitoring so teams can adopt AI and automation safely at scale.
              </p>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
