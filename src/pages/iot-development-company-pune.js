import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocalSeoPageTemplate from '@/components/LocalSeoPageTemplate';

export default function IoTDevelopmentCompanyPunePage() {
  return (
    <LocalSeoPageTemplate
      slug="iot-development-company-pune"
      title="IoT Development Company in Pune | AstraKodes"
      description="AstraKodes is an IoT development company in Pune delivering embedded software, firmware, and cloud-connected IoT solutions."
      h1="IoT Development Company in Pune"
      intro="Build reliable connected products with firmware, cloud integration, and scalable IoT architecture."
      primaryService="IoT Development"
      area="Pune"
      bullets={[
        'IoT product and firmware development',
        'Industrial IoT integration',
        'Embedded systems and cloud connectivity',
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
