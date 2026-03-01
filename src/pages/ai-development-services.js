import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function AiDevelopmentServicesPage() {
  return (
    <ServicePageTemplate
      slug="ai-development-services"
      title="AI Development Services | Enterprise AI Company | AstraKodes"
      description="AstraKodes delivers AI development services including LLM apps, AI automation, chatbot development, and enterprise AI integration for scalable business outcomes."
      h1="AI Development Services for Startups and Enterprises"
      intro="We build production-grade AI systems from strategy to deployment, with measurable ROI and secure integration into your existing workflows."
      serviceName="AI Development Services"
      sections={[
        {
          title: 'Generative AI and LLM Development',
          body: 'Build custom LLM applications, copilots, and domain-specific AI assistants aligned to your product and operations goals.',
          points: ['Custom GPT and RAG pipelines', 'OpenAI API integrations', 'Prompt engineering and guardrails'],
        },
        {
          title: 'AI Automation and Workflow Optimization',
          body: 'Automate repetitive business operations with reliable AI-enabled workflows and integrations.',
          points: ['AI agent orchestration', 'Document and process automation', 'Workflow monitoring and optimization'],
        },
        {
          title: 'Enterprise AI Integration',
          body: 'Integrate AI into SaaS, enterprise, and data platforms with production architecture and security controls.',
          points: ['API-first AI architecture', 'Compliance-ready implementation', 'Model lifecycle and observability'],
        },
      ]}
      faq={[
        {
          q: 'Do you provide end-to-end AI product development?',
          a: 'Yes. We cover AI discovery, architecture, development, integration, and optimization in one delivery workflow.',
        },
        {
          q: 'Can AstraKodes integrate AI into existing software?',
          a: 'Yes. We integrate AI into legacy and modern systems using secure APIs, event pipelines, and modular architecture.',
        },
        {
          q: 'Do you build AI solutions for startups?',
          a: 'Yes. We design lean AI MVPs for startups and scale them into enterprise-ready products as traction grows.',
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
