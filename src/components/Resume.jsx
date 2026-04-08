import React from 'react';

function Resume({ profile }) {
  return (
    <section id="resume" className="section" data-section="true">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Resume</h2>
          <p className="sectionKicker">Everything in one clean PDF.</p>
        </div>

        <div className="resumeGrid">
          <div className="card">
            <h3 className="cardTitle">{profile.name}</h3>
            <p className="muted">
              Prefer quick reading? Use the sections above. For full details, open the resume PDF.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="resume.pdf" download>
                Download Resume
              </a>
              <a className="btn btnGhost" href="resume.pdf" target="_blank" rel="noreferrer">
                Open in new tab
              </a>
            </div>

            <div className="miniContacts" aria-label="Contact shortcuts">
              {profile.contacts?.map((c) => (
                <a key={c.label} className="miniContact" href={c.href} target={c.href?.startsWith('http') ? '_blank' : undefined} rel={c.href?.startsWith('http') ? 'noreferrer' : undefined}>
                  <span className="miniContactLabel">{c.label}</span>
                  <span className="miniContactValue">{c.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="card resumePreview">
            <div className="resumePreviewTop">
              <h3 className="cardTitle">Preview</h3>
              <span className="tag">PDF</span>
            </div>
            <div className="resumePreviewBody" aria-label="Resume preview (opens PDF)">
              <a className="resumePreviewLink" href="resume.pdf" target="_blank" rel="noreferrer">
                <div className="resumePreviewFrame">
                  <div className="resumePreviewMock" aria-hidden="true">
                    <div className="resumeLine w80" />
                    <div className="resumeLine w55" />
                    <div className="resumeLine w90" />
                    <div className="resumeLine w70" />
                    <div className="resumeLine w60" />
                    <div className="resumeLine w85" />
                    <div className="resumeLine w40" />
                  </div>
                </div>
                <div className="resumePreviewHint">Click to open resume</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

