import { Link } from 'react-router-dom';

const features = [
  { icon: '01', title: 'Connect with peers', text: 'Find a focused academic community where every voice can contribute.' },
  { icon: '02', title: 'Share academic ideas', text: 'Exchange questions, insights and resources in a professional space.' },
  { icon: '03', title: 'Build your profile', text: 'Present your interests, goals and learning journey to your community.' },
];

export default function Home() {
  return <>
    <section className="hero-section container page-enter">
      <div className="hero-copy">
        <div className="eyebrow">RICHFIELD ACADEMIC COMMUNITY</div>
        <h1>Where students <span>connect</span>, collaborate and grow.</h1>
        <p className="hero-lede">Richfield Connect is a professional digital space for sharing knowledge, discovering new perspectives and building meaningful academic networks.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/signup">Create your profile <span>→</span></Link><Link className="text-link" to="/about">Explore the community →</Link></div>
        <div className="hero-note"><span className="pulse-dot" /> Built for Richfield students, by Richfield students</div>
      </div>
      <div className="hero-art" aria-label="Academic collaboration illustration"><div className="art-circle art-circle-one" /><div className="art-circle art-circle-two" /><div className="art-card"><span className="art-label">TODAY'S DISCUSSION</span><strong>How can technology improve learning?</strong><div className="art-lines"><i /><i /><i /></div><div className="art-avatar-row"><span className="mini-avatar">AN</span><span className="mini-avatar violet">KM</span><span className="mini-avatar gold">TS</span><small>+ 24 students joined</small></div></div><div className="art-stamp">SHARE<br /><b>IDEAS</b></div></div>
    </section>
    <section className="feature-section"><div className="container"><div className="section-intro"><div><div className="eyebrow">WHY RICHFIELD CONNECT</div><h2>A better way to learn together.</h2></div><p>Purposeful connection for the people and ideas shaping tomorrow.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><span className="feature-number">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p><Link to="/about" className="card-link">Learn more <span>↗</span></Link></article>)}</div></div></section>
    <section className="home-cta container"><div><div className="eyebrow light-eyebrow">YOUR ACADEMIC VOICE MATTERS</div><h2>Start your Richfield Connect journey.</h2></div><Link className="button button-light" to="/signup">Register now <span>→</span></Link></section>
  </>;
}
