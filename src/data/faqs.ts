export type FaqItem = { id: string; question: string; answer: string }

export const faqs: FaqItem[] = [
  { id: 'build', question: 'What can I build with this?', answer: 'You can build AI-powered automation workflows, smart data processing pipelines, content generation tools, and intelligent task routing systems.' },
  { id: 'experience', question: 'Do I need AI or machine learning experience?', answer: 'No. Aeye abstracts the underlying AI complexity through clean APIs and workflow primitives.' },
  { id: 'integration', question: 'How does integration work?', answer: 'Install the SDK via npm, pip, or CLI — setup takes under five minutes. Authenticate with your API key, define your workflow, and start sending requests.' },
  { id: 'tools', question: 'Can it work with my current tools?', answer: 'Yes. Aeye is built to fit into existing stacks without replacing them.' },
  { id: 'production', question: 'Is it suitable for production use?', answer: 'Yes. Aeye is designed with reliability and consistency in mind.' },
]
