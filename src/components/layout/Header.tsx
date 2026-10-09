import { useState } from 'react'
import { Container } from './Container'

const links = ['Home', 'about', 'docs', 'pricing', 'blog', 'careers']

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><Container><nav aria-label="Primary navigation" className="site-nav"><a className="brand" href="#top"><span>✦</span>Aeye<sup>®</sup><em>v1.0-BETA</em></a><button aria-expanded={open} aria-label="Toggle menu" className="menu-button" onClick={() => setOpen(!open)} type="button">☰</button><div className={open ? 'nav-links is-open' : 'nav-links'}>{links.map((link) => <a className={link === 'Home' ? 'nav-home' : ''} href={`#${link.toLowerCase()}`} key={link}>{link === 'Home' ? '<HOME>' : link.toUpperCase()}{link === 'careers' && <sup>4</sup>}</a>)}<a className="nav-contact" href="#contact">↗&nbsp; CONTACT US</a></div></nav></Container></header>
}
