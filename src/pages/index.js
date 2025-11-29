import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AstraKodes - Ancient Wisdom, Modern Technology</title>
        <meta name="description" content="AstraKodes - Pioneering solutions in Automation, AI, Web Development, and Software Development. Ancient wisdom meets modern technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <Services />
      <About />
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
