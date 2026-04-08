import React, { useMemo, useState } from 'react';

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function Contact({ profile }) {
  const email = profile.contacts?.find((c) => c.label === 'Email')?.value ?? '';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const canSubmit = useMemo(() => {
    if (!form.name.trim()) return false;
    if (!validateEmail(form.email.trim())) return false;
    if (form.message.trim().length < 10) return false;
    return true;
  }, [form.email, form.message, form.name]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    if (!email) {
      setStatus({ state: 'error', message: 'No email configured for this site.' });
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    const subject = encodeURIComponent(`Portfolio inquiry — ${payload.name}`);
    const body = encodeURIComponent(`${payload.message}\n\nFrom: ${payload.name}\nEmail: ${payload.email}`);

    setStatus({ state: 'success', message: `Opening email draft (${email})…` });
    setForm({ name: '', email: '', message: '' });
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section" data-section="true">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">Contact</h2>
          <p className="sectionKicker">Let’s talk. I reply fast and communicate clearly.</p>
        </div>

        <div className="contactGrid">
          <div className="card">
            <h3 className="cardTitle">Direct</h3>
            <p className="muted">Choose any channel. For projects, email works best.</p>
            <div className="contactList" role="list">
              {profile.contacts?.map((c) => (
                <a
                  key={c.label}
                  className="contactItem"
                  role="listitem"
                  href={c.href}
                  target={c.href?.startsWith('http') ? '_blank' : undefined}
                  rel={c.href?.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="contactLabel">{c.label}</span>
                  <span className="contactValue">{c.value}</span>
                </a>
              ))}
            </div>

            
          </div>

          <form className="card contactForm" onSubmit={onSubmit}>
            <h3 className="cardTitle">Send a message</h3>

            <label className="field">
              <span className="fieldLabel">Name</span>
              <input
                className="input"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="field">
              <span className="fieldLabel">Email</span>
              <input
                className="input"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@email.com"
                autoComplete="email"
                inputMode="email"
                required
              />
            </label>

            <label className="field">
              <span className="fieldLabel">Message</span>
              <textarea
                className="textarea"
                rows={6}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project…"
                required
              />
            </label>

            <div className="formRow">
              <button className="btn btnPrimary" type="submit" disabled={!canSubmit || status.state === 'loading'}>
                {status.state === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              <p className={status.state === 'success' ? 'formNote isSuccess' : status.state === 'error' ? 'formNote isError' : 'formNote'}>
                {status.message}
              </p>
            </div>

            
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
