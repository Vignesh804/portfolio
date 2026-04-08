import React from 'react';

function About({ profile }) {
  return (
    <section id="about" className="section" data-section="true">
      <div className="container">
        <div className="sectionHead isCentered">
          <h2 className="sectionTitle">About</h2>
        </div>

        <div className="aboutGrid isCentered">
          <article className="aboutCard card">
            <h3 className="cardTitle">Summary</h3>
            <p className="muted aboutSummary">{profile.summary}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
