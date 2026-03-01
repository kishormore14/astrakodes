import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      slug="mobile-app-development"
      title="Mobile App Development Company | iOS, Android, Cross-Platform | AstraKodes"
      description="AstraKodes is a mobile app development company building iOS, Android, and cross-platform applications for startups and enterprises."
      h1="Mobile App Development Services for Growth-Focused Businesses"
      intro="We build high-performance mobile applications with strong UX, scalable backends, and reliable release pipelines."
      serviceName="Mobile App Development"
      sections={[
        {
          title: 'iOS and Android App Development',
          body: 'Build robust native and hybrid mobile applications tailored to your product and business goals.',
          points: ['iOS and Android engineering', 'App architecture and QA', 'Store-ready release workflows'],
        },
        {
          title: 'Cross-Platform App Delivery',
          body: 'Reduce development overhead with cross-platform strategy while maintaining reliable performance.',
          points: ['Flutter and React Native solutions', 'Shared component architecture', 'Performance-first mobile UX'],
        },
        {
          title: 'App Scaling and Maintenance',
          body: 'Improve app reliability, release velocity, and feature delivery after launch.',
          points: ['Post-launch support', 'Performance optimization', 'Feature iteration roadmap'],
        },
      ]}
      faq={[
        {
          q: 'Do you develop apps for startups and enterprises?',
          a: 'Yes. We deliver startup MVPs and enterprise-grade apps with scalable architecture and release discipline.',
        },
        {
          q: 'Can you maintain and improve our existing app?',
          a: 'Yes. We handle app optimization, bug fixing, modernization, and ongoing feature development.',
        },
        {
          q: 'Do you build cross-platform apps?',
          a: 'Yes. We build cross-platform applications using frameworks that balance speed, quality, and maintainability.',
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
