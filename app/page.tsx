'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Download,
  Menu,
  X,
  Copy,
  Check,
  ChevronRight,
  Mail
} from 'lucide-react';

export default function LptRcPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredVertex, setHoveredVertex] = useState<string | null>(null);
  const [copiedVertex, setCopiedVertex] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [cubeDisplayMode, setCubeDisplayMode] = useState<'both' | 'names' | 'vectors'>('both');
  const [activePilotPhase, setActivePilotPhase] = useState<number>(1);

  const handleSelectPilotPhase = (phaseId: number, targetCardId?: string, scrollToCard = false) => {
    setActivePilotPhase(phaseId);
    if (scrollToCard && targetCardId && typeof document !== 'undefined') {
      const el = document.getElementById(targetCardId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-[var(--color-teal)]', 'transition-all');
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-[var(--color-teal)]');
        }, 2000);
      }
    }
  };

  const handleCopyCoordinate = (vector: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(vector).then(() => {
        setCopiedVertex(id);
        setCopiedText(vector);
        setTimeout(() => {
          setCopiedVertex(null);
          setCopiedText(null);
        }, 2200);
      }).catch(() => {
        setCopiedVertex(id);
        setCopiedText(vector);
        setTimeout(() => {
          setCopiedVertex(null);
          setCopiedText(null);
        }, 2200);
      });
    } else {
      setCopiedVertex(id);
      setCopiedText(vector);
      setTimeout(() => {
        setCopiedVertex(null);
        setCopiedText(null);
      }, 2200);
    }
  };

  const CONTACT_EMAIL = 'sergey.golubkov@innerdialectica.com';
  const CONCEPT_NOTE_PDF = '/assets/LPT_RC_University_Concept_Note_v0.3.pdf';
  const CONCEPT_NOTE_HTML = '/assets/LPT_RC_University_Concept_Note_v0.3.html';
  const CV_PDF = '/assets/Sergey_Golubkov_Academic_CV.pdf';
  const ORCID_URL = 'https://orcid.org/0000-0002-5288-7817';
  const MANUSCRIPT_DOI = 'https://doi.org/10.5281/zenodo.22727605';

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)] flex flex-col selection:bg-[#206266] selection:text-white">
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* GitHub Pages Static Announcement Bar */}
      <aside aria-label="GitHub Pages static bundle notification" className="bg-[#112238] text-slate-200 text-xs py-2 px-4 border-b border-slate-700">
        <div className="max-w-[1140px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#206266] text-white px-2 py-0.5 rounded font-mono font-bold tracking-wide uppercase text-[10px]">
              GitHub Pages Ready
            </span>
            <span>
              Pure static HTML5, CSS &amp; JS at repository root (<code className="text-teal-300">index.html</code>). No build required.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/lpt-research-collaborative.zip"
              download="lpt-research-collaborative.zip"
              className="inline-flex items-center gap-1.5 text-teal-300 hover:text-white underline font-semibold"
              title="Download pure static GitHub Pages distribution"
            >
              <Download className="w-3.5 h-3.5" />
              Download Static ZIP (GitHub Pages)
            </a>
          </div>
        </div>
      </aside>

      {/* Header with 6-item navigation */}
      <header className="site-header" role="banner" id="site-header">
        <div className="container header-inner">
          <a href="#hero" className="brand-wrapper" id="page-brand-link">
            <div className="brand-lockup">
              <span className="brand-wordmark">LPT-RC</span>
              <span className="brand-divider" aria-hidden="true" />
              <div className="brand-names">
                <span className="brand-primary-name">Language Personality Theory</span>
                <span className="brand-secondary-name">Research Collaborative</span>
              </div>
            </div>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="page-primary-nav"
            aria-label="Toggle navigation menu"
            id="page-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>Menu</span>
          </button>

          {/* Primary Navigation - 6 Items */}
          <nav
            className={`primary-nav ${mobileMenuOpen ? 'is-open' : ''}`}
            id="page-primary-nav"
            aria-label="Primary navigation"
          >
            <ul className="nav-links">
              <li>
                <a
                  href="#questions"
                  className="nav-link"
                  id="link-questions"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Research Question
                </a>
              </li>
              <li>
                <a
                  href="#model"
                  className="nav-link"
                  id="link-model"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Model
                </a>
              </li>
              <li>
                <a
                  href="#partnership"
                  className="nav-link"
                  id="link-partnership"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Partnership
                </a>
              </li>
              <li>
                <a
                  href="#pilot"
                  className="nav-link"
                  id="link-pilot"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pilot
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="nav-link"
                  id="link-publications"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link"
                  id="link-contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="btn btn-sm btn-outline header-cta-btn"
              id="page-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discuss a Partnership
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" role="main" className="flex-1">
        {/* 1. Hero Section */}
        <section className="section hero-section" id="hero" aria-labelledby="hero-title">
          <div className="container">
            <span className="section-eyebrow" id="hero-badge">ACADEMIC PARTNERSHIP INITIATIVE</span>
            <h1 id="hero-title" className="text-3xl md:text-5xl font-serif text-[var(--color-navy)] mb-3 leading-tight tracking-tight">
              Operationalising and Testing a Generative Architecture of Personality
            </h1>
            <p className="hero-subtitle">
              A proposed Russian–English pilot of eight manifestations, three coordinates, and 28 structural relations
            </p>

            {/* Authoritative Status Line */}
            <div className="mt-4 mb-5">
              <span className="status-badge-compact font-semibold" style={{ fontSize: '0.9375rem', padding: '0.45rem 1rem', display: 'inline-block', backgroundColor: '#e8f2f3', color: '#15464a', border: '1px solid #b6d7d9', borderRadius: '4px' }}>
                Founder-led research initiative · University Academic Co-Lead sought · Pilot subject to joint design and funding
              </span>
            </div>

            <div className="positioning-statement" id="positioning-quote">
              “Can the proposed LPT distinctions be independently identified and tested across Russian and English, including against plausible alternative explanations?”
            </div>

            <p className="hero-intro">
              Language Personality Theory Research Collaborative (LPT-RC) invites a university-based Academic Co-Lead to co-design and host an empirical pilot translating a specified theoretical architecture into independent bilingual operationalisations and a preregisterable test. The project asks whether LPT’s upstream structure is psychologically discriminable before resources are committed to downstream trait, developmental, embodied, or applied claims.
            </p>

            <div className="btn-group">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Scientific%20Scoping%20Meeting`}
                className="btn btn-primary"
                id="hero-meeting-action"
              >
                Request a Scientific Scoping Meeting
              </a>

              <a
                href={MANUSCRIPT_DOI}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary inline-flex items-center gap-1.5"
                id="hero-zenodo-link"
              >
                <span>Read the 2026 Scientific Manuscript</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={CONCEPT_NOTE_PDF}
                download="LPT_RC_University_Concept_Note_v0.3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline inline-flex items-center gap-1.5"
                id="hero-concept-link"
                title="Download University Concept Note v0.3 (PDF)"
              >
                <Download className="w-3.5 h-3.5 opacity-80" />
                <span>Download University Concept Note v0.3</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Research Questions Section */}
        <section className="section" id="questions" aria-labelledby="questions-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Scientific Enquiry</span>
              <h2 id="questions-heading">The central research question</h2>
              <p>
                Can the proposed structural distinctions of Language Personality Theory be operationalised, measured, and empirically corroborated in natural language and psychological data across Russian and English?
              </p>
            </div>

            <div className="grid-2" style={{ marginBottom: '2rem' }}>
              <div className="academic-card">
                <span className="font-mono text-xs font-bold text-[var(--color-teal)] uppercase">Question 01 · Manifestations</span>
                <h4 className="mt-1 mb-2 font-serif text-lg text-[var(--color-navy)]">Construct discriminability</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-0">
                  Are the eight proposed manifestations (Needs, Perception, Emotions, Actions, Values, Thought, Evaluation, and Speech) empirically discriminable from one another, and can independent judges identify them reliably in natural language production?
                </p>
              </div>

              <div className="academic-card">
                <span className="font-mono text-xs font-bold text-[var(--color-teal)] uppercase">Question 02 · Coordinates</span>
                <h4 className="mt-1 mb-2 font-serif text-lg text-[var(--color-navy)]">Coordinate recovery</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-0">
                  Do the three proposed binary coordinates (Subjective–Objective, Natural–Social, and Inter–Intrapersonal) emerge as robust, recoverable structuring dimensions across bilingual Russian–English text and behavioral data?
                </p>
              </div>

              <div className="academic-card">
                <span className="font-mono text-xs font-bold text-[var(--color-teal)] uppercase">Question 03 · Structural Relations</span>
                <h4 className="mt-1 mb-2 font-serif text-lg text-[var(--color-navy)]">Relational distinctiveness</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-0">
                  Do the 28 pairwise relations correspond to psychologically distinct dialectical tensions or contradiction classes, or are they better explained by parsimonious alternatives such as valence, arousal, or conventional trait axes?
                </p>
              </div>

              <div className="academic-card">
                <span className="font-mono text-xs font-bold text-[var(--color-teal)] uppercase">Question 04 · Cross-Linguistic Stability</span>
                <h4 className="mt-1 mb-2 font-serif text-lg text-[var(--color-navy)]">Bilingual invariance</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-0">
                  Do operationalised indicators demonstrate structural invariance across Russian and English, or are observed distinctions driven primarily by idiosyncratic lexical conventions and translation artifacts?
                </p>
              </div>
            </div>

            <div className="derivation-callout border-l-[var(--color-navy)]" id="clarification-panel">
              <p className="text-[0.9375rem] mb-0">
                <strong>Clarification:</strong> In this initiative, <em>Language Personality Theory</em> refers specifically to Sergey V. Golubkov’s theoretical architecture and must not be confused with other linguistic uses of the phrase “language personality”.
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Model Section */}
        <section className="section section-tinted" id="model" aria-labelledby="model-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Candidate Architecture</span>
              <h2 id="model-heading">The theoretical model: Personality Cube</h2>
              <p>
                Language Personality Theory proposes that psychological functioning is structured through eight manifestations arranged at the vertices of a 3-dimensional cube defined by three binary polar coordinates.
              </p>
            </div>

            {/* Visual Sequence */}
            <div className="sequence-flow mb-6" aria-label="Visual derivation sequence">
              <div className="flow-step">
                <span className="flow-step-num">Step 01</span>
                <div className="flow-step-title">Three binary coordinates</div>
                <div className="flow-step-desc">Subjective–Objective · Natural–Social · Inter–Intrapersonal</div>
              </div>
              <div className="flow-step">
                <span className="flow-step-num">Step 02</span>
                <div className="flow-step-title">Eight proposed manifestations</div>
                <div className="flow-step-desc">Candidate loci at the 8 cube vertices</div>
              </div>
              <div className="flow-step">
                <span className="flow-step-num">Step 03</span>
                <div className="flow-step-title">28 formal relations</div>
                <div className="flow-step-desc">Pairwise geometric combinations (8 × 7 / 2 = 28)</div>
              </div>
              <div className="flow-step">
                <span className="flow-step-num">Step 04</span>
                <div className="flow-step-title">Dimensional breakdown</div>
                <div className="flow-step-desc">12 1D edges + 12 2D face diagonals + 4 3D space diagonals</div>
              </div>
            </div>

            {/* Authoritative Epistemological Distinction Callout */}
            <div className="derivation-callout" id="derivation-statement">
              <div className="derivation-callout-title">Formal derivation is not empirical validation · Three distinct claims</div>
              <p className="mb-2">
                The mathematical count of 28 pairwise relations and the 1–3–3–1 structural distance pattern are formal geometric properties of the Personality Cube. LPT-RC strictly distinguishes three separate claims:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 list-disc pl-4 mb-0">
                <li><strong>Eight manifestations:</strong> Proposed functional components of the candidate personality architecture arranged across three bipolar coordinates.</li>
                <li><strong>28 pairwise structural relations:</strong> Formal geometric combinations (12 edges, 12 face diagonals, 4 space diagonals); whether they correspond to psychologically distinguishable relations or contradiction classes is an untested hypothesis.</li>
                <li><strong>Generativity III &amp; eight idealised configurations:</strong> Generativity III proposes eight idealised whole-person configurations (one per focal manifestation) with a 1–3–3–1 structural-distance pattern. The proposed relationship between structural distance and psychological accessibility is a separate, testable hypothesis—Cube geometry alone does not establish an accessibility ordering or prove that real people fall into eight discrete personality classes.</li>
              </ul>
            </div>

            {/* Personality Cube Diagram Component */}
            <div className="cube-visual-wrapper mt-6" id="cube-diagram">
              <div className="text-center mb-3">
                <span className="inline-block text-[11px] font-mono font-bold tracking-wider text-[var(--color-teal)] uppercase bg-[var(--color-teal-light)] px-2.5 py-1 rounded">
                  AUTHENTIC THEORETICAL GEOMETRY
                </span>
                <h4 className="text-[var(--color-navy)] mt-1 mb-1 font-semibold text-lg">
                  Formal Coordinate Geometry (The Personality Cube)
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] max-w-xl mx-auto">
                  Oblique parallel projection schema from the 2026 scientific master. Frontal &amp; dorsal squares illustrate 8 psychological manifestations defined by 3 orthogonal binary axes.
                </p>
              </div>

              {/* View Display Mode Toggle Pill */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-3 text-xs">
                <span className="text-[var(--color-text-light)] font-medium">Display mode:</span>
                <div className="inline-flex rounded-md border border-[var(--color-border)] bg-white p-0.5 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setCubeDisplayMode('both')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      cubeDisplayMode === 'both'
                        ? 'bg-[var(--color-teal)] text-white'
                        : 'text-[var(--color-navy)] hover:bg-slate-100'
                    }`}
                  >
                    Manifestations + Vectors
                  </button>
                  <button
                    type="button"
                    onClick={() => setCubeDisplayMode('names')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      cubeDisplayMode === 'names'
                        ? 'bg-[var(--color-teal)] text-white'
                        : 'text-[var(--color-navy)] hover:bg-slate-100'
                    }`}
                  >
                    Canonical Paper View (Names Only)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCubeDisplayMode('vectors')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      cubeDisplayMode === 'vectors'
                        ? 'bg-[var(--color-teal)] text-white'
                        : 'text-[var(--color-navy)] hover:bg-slate-100'
                    }`}
                  >
                    Vectors Only
                  </button>
                </div>
              </div>

              {/* Interactive Status & Feedback Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 px-3 py-1.5 rounded-md bg-white border border-[var(--color-border)] shadow-xs text-xs font-mono">
                {copiedText ? (
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied <strong>{copiedText}</strong> to clipboard</span>
                  </div>
                ) : hoveredVertex ? (
                  <div className="flex items-center gap-1.5 text-[var(--color-teal)] font-medium">
                    <Copy className="w-3.5 h-3.5 text-[var(--color-teal)]" />
                    <span>
                      {(() => {
                        const vMap: Record<string, { locus: string; vector: string; desc: string }> = {
                          'v-needs': { locus: 'Needs', vector: '(0, 0, 0)', desc: 'Origin: Natural · Subjective · Interpersonal' },
                          'v-perception': { locus: 'Perception', vector: '(1, 0, 0)', desc: 'Natural · Objective · Interpersonal' },
                          'v-values': { locus: 'Values', vector: '(0, 1, 0)', desc: 'Social · Subjective · Interpersonal' },
                          'v-thought': { locus: 'Thought', vector: '(1, 1, 0)', desc: 'Social · Objective · Interpersonal' },
                          'v-emotions': { locus: 'Emotions', vector: '(0, 0, 1)', desc: 'Natural · Subjective · Intrapersonal' },
                          'v-actions': { locus: 'Actions', vector: '(1, 0, 1)', desc: 'Natural · Objective · Intrapersonal' },
                          'v-evaluation': { locus: 'Evaluation', vector: '(0, 1, 1)', desc: 'Social · Subjective · Intrapersonal' },
                          'v-speech': { locus: 'Speech', vector: '(1, 1, 1)', desc: 'Social · Objective · Intrapersonal' },
                        };
                        const item = vMap[hoveredVertex];
                        return item ? (
                          <>
                            <strong>{item.locus}</strong> {item.vector} — {item.desc}
                          </>
                        ) : null;
                      })()}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[var(--color-text-light)]">
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Hover vertices to inspect axes · Click any vertex to copy</span>
                  </div>
                )}
              </div>

              {/* Cube SVG Rendering */}
              <div className="cube-svg-container relative select-none">
                <svg viewBox="0 0 740 440" width="100%" height="auto" role="img" aria-labelledby="cube-title cube-desc">
                  <title id="cube-title">Authentic Personality Cube Candidate Architecture Schema</title>
                  <desc id="cube-desc">
                    A canonical oblique parallel projection of the Personality Cube showing 8 psychological manifestations and 3 orthogonal coordinate axes.
                  </desc>

                  {/* 1. Dashed Hidden Internal Edges (Meeting at Needs / Origin) */}
                  <g strokeLinecap="round">
                    <line
                      x1="290" y1="270" x2="290" y2="80"
                      stroke={hoveredVertex === 'v-needs' || hoveredVertex === 'v-values' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-needs' || hoveredVertex === 'v-values' ? 3.5 : 2.5}
                      strokeDasharray="7,5"
                    />
                    <line
                      x1="290" y1="270" x2="570" y2="270"
                      stroke={hoveredVertex === 'v-needs' || hoveredVertex === 'v-perception' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-needs' || hoveredVertex === 'v-perception' ? 3.5 : 2.5}
                      strokeDasharray="7,5"
                    />
                    <line
                      x1="290" y1="270" x2="160" y2="365"
                      stroke={hoveredVertex === 'v-needs' || hoveredVertex === 'v-emotions' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-needs' || hoveredVertex === 'v-emotions' ? 3.5 : 2.5}
                      strokeDasharray="7,5"
                    />
                  </g>

                  {/* 2. Red Axis Labels along the 3 dashed orthogonal axes */}
                  <g fontFamily="Georgia, Cambria, serif" fontStyle="normal" fontSize="13.5" fontWeight="600" fill="#b91c1c">
                    <text x="276" y="175" textAnchor="middle" transform="rotate(-90, 276, 175)" letterSpacing="0.02em">
                      natural - social
                    </text>
                    <text x="430" y="254" textAnchor="middle" letterSpacing="0.02em">
                      subjective - objective
                    </text>
                    <text x="225" y="308" textAnchor="middle" transform="rotate(-36.16, 225, 308)" letterSpacing="0.02em">
                      inter - intrapersonal
                    </text>
                  </g>

                  {/* 3. Solid External Edges (9 edges) */}
                  <g strokeLinecap="round" strokeLinejoin="round">
                    <line
                      x1="160" y1="175" x2="440" y2="175"
                      stroke={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-speech' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-speech' ? 3.8 : 2.6}
                    />
                    <line
                      x1="440" y1="175" x2="440" y2="365"
                      stroke={hoveredVertex === 'v-speech' || hoveredVertex === 'v-actions' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-speech' || hoveredVertex === 'v-actions' ? 3.8 : 2.6}
                    />
                    <line
                      x1="440" y1="365" x2="160" y2="365"
                      stroke={hoveredVertex === 'v-actions' || hoveredVertex === 'v-emotions' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-actions' || hoveredVertex === 'v-emotions' ? 3.8 : 2.6}
                    />
                    <line
                      x1="160" y1="365" x2="160" y2="175"
                      stroke={hoveredVertex === 'v-emotions' || hoveredVertex === 'v-evaluation' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-emotions' || hoveredVertex === 'v-evaluation' ? 3.8 : 2.6}
                    />
                    <line
                      x1="290" y1="80" x2="570" y2="80"
                      stroke={hoveredVertex === 'v-values' || hoveredVertex === 'v-thought' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-values' || hoveredVertex === 'v-thought' ? 3.8 : 2.6}
                    />
                    <line
                      x1="570" y1="80" x2="570" y2="270"
                      stroke={hoveredVertex === 'v-thought' || hoveredVertex === 'v-perception' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-thought' || hoveredVertex === 'v-perception' ? 3.8 : 2.6}
                    />
                    <line
                      x1="160" y1="175" x2="290" y2="80"
                      stroke={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-values' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-values' ? 3.8 : 2.6}
                    />
                    <line
                      x1="440" y1="175" x2="570" y2="80"
                      stroke={hoveredVertex === 'v-speech' || hoveredVertex === 'v-thought' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-speech' || hoveredVertex === 'v-thought' ? 3.8 : 2.6}
                    />
                    <line
                      x1="440" y1="365" x2="570" y2="270"
                      stroke={hoveredVertex === 'v-actions' || hoveredVertex === 'v-perception' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-actions' || hoveredVertex === 'v-perception' ? 3.8 : 2.6}
                    />
                  </g>

                  {/* 4. Eight Interactive Vertices */}
                  {[
                    { id: 'v-values', locus: 'Values', vector: '(0, 1, 0)', cx: 290, cy: 80, textX: 272, textY: 64, textAnchor: 'end' as const, desc: 'Social · Subjective · Interpersonal' },
                    { id: 'v-thought', locus: 'Thought', vector: '(1, 1, 0)', cx: 570, cy: 80, textX: 588, textY: 84, textAnchor: 'start' as const, desc: 'Social · Objective · Interpersonal' },
                    { id: 'v-evaluation', locus: 'Evaluation', vector: '(0, 1, 1)', cx: 160, cy: 175, textX: 142, textY: 180, textAnchor: 'end' as const, desc: 'Social · Subjective · Intrapersonal' },
                    { id: 'v-speech', locus: 'Speech', vector: '(1, 1, 1)', cx: 440, cy: 175, textX: 458, textY: 180, textAnchor: 'start' as const, desc: 'Social · Objective · Intrapersonal' },
                    { id: 'v-needs', locus: 'Needs', vector: '(0, 0, 0)', cx: 290, cy: 270, textX: 272, textY: 258, textAnchor: 'end' as const, desc: 'Origin · Natural · Subjective · Interpersonal' },
                    { id: 'v-perception', locus: 'Perception', vector: '(1, 0, 0)', cx: 570, cy: 270, textX: 588, textY: 274, textAnchor: 'start' as const, desc: 'Natural · Objective · Interpersonal' },
                    { id: 'v-emotions', locus: 'Emotions', vector: '(0, 0, 1)', cx: 160, cy: 365, textX: 142, textY: 370, textAnchor: 'end' as const, desc: 'Natural · Subjective · Intrapersonal' },
                    { id: 'v-actions', locus: 'Actions', vector: '(1, 0, 1)', cx: 440, cy: 365, textX: 458, textY: 378, textAnchor: 'start' as const, desc: 'Natural · Objective · Intrapersonal' },
                  ].map((v) => {
                    const isHovered = hoveredVertex === v.id;
                    const isCopied = copiedVertex === v.id;
                    const copyStr = cubeDisplayMode === 'names' ? v.locus : cubeDisplayMode === 'vectors' ? v.vector : `${v.locus} ${v.vector}`;

                    return (
                      <g
                        key={v.id}
                        id={`cube-${v.id}`}
                        className="cursor-pointer group outline-none"
                        role="button"
                        tabIndex={0}
                        aria-label={`${v.locus} vertex, formal coordinate vector ${v.vector}, ${v.desc}. Click to copy.`}
                        onMouseEnter={() => setHoveredVertex(v.id)}
                        onMouseLeave={() => setHoveredVertex(null)}
                        onClick={() => handleCopyCoordinate(copyStr, v.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleCopyCoordinate(copyStr, v.id);
                          }
                        }}
                      >
                        <circle cx={v.cx} cy={v.cy} r={22} fill="transparent" />
                        {isHovered && (
                          <circle cx={v.cx} cy={v.cy} r={13} fill="none" stroke="#206266" strokeWidth={2.5} strokeOpacity={0.65} />
                        )}
                        <circle
                          cx={v.cx}
                          cy={v.cy}
                          r={isHovered ? 8 : 7}
                          fill={isCopied ? '#059669' : isHovered ? '#206266' : '#ffffff'}
                          stroke={isCopied ? '#059669' : '#112238'}
                          strokeWidth={isHovered ? 3 : 2.6}
                          className="transition-all duration-150"
                        />
                        <text x={v.textX} y={v.textY} textAnchor={v.textAnchor} className="transition-all duration-150 select-none">
                          {cubeDisplayMode === 'vectors' ? (
                            <tspan fontFamily="ui-monospace, monospace" fontSize={isHovered || isCopied ? '13' : '12'} fontWeight={isHovered || isCopied ? '700' : '600'} fill={isCopied ? '#047857' : isHovered ? '#206266' : '#112238'}>
                              {isCopied ? '✓ Copied' : v.vector}
                            </tspan>
                          ) : cubeDisplayMode === 'names' ? (
                            <tspan fontFamily="Georgia, Cambria, serif" fontSize={isHovered || isCopied ? '18' : '17'} fontWeight={isHovered || isCopied ? '700' : '600'} fill={isCopied ? '#047857' : isHovered ? '#206266' : '#112238'}>
                              {isCopied ? `✓ ${v.locus}` : v.locus}
                            </tspan>
                          ) : (
                            <>
                              <tspan fontFamily="Georgia, Cambria, serif" fontSize={isHovered || isCopied ? '17' : '16'} fontWeight={isHovered || isCopied ? '700' : '600'} fill={isCopied ? '#047857' : isHovered ? '#206266' : '#112238'}>
                                {isCopied ? `✓ ${v.locus}` : v.locus}
                              </tspan>
                              <tspan dx="6" fontFamily="ui-monospace, monospace" fontSize="11.5" fontWeight="600" fill={isCopied ? '#047857' : isHovered ? '#206266' : '#64748b'}>
                                {v.vector}
                              </tspan>
                            </>
                          )}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Quick Copy Row */}
              <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex flex-wrap items-center justify-center gap-1.5 text-xs">
                <span className="text-[var(--color-text-light)] font-mono text-[11px] mr-1">Quick copy:</span>
                {[
                  { id: 'v-needs', locus: 'Needs', vector: '(0, 0, 0)' },
                  { id: 'v-perception', locus: 'Perception', vector: '(1, 0, 0)' },
                  { id: 'v-values', locus: 'Values', vector: '(0, 1, 0)' },
                  { id: 'v-thought', locus: 'Thought', vector: '(1, 1, 0)' },
                  { id: 'v-emotions', locus: 'Emotions', vector: '(0, 0, 1)' },
                  { id: 'v-actions', locus: 'Actions', vector: '(1, 0, 1)' },
                  { id: 'v-evaluation', locus: 'Evaluation', vector: '(0, 1, 1)' },
                  { id: 'v-speech', locus: 'Speech', vector: '(1, 1, 1)' }
                ].map((item) => {
                  const label = `${item.locus} ${item.vector}`;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleCopyCoordinate(label, item.id)}
                      onMouseEnter={() => setHoveredVertex(item.id)}
                      onMouseLeave={() => setHoveredVertex(null)}
                      className={`font-mono px-2 py-0.5 rounded text-[11px] border transition-colors cursor-pointer ${
                        copiedVertex === item.id
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-400 font-semibold'
                          : hoveredVertex === item.id
                          ? 'bg-[var(--color-teal)] text-white border-[var(--color-teal)] font-semibold'
                          : 'bg-white text-[var(--color-navy)] border-[var(--color-border)] hover:bg-slate-100'
                      }`}
                      title={`Click to copy ${label}`}
                      aria-label={`Copy coordinate ${label}`}
                    >
                      {copiedVertex === item.id ? `✓ ${item.locus}` : `${item.locus} ${item.vector}`}
                    </button>
                  );
                })}
              </div>

              <p className="cube-caption mt-4">
                <strong>Figure 1. Formal derivation schema (The Personality Cube).</strong> Oblique parallel projection corresponding directly to the author’s theoretical master specification. The candidate architecture pairs 3 orthogonal binary coordinates across 8 psychological manifestations.
              </p>
            </div>
          </div>
        </section>

        {/* Programme Logic: Foundation and Generativity Map */}
        <section className="section section-tinted" id="logic" aria-labelledby="logic-heading">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-eyebrow">Methodological Architecture</span>
              <h2 id="logic-heading">A modular, dependency-aware research map</h2>
              <p>
                The research programme has a common foundation and conditional branches. Some structures follow formally from the proposed LPT architecture; their psychological implications require separate empirical tests. Later studies depend on the measures and findings needed for each specific claim, rather than on a fixed year-by-year sequence.
              </p>
            </div>

            {/* Adaptive Research Map Table */}
            <div className="research-map-wrapper" role="region" aria-label="Research Programme Map" tabIndex={0}>
              <table className="research-map-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '25%' }}>Stream</th>
                    <th scope="col" style={{ width: '51%' }}>Content to communicate</th>
                    <th scope="col" style={{ width: '24%' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1: Foundation */}
                  <tr>
                    <td className="stream-col"><strong>Foundation</strong></td>
                    <td className="content-col">
                      LPT proposes eight manifestations arranged across three bipolar coordinates. The proposed pilot first asks whether these distinctions can be operationalised and discriminated independently.
                    </td>
                    <td className="status-col">
                      <span className="map-badge map-badge-pilot">Proposed first pilot</span>
                    </td>
                  </tr>

                  {/* Row 2: Generativity I */}
                  <tr>
                    <td className="stream-col"><strong>Generativity I — relations</strong></td>
                    <td className="content-col">
                      Eight positions yield <strong>8 × 7 / 2 = 28 unordered pairs</strong> as a formal result. Whether particular relations are psychologically distinguishable is a separate empirical question; the pilot examines selected relations.
                    </td>
                    <td className="status-col">
                      <span className="map-badge map-badge-formal">Formal derivation + initial empirical tests</span>
                    </td>
                  </tr>

                  {/* Row 3: Generativity II */}
                  <tr>
                    <td className="stream-col"><strong>Generativity II — recurrent patterns</strong></td>
                    <td className="content-col">
                      Test whether recurrent ways of handling contradictions contribute to repeated states and trait-like regularities, compared with established trait and contextual explanations.
                    </td>
                    <td className="status-col">
                      <span className="map-badge map-badge-conditional">Conditional subsequent research</span>
                    </td>
                  </tr>

                  {/* Row 4: Generativity III */}
                  <tr>
                    <td className="stream-col"><strong>Generativity III — configurations</strong></td>
                    <td className="content-col">
                      Around each focal manifestation, Cube geometry yields a <strong>1–3–3–1 structural-distance pattern</strong>; eight focal choices yield <strong>eight idealised whole-person templates</strong>. The proposed link between distance and psychological accessibility is an <strong>additional, independently testable hypothesis</strong>.
                    </td>
                    <td className="status-col">
                      <span className="map-badge map-badge-template">Formal templates + separate psychological hypothesis</span>
                    </td>
                  </tr>

                  {/* Row 5: Generativity IV */}
                  <tr>
                    <td className="stream-col"><strong>Generativity IV — development</strong></td>
                    <td className="content-col">
                      Test proposed developmental pathways and reorganisation of personality functioning with suitable longitudinal designs.
                    </td>
                    <td className="status-col">
                      <span className="map-badge map-badge-longterm">Longer-term, conditional research</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Generativity III Template Clarification */}
            <div className="derivation-callout" style={{ borderLeftColor: 'var(--color-teal)', backgroundColor: '#f8fafc', marginBottom: '1.5rem' }} id="generativity-iii-note">
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', marginBottom: 0, fontWeight: 500 }}>
                The eight Generativity III templates are idealised configurations, not empirically established discrete personality types. A person may approximate one, combine several, change across contexts, or match none.
              </p>
            </div>

            {/* Failure Propagation & Localization Principle */}
            <div className="derivation-callout" style={{ borderLeftColor: 'var(--color-navy)' }} id="propagation-principle">
              <div className="derivation-callout-title">Core Methodological Principle</div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                “Upstream failure propagates. Downstream failure revises the dependent claim without automatically erasing independently supported structure.”
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                Failure to corroborate a dependent psychological hypothesis does not by itself invalidate the upstream formal geometry. Conversely, difficulties in measuring the foundation restrict the conclusions of all subsequent empirical studies that depend upon it.
              </p>
            </div>

            {/* Exploratory directions beyond the current manuscript */}
            <div style={{ marginTop: '2.25rem' }} id="exploratory-directions">
              <div style={{ marginBottom: '1rem' }}>
                <span className="section-eyebrow" style={{ color: 'var(--color-teal)' }}>Prospective Horizons</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.35rem' }}>
                  Exploratory directions beyond the current manuscript
                </h3>
              </div>

              <div className="grid-2" style={{ marginBottom: '1.25rem' }}>
                {/* Social and interpersonal research */}
                <div className="academic-card" style={{ borderLeft: '4px solid var(--color-teal)' }} id="dir-social-interpersonal">
                  <h4 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Social and interpersonal research</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', marginBottom: 0 }}>
                    Can independently measured individual LPT relations support testable hypotheses about dyadic interaction, interpersonal contradictions, group dynamics, and team processes? Moving from one person’s architecture to interactions between people requires additional models and measures; team composition does not follow directly from the Cube.
                  </p>
                </div>

                {/* Embodied and symbolic research */}
                <div className="academic-card" style={{ borderLeft: '4px solid var(--color-teal)' }} id="dir-embodied-symbolic">
                  <h4 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Embodied and symbolic research</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', marginBottom: 0 }}>
                    Are particular LPT relations associated with reproducible patterns in how people symbolically describe bodily experience? The current manuscript discusses cognitive-somatic salience, but does not derive a bodily projection of all 28 relations. Physiological or clinical correspondences would require separate, stronger evidence.
                  </p>
                </div>
              </div>

              {/* DCC Separation Note */}
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                Dialectical Contradictions Coaching (DCC) belongs to a separate applied assessment programme; it does not form part of the academic architecture tested in this manuscript.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Collaboration Framework: "Who will do what?" Section */}
        <section className="section" id="partnership" aria-labelledby="partnership-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Academic Collaboration Model</span>
              <h2 id="partnership-heading">Who will do what?</h2>
              <p>
                At present, LPT-RC is a founder-led independent research initiative. Sergey V. Golubkov is currently its only confirmed participant. No university partner, academic co-lead, methods lead, research team, institutional sponsorship, or grant funding has yet been secured. The proposed roles and contributions are designed to ensure rigorous, independent scrutiny:
              </p>
            </div>

            <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
              {/* Confirmed Theoretical Lead */}
              <div className="academic-card" style={{ borderTop: '4px solid var(--color-navy)' }}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg text-[var(--color-navy)] mb-0">Sergey V. Golubkov, Ph.D.</h3>
                  <span className="bg-[#e8f2f3] text-[#15464a] text-xs font-bold px-2 py-0.5 rounded border border-[#b6d7d9]">
                    Confirmed · Founder
                  </span>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-teal)] font-bold mb-3">Founder and Theoretical Lead</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-2">
                  Provides the LPT architecture, canonical source publications, and draft research materials; helps formulate testable claims and interpret what empirical findings mean for the theory.
                </p>
                <p className="text-xs text-[var(--color-text-muted)] italic mb-0">
                  Contributes theoretical stewardship, draft materials, and founder time. Does not provide project funding or university infrastructure.
                </p>
              </div>

              {/* University Academic Co-Lead - Partner Sought */}
              <div className="academic-card" style={{ borderTop: '4px solid var(--color-teal)' }}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg text-[var(--color-navy)] mb-0">University Academic Co-Lead</h3>
                  <span className="bg-amber-50 text-amber-900 text-xs font-bold px-2 py-0.5 rounded border border-amber-300">
                    Partner Sought
                  </span>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-bold mb-3">Institutional Principal Investigator</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-2">
                  Co-designs the empirical study, brings independent scientific scrutiny and, subject to institutional agreement, leads its university-based implementation.
                </p>
                <p className="text-xs text-[var(--color-text-muted)] italic mb-0">
                  Provides independent scientific challenge, oversees institutional hosting, and coordinates the university ethics and data-governance route.
                </p>
              </div>

              {/* Methods Lead - Partner Sought */}
              <div className="academic-card" style={{ borderTop: '4px solid #4a5d78' }}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg text-[var(--color-navy)] mb-0">Methods Lead</h3>
                  <span className="bg-amber-50 text-amber-900 text-xs font-bold px-2 py-0.5 rounded border border-amber-300">
                    Partner Sought
                  </span>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-bold mb-3">Psychometrics &amp; Quantitative Methods</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-2">
                  Designs comparisons with alternative explanations, measurement models, blinded classification protocols, and analysis pipelines.
                </p>
                <p className="text-xs text-[var(--color-text-muted)] italic mb-0">
                  This role may be combined with the Academic Co-Lead if the requisite methodological and psychometric expertise is available.
                </p>
              </div>

              {/* Russian–English Contributor & Research Assistance */}
              <div className="academic-card" style={{ borderTop: '4px solid #5a738e' }}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg text-[var(--color-navy)] mb-0">Russian–English Contributor &amp; Team</h3>
                  <span className="bg-amber-50 text-amber-900 text-xs font-bold px-2 py-0.5 rounded border border-amber-300">
                    Partner Sought
                  </span>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-bold mb-3">Cross-Linguistic &amp; Project Support</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-2">
                  Develops and checks bilingual materials so that results do not depend on LPT terminology or translation artifacts alone.
                </p>
                <p className="text-xs text-[var(--color-text-muted)] italic mb-0">
                  Research assistance and data support will be scoped with the partner according to the agreed design and available funding.
                </p>
              </div>
            </div>

            {/* Decision-Making and Governance Box */}
            <div className="academic-card" style={{ borderLeft: '4px solid var(--color-navy)', marginBottom: '2rem' }}>
              <h4 className="font-serif text-base text-[var(--color-navy)] mb-2">Decision-making and academic governance</h4>
              <p className="text-sm text-[var(--color-text-main)] mb-2">
                The founder contributes theoretical definitions and interpretation; empirical methods, analysis, and conclusions are determined jointly and remain open to independent scrutiny. University ethics and data decisions follow the eventual host institution’s procedures.
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mb-0">
                No sought role is portrayed as already filled. A university collaboration does not imply that an institution has already promised staff, participant access, sponsorship, ethics approval, or funding.
              </p>
            </div>

            {/* Proposed Exchange */}
            <div className="academic-card bg-slate-50 border border-slate-200">
              <h4 className="font-serif text-base text-[var(--color-navy)] mb-2">Proposed exchange: what each party brings</h4>
              <div className="grid-2 text-sm">
                <div>
                  <strong className="text-[var(--color-navy)] block mb-1">What the founder brings now:</strong>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>The complete LPT theoretical architecture and canonical publications</li>
                    <li>Draft manifestation, relation, and stimulus materials</li>
                    <li>Russian and English conceptual rationale and project coordination</li>
                    <li>Founder time and participation in developing and interpreting the research</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[var(--color-navy)] block mb-1">What the university partner would provide (subject to agreement):</strong>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>Academic co-lead and independent scientific challenge</li>
                    <li>Design-specific power/precision analysis and psychometric oversight</li>
                    <li>Institutional hosting and university ethics/data-governance review</li>
                    <li>Joint exploration of research grant and external funding opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. The Pilot Section */}
        <section className="section section-tinted" id="pilot" aria-labelledby="pilot-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Indicative Empirical Programme</span>
              <h2 id="pilot-heading">The proposed Russian–English pilot</h2>
              <p>
                The proposed 12-month Russian–English pilot is a joint project <strong>to be co-designed</strong> with the Academic Co-Lead. Twelve months is an indicative duration, not a funded or contractually agreed schedule. Its scope, start date, staffing, sample size, methods, progression criteria, and budget depend entirely on the eventual protocol, institutional agreement, and available resources.
              </p>
            </div>

            {/* Pilot Interactive Indicator */}
            <div className="academic-card mb-6" id="pilot-progress-indicator">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-teal)]">
                  Indicative Phase Structure (12 Months)
                </span>
                <span className="text-xs text-slate-500">
                  Click a phase to inspect objectives and decision gates
                </span>
              </div>

              {/* Phase Buttons */}
              <div className="grid-4 gap-2 mb-4">
                {[
                  { id: 1, label: 'Phase 1 · Q1', title: 'Empirical Specification', months: 'M1–M3' },
                  { id: 2, label: 'Phase 2 · Q2', title: 'Bilingual Operationalisation', months: 'M4–M6' },
                  { id: 3, label: 'Phase 3 · Q3', title: 'Feasibility & Interviews', months: 'M7–M10' },
                  { id: 4, label: 'Phase 4 · Q4', title: 'Evaluation & Decision', months: 'M11–M12' },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePilotPhase(p.id)}
                    className={`text-left p-3 rounded border transition-all cursor-pointer ${
                      activePilotPhase === p.id
                        ? 'bg-[var(--color-teal)] text-white border-[var(--color-teal)] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block text-[11px] font-mono opacity-80">{p.label} · {p.months}</span>
                    <span className="block font-semibold text-sm mt-0.5">{p.title}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Phase Inspector */}
              <div className="p-4 rounded bg-slate-50 border border-slate-200 text-sm">
                {activePilotPhase === 1 && (
                  <div>
                    <span className="font-mono text-xs font-bold text-[var(--color-teal)] uppercase block mb-1">
                      PHASE 1 · MONTHS 1–3 · Specification &amp; Alternative Explanations
                    </span>
                    <p className="text-slate-800 font-medium mb-2">
                      Formalises theoretical claims into testable empirical assertions. Sets up explicit comparisons with established trait, lexical, and cognitive models.
                    </p>
                    <div className="text-xs text-slate-600">
                      <strong>Deliverables:</strong> Empirical Specification v1.0, Comparator Matrix · <strong>Decision Gate 1:</strong> Pre-registered operational definitions and auxiliary assumptions completed.
                    </div>
                  </div>
                )}
                {activePilotPhase === 2 && (
                  <div>
                    <span className="font-mono text-xs font-bold text-[var(--color-teal)] uppercase block mb-1">
                      PHASE 2 · MONTHS 4–6 · Matched Bilingual Materials
                    </span>
                    <p className="text-slate-800 font-medium mb-2">
                      Develops matched Russian and English stimulus materials, indicators, and scoring guides. Conducts blinded classification exercises with bilingual raters.
                    </p>
                    <div className="text-xs text-slate-600">
                      <strong>Deliverables:</strong> Bilingual Stimulus Bank, Coding Guides · <strong>Decision Gate 2:</strong> Blinded rater agreement and material validity corroborated across both languages.
                    </div>
                  </div>
                )}
                {activePilotPhase === 3 && (
                  <div>
                    <span className="font-mono text-xs font-bold text-[var(--color-teal)] uppercase block mb-1">
                      PHASE 3 · MONTHS 7–10 · Empirical Feasibility Study
                    </span>
                    <p className="text-slate-800 font-medium mb-2">
                      Conducts cognitive interviews and feasibility data collection through the university’s approved ethics and data-governance pathway.
                    </p>
                    <div className="text-xs text-slate-600">
                      <strong>Deliverables:</strong> Feasibility Dataset, Execution Report · <strong>Decision Gate 3:</strong> Protocol fidelity, coding reliability, and initial discriminability documented.
                    </div>
                  </div>
                )}
                {activePilotPhase === 4 && (
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded inline-block mb-1">
                      PHASE 4 · MONTHS 11–12 · Joint Evaluation &amp; Stop Rule
                    </span>
                    <p className="text-slate-800 font-medium mb-2">
                      Applies pre-registered decision criteria and executes the Year 1 Stop Rule: if proposed distinctions fail to show discriminability, the programme halts or revises locally.
                    </p>
                    <div className="text-xs text-slate-600">
                      <strong>Deliverables:</strong> Confirmatory Protocol, Joint Manuscript, Funding Case · <strong>Year 1 Gate:</strong> Formal progression review by all project leads.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Decision Gates & Stop Rule */}
            <div className="grid-2" id="gates">
              <div className="academic-card">
                <h4 className="font-serif text-lg text-[var(--color-navy)] mb-2">Design-specific progression criteria</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-2">
                  Sample size, statistical power, and decision criteria will be determined through design-specific power or precision analysis and joint methodological review, rather than fixed arbitrary numerical cut-offs.
                </p>
                <ul className="text-xs space-y-1 text-slate-600 list-disc pl-4 mb-0">
                  <li>Sample size justified by formal power/precision calculations for target effect sizes</li>
                  <li>Inter-rater agreement criteria calibrated to task complexity and coding format</li>
                  <li>Classification accuracy benchmarked explicitly against chance and competitor models</li>
                </ul>
              </div>

              <div className="academic-card border-l-4 border-amber-600">
                <h4 className="font-serif text-lg text-amber-950 mb-2">The Year 1 Stop Rule</h4>
                <p className="text-sm text-[var(--color-text-main)] mb-2">
                  If the pilot data fail to demonstrate empirical discriminability or fail against simpler alternative explanations, the programme will not proceed to downstream trait, developmental, or applied stages.
                </p>
                <p className="text-xs text-slate-600 mb-0">
                  Informative negative or disconfirming findings will be documented and submitted for publication, preserving scientific integrity and preventing research waste.
                </p>
              </div>
            </div>

            {/* Research Horizon */}
            <div className="mt-8" id="horizon">
              <div className="section-header mb-4">
                <span className="section-eyebrow">Research Trajectory</span>
                <h3 className="font-serif text-xl text-[var(--color-navy)] mb-2">Research horizon</h3>
                <p className="text-sm text-slate-600 mb-0">
                  The research trajectory advances through three conditional horizons rather than a fixed calendar-year schedule. Specific timelines, milestones, and scope of work will be defined jointly with the incoming Academic Co-Lead and host institution, contingent upon the agreed study protocol, pilot findings, ethics approvals, and secured grant funding.
                </p>
              </div>

              <div className="grid-3">
                {/* Horizon 1 */}
                <div className="horizon-col" id="horizon-pilot">
                  <span className="gate-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>HORIZON 1</span>
                  <h4 className="font-serif text-base text-[var(--color-navy)] mb-1">
                    Proposed 12-month bilingual pilot<br />
                    <span style={{ fontSize: '0.875rem', fontWeight: 'normal', color: 'var(--color-teal)' }}>Foundational operationalisation &amp; initial tests</span>
                  </h4>
                  <p className="text-xs text-slate-600 mb-3">
                    Independent operationalisation of the upstream foundation and initial empirical tests of selected Generativity I relations across Russian and English text corpora.
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 list-disc pl-4 mb-0">
                    <li>Claim–assumption–test–failure register</li>
                    <li>Bilingual stimulus materials and text markers (Russian and English)</li>
                    <li>Upstream architecture discriminability test</li>
                    <li>Initial Generativity I relation distinctiveness</li>
                    <li>Joint confirmatory protocol and external grant co-application</li>
                  </ul>
                </div>

                {/* Horizon 2 */}
                <div className="horizon-col" id="horizon-mechanisms">
                  <span className="gate-badge" style={{ marginBottom: '0.75rem', display: 'inline-block', backgroundColor: '#f0fdfa', color: 'var(--color-teal)', borderColor: 'var(--color-teal)' }}>HORIZON 2</span>
                  <h4 className="font-serif text-base text-[var(--color-navy)] mb-1">
                    Conditional mechanism studies<br />
                    <span style={{ fontSize: '0.875rem', fontWeight: 'normal', color: 'var(--color-teal)' }}>Targeted relation &amp; configuration tests</span>
                  </h4>
                  <p className="text-xs text-slate-600 mb-3">
                    Separate studies of Generativity I–III, conducted when appropriate psychometric measures and substantive grounds are established for each specific study.
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 list-disc pl-4 mb-0">
                    <li>Generativity I relation distinctiveness and recovery</li>
                    <li>Generativity II recurrent contradiction handling and trait-like regularities</li>
                    <li>Generativity III accessibility hypothesis and eight whole-person configuration templates</li>
                    <li>Repeated-measures designs and within-person sampling</li>
                    <li>Prespecified comparisons against established trait, lexical, and cognitive models</li>
                  </ul>
                </div>

                {/* Horizon 3 */}
                <div className="horizon-col" id="horizon-development">
                  <span className="gate-badge" style={{ marginBottom: '0.75rem', display: 'inline-block', backgroundColor: '#f8fafc', color: '#475569', borderColor: '#cbd5e1' }}>HORIZON 3</span>
                  <h4 className="font-serif text-base text-[var(--color-navy)] mb-1">
                    Longer-term person &amp; development studies<br />
                    <span style={{ fontSize: '0.875rem', fontWeight: 'normal', color: 'var(--color-teal)' }}>Individual organisation &amp; development</span>
                  </h4>
                  <p className="text-xs text-slate-600 mb-3">
                    Studies of within-person organisation and Generativity IV development; exploratory social and embodied branches evaluated separately as prospective directions.
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 list-disc pl-4 mb-0">
                    <li>Within-person architecture and individual functional profiles</li>
                    <li>Generativity IV developmental pathways and functional reorganisation over time</li>
                    <li>Suitable longitudinal designs to evaluate structural stability and change</li>
                    <li>Independent evaluation of exploratory interpersonal and embodied directions</li>
                    <li>Multi-institutional consortia and competitive funding co-applications</li>
                  </ul>
                </div>
              </div>

              {/* Partnership & Status Note */}
              <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-teal)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                <strong style={{ color: 'var(--color-navy)' }}>Current Initiative Status:</strong> Sergey V. Golubkov is currently the sole confirmed participant (Founder and Theoretical Lead). Academic Co-Lead, Methods Lead, and Russian–English Research Contributor roles are actively sought. Institutional partnership, host ethics oversight, and grant funding are not yet confirmed and will be established jointly with the incoming academic partner.
              </div>
            </div>
          </div>
        </section>

        {/* 6. Scientific Independence, Open Science & Boundaries */}
        <section className="section" id="independence" aria-labelledby="independence-heading">
          <span id="commitments" />
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Integrity &amp; Open Science</span>
              <h2 id="independence-heading">Scientific independence and research principles</h2>
            </div>

            <div className="grid-2 mb-6">
              <div className="academic-card">
                <h4 className="font-serif text-base text-[var(--color-navy)] mb-2">Programme-wide scientific commitments</h4>
                <ul className="text-sm space-y-2 text-slate-700 list-square pl-5 mb-0">
                  <li><strong>Testability before advocacy:</strong> Theoretical claims remain candidate hypotheses until independently tested.</li>
                  <li><strong>Independent evaluation:</strong> Academic co-leads and methods leads operate with full methodological autonomy.</li>
                  <li><strong>Comparator-first design:</strong> Prespecified comparisons against established trait, lexical, and cognitive models.</li>
                  <li><strong>Preregistration:</strong> Hypotheses, classification protocols, and analyses preregistered where appropriate.</li>
                  <li><strong>Transparent methods:</strong> Open materials, code, metadata, or suitably protected data shared where permitted.</li>
                  <li><strong>Principled sample sizing:</strong> Design-specific power or precision analysis rather than arbitrary fixed sample sizes.</li>
                </ul>
              </div>

              <div className="academic-card">
                <h4 className="font-serif text-base text-[var(--color-navy)] mb-2">Authorship, publication &amp; data governance</h4>
                <ul className="text-sm space-y-2 text-slate-700 list-square pl-5 mb-0">
                  <li><strong>Contribution-based authorship:</strong> Authorship reflects actual contributions, described transparently using CRediT, and the applicable journal’s policy. CRediT describes contributions; it does not automatically determine author status or order.</li>
                  <li><strong>Right to publish null findings:</strong> Partners retain the unrestricted right to submit negative or disconfirming findings for peer-reviewed publication.</li>
                  <li><strong>Responsible data sharing:</strong> Sharing participant-level data depends on participant consent, ethics approval, applicable regulations, and host university data governance.</li>
                  <li><strong>Host ethics route:</strong> Studies involving human participants or text corpora follow the partner university’s institutional review procedures.</li>
                </ul>
              </div>
            </div>

            {/* Single Research / Commercial Separation Box */}
            <div className="academic-card border-l-4 border-[var(--color-navy)] mb-6">
              <h4 className="font-serif text-base text-[var(--color-navy)] mb-2">Separation of academic research and commercial activity</h4>
              <p className="text-sm text-slate-700 mb-3">
                Language Personality Theory Research Collaborative (LPT-RC) is a purely non-commercial academic research initiative. Dialectical Contradictions Coaching (DCC) and Inner Dialectica are separate applied and commercial activities. A university research collaboration does not imply institutional affiliation with, or endorsement of, DCC, Inner Dialectica, or commercial products.
              </p>
              <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs text-slate-600 italic">
                <strong>Conflict-of-interest disclosure:</strong> Sergey V. Golubkov is the originator of LPT and DCC and has a commercial interest in their practical applications through Inner Dialectica. Academic research conducted through university partnerships is governed independently by the study protocol, institutional ethics, and peer-reviewed standards.
              </div>
            </div>

            {/* Claims that require separate evidence */}
            <div className="caution-box" id="unclaimed-box">
              <h4 className="font-serif text-base text-amber-950 mb-2">Claims that require separate evidence</h4>
              <p className="text-sm text-amber-900 mb-2">
                To maintain strict scientific precision and prevent unverified assumptions, LPT-RC does not claim:
              </p>
              <ul className="list-unclaimed text-sm space-y-1">
                <li>that the formal count of 28 geometric relations proves 28 psychologically distinct contradiction classes;</li>
                <li>that the eight idealised configurations are empirically established discrete personality types, diagnoses, competence levels, or employee-selection categories;</li>
                <li>that Cube geometry alone establishes an accessibility ordering or proves that real people fall into eight discrete personality classes;</li>
                <li>that illustrative trait labels or team-role propensities are validated mappings;</li>
                <li>that proposed body–organ or physiological correspondences are validated;</li>
                <li>that somatic hypotheses establish disease causation or support diagnosis or treatment;</li>
                <li>that DCC has demonstrated therapeutic efficacy;</li>
                <li>that any university collaborator endorses LPT, DCC, Inner Dialectica, or related commercial products.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Founder and Theoretical Lead Section */}
        <section className="section bg-surface" id="founder" aria-labelledby="founder-heading" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">FOUNDER AND THEORETICAL LEAD</span>
              <h2 id="founder-heading">Theoretical provenance and founder role</h2>
            </div>

            <div className="founder-grid">
              {/* Left Column: Academic Portrait */}
              <div className="founder-portrait-col">
                <div className="founder-portrait-frame">
                  <Image
                    src="/assets/sergey_golubkov_portrait_v2.jpg"
                    alt="Sergey V. Golubkov, Founder and Theoretical Lead of LPT-RC"
                    width={400}
                    height={520}
                    className="founder-portrait-img"
                    id="founder-portrait-image"
                    priority={false}
                  />
                </div>
                <div className="founder-portrait-caption">
                  <span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Sergey V. Golubkov, Ph.D.</span>
                  <br />
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-teal)' }}>
                    Founder and Theoretical Lead, LPT-RC
                  </span>
                </div>
              </div>

              {/* Right Column: Bio, Selected Background, Links */}
              <div className="founder-bio-col">
                <div className="founder-name-title">
                  <h3 className="founder-name">Sergey V. Golubkov, Ph.D.</h3>
                  <div className="founder-role">
                    Independent Researcher
                    <br />
                    Founder and Theoretical Lead, LPT-RC
                    <br />
                    <a
                      href={ORCID_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reference-doi inline-flex items-center gap-1 text-xs mt-1"
                      title="ORCID iD: 0000-0002-5288-7817"
                    >
                      <span>ORCID: 0000-0002-5288-7817</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="founder-bio-text">
                  <p>
                    Sergey V. Golubkov is a psychologist, independent researcher, and the originator of Language Personality Theory. He introduced LPT in a peer-reviewed article published in 2002 and continues its theoretical development through the 2026 scientific manuscript <em>From Taxonomies to Generative Architecture</em>.
                  </p>
                  <p>
                    He holds a Ph.D. in Educational Psychology from Moscow Pedagogical University and served for eight years as an Associate Professor of Psychology. Alongside his academic work, he has more than 20 years of coaching experience and over 2,700 hours of work with middle and senior leaders across multiple sectors. He formerly led the Coaching Practice for Russia and CIS at the Center for Creative Leadership.
                  </p>
                  <p>
                    He is a CCE Board Certified Coach, a BetterUp Distinguished Fellow Coach, and a member of the Association for Research in Personality.
                  </p>
                  <p>
                    His role in LPT-RC is as Founder and Theoretical Lead: to provide the LPT architecture, source publications, and draft materials, and to interpret findings for the theory while opening the model to independent operationalisation, scrutiny, and empirical testing. Theory stewardship does not give the founder unilateral authority over empirical methods, results, interpretation, or authorship.
                  </p>
                </div>

                <div className="founder-background-box">
                  <h4 className="founder-background-title">Selected background</h4>
                  <ul className="founder-background-list">
                    <li className="founder-background-item">Ph.D. in Educational Psychology</li>
                    <li className="founder-background-item">Eight years as Associate Professor of Psychology</li>
                    <li className="founder-background-item">Originator of Language Personality Theory</li>
                    <li className="founder-background-item">LPT foundational publication in 2002</li>
                    <li className="founder-background-item">More than 20 years of coaching experience</li>
                    <li className="founder-background-item">More than 2,700 coaching hours with middle and senior leaders</li>
                    <li className="founder-background-item">Former Head of Coaching Practice for Russia and CIS at the Center for Creative Leadership</li>
                    <li className="founder-background-item">CCE Board Certified Coach</li>
                    <li className="founder-background-item">BetterUp Distinguished Fellow Coach</li>
                    <li className="founder-background-item">Member of the Association for Research in Personality</li>
                  </ul>
                </div>

                <div className="founder-links-row">
                  <a
                    href={ORCID_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline inline-flex items-center gap-1"
                    id="founder-orcid-link"
                  >
                    <span>ORCID</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a href="#publications" className="btn btn-sm btn-outline" id="founder-publications-link">
                    Selected Publications
                  </a>

                  <a
                    href={CV_PDF}
                    download="Sergey_Golubkov_Academic_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline inline-flex items-center gap-1"
                    id="founder-cv-link"
                    title="Download Sergey V. Golubkov Academic CV (PDF)"
                  >
                    <Download className="w-3 h-3" />
                    <span>Academic CV</span>
                  </a>

                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Research%20Enquiry`}
                    className="btn btn-sm btn-primary inline-flex items-center gap-1.5"
                    id="founder-contact-link"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact Sergey Golubkov</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Selected Foundations & Publications */}
        <section className="section section-tinted" id="foundations" aria-labelledby="foundations-title">
          <span id="publications" />
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-eyebrow">Academic Literature</span>
              <h2 id="foundations-title">Selected publications and foundations</h2>
              <p>
                Key publications outlining the theoretical architecture, historical foundation, and applied bridge:
              </p>
            </div>

            {/* Reference 1 */}
            <div className="reference-card" id="paper-ref-1">
              <div className="reference-label">Canonical theoretical specification</div>
              <div className="reference-text">
                Golubkov, S. V. (2026). <em>From Taxonomies to Generative Architecture: Language Personality Theory and What a Theory of Personality Should Explain</em>. Scientific Master v2.
              </div>
              <a
                href={MANUSCRIPT_DOI}
                target="_blank"
                rel="noopener noreferrer"
                className="reference-doi inline-flex items-center gap-1"
              >
                <span>{MANUSCRIPT_DOI}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reference 2 */}
            <div className="reference-card" id="paper-ref-2">
              <div className="reference-label">Foundational formulation</div>
              <div className="reference-text">
                Golubkov, S. V. (2002). The Language Personality Theory: An integrative approach to personality on the basis of its language phenomenology. <em>Social Behavior and Personality</em>, 30(6), 571–578.
              </div>
              <a
                href="https://doi.org/10.2224/sbp.2002.30.6.571"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-doi inline-flex items-center gap-1"
              >
                <span>https://doi.org/10.2224/sbp.2002.30.6.571</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reference 3 */}
            <div className="reference-card" id="paper-ref-3">
              <div className="reference-label">Historical commentary</div>
              <div className="reference-text">
                Boeree, C. G. (2003). <em>Golubkov’s Language Personality Theory</em>. Shippensburg University personal academic webspace.
              </div>
              <a
                href="https://webspace.ship.edu/cgboer/golubkov.html"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-doi inline-flex items-center gap-1"
              >
                <span>https://webspace.ship.edu/cgboer/golubkov.html</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reference 4 */}
            <div className="reference-card" id="paper-ref-4">
              <div className="reference-label">Intellectual lineage</div>
              <div className="reference-text">
                Apresjan, J. D. (2000). <em>Systematic Lexicography</em>. Oxford University Press.
              </div>
              <span className="reference-doi text-[#6c7684]">
                Oxford: Oxford University Press. ISBN: 9780198237808
              </span>
            </div>

            {/* Reference 5 */}
            <div className="reference-card" id="paper-ref-5">
              <div className="reference-label">Applied bridge</div>
              <div className="reference-text">
                Golubkov, S. V. (2026). <em>Dialectical Contradictions Coaching as an Innovative Developmental Practice Based on LPT</em>.
              </div>
              <a
                href="https://doi.org/10.13140/RG.2.2.33949.06886"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-doi inline-flex items-center gap-1"
              >
                <span>https://doi.org/10.13140/RG.2.2.33949.06886</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reference 6 */}
            <div className="reference-card" id="paper-ref-6">
              <div className="reference-label">Historical foundation</div>
              <div className="reference-text">
                Golubkov, S. V. (2000). The language model of personality and its perspectives within psychology. <em>PsychNews International</em>, 5(1), Section D.
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2">
                <a
                  href="https://doi.org/10.13140/RG.2.2.19655.66729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-doi inline-flex items-center gap-1"
                >
                  <span>https://doi.org/10.13140/RG.2.2.19655.66729</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://userpage.fu-berlin.de/~expert/psychnews/5_1/pn5_1d.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-doi inline-flex items-center gap-1"
                  title="Original publication archive at Freie Universität Berlin"
                >
                  <span>Freie Universität Berlin Archive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Frequently Asked Questions */}
        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-eyebrow">Clarifications &amp; Principles</span>
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>
                Authoritative clarifications on the theoretical architecture, methodological boundaries, and institutional principles of the Language Personality Theory Research Collaborative.
              </p>
            </div>

            <div className="faq-list">
              <details className="faq-item" id="faq-item-1">
                <summary className="faq-question">
                  <span>What is Language Personality Theory (LPT) in brief?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Language Personality Theory is a proposed generative psychological architecture that models personality functioning through eight structural manifestations (Needs, Perception, Emotions, Actions, Values, Thought, Evaluation, and Speech) organized along three polar coordinates: <strong>Subjective–Objective</strong>, <strong>Natural–Social</strong>, and <strong>Inter–Intrapersonal</strong>. Formally derived from these coordinates are 28 pairwise structural relations representing systemic polarities and dialectical tensions between psychological functions.
                  </p>
                  <p>
                    Rather than reducing trait-descriptive adjectives to statistical factors, LPT uses recurrent distinctions in natural language as defeasible constraints on a candidate part–whole (meronomic) architecture of psychological functions.
                  </p>
                </div>
              </details>

              <details className="faq-item" id="faq-item-2">
                <summary className="faq-question">
                  <span>How does LPT differ from conventional psycholexical trait models (such as the Big Five)?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Conventional psycholexical models ask which personality characteristics become encoded in language and apply statistical factor analysis to trait-descriptive adjectives to construct descriptive taxonomies (such as dimensions or factor categories).
                  </p>
                  <p>
                    In contrast, Language Personality Theory asks an architectural and functional question: what recurrent pre-theoretical distinctions in natural language reveal about the systemic components of personality and the relations among them. LPT is therefore architectural and generative rather than taxonomic. It proposes a part–whole (meronomic) functional system organized along three coordinates rather than an inventory of individual-difference traits.
                  </p>
                </div>
              </details>

              <details className="faq-item" id="faq-item-3">
                <summary className="faq-question">
                  <span>Has Language Personality Theory been empirically proven or validated?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    No. Language Personality Theory is currently a candidate theoretical architecture and a scientific hypothesis. The mathematical derivation of eight manifestations and 28 relations is a formal structural property of the model, not empirical proof of psychological reality.
                  </p>
                  <p>
                    Whether these proposed functional components, coordinates, and dialectical relations are psychologically discriminable and construct-recoverable requires rigorous, independent empirical testing. Testing these core claims under pre-registered conditions is precisely the objective of the proposed LPT-RC collaborative research programme.
                  </p>
                </div>
              </details>

              <details className="faq-item" id="faq-item-4">
                <summary className="faq-question">
                  <span>Does LPT propose eight personality configurations?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Yes. Generativity III proposes eight idealised whole-person configurations, one for each possible focal manifestation. The Personality Cube specifies a 1–3–3–1 structural-distance pattern around each focal point; a separate, testable hypothesis proposes how that distance may relate to relative accessibility. These configurations are theoretical templates, not empirically established discrete personality categories, diagnoses, or rankings of people. A real person may approximate one template, combine features of several, change across contexts and time, or match none. Their psychological usefulness requires independent empirical testing.
                  </p>
                </div>
              </details>

              <details className="faq-item" id="faq-item-5">
                <summary className="faq-question">
                  <span>What are the 28 structural relations, and what is their empirical status?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    The 28 relations represent all pairwise structural combinations among the eight manifestations (8 × 7 / 2 = 28): 12 along one dimension (edges of the cube), 12 along two dimensions (face diagonals), and 4 across all three dimensions (space diagonals). Theoretically, they model systemic polarities, complementarities, and dialectical tensions between psychological functions.
                  </p>
                  <p>
                    Empirically, LPT-RC maintains that the formal combinatorial derivation does not by itself prove 28 distinct psychological contradiction classes. Whether these relations are psychologically discriminable, independently recoverable from natural language, and behaviorally meaningful are open empirical questions to be tested in the research programme.
                  </p>
                </div>
              </details>

              <details className="faq-item" id="faq-item-6">
                <summary className="faq-question">
                  <span>What is the status of C. George Boeree&apos;s 2003 commentary?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    In 2003, Dr C. George Boeree published an independent explanatory summary of the original 2002 formulation of LPT on his Shippensburg University personal academic webspace. He highlighted LPT&apos;s effort to move beyond descriptive trait typologies towards an integrative theory of personality grounded in language.
                  </p>
                  <p>
                    As documented on this website, Boeree’s commentary is historically valuable as an early independent scholarly reading of the initial formulation. However, it is an explanatory reading rather than an empirical validation, it does not evaluate the updated 2026 architecture, and it does not imply institutional affiliation with or endorsement by Shippensburg University.
                  </p>
                </div>
              </details>

              <details className="faq-item" id="faq-item-7">
                <summary className="faq-question">
                  <span>How does LPT-RC separate academic research from coaching practices and commercial products?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    LPT-RC enforces a strict institutional boundary between independent academic science and applied or commercial practices. Applied frameworks such as Dialectical Contradictions Coaching (DCC) and commercial platforms (such as Inner Dialectica) are distinct practical explorations.
                  </p>
                  <p>
                    Academic partners collaborate exclusively on non-commercial scientific research under open scholarly standards. University collaboration does not imply endorsement of any commercial method, coaching service, or clinical claim, and research data and protocols are governed by independent academic rigor.
                  </p>
                </div>
              </details>

              <details className="faq-item" id="faq-item-8">
                <summary className="faq-question">
                  <span>What is the immediate focus of the proposed university partnership?</span>
                  <span className="faq-icon" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    The immediate priority is to identify a university-based Academic Co-Lead to jointly design a bounded Russian–English pilot study. The pilot focuses on psychometric operationalisation, marker extraction, automated text classification, and testing construct recoverability across natural language corpora.
                  </p>
                  <p>
                    The partnership offers university researchers an intellectual and empirical challenge with pre-registered hypotheses and clear risk mitigation, yielding publishable methodological and empirical contributions regardless of whether hypotheses are corroborated or falsified.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* 10. Final Call to Action */}
        <section className="section" id="contact" aria-labelledby="cta-heading">
          <div className="container container-narrow text-center">
            <span className="section-eyebrow">Academic Fit &amp; Scoping</span>
            <h2 id="cta-heading">Explore a university partnership</h2>
            <p className="mx-auto mb-8 max-w-[64ch]">
              LPT-RC is seeking a university-based Academic Co-Lead and an independent methods or psychometrics contributor for an initial 60–90 minute scientific scoping meeting.
              <br /><br />
              The meeting assesses scientific fit, identifies the host ethics and data pathway, and reaches a joint go/no-go decision on a co-designed 12-month pilot.
            </p>

            <div className="btn-group justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Scientific%20Scoping%20Meeting`}
                className="btn btn-primary"
                id="final-meeting-link"
              >
                Request a Scientific Scoping Meeting
              </a>

              <a
                href={CONCEPT_NOTE_PDF}
                download="LPT_RC_University_Concept_Note_v0.3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline inline-flex items-center gap-1.5"
                id="final-concept-link"
                title="Download University Concept Note v0.3 (PDF)"
              >
                <Download className="w-3.5 h-3.5 opacity-80" />
                <span>Download University Concept Note v0.3</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="site-footer" role="contentinfo" id="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <h4>Language Personality Theory Research Collaborative</h4>
              <p className="text-[#92cbd0] text-xs mb-2">Public short form: LPT Research Collaborative</p>
              <p className="text-[#a4b3c4] text-xs max-w-[48ch]">
                Founder-led independent research initiative seeking university collaboration to test a candidate generative architecture of personality through open, cross-linguistic research.
              </p>
              <p className="text-[#92cbd0] text-xs mt-2">
                Contact:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Research%20Enquiry`}
                  className="underline hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="footer-links-list">
                <li>
                  <a href={MANUSCRIPT_DOI} target="_blank" rel="noopener noreferrer">
                    2026 scientific manuscript
                  </a>
                </li>
                <li>
                  <a href="https://doi.org/10.2224/sbp.2002.30.6.571" target="_blank" rel="noopener noreferrer">
                    2002 foundational article
                  </a>
                </li>
                <li>
                  <a href="https://webspace.ship.edu/cgboer/golubkov.html" target="_blank" rel="noopener noreferrer">
                    2003 Boeree commentary
                  </a>
                </li>
                <li>
                  <a href="https://doi.org/10.13140/RG.2.2.19655.66729" target="_blank" rel="noopener noreferrer">
                    2000 foundational article
                  </a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Research%20Enquiry`}
                    title={`Send email to ${CONTACT_EMAIL}`}
                    id="footer-contact-link"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#site-header">Back to top ↑</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>© 2026 LPT-RC · Founder-led independent research initiative</span>
            <span className="text-[#7b8e9f]">No institutional affiliation or endorsement is implied.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
