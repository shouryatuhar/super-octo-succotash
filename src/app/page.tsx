import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/Projects/ProjectShowcase";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectShowcase />
      <section className="experienceSection" id="experience">
        <div className="experienceHeading">
          <span className="eyebrow">03 / EXPERIENCE</span>
          <h2>Where I contribute.</h2>
        </div>
        <article className="experienceItem">
          <span className="experienceDate">SEP 2026 — PRESENT</span>
          <div className="experienceRole">
            <h3>AI LLM Evaluation Contributor</h3>
            <p>Mercor</p>
          </div>
          <span className="experienceType">AI · MODEL EVALUATION</span>
        </article>
      </section>
      <section className="aboutSection" id="about">
        <div className="aboutInner">
          <span className="eyebrow">04 / A LITTLE ABOUT ME</span>
          <h2>Engineer by practice.<br /><i>Curious by default.</i></h2>
          <p>I’m a computer science undergraduate with an engineer’s curiosity about how things work beneath the surface, from software systems to the machines on a factory floor. I like tracing what’s happening, understanding why, and seeing how the pieces fit together.</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shouryatuhar%40gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={16}/> Say hello <ArrowUpRight size={14}/></a>
        </div>
        <div className="aboutAside"><span>OUTSIDE OF CODE</span><ul>
          <li><a href="https://open.spotify.com/playlist/0hxKnQ16SMPWGEuO8WamSL?si=eef91320b6ad4b80" target="_blank" rel="noreferrer">Gym sessions ↗</a></li>
          <li>F1 for the wheel-to-wheel fights and race-day chaos</li>
          <li><a href="https://open.spotify.com/playlist/6pvKPEilyEq0FZa7Bo4DT5?si=dace42e5ca99402c" target="_blank" rel="noreferrer">Music on, almost always ↗</a></li>
          <li>Waiting for my next chance to explore the world</li>
        </ul></div>
      </section>
      <footer className="siteFooter"><a href="#top">SHOURYA TUHAR <span>•</span></a><span>DESIGNED & BUILT WITH INTENTION · 2026</span><nav className="siteSocials" aria-label="Social and coding profiles">
        <a href="https://www.linkedin.com/in/shourya-tuhar-9110a828b/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12}/></a>
        <a href="https://medium.com/@shouryatuhar" target="_blank" rel="noreferrer">MEDIUM <ArrowUpRight size={12}/></a>
        <a href="https://www.codechef.com/users/soft_wasp_36" target="_blank" rel="noreferrer">CODECHEF <ArrowUpRight size={12}/></a>
        <a href="https://leetcode.com/u/Shouryaaaa/" target="_blank" rel="noreferrer">LEETCODE <ArrowUpRight size={12}/></a>
        <a href="https://github.com/shouryatuhar" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12}/></a>
      </nav></footer>
    </main>
  );
}
