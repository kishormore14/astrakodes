import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';

const siteUrl = 'https://astrakodes.com';
const title = 'AstraKodes Blog | AI, SaaS, Mobile, IoT Insights';
const description = 'Insights from AstraKodes on AI development, SaaS product engineering, mobile apps, and IoT implementation strategies.';

const posts = [
  {
    slug: 'cost-to-build-ai-saas-product',
    title: 'Cost to Build an AI SaaS Product in 2026',
    excerpt: 'A practical breakdown of cost drivers, timelines, and architecture decisions when building an AI SaaS platform.',
  },
  {
    slug: 'mvp-vs-full-product-development',
    title: 'MVP vs Full Product Development: What to Build First',
    excerpt: 'How startups can decide between MVP scope and full product investment to reduce risk and improve go-to-market speed.',
  },
  {
    slug: 'ai-trends-for-enterprises-2026',
    title: 'AI Trends for Enterprises in 2026',
    excerpt: 'Key enterprise AI trends including automation, AI copilots, and production-grade LLM integration strategies.',
  },
];

export default function BlogIndexPage() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/blog`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog`} />
      </Head>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">AstraKodes Blog</h1>
          <p className="page-intro">Practical articles on AI, SaaS, enterprise systems, mobile apps, and IoT product engineering.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            {posts.map((post) => (
              <article key={post.slug} className="content-card">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <p><Link href={`/blog/${post.slug}`}>Read article</Link></p>
              </article>
            ))}
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
