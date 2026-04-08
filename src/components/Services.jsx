import React from 'react';

function Services({ profile }) {
  return (
    <section id="services" className="section sectionAlt" data-section="true">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Services</h2>
        
        </div>

        <div className="cardsGrid">
          {profile.services?.map((service) => (
            <article className="card cardGlow" key={service.title}>
              <h3 className="cardTitle">{service.title}</h3>
              <p className="muted">{service.description}</p>
              <ul className="bulletList">
                {service.bullets?.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

