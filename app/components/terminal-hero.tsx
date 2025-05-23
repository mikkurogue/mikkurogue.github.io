'use client'

import { useEffect, useState } from 'react'

const personalInfo = {
  name: 'Mikku',
  location: '🇫🇮 Finland',
  focus: 'Memory & type safety, developer experience & ergonomics',
  stack: ['Rust', 'TypeScript', 'Zig'],
  keyboard: 'Corne v4 custom split column staggered keyboard',
  switches: 'Leobog Graywood v3',
  mouse: 'Logitech MX Master 2S',
  headset: 'Logitech Pro X Wireless',
  links: {
    linkedin: 'https://linkedin.com/in/mrj-lindemans',
    github: 'https://github.com/mikkurogue'
  },
  profileImage: 'https://avatars.githubusercontent.com/u/5637842?s=400&u=bcd6af1eb202b61177b6f64ec4ba0e01267b3519&v=4'
}

export default function TerminalHero() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="terminal-control control-close"></div>
          <div className="terminal-control control-minimize"></div>
          <div className="terminal-control control-maximize"></div>
        </div>
        <div className="terminal-title">mikku@archlinux:~</div>
      </div>
      
      <div className="terminal-content">
        <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <div>
            <span className="prompt">mikku@archlinux</span>:
            <span className="command">~$ mikkurogue --about</span>
            <span className={`cursor ${showCursor ? '' : 'opacity-0'}`} style={{ opacity: showCursor ? 1 : 0 }}>█</span>
          </div>
          <br />
          
          <div><strong>Name:</strong> {personalInfo.name}</div>
          <br />
          
          <div>
            <strong>Stack:</strong>{' '}
            {personalInfo.stack.map((tech, index) => (
              <span key={tech}>
                <a 
                  href={
                    tech === 'Rust' ? 'https://www.rust-lang.org/' :
                    tech === 'TypeScript' ? 'https://www.typescriptlang.org/' :
                    tech === 'Zig' ? 'https://ziglang.org/' : '#'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`tag ${tech.toLowerCase()}`}
                >
                  {tech}
                </a>
                {index < personalInfo.stack.length - 1 && ' '}
              </span>
            ))}
          </div>
          <div><strong>Focus:</strong> {personalInfo.focus}</div>
          <div><strong>Location:</strong> {personalInfo.location}</div>
          <br />
          
          <div><strong>Keyboard:</strong> {personalInfo.keyboard}</div>
          <div><strong>Switches:</strong> {personalInfo.switches}</div>
          <div><strong>Mouse:</strong> {personalInfo.mouse}</div>
          <div><strong>Headset:</strong> {personalInfo.headset}</div>
          <br />
          
          <div>
            <strong>Links:</strong>{' '}
            <a 
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-bright)' }}
            >
              LinkedIn
            </a>{' '}
            <a 
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-bright)' }}
            >
              Github
            </a>
          </div>
        </div>
        
        <img 
          src={personalInfo.profileImage}
          alt="Profile picture of Mikku"
          className="profile-image"
        />
      </div>
    </section>
  )
}