import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function SaasDevelopmentPage() {
  return (
    <ServicePageTemplate
      slug="saas-development"
      title="SaaS Development Company | Cloud-Native SaaS Solutions | AstraKodes"
      description="AstraKodes is a SaaS development company building cloud-native, scalable, and secure SaaS products for startups and enterprises."
      h1="Custom SaaS Development Services"
      intro="From MVP to enterprise scale, we build SaaS products with robust architecture, reliable billing flows, and high-availability infrastructure."
      serviceName="SaaS Development"
      sections={[
        {
          title: 'SaaS Product Architecture',
          body: 'Design cloud-native architecture that supports growth, reliability, and secure multi-tenant deployment.',
          points: ['Multi-tenant architecture', 'Role-based access control', 'Scalable data models'],
        },
        {
          title: 'SaaS MVP and Product Iteration',
          body: 'Launch fast with a focused MVP and iterate features based on real customer usage and feedback.',
          points: ['MVP feature scoping', 'Rapid release cycles', 'Product analytics integration'],
        },
        {
          title: 'SaaS Modernization and Performance',
          body: 'Improve existing SaaS products with performance tuning, code quality upgrades, and operational hardening.',
          points: ['Legacy refactoring', 'Cloud cost optimization', 'Reliability and uptime improvements'],
        },
      ]}
      faq={[
        {
          q: 'Do you build SaaS products for startups?',
          a: 'Yes. We work with startup teams to launch MVP SaaS products and then scale architecture as adoption increases.',
        },
        {
          q: 'Can you modernize our existing SaaS platform?',
          a: 'Yes. We modernize architecture, optimize performance bottlenecks, and improve maintainability without disrupting users.',
        },
        {
          q: 'Do you support cloud-native deployments?',
          a: 'Yes. We deploy on modern cloud infrastructure with CI/CD, observability, and security controls.',
        },
      ]}
    />
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
