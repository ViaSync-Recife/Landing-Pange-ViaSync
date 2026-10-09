import { SectionFrame } from '../ui/SectionFrame'

const posts = [
  { tag: 'WORKFLOW', date: 'May 7, 2026', title: 'Designing AI Workflows That Actually Work', description: 'How to structure inputs, processing, and outputs to build reliable AI-driven workflows in real products.', image: 'workflows' },
  { tag: 'SYSTEM', date: 'Apr 12, 2026', title: 'Designing AI Systems, Not Just Features', description: '', image: 'systems' },
  { tag: 'PRODUCT', date: 'Apr 10, 2026', title: 'From Prompt to Product: Making AI Useful', description: '', image: 'product' },
]

function BlogCard({ post, featured = false }: { post: typeof posts[number]; featured?: boolean }) {
  return <a aria-label={`${post.title} — VIEW`} className={`blog-card ${featured ? 'blog-card--featured' : ''}`} href="#post">
    <div className="blog-card__copy">
      <small><b>{post.tag}</b><span>// {post.date}</span></small>
      <div className="blog-card__body"><h3>{post.title}</h3>{post.description && <p>{post.description}</p>}</div>
      <div className="blog-card__footer"><i>↗</i><span>VIEW</span></div>
    </div>
    <img alt="Blog Image" src={`/assets/blog/${post.image}.webp`} />
  </a>
}

export function Blog() {
  return <SectionFrame action={<a className="aeye-button aeye-button--outline" href="#post">READ ALL</a>} index="N. 10 / 11" label="BLOG" title="Ideas, workflows. Real-world usages." tone="light">
    <div className="blog-grid"><BlogCard featured post={posts[0]} /><div className="blog-grid__stack"><BlogCard post={posts[1]} /><BlogCard post={posts[2]} /></div></div>
  </SectionFrame>
}
