import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocalSeoPageTemplate from '@/components/LocalSeoPageTemplate';

export default function AiDevelopmentCompanyPunePage() {
  return (
    <LocalSeoPageTemplate
      slug="ai-development-company-pune"
      title="AI Development Company in Pune | AstraKodes"
      description="AstraKodes is an AI development company in Pune delivering LLM applications, automation workflows, and enterprise AI integrations."
      h1="AI Development Company in Pune"
      intro="Build production-grade AI solutions with a delivery-focused engineering team for startups and enterprises in Pune."
      primaryService="AI Development Services"
      area="Pune"
      bullets={[
        'Generative AI and LLM app development',
        'AI automation for business workflows',
        'Enterprise AI integration services',
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
