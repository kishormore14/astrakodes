import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import About from '@/components/About';

const siteUrl = 'https://astrakodes.com';
const title = 'About AstraKodes | AI and Software Development Company';
const description = 'Learn about AstraKodes, an AI and software development company focused on scalable product engineering and measurable business outcomes.';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/about`} />
      </Head>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About AstraKodes</h1>
          <p className="page-intro">We are a software engineering team delivering AI, SaaS, mobile, and IoT solutions for startups and enterprises.</p>
        </div>
      </section>
      <About />
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
