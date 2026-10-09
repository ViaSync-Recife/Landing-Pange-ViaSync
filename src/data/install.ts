export type InstallLanguage = 'javascript' | 'cli' | 'python'

export type InstallSnippet = { id: InstallLanguage; label: string; description: string; code: string }

export const installSnippets: InstallSnippet[] = [
  { id: 'javascript', label: 'JavaScript', description: 'Integrate the utility directly into your application logic with a lightweight client.', code: 'import { Client } from "@AEYE/product";\n\nconst client = new AIClient({\n  apiKey: process.env.AEYE_API_KEY,\n});\n\nconst response = await client.generate({\n  task: "summarize",\n  input: "summarize the following document into key insights",\n});' },
  { id: 'cli', label: 'CLI', description: 'Run AI tasks directly from your terminal with a simple command-line tool.', code: 'npm install -g @aeye/cli\n\n# Authenticate\naeye login --api-key $AEYE_API_KEY\n\n# Run task\naeye generate --task summarize --input "summarize the following document into key insights"' },
  { id: 'python', label: 'Python', description: 'Add AI capabilities to your Python workflows in just a few lines of code.', code: 'from aeye import Client\nimport os\n\nclient = Client(api_key=os.getenv("AEYE_API_KEY"))\n\n# Send input & context\nresponse = client.generate(\n  task="summarize",\n  input="summarize the following document into key insights"\n)\n\noutput = response.get("output")\nmetadata = response.get("metadata", {})\n\n# Trigger next action\nif metadata.get("score", 0) > 0.8:\n  notify_user(output)' },
]
