import React from 'react';

function Projects({ profile }) {
  return (
    <section id="projects" className="section" data-section="true">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Projects</h2>
          <p className="sectionKicker">Selected work built from scratch to finish.</p>
        </div>

        <div className="projectGrid">
          {profile.projects?.map((p) => (
            <article className="card projectCard" key={p.title}>
              <div className="projectTop">
                <h3 className="projectTitle">{p.title}</h3>
                <p className="muted">{p.tagline}</p>
              </div>

              <ul className="bulletList">
                {p.bullets?.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="tagRow" aria-label="Tech stack">
                {p.stack?.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="projectLinks" aria-label="Project links">
                {p.links?.map((l) => (
                  <a
                    key={l.label}
                    className={l.href ? 'linkBtn' : 'linkBtn isDisabled'}
                    href={l.href || undefined}
                    target={l.href ? '_blank' : undefined}
                    rel={l.href ? 'noreferrer' : undefined}
                    aria-disabled={!l.href}
                    onClick={(e) => {
                      if (!l.href) e.preventDefault();
                    }}
                    title={l.href ? l.label : 'Add a link in src/content/profile.js'}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
