import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { meta } from '../data/portfolio'

const contactLinks = [
  { icon: '✉️', label: 'Email', sub: 'Preferred', value: meta.email, href: `mailto:${meta.email}`, bg: 'bg-accent/10' },
  { icon: '📱', label: meta.phone, sub: 'Delhi, India', value: meta.phone, href: `tel:${meta.phone}`, bg: 'bg-cyan-400/10' },
  { icon: '💼', label: 'LinkedIn', sub: 'Professional Profile', value: meta.linkedin, href: meta.linkedin, bg: 'bg-blue-500/10' },
  { icon: '⌥',  label: 'GitHub', sub: 'Code Repositories', value: meta.github, href: meta.github, bg: 'bg-white/5' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { setStatus('error:Please fill in all required fields.'); return }
    if (!form.email.includes('@')) { setStatus('error:Enter a valid email address.'); return }
    if (!meta.formspreeId) { setStatus('error:Formspree not set up yet. Add formspreeId in src/data/portfolio.js'); return }

    setLoading(true)
    try {
      const res = await fetch(`https://formspree.io/f/${meta.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Portfolio contact from ${form.name}` }),
      })
      if (res.ok) {
        setStatus('success:Message sent! I will reply soon.')
        setForm({ name: '', email: '', company: '', message: '' })
      } else throw new Error()
    } catch {
      setStatus('error:Something went wrong. Email me directly.')
    }
    setLoading(false)
  }

  const isError = status.startsWith('error:')
  const isSuccess = status.startsWith('success:')
  const msg = status.split(':')[1] || ''

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-t2 text-base mb-14">Open to internships, collaborations, and data conversations</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* left */}
          <motion.div initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
            <p className="text-t2 text-[15px] leading-[1.8] mb-7">
              Actively seeking internships in{' '}
              <strong className="text-accent">Data Science</strong>,{' '}
              <strong className="text-cyan-400">ML Engineering</strong>,{' '}
              <strong className="text-violet-400">Data Engineering</strong>, and{' '}
              <strong className="text-green-400">AI/Analytics</strong>.
              Based in Delhi, open to remote.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((l, i) => (
                <a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-3.5 bg-surface border border-white/[0.07] rounded-xl hover:border-accent/25 hover:translate-x-1 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${l.bg}`}>{l.icon}</div>
                  <div>
                    <div className="text-[14px] font-medium text-t1">{l.label}</div>
                    <div className="text-[11px] text-t3 font-mono">{l.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* form */}
          <motion.div initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <form onSubmit={handleSubmit}
              className="bg-surface border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-4">
              {[
                { id: 'name',    label: 'Your Name',           type: 'text',  placeholder: 'Recruiter Name'         },
                { id: 'email',   label: 'Your Email',          type: 'email', placeholder: 'recruiter@company.com'  },
                { id: 'company', label: 'Company (optional)',  type: 'text',  placeholder: 'Google, Deloitte...'    },
              ].map(f => (
                <div key={f.id}>
                  <label className="block font-mono text-[11px] text-t3 uppercase tracking-wider mb-2">{f.label}</label>
                  <input type={f.type} value={form[f.id]} placeholder={f.placeholder}
                    onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                    className="w-full bg-bg-2 border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-t1 outline-none focus:border-accent/50 transition-colors placeholder-t3 font-sans" />
                </div>
              ))}
              <div>
                <label className="block font-mono text-[11px] text-t3 uppercase tracking-wider mb-2">Message</label>
                <textarea value={form.message} placeholder="Tell me about the role or opportunity..."
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  rows={4}
                  className="w-full bg-bg-2 border border-white/[0.07] rounded-lg px-4 py-3 text-[14px] text-t1 outline-none focus:border-accent/50 transition-colors placeholder-t3 font-sans resize-none" />
              </div>
              <button type="submit" disabled={loading}
                className="btn-primary justify-center py-3 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
              {msg && (
                <p className={`text-[12px] text-center font-mono ${isError ? 'text-pink-400' : 'text-green-400'}`}>
                  {isError ? '⚠ ' : '✓ '}{msg}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
