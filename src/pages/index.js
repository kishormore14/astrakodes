import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

const siteUrl = 'https://astrakodes.com';
const pageTitle = 'AstraKodes | AI, Automation, Web & Software Development';
const pageDescription = 'AstraKodes delivers AI, automation, web development, and custom software solutions that help businesses scale securely and efficiently.';
const keywordGroups = [
  {
    title: 'High-Intent Commercial Keywords',
    keywords: [
      'AI development company',
      'Artificial intelligence development services',
      'AI software development company',
      'Custom AI solutions provider',
      'Machine learning development company',
      'Web application development company',
      'Custom web app development services',
      'Enterprise web application development',
      'Mobile app development company',
      'Android app development company',
      'iOS app development company',
      'Cross-platform app development company',
      'IoT development company',
      'IoT software development services',
      'Embedded systems development company',
      'Full-stack development company',
      'SaaS product development company',
      'MVP development company',
      'Digital transformation services',
    ],
  },
  {
    title: 'AI / Machine Learning Keywords',
    keywords: [
      'Artificial intelligence company',
      'AI consulting services',
      'Machine learning solutions',
      'Generative AI development',
      'Chatbot development company',
      'NLP development services',
      'Computer vision development',
      'AI automation services',
      'AI integration services',
      'AI product development',
      'OpenAI integration services',
      'LLM development company',
      'AI agent development',
    ],
  },
  {
    title: 'Web Development Keywords',
    keywords: [
      'Custom web development company',
      'Full stack web development',
      'React.js development company',
      'Next.js development company',
      'Node.js development company',
      'NestJS development company',
      'MERN stack development',
      'SaaS web application development',
      'Progressive web app development',
      'E-commerce website development',
      'B2B web development services',
      'Enterprise web solutions',
    ],
  },
  {
    title: 'Mobile App Development Keywords',
    keywords: [
      'Mobile app development services',
      'Custom mobile app development',
      'Flutter app development company',
      'React Native development company',
      'Hybrid mobile app development',
      'Startup app development company',
      'On-demand app development',
      'Mobile UI/UX design services',
      'App maintenance services',
    ],
  },
  {
    title: 'IoT Keywords',
    keywords: [
      'IoT application development',
      'IoT product development company',
      'Smart device development',
      'IoT cloud integration',
      'Industrial IoT solutions',
      'Smart home IoT development',
      'ESP32 development services',
      'Embedded IoT solutions',
      'Hardware-software integration',
    ],
  },
  {
    title: 'Long-Tail Keywords',
    keywords: [
      'Affordable AI development company',
      'Custom SaaS development company for startups',
      'AI chatbot development for businesses',
      'End-to-end web application development services',
      'IoT solution provider for manufacturing',
      'MVP development company for startups',
      'AI-powered mobile app development',
      'Full stack development company for startups',
      'Enterprise AI software solutions',
    ],
  },
  {
    title: 'Local SEO Keywords',
    keywords: [
      'AI development company in Pune',
      'Web development company in Pune',
      'Mobile app development company in Pune',
      'IoT development company in Pune',
      'Software development company in Pune',
      'IT company in Pune',
      'AI development company in India',
      'Custom software development company in India',
    ],
  },
  {
    title: 'High Search Volume Global Keywords',
    keywords: [
      'Software development company',
      'App development company',
      'Web development services',
      'AI development services',
      'IT consulting services',
      'Digital solutions company',
      'Technology solutions provider',
    ],
  },
  {
    title: 'Industry-Specific Keywords',
    keywords: [
      'AI solutions for healthcare',
      'AI in fintech development',
      'IoT solutions for agriculture',
      'E-commerce app development',
      'Logistics mobile app development',
      'Real estate app development',
      'EdTech app development',
    ],
  },
  {
    title: 'Primary High-Volume Keywords',
    keywords: [
      'Software development company',
      'Custom software development services',
      'IT services company',
      'Digital transformation company',
      'Technology consulting company',
      'Enterprise software development',
      'Product development company',
      'Innovation technology solutions',
      'IT outsourcing company',
      'Offshore software development company',
    ],
  },
  {
    title: 'High Buyer-Intent AI Keywords',
    keywords: [
      'AI Services',
      'Hire AI developers',
      'AI development company for startups',
      'Custom AI software development',
      'AI automation services for businesses',
      'Generative AI integration services',
      'Enterprise AI development solutions',
      'AI chatbot development company',
    ],
  },
  {
    title: 'High Buyer-Intent Web Keywords',
    keywords: [
      'Hire full stack developer',
      'Custom web application development company',
      'SaaS web development company',
      'Enterprise web app development services',
      'Web portal development company',
      'CRM web development services',
      'Marketplace website development',
    ],
  },
  {
    title: 'High Buyer-Intent Mobile Keywords',
    keywords: [
      'Hire mobile app developers',
      'Mobile app development company for startups',
      'On-demand app development company',
      'Custom Android app development',
      'iOS enterprise app development',
      'App development cost in India',
      'White label mobile app development',
    ],
  },
  {
    title: 'High Buyer-Intent IoT Keywords',
    keywords: [
      'IoT product development company',
      'Embedded system development services',
      'Smart automation IoT solutions',
      'IoT firmware development services',
      'Industrial IoT development company',
      'IoT prototype development',
    ],
  },
  {
    title: 'Long-Tail Fast-Ranking Keywords',
    keywords: [
      'Affordable AI development company in India',
      'Custom SaaS development company for startups',
      'Best mobile app development company in Pune',
      'End-to-end IoT development services',
      'MVP development company for tech startups',
      'AI-powered CRM development services',
      'Smart manufacturing IoT solutions provider',
      'Full stack development services for enterprises',
      'Custom healthcare app development company',
      'AI automation for small businesses',
    ],
  },
  {
    title: 'Industry-Specific Healthcare Keywords',
    keywords: [
      'Healthcare software development company',
      'AI solutions for healthcare industry',
      'Hospital management system development',
      'Telemedicine app development',
    ],
  },
  {
    title: 'Industry-Specific FinTech Keywords',
    keywords: [
      'Fintech app development company',
      'AI in banking software development',
      'Blockchain fintech development',
    ],
  },
  {
    title: 'Industry-Specific Real Estate Keywords',
    keywords: [
      'Real estate web portal development',
      'Property listing app development',
    ],
  },
  {
    title: 'Industry-Specific E-commerce Keywords',
    keywords: [
      'Custom e-commerce app development',
      'Multi-vendor marketplace development',
      'B2B e-commerce development company',
    ],
  },
  {
    title: 'Industry-Specific Logistics Keywords',
    keywords: [
      'Fleet management software development',
      'IoT logistics tracking solutions',
    ],
  },
  {
    title: 'Industry-Specific Education Keywords',
    keywords: [
      'EdTech app development company',
      'Learning management system development',
    ],
  },
  {
    title: 'Advanced AI Niche Keywords',
    keywords: [
      'LLM application development',
      'OpenAI API integration services',
      'AI agent development company',
      'Autonomous AI systems development',
      'RAG-based AI development',
      'AI workflow automation solutions',
      'Custom GPT development services',
      'AI SaaS product development',
      'Conversational AI development company',
      'AI data analytics solutions',
    ],
  },
  {
    title: 'Additional Local SEO Keywords',
    keywords: [
      'AI development company in Pune',
      'Software development company in Pune',
      'Mobile app development company in Pune',
      'IoT company in Pune',
      'Custom software company in Maharashtra',
      'IT company in Pune for startups',
      'AI development company in India',
      'Offshore development company India',
      'Dedicated development team India',
    ],
  },
  {
    title: 'Blog Traffic Keywords',
    keywords: [
      'How much does AI development cost?',
      'Web app vs mobile app: which is better for startups?',
      'AI trends in 2026',
      'Cost to build SaaS product',
      'IoT applications in manufacturing',
      'How to build MVP for startup',
      'AI in small business automation',
      'Flutter vs React Native comparison',
      'Next.js vs React performance comparison',
      'Benefits of IoT in agriculture',
    ],
  },
  {
    title: 'Competitor-Level Power Keywords',
    keywords: [
      'Enterprise AI solutions provider',
      'Global software development company',
      'Digital product engineering company',
      'AI-driven digital transformation',
      'Technology innovation partner',
      'End-to-end software development lifecycle services',
      'Scalable cloud-native application development',
    ],
  },
  {
    title: 'Primary Global Positioning Keywords',
    keywords: [
      'AI development company',
      'Custom software development company',
      'Digital product engineering company',
      'Enterprise software solutions provider',
      'Global IT consulting company',
      'Technology innovation partner',
      'AI-driven software development',
      'Scalable software development services',
      'Cloud-native application development',
      'End-to-end product development company',
    ],
  },
  {
    title: 'High-Conversion Buyer Intent AI Keywords',
    keywords: [
      'Enterprise AI development company',
      'Generative AI development services',
      'AI SaaS product development',
      'AI automation solutions provider',
      'Custom LLM development company',
      'AI chatbot development for enterprises',
      'AI integration services',
      'AI consulting for startups',
      'AI-powered business automation',
      'Predictive analytics development company',
      'Computer vision software development',
      'NLP development services',
    ],
  },
  {
    title: 'High-Conversion Buyer Intent Web Keywords',
    keywords: [
      'SaaS application development company',
      'Enterprise web app development services',
      'Custom B2B web application development',
      'Full-stack web development company',
      'MVP web app development for startups',
      'Marketplace platform development',
      'Cloud-based web application development',
      'React / Next.js development company',
      'API development services',
      'Microservices architecture development',
    ],
  },
  {
    title: 'High-Conversion Buyer Intent Mobile Keywords',
    keywords: [
      'Cross-platform app development company',
      'Enterprise mobile app development',
      'Startup app development company',
      'On-demand app development services',
      'Flutter app development company',
      'React Native development company',
      'iOS enterprise app development',
      'Android enterprise app development',
      'Scalable mobile application development',
    ],
  },
  {
    title: 'High-Conversion Buyer Intent IoT Keywords',
    keywords: [
      'Industrial IoT development company',
      'Smart device software development',
      'IoT cloud integration services',
      'Embedded systems development company',
      'IoT firmware development services',
      'Edge computing IoT solutions',
      'IoT product engineering company',
      'Smart manufacturing IoT solutions',
    ],
  },
  {
    title: 'Long-Tail Global Keywords',
    keywords: [
      'Affordable AI development company for startups',
      'Custom SaaS development company USA',
      'Offshore AI development team',
      'Dedicated development team India',
      'AI product development partner',
      'End-to-end IoT product development',
      'Enterprise-grade mobile app development company',
      'Startup MVP development company',
      'AI-driven automation solutions for enterprises',
      'Cloud-native SaaS product development',
    ],
  },
  {
    title: 'Enterprise-Specific Keywords',
    keywords: [
      'Enterprise digital transformation services',
      'AI for enterprise automation',
      'Legacy system modernization services',
      'Enterprise workflow automation solutions',
      'AI-powered enterprise analytics',
      'Secure enterprise software development',
      'Scalable enterprise architecture development',
    ],
  },
  {
    title: 'Startup-Specific Keywords',
    keywords: [
      'MVP development company for startups',
      'Startup product development partner',
      'Affordable SaaS development company',
      'Startup tech co-founder services',
      'AI startup development company',
      'Product prototyping services',
      'Rapid application development company',
      'Lean product development services',
    ],
  },
  {
    title: 'Trending 2026 AI Keywords',
    keywords: [
      'AI agent development',
      'Autonomous AI workflow automation',
      'Custom GPT development services',
      'RAG-based AI application development',
      'AI copilots for business',
      'Generative AI SaaS development',
      'AI orchestration platform development',
      'LLM-powered enterprise solutions',
      'AI data engineering services',
      'AI microservices architecture',
    ],
  },
  {
    title: 'Industry-Specific Global Healthcare Keywords',
    keywords: [
      'AI healthcare software development',
      'HIPAA-compliant software development',
      'Telehealth app development company',
    ],
  },
  {
    title: 'Industry-Specific Global FinTech Keywords',
    keywords: [
      'AI fintech software development',
      'Digital banking app development',
      'Fraud detection AI solutions',
    ],
  },
  {
    title: 'Industry-Specific Global E-commerce Keywords',
    keywords: [
      'AI-powered eCommerce development',
      'B2B marketplace development company',
      'Headless commerce development',
    ],
  },
  {
    title: 'Industry-Specific Global Logistics Keywords',
    keywords: [
      'AI logistics optimization software',
      'IoT fleet tracking system development',
    ],
  },
  {
    title: 'Industry-Specific Global Real Estate Keywords',
    keywords: [
      'PropTech software development',
      'AI real estate analytics platform',
    ],
  },
  {
    title: 'Blog Strategy Keywords',
    keywords: [
      'Cost to build AI SaaS product',
      'How to develop AI startup',
      'MVP vs full product development',
      'AI trends for enterprises 2026',
      'How much does mobile app development cost globally?',
      'AI automation for mid-size companies',
      'Benefits of IoT in manufacturing',
    ],
  },
  {
    title: 'Global Competition Strategy Keywords',
    keywords: [
      'AI development company for startups',
      'Enterprise AI automation solutions provider',
      'Custom SaaS development partner',
      'Offshore AI development company India',
    ],
  },
  {
    title: 'SEO Structure Homepage Keywords',
    keywords: [
      'AI-Driven Digital Product Engineering Company',
      'Global AI & Software Development Partner',
    ],
  },
  {
    title: 'SEO Structure Service Page Keywords',
    keywords: [
      'AI Development Services',
      'SaaS Development',
      'Enterprise Software Development',
      'Mobile App Development',
      'IoT Development',
    ],
  },
];
const allKeywords = keywordGroups.flatMap((group) => group.keywords);

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
      areaServed: 'US',
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
  areaServed: ['US', 'India', 'Global'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AstraKodes',
  url: siteUrl,
  inLanguage: ['en', 'es', 'hi'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does AstraKodes provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AstraKodes provides AI development, workflow automation, modern web development, and custom software engineering services for startups and enterprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries does AstraKodes work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work across SaaS, e-commerce, healthcare, fintech, and operations-heavy businesses that need reliable digital transformation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I start a project with AstraKodes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the contact form or email contact@astrakodes.com with your project scope, timeline, and goals. We respond with a discovery call and proposal.',
      },
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={allKeywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/Images/favicon.ico.png" />
        <link rel="apple-touch-icon" href="/Images/favicon.ico.png" />
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        <link rel="alternate" hrefLang="hi" href={`${siteUrl}/hi`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AstraKodes" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/Images/brahmastra.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${siteUrl}/Images/brahmastra.png`} />
        <meta name="twitter:site" content="@astrakodes" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <Hero />
      <Services />
      <About />
      <Contact />
      <section className="keyword-hub" aria-labelledby="keyword-hub-title">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Keyword Coverage</span>
            <h2 id="keyword-hub-title" className="section-title">Target SEO Keywords</h2>
            <p className="section-description">
              These are the commercial, local, and industry keyword phrases AstraKodes is targeting.
            </p>
          </div>
          <div className="keyword-grid">
            {keywordGroups.map((group) => (
              <article key={group.title} className="keyword-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="seo-faq" aria-labelledby="seo-faq-title">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">SEO FAQ</span>
            <h2 id="seo-faq-title" className="section-title">Frequently Asked Questions About AstraKodes Services</h2>
            <p className="section-description">
              Get clear answers about our AI, automation, web development, and software engineering services.
            </p>
          </div>
          <div className="faq-list">
            <article className="faq-item">
              <h3>What makes AstraKodes different from other development agencies?</h3>
              <p>
                We combine engineering rigor with business-first delivery. Every engagement maps technology choices to measurable
                outcomes such as lower operational cost, faster delivery cycles, and better customer retention.
              </p>
            </article>
            <article className="faq-item">
              <h3>Can AstraKodes modernize existing web or software systems?</h3>
              <p>
                Yes. We audit your current stack, identify technical debt, and execute phased modernization to improve reliability,
                performance, and maintainability without disrupting critical workflows.
              </p>
            </article>
            <article className="faq-item">
              <h3>Do you provide end-to-end AI and automation implementation?</h3>
              <p>
                Yes. We cover discovery, architecture, model or workflow implementation, integrations, monitoring, and iteration so
                your team can adopt automation confidently and at scale.
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
