import React from 'react';

function Skills({ profile }) {
  return (
    <section id="skills" className="section" data-section="true">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Skills</h2>
          <p className="sectionKicker">A sharp mix of backend, frontend, and ML.</p>
        </div>

        <div className="skillsGrid">
          {profile.skills?.map((group) => (
            <div className="card" key={group.group}>
              <h3 className="cardTitle">{group.group}</h3>
              <div className="chipRow" role="list">
                {group.items?.map((item) => (
                  <span className="chip" role="listitem" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
