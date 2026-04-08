import React from 'react';

function Hero({ profile }) {
  const githubHref = profile.contacts?.find((c) => c.label === 'GitHub')?.href;

  return (
    <section id="hero" className="section heroSection" data-section="true">
      <div className="container heroGrid">
        <div className="heroCopy">
          <p className="eyebrow">Backend • Java/Spring Boot • ML</p>
          <h1 className="heroTitle">
            {profile.name}
            <span className="heroTitleAccent">.</span>
          </h1>
          <p className="heroSubtitle">{profile.headline}</p>
          <p className="heroSummary">{profile.summary}</p>

          <div className="heroCtas">
            <a className="btn btnPrimary" href="#contact">
              Contact Me
            </a>
            <a className="btn btnGhost" href="resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="btn btnSoft" href={githubHref} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="heroHighlights" role="list">
            {profile.highlights?.map((h) => (
              <div className="pillCard" role="listitem" key={h.label}>
                <div className="pillLabel">{h.label}</div>
                <div className="pillValue">{h.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="heroSide">
          <div className="heroCard">
            {profile.avatar ? (
              <a
                className="heroAvatar heroAvatarLink"
                href={profile.avatar}
                target="_blank"
                rel="noreferrer"
                aria-label="Open profile photo"
              >
                <img className="heroAvatarImg" src={profile.avatar} alt="" loading="eager" />
              </a>
            ) : (
              <div className="heroAvatar" aria-hidden="true">
                <span>{(profile.name ?? 'V')[0]}</span>
              </div>
            )}

            <div className="heroCardBody">
              <div className="heroCardTitle">Let’s build something premium.</div>
              <div className="heroCardMeta">
                {profile.contacts?.slice(0, 2).map((c) => (
                  <a key={c.label} className="metaLink" href={c.href}>
                    <span className="metaLabel">{c.label}</span>
                    <span className="metaValue">{c.value}</span>
                  </a>
                ))}
              </div>
              <div className="heroCardBadges">
                {profile.skills?.[0]?.items?.slice(0, 3).map((s) => (
                  <span key={s} className="badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="heroGlow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
