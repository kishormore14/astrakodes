import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function IoTDevelopmentPage() {
  return (
    <ServicePageTemplate
      slug="iot-development"
      title="IoT Development Company | Embedded and Smart Device Solutions | AstraKodes"
      description="AstraKodes is an IoT development company building firmware, cloud integrations, and smart device software for industrial and commercial use cases."
      h1="IoT Development Services for Smart Products and Industrial Systems"
      intro="We build IoT solutions across firmware, edge, cloud, and analytics to help businesses launch reliable connected products."
      serviceName="IoT Development"
      sections={[
        {
          title: 'IoT Product Engineering',
          body: 'Build connected products from prototype to production with reliable firmware and cloud communication layers.',
          points: ['IoT product architecture', 'Device firmware development', 'Edge-to-cloud data pipelines'],
        },
        {
          title: 'Industrial IoT and Automation',
          body: 'Deploy industrial IoT systems for operational monitoring, predictive insights, and process optimization.',
          points: ['Industrial telemetry systems', 'Smart manufacturing solutions', 'IoT workflow automation'],
        },
        {
          title: 'Embedded and Cloud Integration',
          body: 'Connect embedded systems to cloud platforms with scalable and secure integration strategy.',
          points: ['Embedded software integration', 'IoT cloud APIs', 'Secure device lifecycle management'],
        },
      ]}
      faq={[
        {
          q: 'Do you develop both firmware and cloud components?',
          a: 'Yes. We handle embedded firmware, edge processing, cloud APIs, and analytics integration end-to-end.',
        },
        {
          q: 'Can you build IoT prototypes quickly?',
          a: 'Yes. We build rapid IoT prototypes to validate product feasibility before full production rollout.',
        },
        {
          q: 'Do you support industrial IoT projects?',
          a: 'Yes. We deliver industrial IoT systems for monitoring, optimization, and automation at scale.',
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
