'use client'

import { useEffect, useState } from 'react'
import {
  CV_TEMPLATES,
  SAMPLE_CV,
  blankCv,
  contactBits,
  loadCv,
  newEducation,
  newExperience,
  newProject,
  saveCv,
  splitLines,
} from '../lib/cvMaker'

function Field({ label, value, onChange, multiline, placeholder }) {
  const id = `cv-${label.replace(/\s+/g, '-').toLowerCase()}`
  return (
    <label className="cv-field" htmlFor={id}>
      <span className="break-kicker">{label}</span>
      {multiline ? (
        <textarea
          id={id}
          className="notes-body cv-input"
          rows={4}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          id={id}
          className="cv-input"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  )
}

function CvPreview({ cv }) {
  const { basics, skills, experience, education, projects, templateId } = cv
  const contacts = contactBits(basics)

  return (
    <article className={`cv-sheet cv-sheet--${templateId}`} id="cv-print-root">
      <header className="cv-sheet-header">
        <div>
          <h1 className="cv-name">{basics.fullName || 'Your Name'}</h1>
          {basics.title ? <p className="cv-title">{basics.title}</p> : null}
        </div>
        {contacts.length > 0 && (
          <ul className="cv-contact">
            {contacts.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        )}
      </header>

      {templateId === 'modern' && (
        <aside className="cv-sidebar" aria-hidden="true">
          {skills.length > 0 && (
            <div>
              <h2>Skills</h2>
              <ul className="cv-skill-list">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}
          {(basics.email || basics.phone || basics.location) && (
            <div>
              <h2>Contact</h2>
              <ul className="cv-skill-list">
                {[basics.email, basics.phone, basics.location, basics.website, basics.linkedin]
                  .filter(Boolean)
                  .map((c) => (
                    <li key={c}>{c}</li>
                  ))}
              </ul>
            </div>
          )}
        </aside>
      )}

      <div className="cv-main">
        {basics.summary ? (
          <section className="cv-block">
            <h2>Summary</h2>
            <p>{basics.summary}</p>
          </section>
        ) : null}

        {skills.length > 0 && templateId !== 'modern' ? (
          <section className="cv-block">
            <h2>Skills</h2>
            <p className="cv-skills-inline">{skills.join(' · ')}</p>
          </section>
        ) : null}

        {experience.length > 0 ? (
          <section className="cv-block">
            <h2>Experience</h2>
            {experience.map((job) => (
              <div key={job.id} className="cv-entry">
                <div className="cv-entry-top">
                  <strong>
                    {job.role || 'Role'}
                    {job.company ? ` · ${job.company}` : ''}
                  </strong>
                  <span className="cv-dates">
                    {[job.start, job.end].filter(Boolean).join(' – ')}
                    {job.location ? ` · ${job.location}` : ''}
                  </span>
                </div>
                {splitLines(job.bullets).length > 0 && (
                  <ul>
                    {splitLines(job.bullets).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ) : null}

        {education.length > 0 ? (
          <section className="cv-block">
            <h2>Education</h2>
            {education.map((ed) => (
              <div key={ed.id} className="cv-entry">
                <div className="cv-entry-top">
                  <strong>
                    {ed.degree || 'Degree'}
                    {ed.school ? ` · ${ed.school}` : ''}
                  </strong>
                  <span className="cv-dates">
                    {[ed.year, ed.location].filter(Boolean).join(' · ')}
                  </span>
                </div>
                {ed.detail ? <p className="cv-muted">{ed.detail}</p> : null}
              </div>
            ))}
          </section>
        ) : null}

        {projects.length > 0 ? (
          <section className="cv-block">
            <h2>Projects</h2>
            {projects.map((p) => (
              <div key={p.id} className="cv-entry">
                <div className="cv-entry-top">
                  <strong>{p.name || 'Project'}</strong>
                  {p.link ? <span className="cv-dates">{p.link}</span> : null}
                </div>
                {p.detail ? <p className="cv-muted">{p.detail}</p> : null}
              </div>
            ))}
          </section>
        ) : null}
      </div>
    </article>
  )
}

export default function CvMaker() {
  const [cv, setCv] = useState(SAMPLE_CV)
  const [skillsText, setSkillsText] = useState(SAMPLE_CV.skills.join(', '))
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    const loaded = loadCv()
    setCv(loaded)
    setSkillsText((loaded.skills || []).join(', '))
  }, [])

  function patch(next) {
    setCv(next)
  }

  function setBasics(key, value) {
    patch({ ...cv, basics: { ...cv.basics, [key]: value } })
  }

  function persist() {
    const skills = skillsText
      .split(/[,|\n]/)
      .map((s) => s.trim())
      .filter(Boolean)
    const next = { ...cv, skills }
    saveCv(next)
    setCv(next)
    setSavedFlash(true)
    window.setTimeout(() => setSavedFlash(false), 1600)
  }

  function printCv() {
    persist()
    window.setTimeout(() => window.print(), 50)
  }

  function loadSample() {
    setCv(SAMPLE_CV)
    setSkillsText(SAMPLE_CV.skills.join(', '))
  }

  function resetBlank() {
    const b = blankCv()
    setCv(b)
    setSkillsText('')
    saveCv(b)
  }

  const preview = { ...cv, skills: skillsText.split(/[,|\n]/).map((s) => s.trim()).filter(Boolean) }

  return (
    <div className="cv-maker">
      <div className="cv-toolbar">
        <div className="cv-templates" role="listbox" aria-label="CV templates">
          {CV_TEMPLATES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="option"
              aria-selected={cv.templateId === t.id}
              className={`cv-template-btn ${cv.templateId === t.id ? 'is-active' : ''}`}
              title={t.blurb}
              onClick={() => patch({ ...cv, templateId: t.id })}
            >
              <span className="cv-template-label">{t.label}</span>
              <span className="cv-template-blurb">{t.blurb}</span>
            </button>
          ))}
        </div>
        <div className="cv-toolbar-actions">
          <button type="button" className="btn btn-ghost" onClick={loadSample}>
            Sample
          </button>
          <button type="button" className="btn btn-ghost" onClick={resetBlank}>
            Clear
          </button>
          <button type="button" className="btn btn-ghost" onClick={persist}>
            {savedFlash ? 'Saved' : 'Save'}
          </button>
          <button type="button" className="btn btn-primary" onClick={printCv}>
            Print / PDF
          </button>
        </div>
      </div>

      <div className="cv-workspace">
        <div className="cv-editor vivid-card ai-card">
          <p className="break-kicker">Basics</p>
          <div className="cv-grid-2">
            <Field label="Full name" value={cv.basics.fullName} onChange={(v) => setBasics('fullName', v)} />
            <Field label="Title" value={cv.basics.title} onChange={(v) => setBasics('title', v)} placeholder="e.g. SDET" />
            <Field label="Email" value={cv.basics.email} onChange={(v) => setBasics('email', v)} />
            <Field label="Phone" value={cv.basics.phone} onChange={(v) => setBasics('phone', v)} />
            <Field label="Location" value={cv.basics.location} onChange={(v) => setBasics('location', v)} />
            <Field label="Website" value={cv.basics.website} onChange={(v) => setBasics('website', v)} />
            <Field label="LinkedIn" value={cv.basics.linkedin} onChange={(v) => setBasics('linkedin', v)} />
          </div>
          <Field
            label="Summary"
            multiline
            value={cv.basics.summary}
            onChange={(v) => setBasics('summary', v)}
            placeholder="2–4 lines on impact and focus"
          />
          <Field
            label="Skills (comma-separated)"
            value={skillsText}
            onChange={setSkillsText}
            placeholder="Playwright, pytest, Python"
          />

          <div className="cv-section-head">
            <p className="break-kicker">Experience</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => patch({ ...cv, experience: [...cv.experience, newExperience()] })}
            >
              Add job
            </button>
          </div>
          {cv.experience.map((job, idx) => (
            <div key={job.id} className="cv-editor-block">
              <div className="cv-section-head">
                <strong>Job {idx + 1}</strong>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() =>
                    patch({ ...cv, experience: cv.experience.filter((j) => j.id !== job.id) })
                  }
                >
                  Remove
                </button>
              </div>
              <div className="cv-grid-2">
                <Field
                  label="Role"
                  value={job.role}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      experience: cv.experience.map((j) => (j.id === job.id ? { ...j, role: v } : j)),
                    })
                  }
                />
                <Field
                  label="Company"
                  value={job.company}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      experience: cv.experience.map((j) =>
                        j.id === job.id ? { ...j, company: v } : j,
                      ),
                    })
                  }
                />
                <Field
                  label="Start"
                  value={job.start}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      experience: cv.experience.map((j) => (j.id === job.id ? { ...j, start: v } : j)),
                    })
                  }
                />
                <Field
                  label="End"
                  value={job.end}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      experience: cv.experience.map((j) => (j.id === job.id ? { ...j, end: v } : j)),
                    })
                  }
                />
                <Field
                  label="Location"
                  value={job.location}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      experience: cv.experience.map((j) =>
                        j.id === job.id ? { ...j, location: v } : j,
                      ),
                    })
                  }
                />
              </div>
              <Field
                label="Bullets (one per line)"
                multiline
                value={job.bullets}
                onChange={(v) =>
                  patch({
                    ...cv,
                    experience: cv.experience.map((j) => (j.id === job.id ? { ...j, bullets: v } : j)),
                  })
                }
              />
            </div>
          ))}

          <div className="cv-section-head">
            <p className="break-kicker">Education</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => patch({ ...cv, education: [...cv.education, newEducation()] })}
            >
              Add school
            </button>
          </div>
          {cv.education.map((ed) => (
            <div key={ed.id} className="cv-editor-block">
              <div className="cv-section-head">
                <strong>Education</strong>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() =>
                    patch({ ...cv, education: cv.education.filter((e) => e.id !== ed.id) })
                  }
                >
                  Remove
                </button>
              </div>
              <div className="cv-grid-2">
                <Field
                  label="School"
                  value={ed.school}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      education: cv.education.map((e) => (e.id === ed.id ? { ...e, school: v } : e)),
                    })
                  }
                />
                <Field
                  label="Degree"
                  value={ed.degree}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      education: cv.education.map((e) => (e.id === ed.id ? { ...e, degree: v } : e)),
                    })
                  }
                />
                <Field
                  label="Year"
                  value={ed.year}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      education: cv.education.map((e) => (e.id === ed.id ? { ...e, year: v } : e)),
                    })
                  }
                />
                <Field
                  label="Location"
                  value={ed.location}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      education: cv.education.map((e) =>
                        e.id === ed.id ? { ...e, location: v } : e,
                      ),
                    })
                  }
                />
              </div>
              <Field
                label="Detail"
                value={ed.detail}
                onChange={(v) =>
                  patch({
                    ...cv,
                    education: cv.education.map((e) => (e.id === ed.id ? { ...e, detail: v } : e)),
                  })
                }
              />
            </div>
          ))}

          <div className="cv-section-head">
            <p className="break-kicker">Projects</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => patch({ ...cv, projects: [...cv.projects, newProject()] })}
            >
              Add project
            </button>
          </div>
          {cv.projects.map((p) => (
            <div key={p.id} className="cv-editor-block">
              <div className="cv-section-head">
                <strong>Project</strong>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() =>
                    patch({ ...cv, projects: cv.projects.filter((x) => x.id !== p.id) })
                  }
                >
                  Remove
                </button>
              </div>
              <div className="cv-grid-2">
                <Field
                  label="Name"
                  value={p.name}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      projects: cv.projects.map((x) => (x.id === p.id ? { ...x, name: v } : x)),
                    })
                  }
                />
                <Field
                  label="Link"
                  value={p.link}
                  onChange={(v) =>
                    patch({
                      ...cv,
                      projects: cv.projects.map((x) => (x.id === p.id ? { ...x, link: v } : x)),
                    })
                  }
                />
              </div>
              <Field
                label="Detail"
                multiline
                value={p.detail}
                onChange={(v) =>
                  patch({
                    ...cv,
                    projects: cv.projects.map((x) => (x.id === p.id ? { ...x, detail: v } : x)),
                  })
                }
              />
            </div>
          ))}
        </div>

        <div className="cv-preview-pane">
          <p className="break-kicker cv-preview-label">Live preview</p>
          <div className="cv-preview-scroll">
            <CvPreview cv={preview} />
          </div>
        </div>
      </div>
    </div>
  )
}
