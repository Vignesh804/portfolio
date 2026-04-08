import React from 'react';

function Footer({ profile, navigation }) {
  const year = new Date().getFullYear();
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerBrand">
          <div className="footerName">{profile.name}</div>
          <div className="muted">{profile.headline}</div>
          <div className="footerLinks">
            {profile.contacts
              ?.filter((c) => c.label !== 'Phone')
              .map((c) => (
                <a
                  key={c.label}
                  className="footerLink"
                  href={c.href}
                  target={c.href?.startsWith('http') ? '_blank' : undefined}
                  rel={c.href?.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {c.label}
                </a>
              ))}
          </div>
        </div>

        <div className="footerNav" aria-label="Footer">
          <div className="footerNavTitle">Explore</div>
          <div className="footerNavLinks">
            {navigation?.slice(1).map((n) => (
              <a key={n.id} className="footerLink" href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footerMeta">
          <div className="footerNavTitle">Build</div>
          <div className="muted">React + Vite • Fast, responsive, accessible.</div>
          <div className="footerCopyright">© {year} {profile.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
