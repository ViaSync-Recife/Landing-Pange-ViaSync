export function CodeEditor({ code, language }: { code: string; language: string }) {
  return <pre aria-label={`${language} code example`} className="code-editor"><code>{code}</code></pre>
}
