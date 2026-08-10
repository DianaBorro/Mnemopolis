import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // State to track the active page navigation
  const [currentPage, setCurrentPage] = useState('home')

  // Helper to render the mock page content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'memory':
        return (
            <section className="content-section">
              <h2>Memory Techniques / Técnicas de Memoria</h2>
              <p>Master the Mind Palace, Loci Method, and Spaced Repetition.</p>
            </section>
        )
      case 'blog':
        return (
            <section className="content-section">
              <h2>Blog & Articles</h2>
              <p>Read our latest posts about learning optimization and cognitive science.</p>
            </section>
        )
      case 'subjects':
        return (
            <section className="content-section">
              <h2>Subjects / Materias</h2>
              <p>Explore specialized tracks for Programming, Languages, Math, and Science.</p>
            </section>
        )
      case 'home':
      default:
        return (
            <section className="hero-section">
              <img src={heroImg} className="hero-banner" alt="Learning Hero" />
              <h1>Unlock Universal Learning</h1>
              <p>A polymath approach to mastering languages, code, and science through advanced memory techniques.</p>
              <button className="cta-btn" onClick={() => setCurrentPage('subjects')}>
                Start Learning
              </button>
            </section>
        )
    }
  }

  return (
      <div className="site-container">
        {/* Navigation Header */}
        <header className="site-header">
          <div className="logo-area">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <span className="brand-name">Mnemopolis</span>
          </div>
          <nav className="nav-links">
            <button
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button
                className={currentPage === 'memory' ? 'active' : ''}
                onClick={() => setCurrentPage('memory')}
            >
              Memory Techniques
            </button>
            <button
                className={currentPage === 'blog' ? 'active' : ''}
                onClick={() => setCurrentPage('blog')}
            >
              Blog
            </button>
            <button
                className={currentPage === 'subjects' ? 'active' : ''}
                onClick={() => setCurrentPage('subjects')}
            >
              Subjects
            </button>
          </nav>
        </header>

        {/* Main Dynamic Content Container */}
        <main className="main-content">
          {renderPageContent()}
        </main>
      </div>
  )
}

export default App
