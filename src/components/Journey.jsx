import React from 'react';

function Journey({ profile }) {
  return (
    <section id="journey" className="section sectionAlt" data-section="true">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Journey</h2>
          <p className="sectionKicker">Education + certifications that back the skills.</p>
        </div>

        <div className="journeyGrid">
          <div className="card">
            <h3 className="cardTitle">Education</h3>
            <ol className="timeline">
              {profile.education?.map((edu) => (
                <li key={edu.title} className="timelineItem">
                  <div className="timelineDot" aria-hidden="true" />
                  <div className="timelineBody">
                    <div className="timelineTitle">{edu.title}</div>
                    <div className="muted">{edu.place}</div>
                    {edu.period ? <div className="timelineMeta">{edu.period}</div> : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="card">
            <h3 className="cardTitle">Certifications</h3>
            <ul className="bulletList">
              {profile.certifications?.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;


