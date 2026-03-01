import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocalSeoPageTemplate from '@/components/LocalSeoPageTemplate';

export default function SoftwareDevelopmentCompanyPunePage() {
  return (
    <LocalSeoPageTemplate
      slug="software-development-company-pune"
      title="Software Development Company in Pune | AstraKodes"
      description="AstraKodes is a software development company in Pune building custom enterprise software, SaaS products, and modern web applications."
      h1="Software Development Company in Pune"
      intro="Deliver reliable custom software with scalable architecture and modern engineering practices."
      primaryService="Software Development"
      area="Pune"
      bullets={[
        'Custom software engineering',
        'Enterprise application development',
        'SaaS and web platform delivery',
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
