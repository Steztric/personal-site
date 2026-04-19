'use client'

import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Python',
    'Full Stack',
    'Web Design'
  ]

  return (
    <main className={styles.main}>
      {/* Holographic Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.titleGlow}>&lt;</span>
              DEVELOPER
              <span className={styles.titleGlow}>/&gt;</span>
            </h1>
            <div className={styles.subtitle}>Welcome to the Future</div>
          </div>
          
          {/* Animated Lines */}
          <div className={styles.animatedLines}>
            <div className={styles.line}></div>
            <div className={styles.line} style={{ animationDelay: '0.2s' }}></div>
            <div className={styles.line} style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* About Section */}
        <section className={`${styles.section} ${mounted ? styles.fadeIn : ''}`}>
          <div className={styles.sectionHeader}>
            <h2>&gt; ABOUT ME</h2>
            <div className={styles.glowLine}></div>
          </div>
          
          <div className={styles.aboutContent}>
            <div className={styles.hologramBox}>
              <div className={styles.boxContent}>
                <p className={styles.bioText}>
                  I am a passionate full-stack developer with a keen eye for crafting 
                  beautiful, functional digital experiences. My expertise spans modern 
                  web technologies, and I'm dedicated to building applications that are 
                  not only visually stunning but also performant and user-centric.
                </p>
                
                <p className={styles.bioText}>
                  I thrive in collaborative environments where innovation meets execution. 
                  Whether it's prototyping a new concept or scaling an existing platform, 
                  I bring creativity and technical rigor to every project.
                </p>
              </div>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>∞</div>
                <div className={styles.statLabel}>Ideas</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Commitment</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Learning</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`${styles.section} ${mounted ? styles.fadeIn : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.sectionHeader}>
            <h2>&gt; TECHNICAL ARSENAL</h2>
            <div className={styles.glowLine}></div>
          </div>
          
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={styles.skillTag}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: hoveredSkill === null || hoveredSkill === skill ? 1 : 0.3,
                  transform: hoveredSkill === skill ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <span className={styles.skillBracket}>[</span>
                {skill}
                <span className={styles.skillBracket}>]</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={`${styles.section} ${mounted ? styles.fadeIn : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className={styles.sectionHeader}>
            <h2>&gt; INITIATE CONNECTION</h2>
            <div className={styles.glowLine}></div>
          </div>
          
          <div className={styles.contactBox}>
            <p>Ready to collaborate or discuss new opportunities?</p>
            <button className={styles.ctaButton}>
              <span className={styles.buttonBracket}>&lt;&lt;</span>
              SEND MESSAGE
              <span className={styles.buttonBracket}>{'>>>'}</span>
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2026 NEURAL SYSTEMS | Rendering Your Reality</p>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>GitHub</a>
            <a href="#" className={styles.footerLink}>LinkedIn</a>
            <a href="#" className={styles.footerLink}>Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
