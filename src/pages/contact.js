import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import Contact from '@/components/Contact';

const siteUrl = 'https://astrakodes.com';
const title = 'Contact AstraKodes | Start Your AI or Software Project';
const description = 'Contact AstraKodes for AI development, SaaS engineering, mobile app development, and IoT project consultation.';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/contact`} />
      </Head>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact AstraKodes</h1>
          <p className="page-intro">Share your project goals and we will help you plan architecture, scope, and delivery milestones.</p>
        </div>
      </section>
      <Contact />
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
