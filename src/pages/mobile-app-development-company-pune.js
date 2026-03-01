import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocalSeoPageTemplate from '@/components/LocalSeoPageTemplate';

export default function MobileAppDevelopmentCompanyPunePage() {
  return (
    <LocalSeoPageTemplate
      slug="mobile-app-development-company-pune"
      title="Mobile App Development Company in Pune | AstraKodes"
      description="AstraKodes is a mobile app development company in Pune building iOS, Android, and cross-platform applications for startups and enterprises."
      h1="Mobile App Development Company in Pune"
      intro="Launch mobile apps with strong UX, stable architecture, and long-term maintainability."
      primaryService="Mobile App Development"
      area="Pune"
      bullets={[
        'iOS and Android app development',
        'Cross-platform app engineering',
        'App maintenance and feature scaling',
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
