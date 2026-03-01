import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';

const siteUrl = 'https://astrakodes.com';
const title = 'Software Development Services | AI, SaaS, Mobile, IoT | AstraKodes';
const description = 'Explore AstraKodes services in AI development, SaaS engineering, enterprise software, mobile app development, and IoT product engineering.';

const services = [
  {
    href: '/ai-development-services',
    title: 'AI Development Services',
    body: 'Build production-ready AI solutions including LLM apps, automation workflows, and enterprise AI integrations.',
  },
  {
    href: '/saas-development',
    title: 'SaaS Development',
    body: 'Design and deliver cloud-native SaaS products with scalable architecture and fast iteration cycles.',
  },
  {
    href: '/enterprise-software-development',
    title: 'Enterprise Software Development',
    body: 'Modernize legacy systems and build secure enterprise software platforms for long-term growth.',
  },
  {
    href: '/mobile-app-development',
    title: 'Mobile App Development',
    body: 'Ship iOS, Android, and cross-platform mobile apps optimized for reliability and performance.',
  },
  {
    href: '/iot-development',
    title: 'IoT Development',
    body: 'Build connected products with firmware, cloud integration, and industrial IoT deployment support.',
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/services`} />
      </Head>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Software Development Services</h1>
          <p className="page-intro">AstraKodes helps startups and enterprises build scalable digital products across AI, SaaS, mobile, and IoT.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            {services.map((service) => (
              <article key={service.href} className="content-card">
                <h2>{service.title}</h2>
                <p>{service.body}</p>
                <p><Link href={service.href}>View service page</Link></p>
              </article>
            ))}
          </div>
          <article className="content-card local-links-card">
            <h2>Local Service Pages (Pune)</h2>
            <p>Explore location-focused service pages for local search queries and faster project discovery.</p>
            <ul>
              <li><Link href="/ai-development-company-pune">AI Development Company in Pune</Link></li>
              <li><Link href="/software-development-company-pune">Software Development Company in Pune</Link></li>
              <li><Link href="/mobile-app-development-company-pune">Mobile App Development Company in Pune</Link></li>
              <li><Link href="/iot-development-company-pune">IoT Development Company in Pune</Link></li>
            </ul>
          </article>
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
