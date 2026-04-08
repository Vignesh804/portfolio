import React, { useEffect, useMemo, useState } from 'react';

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 18a6 6 0 0 0 0-12 6 6 0 0 0 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm10-9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm15.07-7.07a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0ZM6.05 18.36a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0Zm12.31 1.41a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41ZM5.34 7.05a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 14.9A8.6 8.6 0 0 1 9.1 3a1 1 0 0 0-1.2 1.2A10.6 10.6 0 1 0 22.2 16a1 1 0 0 0-1.2-1.1Z" />
    </svg>
  );
}

function Header({ name, avatar, navigation, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(navigation?.[0]?.id ?? 'hero');

  const navItems = useMemo(() => navigation ?? [], [navigation]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[data-section="true"]'));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.01, 0.1, 0.25] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const onNavigate = () => setMenuOpen(false);

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <div className="brand">
          {avatar ? (
            <a
              className="brandMark"
              href={avatar}
              target="_blank"
              rel="noreferrer"
              aria-label="Open profile photo"
              onClick={onNavigate}
            >
              <img className="brandAvatar" src={avatar} alt="" />
            </a>
          ) : (
            <a className="brandMark" href="#hero" onClick={onNavigate} aria-label="Go to top">
              {name?.[0] ?? 'V'}
            </a>
          )}

          <a className="brandText" href="#hero" onClick={onNavigate}>
            {name}
          </a>
        </div>

        <nav className="siteNav" aria-label="Primary">
          <ul className="navList">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={active === item.id ? 'navLink isActive' : 'navLink'}
                  href={`#${item.id}`}
                  onClick={onNavigate}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="headerActions">
          <button className="iconButton" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
            <ThemeIcon theme={theme} />
          </button>

          <button
            className="iconButton mobileOnly"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 1 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0Z" />
              ) : (
                <path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 4a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H5Z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobileNav" className={menuOpen ? 'mobileNav isOpen' : 'mobileNav'}>
        <ul className="mobileNavList">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={active === item.id ? 'mobileNavLink isActive' : 'mobileNavLink'}
                href={`#${item.id}`}
                onClick={onNavigate}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;

