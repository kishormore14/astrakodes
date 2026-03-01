import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function EnterpriseSoftwareDevelopmentPage() {
  return (
    <ServicePageTemplate
      slug="enterprise-software-development"
      title="Enterprise Software Development Services | AstraKodes"
      description="AstraKodes delivers enterprise software development services including modernization, workflow automation, and secure scalable architecture."
      h1="Enterprise Software Development for Complex Business Operations"
      intro="We build and modernize enterprise software systems that improve reliability, security, and long-term maintainability."
      serviceName="Enterprise Software Development"
      sections={[
        {
          title: 'Legacy System Modernization',
          body: 'Upgrade outdated systems and architecture with minimal business disruption and measurable stability improvements.',
          points: ['Platform migration planning', 'Incremental modernization', 'Backward-compatible rollout strategies'],
        },
        {
          title: 'Enterprise Workflow Automation',
          body: 'Streamline internal business operations with automation-first software workflows and integration layers.',
          points: ['Business process automation', 'Cross-team system integrations', 'Approval and audit workflows'],
        },
        {
          title: 'Secure and Scalable Architecture',
          body: 'Design resilient architecture for enterprise performance, compliance, and sustained product growth.',
          points: ['Security by design', 'Scalable service architecture', 'Operational monitoring and alerting'],
        },
      ]}
      faq={[
        {
          q: 'Can you modernize enterprise systems without downtime?',
          a: 'Yes. We use phased rollout and compatibility-first strategies to reduce risk and avoid service disruption.',
        },
        {
          q: 'Do you build custom enterprise portals and dashboards?',
          a: 'Yes. We build tailored enterprise web applications, dashboards, and internal platforms around your workflows.',
        },
        {
          q: 'How do you ensure enterprise-grade security?',
          a: 'We implement secure coding standards, access controls, and production hardening practices throughout delivery.',
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
