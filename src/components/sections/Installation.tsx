import { useState } from 'react'
import { installSnippets, type InstallLanguage } from '../../data/install'
import { CodeEditor } from '../ui/CodeEditor'
import { Container } from '../layout/Container'

export function Installation() {
  const [active, setActive] = useState<InstallLanguage>('python')
  const snippet = installSnippets.find((item) => item.id === active) ?? installSnippets[0]

  return (
    <section className="section-frame section-frame--light installation-section">
      <Container>
        <div className="section-frame__topline">
          <p className="technical-label">[N. 05 /11] &gt; INSTALLATION</p>
        </div>
        <div className="installation-layout" data-installation-layout>
          <div className="installation-code">
            <div className="installation-code__frame">
              <span>AEYE</span>
              <CodeEditor code={snippet.code} language={snippet.label} />
            </div>
          </div>
          <div className="installation-content">
            <h2 className="section-heading"><span>/</span> Simple to integrate.<br />Unlock new workflow. <span>/</span></h2>
            <a className="aeye-button aeye-button--dark" href="#contact">CONTACT US</a>
            <div className="install-list">
              {installSnippets.map((item) => (
                <button className={item.id === active ? 'is-active' : ''} key={item.id} onClick={() => setActive(item.id)} type="button">
                  <b>{item.label}</b>
                  {item.id === active ? <span>{item.description}</span> : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
