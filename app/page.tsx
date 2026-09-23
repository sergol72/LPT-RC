'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FileText,
  ExternalLink,
  Download,
  Menu,
  X,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
  Users,
  ShieldCheck,
  Scale,
  GitBranch,
  BookOpen,
  ArrowDown,
  Copy,
  Check,
  ChevronRight,
  Clock,
  Flag,
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

  // Email configuration for academic scoping & partnership requests
  const CONTACT_EMAIL: string = 'golubkovsv@gmail.com';
  const hasConfiguredEmail = CONTACT_EMAIL.length > 0 && !CONTACT_EMAIL.includes('REPLACE_WITH');

  // ORCID placeholder logic per Specification Section 10
  const ORCID_URL: string = 'REPLACE_WITH_ORCID_URL';
  const hasConfiguredOrcid = ORCID_URL !== 'REPLACE_WITH_ORCID_URL' && ORCID_URL.length > 0;

  // Portrait image source pointing to local web-optimised asset
  const portraitSrc = '/assets/sergey_golubkov_portrait_v2.jpg';

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)] flex flex-col selection:bg-[#206266] selection:text-white">
      {/* Skip to content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Static GitHub Pages Export Announcement Bar */}
      <aside aria-label="GitHub Pages static bundle notification" className="bg-[#112238] text-slate-200 text-xs py-2 px-4 border-b border-slate-700">
        <div className="max-w-[1140px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#206266] text-white px-2 py-0.5 rounded font-mono font-bold tracking-wide uppercase text-[10px]">
              GitHub Pages Ready
            </span>
            <span>
              Pure static HTML5, CSS & JS at repository root (<code className="text-teal-300">index.html</code>). No build required.
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

      {/* 6.1 Header */}
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

          {/* Primary Navigation */}
          <nav
            className={`primary-nav ${mobileMenuOpen ? 'is-open' : ''}`}
            id="page-primary-nav"
            aria-label="Primary navigation"
          >
            <ul className="nav-links">
              <li>
                <a
                  href="#about"
                  className="nav-link"
                  id="link-about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="nav-link"
                  id="link-architecture"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="#research-questions"
                  className="nav-link"
                  id="link-questions"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Questions
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
                  href="#horizon"
                  className="nav-link"
                  id="link-horizon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Horizon
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
                  href="#independence"
                  className="nav-link"
                  id="link-independence"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Independence
                </a>
              </li>
              <li>
                <a
                  href="#founder"
                  className="nav-link"
                  id="link-founder"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Founder
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
        {/* 6.2 Hero Section */}
        <section className="section hero-section" id="hero" aria-labelledby="hero-title">
          <div className="container">
            <span className="section-eyebrow" id="hero-badge">UNIVERSITY PARTNERSHIP INITIATIVE</span>
            <h1 id="hero-title" className="text-3xl md:text-5xl font-serif text-[var(--color-navy)] mb-3 leading-tight tracking-tight">
              Operationalising and Testing a Generative Architecture of Personality
            </h1>
            <p className="hero-subtitle">
              A proposed 12-month Russian–English pilot of eight manifestations, three coordinates, and 28 structural relations
            </p>

            <div className="positioning-statement" id="positioning-quote">
              “An independent international research network advancing a generative, language-grounded science of personality.”
            </div>

            <p className="hero-intro">
              LPT-RC invites a university partner to co-design and host a 12-month pilot that translates an already specified theoretical architecture into independent bilingual operationalisations and a preregisterable empirical test. The project asks whether LPT’s upstream structure is psychologically discriminable before resources are committed to downstream trait, configuration, developmental, social, embodied, or applied claims.
            </p>

            <div className="btn-group">
              {hasConfiguredEmail ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Scientific%20Scoping%20Meeting`}
                  className="btn btn-primary"
                  id="hero-meeting-action"
                >
                  Request a Scientific Scoping Meeting
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn-disabled cursor-not-allowed"
                  title="Contact details forthcoming"
                  disabled
                >
                  Contact details forthcoming
                </button>
              )}

              <a
                href="https://doi.org/10.5281/zenodo.22727605"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary inline-flex items-center gap-1.5"
                id="hero-zenodo-link"
              >
                <span>Read the 2026 Scientific Manuscript</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="/assets/LPT_RC_University_Concept_Note_v0.2.pdf"
                download="LPT_RC_University_Concept_Note_v0.2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="hero-concept-link"
                title="Download University Concept Note v0.2 (PDF)"
              >
                Download University Concept Note v0.2
              </a>
            </div>

            <div className="mt-8">
              <span className="status-badge-compact" id="hero-status-pill">
                Independent research initiative · Seeking university and methodological partners · No institutional affiliation or endorsement implied
              </span>
            </div>
          </div>
        </section>

        {/* 6.3 Research Problem */}
        <section className="section" id="about" aria-labelledby="problem-heading">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-eyebrow">Theoretical Problem</span>
              <h2 id="problem-heading">Why test an architecture of personality?</h2>
            </div>

            <p>
              Personality science has strong taxonomies and increasingly sophisticated process models, yet between-person structure does not by itself determine how psychological functions are organised within a person.
            </p>
            <p>
              An architectural theory must specify components and relations, derive risky consequences from them, compare those consequences with plausible alternatives, and state where failure would require revision.
            </p>

            <div className="derivation-callout border-l-[var(--color-navy)] mt-6" id="clarification-panel">
              <p className="text-[0.9375rem] mb-0">
                <strong>Clarification:</strong> In this website, <em>Language Personality Theory</em> refers to Sergey V. Golubkov’s specific theoretical programme and not to the broader linguistic concept sometimes described as “language personality”.
              </p>
            </div>
          </div>
        </section>

        {/* 6.4 Proposed Contribution & 6.5 Architecture at a Glance */}
        <section className="section section-tinted" id="architecture" aria-labelledby="architecture-title">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Candidate Architecture</span>
              <h2 id="architecture-title">A language-grounded candidate architecture</h2>
              <p>
                Language Personality Theory uses recurrent distinctions in natural language as defeasible constraints on a candidate architecture of eight manifestations organised by three binary coordinates.
              </p>
              <p>
                Conditional on those assignments, the Personality Cube yields exactly 28 unordered structural relations: 12 one-dimensional, 12 two-dimensional, and 4 three-dimensional.
              </p>
              <p>
                Their interpretation as psychologically distinct contradiction classes is a separate hypothesis. The current research programme therefore begins at the dependency root rather than treating the architecture or its downstream consequences as already validated.
              </p>
            </div>

            {/* 6.5 Visual Sequence */}
            <h3 className="text-xl font-serif text-[var(--color-navy)] mt-8 mb-4">Architecture at a glance</h3>
            <div className="sequence-flow" aria-label="Visual derivation sequence">
              <div className="flow-step">
                <span className="flow-step-num">Step 01</span>
                <div className="flow-step-title">Three binary coordinates</div>
                <div className="flow-step-desc">Orthogonal structural axes (C₁, C₂, C₃ ∈ &#123;0, 1&#125;)</div>
              </div>
              <div className="flow-step">
                <span className="flow-step-num">Step 02</span>
                <div className="flow-step-title">Eight proposed manifestations</div>
                <div className="flow-step-desc">Candidate loci at the 8 cube vertices</div>
              </div>
              <div className="flow-step">
                <span className="flow-step-num">Step 03</span>
                <div className="flow-step-title">28 unordered relations</div>
                <div className="flow-step-desc">Pairwise vertex combinations (8 × 7 / 2 = 28)</div>
              </div>
              <div className="flow-step">
                <span className="flow-step-num">Step 04</span>
                <div className="flow-step-title">Dimensional breakdown</div>
                <div className="flow-step-desc">12 1D relations + 12 2D relations + 4 3D relations</div>
              </div>
            </div>

            {/* Non-negotiable scientific callout: Prominent statement */}
            <div className="derivation-callout" id="derivation-statement">
              <div className="derivation-callout-title">Formal derivation is not empirical validation.</div>
              <p>
                The formal architecture specifies which relations follow from the proposed assignments. Independent semantic, psychological, bilingual, and comparative research must determine whether those distinctions are recoverable, discriminable, and useful.
              </p>
            </div>

            {/* Authentic Conceptual Architecture Graphic (The Personality Cube) */}
            <div className="cube-visual-wrapper" id="cube-diagram">
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

              <div className="cube-svg-container relative select-none">
                <svg viewBox="0 0 740 440" width="100%" height="auto" role="img" aria-labelledby="cube-title cube-desc">
                  <title id="cube-title">Authentic Personality Cube Candidate Architecture Schema</title>
                  <desc id="cube-desc">
                    A canonical oblique parallel projection of the Personality Cube showing 8 psychological manifestations (Values, Thought, Evaluation, Speech, Needs, Perception, Emotions, Actions) and 3 orthogonal coordinate axes: natural-social, subjective-objective, and inter-intrapersonal.
                  </desc>

                  {/* 1. Dashed Hidden Internal Edges (Meeting at Needs / Origin) */}
                  <g strokeLinecap="round">
                    {/* Vertical axis: Needs (290, 270) -> Values (290, 80) */}
                    <line
                      x1="290" y1="270" x2="290" y2="80"
                      stroke={hoveredVertex === 'v-needs' || hoveredVertex === 'v-values' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-needs' || hoveredVertex === 'v-values' ? 3.5 : 2.5}
                      strokeDasharray="7,5"
                    />

                    {/* Horizontal axis: Needs (290, 270) -> Perception (570, 270) */}
                    <line
                      x1="290" y1="270" x2="570" y2="270"
                      stroke={hoveredVertex === 'v-needs' || hoveredVertex === 'v-perception' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-needs' || hoveredVertex === 'v-perception' ? 3.5 : 2.5}
                      strokeDasharray="7,5"
                    />

                    {/* Depth axis: Needs (290, 270) -> Emotions (160, 365) */}
                    <line
                      x1="290" y1="270" x2="160" y2="365"
                      stroke={hoveredVertex === 'v-needs' || hoveredVertex === 'v-emotions' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-needs' || hoveredVertex === 'v-emotions' ? 3.5 : 2.5}
                      strokeDasharray="7,5"
                    />
                  </g>

                  {/* 2. Red Axis Labels along the 3 dashed orthogonal axes */}
                  <g fontFamily="Georgia, Cambria, serif" fontStyle="normal" fontSize="13.5" fontWeight="600" fill="#b91c1c">
                    {/* Vertical axis text: natural - social */}
                    <text
                      x="276"
                      y="175"
                      textAnchor="middle"
                      transform="rotate(-90, 276, 175)"
                      letterSpacing="0.02em"
                    >
                      natural - social
                    </text>

                    {/* Horizontal axis text: subjective - objective */}
                    <text
                      x="430"
                      y="254"
                      textAnchor="middle"
                      letterSpacing="0.02em"
                    >
                      subjective - objective
                    </text>

                    {/* Depth axis text: inter - intrapersonal */}
                    <text
                      x="225"
                      y="308"
                      textAnchor="middle"
                      transform="rotate(-36.16, 225, 308)"
                      letterSpacing="0.02em"
                    >
                      inter - intrapersonal
                    </text>
                  </g>

                  {/* 3. Solid External Edges (9 edges) */}
                  <g strokeLinecap="round" strokeLinejoin="round">
                    {/* Front Face: Evaluation (160, 175) -> Speech (440, 175) */}
                    <line
                      x1="160" y1="175" x2="440" y2="175"
                      stroke={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-speech' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-speech' ? 3.8 : 2.6}
                    />

                    {/* Front Face: Speech (440, 175) -> Actions (440, 365) */}
                    <line
                      x1="440" y1="175" x2="440" y2="365"
                      stroke={hoveredVertex === 'v-speech' || hoveredVertex === 'v-actions' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-speech' || hoveredVertex === 'v-actions' ? 3.8 : 2.6}
                    />

                    {/* Front Face: Actions (440, 365) -> Emotions (160, 365) */}
                    <line
                      x1="440" y1="365" x2="160" y2="365"
                      stroke={hoveredVertex === 'v-actions' || hoveredVertex === 'v-emotions' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-actions' || hoveredVertex === 'v-emotions' ? 3.8 : 2.6}
                    />

                    {/* Front Face: Emotions (160, 365) -> Evaluation (160, 175) */}
                    <line
                      x1="160" y1="365" x2="160" y2="175"
                      stroke={hoveredVertex === 'v-emotions' || hoveredVertex === 'v-evaluation' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-emotions' || hoveredVertex === 'v-evaluation' ? 3.8 : 2.6}
                    />

                    {/* Back Face Top: Values (290, 80) -> Thought (570, 80) */}
                    <line
                      x1="290" y1="80" x2="570" y2="80"
                      stroke={hoveredVertex === 'v-values' || hoveredVertex === 'v-thought' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-values' || hoveredVertex === 'v-thought' ? 3.8 : 2.6}
                    />

                    {/* Back Face Right: Thought (570, 80) -> Perception (570, 270) */}
                    <line
                      x1="570" y1="80" x2="570" y2="270"
                      stroke={hoveredVertex === 'v-thought' || hoveredVertex === 'v-perception' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-thought' || hoveredVertex === 'v-perception' ? 3.8 : 2.6}
                    />

                    {/* Connecting Depth: Evaluation (160, 175) -> Values (290, 80) */}
                    <line
                      x1="160" y1="175" x2="290" y2="80"
                      stroke={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-values' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-evaluation' || hoveredVertex === 'v-values' ? 3.8 : 2.6}
                    />

                    {/* Connecting Depth: Speech (440, 175) -> Thought (570, 80) */}
                    <line
                      x1="440" y1="175" x2="570" y2="80"
                      stroke={hoveredVertex === 'v-speech' || hoveredVertex === 'v-thought' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-speech' || hoveredVertex === 'v-thought' ? 3.8 : 2.6}
                    />

                    {/* Connecting Depth: Actions (440, 365) -> Perception (570, 270) */}
                    <line
                      x1="440" y1="365" x2="570" y2="270"
                      stroke={hoveredVertex === 'v-actions' || hoveredVertex === 'v-perception' ? '#206266' : '#112238'}
                      strokeWidth={hoveredVertex === 'v-actions' || hoveredVertex === 'v-perception' ? 3.8 : 2.6}
                    />
                  </g>

                  {/* 4. Eight Interactive Vertices & Labels */}
                  {[
                    {
                      id: 'v-values',
                      locus: 'Values',
                      vector: '(0, 1, 0)',
                      cx: 290,
                      cy: 80,
                      textX: 272,
                      textY: 64,
                      textAnchor: 'end' as const,
                      desc: 'C₁=0, C₂=1, C₃=0 · Social · Subjective · Interpersonal',
                    },
                    {
                      id: 'v-thought',
                      locus: 'Thought',
                      vector: '(1, 1, 0)',
                      cx: 570,
                      cy: 80,
                      textX: 588,
                      textY: 84,
                      textAnchor: 'start' as const,
                      desc: 'C₁=1, C₂=1, C₃=0 · Social · Objective · Interpersonal',
                    },
                    {
                      id: 'v-evaluation',
                      locus: 'Evaluation',
                      vector: '(0, 1, 1)',
                      cx: 160,
                      cy: 175,
                      textX: 142,
                      textY: 180,
                      textAnchor: 'end' as const,
                      desc: 'C₁=0, C₂=1, C₃=1 · Social · Subjective · Intrapersonal',
                    },
                    {
                      id: 'v-speech',
                      locus: 'Speech',
                      vector: '(1, 1, 1)',
                      cx: 440,
                      cy: 175,
                      textX: 458,
                      textY: 180,
                      textAnchor: 'start' as const,
                      desc: 'C₁=1, C₂=1, C₃=1 · Social · Objective · Intrapersonal',
                    },
                    {
                      id: 'v-needs',
                      locus: 'Needs',
                      vector: '(0, 0, 0)',
                      cx: 290,
                      cy: 270,
                      textX: 272,
                      textY: 258,
                      textAnchor: 'end' as const,
                      desc: 'C₁=0, C₂=0, C₃=0 · Origin · Natural · Subjective · Interpersonal',
                    },
                    {
                      id: 'v-perception',
                      locus: 'Perception',
                      vector: '(1, 0, 0)',
                      cx: 570,
                      cy: 270,
                      textX: 588,
                      textY: 274,
                      textAnchor: 'start' as const,
                      desc: 'C₁=1, C₂=0, C₃=0 · Natural · Objective · Interpersonal',
                    },
                    {
                      id: 'v-emotions',
                      locus: 'Emotions',
                      vector: '(0, 0, 1)',
                      cx: 160,
                      cy: 365,
                      textX: 142,
                      textY: 370,
                      textAnchor: 'end' as const,
                      desc: 'C₁=0, C₂=0, C₃=1 · Natural · Subjective · Intrapersonal',
                    },
                    {
                      id: 'v-actions',
                      locus: 'Actions',
                      vector: '(1, 0, 1)',
                      cx: 440,
                      cy: 365,
                      textX: 458,
                      textY: 378,
                      textAnchor: 'start' as const,
                      desc: 'C₁=1, C₂=0, C₃=1 · Natural · Objective · Intrapersonal',
                    },
                  ].map((v) => {
                    const isHovered = hoveredVertex === v.id;
                    const isCopied = copiedVertex === v.id;
                    const copyString =
                      cubeDisplayMode === 'names'
                        ? v.locus
                        : cubeDisplayMode === 'vectors'
                        ? v.vector
                        : `${v.locus} ${v.vector}`;

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
                        onClick={() => handleCopyCoordinate(copyString, v.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleCopyCoordinate(copyString, v.id);
                          }
                        }}
                      >
                        {/* Interactive Click Hitbox */}
                        <circle cx={v.cx} cy={v.cy} r={22} fill="transparent" />

                        {/* Outer Focus/Hover Glow Ring */}
                        {isHovered && (
                          <circle
                            cx={v.cx}
                            cy={v.cy}
                            r={13}
                            fill="none"
                            stroke="#206266"
                            strokeWidth={2.5}
                            strokeOpacity={0.65}
                          />
                        )}

                        {/* Canonical Vertex Circle: White body with solid dark outline */}
                        <circle
                          cx={v.cx}
                          cy={v.cy}
                          r={isHovered ? 8 : 7}
                          fill={isCopied ? '#059669' : isHovered ? '#206266' : '#ffffff'}
                          stroke={isCopied ? '#059669' : isHovered ? '#112238' : '#112238'}
                          strokeWidth={isHovered ? 3 : 2.6}
                          className="transition-all duration-150"
                        />

                        {/* Text Label */}
                        <text
                          x={v.textX}
                          y={v.textY}
                          textAnchor={v.textAnchor}
                          className="transition-all duration-150 select-none"
                        >
                          {cubeDisplayMode === 'vectors' ? (
                            <tspan
                              fontFamily="ui-monospace, monospace"
                              fontSize={isHovered || isCopied ? '13' : '12'}
                              fontWeight={isHovered || isCopied ? '700' : '600'}
                              fill={isCopied ? '#047857' : isHovered ? '#206266' : '#112238'}
                            >
                              {isCopied ? '✓ Copied' : v.vector}
                            </tspan>
                          ) : cubeDisplayMode === 'names' ? (
                            <tspan
                              fontFamily="Georgia, Cambria, serif"
                              fontSize={isHovered || isCopied ? '18' : '17'}
                              fontWeight={isHovered || isCopied ? '700' : '600'}
                              fill={isCopied ? '#047857' : isHovered ? '#206266' : '#112238'}
                            >
                              {isCopied ? `✓ ${v.locus}` : v.locus}
                            </tspan>
                          ) : (
                            /* Both Manifestation Name and Vector */
                            <>
                              <tspan
                                fontFamily="Georgia, Cambria, serif"
                                fontSize={isHovered || isCopied ? '17' : '16'}
                                fontWeight={isHovered || isCopied ? '700' : '600'}
                                fill={isCopied ? '#047857' : isHovered ? '#206266' : '#112238'}
                              >
                                {isCopied ? `✓ ${v.locus}` : v.locus}
                              </tspan>
                              <tspan
                                dx="6"
                                fontFamily="ui-monospace, monospace"
                                fontSize="11.5"
                                fontWeight="600"
                                fill={isCopied ? '#047857' : isHovered ? '#206266' : '#64748b'}
                              >
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

              {/* Quick Click-to-Copy Manifestation & Vector Bar */}
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
                <strong>Figure 1. Formal derivation schema (The Personality Cube).</strong> Oblique parallel projection corresponding directly to the author’s theoretical master specification. The candidate architecture pairs 3 orthogonal binary coordinates (<em>natural–social</em>, <em>subjective–objective</em>, and <em>inter–intrapersonal</em>) across 8 psychological manifestations (Needs, Perception, Values, Thought, Emotions, Actions, Evaluation, Speech). Dashed edges highlight the inner orthogonal axes meeting at Needs (the origin, 0,0,0).
              </p>
            </div>
          </div>
        </section>

        {/* 6.6 Research Questions */}
        <section className="section" id="research-questions" aria-labelledby="rq-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Falsifiable Inquiry</span>
              <h2 id="rq-heading">Four questions for the flagship pilot</h2>
              <p>
                The proposed 12-month pilot is structured around four primary questions designed to challenge the candidate architecture before dependent claims are evaluated.
              </p>
            </div>

            <div className="grid-2">
              {/* Card 1 */}
              <div className="academic-card" id="card-rq-1">
                <span className="card-num">RESEARCH QUESTION 01</span>
                <h3>Upstream architecture</h3>
                <p>
                  Can eight manifestations and their three coordinate assignments be recovered by independent semantic and psychological methods and outperform plausible alternative partitions?
                </p>
              </div>

              {/* Card 2 */}
              <div className="academic-card" id="card-rq-2">
                <span className="card-num">RESEARCH QUESTION 02</span>
                <h3>Generativity I</h3>
                <p>
                  Do selected relation identities retain discriminating information beyond general discrepancy, distress, negative affect, and global inconsistency?
                </p>
              </div>

              {/* Card 3 */}
              <div className="academic-card" id="card-rq-3">
                <span className="card-num">RESEARCH QUESTION 03</span>
                <h3>Cross-linguistic adequacy</h3>
                <p>
                  Can Russian and English materials preserve the intended functional distinctions without relying on transparent LPT labels or translation alone?
                </p>
              </div>

              {/* Card 4 */}
              <div className="academic-card" id="card-rq-4">
                <span className="card-num">RESEARCH QUESTION 04</span>
                <h3>Dependency-aware decision</h3>
                <p>
                  Do the results support progression to tests of recurrent handling and traits, accessibility and configurations, and person-specific development—or require upstream revision first?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6.7 Programme Logic */}
        <section className="section section-tinted" id="logic" aria-labelledby="prog-logic-heading">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-eyebrow">Methodological Architecture</span>
              <h2 id="prog-logic-heading">A dependency-aware research programme</h2>
              <p>
                Research cannot treat upstream and downstream hypotheses as independent. The programme advances in a strictly sequential, dependency-aware hierarchy:
              </p>
            </div>

            {/* Vertical Top-Down Sequence */}
            <ol className="list-none pl-0 flex flex-col gap-4 mb-8">
              <li className="academic-card border-l-4 border-l-[var(--color-navy)]">
                <div className="font-mono text-xs font-bold text-[var(--color-navy)] mb-1">
                  STAGE 1 · FOUNDATION
                </div>
                <h4>1. Upstream architecture</h4>
                <p className="mb-0 text-[0.9375rem] text-[var(--color-text-muted)]">
                  Eight manifestations and three coordinate assignments.
                </p>
              </li>

              <li className="academic-card border-l-4 border-l-[var(--color-teal)]">
                <div className="font-mono text-xs font-bold text-[var(--color-teal)] mb-1">
                  STAGE 2 · CONDITIONAL ON STAGE 1 GATE
                </div>
                <h4>2. Generativity I</h4>
                <p className="mb-0 text-[0.9375rem] text-[var(--color-text-muted)]">
                  Psychological distinctiveness of selected structural relation identities.
                </p>
              </li>

              <li className="academic-card border-l-4 border-l-[var(--color-teal)]">
                <div className="font-mono text-xs font-bold text-[var(--color-teal)] mb-1">
                  STAGE 3 · CONDITIONAL ON EARLIER GATES
                </div>
                <h4>3. Generativity II</h4>
                <p className="mb-0 text-[0.9375rem] text-[var(--color-text-muted)]">
                  Structural relations, recurrent handling, repeated states and behaviour, and possible trait-like regularities.
                </p>
              </li>

              <li className="academic-card border-l-4 border-l-[var(--color-teal)]">
                <div className="font-mono text-xs font-bold text-[var(--color-teal)] mb-1">
                  STAGE 4 · CONDITIONAL ON EARLIER GATES
                </div>
                <h4>4. Generativity III</h4>
                <p className="mb-0 text-[0.9375rem] text-[var(--color-text-muted)]">
                  Structural distance, accessibility, and eight ideal configuration templates.
                </p>
              </li>

              <li className="academic-card border-l-4 border-l-[var(--color-teal)]">
                <div className="font-mono text-xs font-bold text-[var(--color-teal)] mb-1">
                  STAGE 5 · CONDITIONAL ON EARLIER GATES
                </div>
                <h4>5. Person-specific bridge and Generativity IV</h4>
                <p className="mb-0 text-[0.9375rem] text-[var(--color-text-muted)]">
                  Within-person architectures and developmental transformation.
                </p>
              </li>

              <li className="academic-card border-l-4 border-l-[var(--color-ochre-border)]">
                <div className="font-mono text-xs font-bold text-[var(--color-ochre-dark)] mb-1">
                  STAGE 6 · STAGED EXTENSIONS · CONDITIONAL SEPARATE RESEARCH
                </div>
                <h4>6. Staged extensions</h4>
                <p className="mb-0 text-[0.9375rem] text-[var(--color-text-muted)]">
                  Social and dyadic patterns, embodied and physiological hypotheses, and independent DCC feasibility research.
                </p>
              </li>
            </ol>

            {/* Prominent Principle Callout */}
            <div className="derivation-callout border-l-[var(--color-navy)]" id="failure-propagation-box">
              <div className="derivation-callout-title">Core Methodological Principle</div>
              <p className="text-lg font-semibold text-[var(--color-navy)] mb-2">
                “Upstream failure propagates. Downstream failure revises the dependent claim without automatically erasing independently supported structure.”
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-0">
                Note: Social, embodied, somatic, or DCC extensions are not established consequences of the core architecture and require independent, staged evidence.
              </p>
            </div>
          </div>
        </section>

        {/* 6.8 Flagship Pilot */}
        <section className="section" id="pilot" aria-labelledby="pilot-title">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Proposed Collaboration</span>
              <h2 id="pilot-title">A proposed 12-month core feasibility pilot</h2>
              <p className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                Working title: Operationalising and Testing the Upstream Architecture and Generativity I of Language Personality Theory Across Russian and English
              </p>
              <p>
                The pilot translates the current 2026 scientific master into independent bilingual operationalisations and tests whether the eight manifestations, three coordinate assignments, and selected relation identities are psychologically discriminable.
              </p>
            </div>

            {/* 12-Month Visual Progress Indicator */}
            <div className="bg-white border border-[var(--color-border)] rounded-lg p-5 sm:p-6 mb-10 shadow-xs" id="pilot-progress-indicator">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--color-border)]">
                <div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--color-teal)] bg-[var(--color-teal-light)] px-2.5 py-0.5 rounded mb-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>12-MONTH EXECUTION ROADMAP</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-navy)] mb-0">
                    Flagship Pilot Phase Timeline & Accountability Gates
                  </h3>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-[var(--color-text-light)] bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
                  <Calendar className="w-3.5 h-3.5 text-[var(--color-teal)]" />
                  <span>Total: 12 Months · 4 Gates</span>
                </div>
              </div>

              {/* 12-Month Month Tick Ruler */}
              <div className="mb-2">
                <div className="text-[11px] font-mono text-[var(--color-text-light)] mb-1 flex items-center justify-between">
                  <span>Month Progression (M01 – M12)</span>
                  <span className="hidden sm:inline">Milestone Gates: M03, M06, M10, M12</span>
                </div>
                <div className="grid grid-cols-12 gap-1 text-center font-mono text-[11px]">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => {
                    const phaseForMonth = m <= 3 ? 1 : m <= 6 ? 2 : m <= 10 ? 3 : 4;
                    const isSelected = activePilotPhase === phaseForMonth;
                    const isGate = m === 3 || m === 6 || m === 10 || m === 12;

                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => handleSelectPilotPhase(phaseForMonth)}
                        className={`py-1 rounded border transition-all cursor-pointer relative ${
                          isSelected
                            ? phaseForMonth === 4
                              ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                              : 'bg-teal-50 text-[var(--color-teal)] border-[var(--color-teal)] font-bold'
                            : 'bg-slate-50 text-[var(--color-text-light)] border-slate-200 hover:bg-slate-100'
                        }`}
                        title={`Month ${m} (Phase ${phaseForMonth})${isGate ? ' - Gate Milestone' : ''}`}
                        aria-label={`Month ${m}, Phase ${phaseForMonth}`}
                      >
                        <span>M{m < 10 ? `0${m}` : m}</span>
                        {isGate && (
                          <span
                            className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                              phaseForMonth === 4 ? 'bg-amber-600' : 'bg-[var(--color-teal)]'
                            }`}
                            title="Decision Gate Milestone"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Proportional Segmented Progress Track */}
              <div className="flex flex-col md:flex-row gap-2 mt-4" role="tablist" aria-label="12-Month Pilot Phases">
                {[
                  {
                    id: 1,
                    phaseTag: 'Phase 1',
                    title: 'Empirical specification',
                    span: 'Months 1–3',
                    monthsCount: '3 mos (25%)',
                    widthClass: 'md:w-1/4',
                    gateTag: 'Gate 1 · M3',
                    cardId: 'pilot-phase-1',
                    color: 'teal',
                  },
                  {
                    id: 2,
                    phaseTag: 'Phase 2',
                    title: 'Bilingual operationalisation',
                    span: 'Months 4–6',
                    monthsCount: '3 mos (25%)',
                    widthClass: 'md:w-1/4',
                    gateTag: 'Gate 2 · M6',
                    cardId: 'pilot-phase-2',
                    color: 'navy',
                  },
                  {
                    id: 3,
                    phaseTag: 'Phase 3',
                    title: 'Core feasibility study',
                    span: 'Months 7–10',
                    monthsCount: '4 mos (33%)',
                    widthClass: 'md:w-1/3',
                    gateTag: 'Gate 3 · M10',
                    cardId: 'pilot-phase-3',
                    color: 'teal-dark',
                  },
                  {
                    id: 4,
                    phaseTag: 'Phase 4',
                    title: 'Dependency decision',
                    span: 'Months 11–12',
                    monthsCount: '2 mos (17%)',
                    widthClass: 'md:w-1/6',
                    gateTag: 'Decision · M12',
                    cardId: 'pilot-phase-4',
                    color: 'amber',
                  },
                ].map((phase) => {
                  const isActive = activePilotPhase === phase.id;

                  return (
                    <button
                      key={phase.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`phase-panel-${phase.id}`}
                      onClick={() => handleSelectPilotPhase(phase.id)}
                      className={`${phase.widthClass} w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between relative group ${
                        isActive
                          ? phase.id === 4
                            ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-300 shadow-xs'
                            : 'bg-teal-50/80 border-[var(--color-teal)] ring-2 ring-[var(--color-teal)]/30 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span
                            className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                              isActive
                                ? phase.id === 4
                                  ? 'bg-amber-200 text-amber-900'
                                  : 'bg-[var(--color-teal)] text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {phase.phaseTag}
                          </span>
                          <span className="font-mono text-[11px] text-[var(--color-text-light)]">
                            {phase.monthsCount}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-[var(--color-navy)] mb-1 leading-snug">
                          {phase.title}
                        </h4>
                        <div className="font-mono text-xs text-[var(--color-text-muted)]">
                          {phase.span}
                        </div>
                      </div>

                      {/* Milestone Flag Tag */}
                      <div className="mt-2 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                        <span className="flex items-center gap-1 text-[var(--color-text-light)]">
                          <Flag className="w-3 h-3 text-[var(--color-teal)]" />
                          <span>{phase.gateTag}</span>
                        </span>
                        {isActive && (
                          <span className="text-[var(--color-teal)] font-bold text-xs">
                            Active
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Phase Inspector Card */}
              <div
                id={`phase-panel-${activePilotPhase}`}
                role="tabpanel"
                className="mt-4 p-4 rounded-lg bg-slate-50/70 border border-slate-200"
              >
                {activePilotPhase === 1 && (
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[var(--color-teal)] bg-teal-100 px-2 py-0.5 rounded">
                          PHASE 1 · MONTHS 1–3 (Q1)
                        </span>
                        <span className="text-xs font-medium text-slate-600">
                          Objective: Empirical specification & comparator models
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-navy)] mb-0 font-medium">
                        Converts the theoretical manuscript into a claim–assumption–test–failure register. Selects target manifestations, coordinates, relations, and prespecified competitor models.
                      </p>
                      <div className="text-xs text-[var(--color-text-muted)] flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="font-semibold text-[var(--color-navy)]">Deliverables:</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Empirical Specification v1.0</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Comparator matrix</span>
                        <span className="mx-1 text-slate-300">|</span>
                        <span className="font-semibold text-amber-900">Gate 1:</span>
                        <span>Pass condition: Every target claim has independent operationalisation & auxiliary assumptions.</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectPilotPhase(1, 'pilot-phase-1', true)}
                      className="self-start md:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[var(--color-teal)] bg-white border border-[var(--color-teal)] rounded hover:bg-[var(--color-teal-light)] transition-colors cursor-pointer"
                    >
                      <span>Inspect Details</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {activePilotPhase === 2 && (
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[var(--color-teal)] bg-teal-100 px-2 py-0.5 rounded">
                          PHASE 2 · MONTHS 4–6 (Q2)
                        </span>
                        <span className="text-xs font-medium text-slate-600">
                          Objective: Bilingual Russian–English operationalisation
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-navy)] mb-0 font-medium">
                        Develops matched Russian–English stimuli and independent indicators. Conducts multidisciplinary review, blinded classification, and material refinement.
                      </p>
                      <div className="text-xs text-[var(--color-text-muted)] flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="font-semibold text-[var(--color-navy)]">Deliverables:</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Bilingual stimulus bank</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Coding materials</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Material-validity record</span>
                        <span className="mx-1 text-slate-300">|</span>
                        <span className="font-semibold text-amber-900">Gate 2:</span>
                        <span>Pass condition: Blinded classification meets validity thresholds in RU & EN.</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectPilotPhase(2, 'pilot-phase-2', true)}
                      className="self-start md:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[var(--color-teal)] bg-white border border-[var(--color-teal)] rounded hover:bg-[var(--color-teal-light)] transition-colors cursor-pointer"
                    >
                      <span>Inspect Details</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {activePilotPhase === 3 && (
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[var(--color-teal)] bg-teal-100 px-2 py-0.5 rounded">
                          PHASE 3 · MONTHS 7–10 (Q3–Q4)
                        </span>
                        <span className="text-xs font-medium text-slate-600">
                          Objective: Preregistered core feasibility study
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-navy)] mb-0 font-medium">
                        Conducts cognitive interviews and a small preregistered feasibility study under the university’s ethics and data-governance pathway.
                      </p>
                      <div className="text-xs text-[var(--color-text-muted)] flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="font-semibold text-[var(--color-navy)]">Deliverables:</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Core pilot report</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Documented revision log</span>
                        <span className="mx-1 text-slate-300">|</span>
                        <span className="font-semibold text-amber-900">Gate 3:</span>
                        <span>Pass condition: Clean execution, coding reliability, and initial discriminability documented.</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectPilotPhase(3, 'pilot-phase-3', true)}
                      className="self-start md:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[var(--color-teal)] bg-white border border-[var(--color-teal)] rounded hover:bg-[var(--color-teal-light)] transition-colors cursor-pointer"
                    >
                      <span>Inspect Details</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {activePilotPhase === 4 && (
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">
                          PHASE 4 · MONTHS 11–12 (Q4)
                        </span>
                        <span className="text-xs font-medium text-amber-800">
                          Objective: Dependency-aware decision & Year 1 stop rule
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-navy)] mb-0 font-medium">
                        Applies prespecified decision criteria. Prepares a confirmatory protocol, joint manuscript, and external funding case for the next justified generativity level.
                      </p>
                      <div className="text-xs text-[var(--color-text-muted)] flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="font-semibold text-[var(--color-navy)]">Deliverables:</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Confirmatory protocol</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Manuscript plan</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[11px]">Funding proposal</span>
                        <span className="mx-1 text-slate-300">|</span>
                        <span className="font-semibold text-amber-900">Stop Rule:</span>
                        <span>If distinctiveness fails, stop or revise locally without progressing to downstream claims.</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectPilotPhase(4, 'pilot-phase-4', true)}
                      className="self-start md:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-white border border-amber-400 rounded hover:bg-amber-50 transition-colors cursor-pointer"
                    >
                      <span>Inspect Details</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Vertical Timeline: 4 Phases */}
            <div className="timeline" role="region" aria-label="12-Month Pilot Timeline">
              {/* Phase 1 */}
              <div
                className={`timeline-phase cursor-pointer transition-all p-3 rounded-lg ${
                  activePilotPhase === 1 ? 'bg-teal-50/50 ring-1 ring-[var(--color-teal)]/30' : 'hover:bg-slate-50/60'
                }`}
                id="pilot-phase-1"
                onClick={() => handleSelectPilotPhase(1)}
              >
                <div className="phase-header">
                  <span className={`phase-tag ${activePilotPhase === 1 ? 'bg-[var(--color-teal)] text-white' : ''}`}>
                    Months 1–3
                  </span>
                  <h3 className="phase-title">Phase 1 — Empirical specification</h3>
                </div>
                <p>
                  Convert the current theoretical manuscript into a claim–assumption–test–failure register. Select target manifestations, coordinates, relations, and prespecified comparator models.
                </p>
                <div className="phase-outputs">
                  <strong>Primary outputs:</strong> Empirical Specification v1.0 and comparator matrix.
                </div>
              </div>

              {/* Phase 2 */}
              <div
                className={`timeline-phase cursor-pointer transition-all p-3 rounded-lg ${
                  activePilotPhase === 2 ? 'bg-teal-50/50 ring-1 ring-[var(--color-teal)]/30' : 'hover:bg-slate-50/60'
                }`}
                id="pilot-phase-2"
                onClick={() => handleSelectPilotPhase(2)}
              >
                <div className="phase-header">
                  <span className={`phase-tag ${activePilotPhase === 2 ? 'bg-[var(--color-teal)] text-white' : ''}`}>
                    Months 4–6
                  </span>
                  <h3 className="phase-title">Phase 2 — Bilingual operationalisation</h3>
                </div>
                <p>
                  Develop matched Russian–English stimuli and independent indicators. Conduct multidisciplinary review, blinded classification, and material refinement.
                </p>
                <div className="phase-outputs">
                  <strong>Primary outputs:</strong> Bilingual stimulus and indicator bank, coding materials, and material-validity record.
                </div>
              </div>

              {/* Phase 3 */}
              <div
                className={`timeline-phase cursor-pointer transition-all p-3 rounded-lg ${
                  activePilotPhase === 3 ? 'bg-teal-50/50 ring-1 ring-[var(--color-teal)]/30' : 'hover:bg-slate-50/60'
                }`}
                id="pilot-phase-3"
                onClick={() => handleSelectPilotPhase(3)}
              >
                <div className="phase-header">
                  <span className={`phase-tag ${activePilotPhase === 3 ? 'bg-[var(--color-teal)] text-white' : ''}`}>
                    Months 7–10
                  </span>
                  <h3 className="phase-title">Phase 3 — Core feasibility study</h3>
                </div>
                <p>
                  Conduct cognitive interviews and a small preregistered feasibility study under the university’s ethics and data-governance pathway.
                </p>
                <div className="phase-outputs">
                  <strong>Primary outputs:</strong> Core pilot report and documented revision log.
                </div>
              </div>

              {/* Phase 4 */}
              <div
                className={`timeline-phase cursor-pointer transition-all p-3 rounded-lg ${
                  activePilotPhase === 4 ? 'bg-amber-50/60 ring-1 ring-amber-300' : 'hover:bg-slate-50/60'
                }`}
                id="pilot-phase-4"
                onClick={() => handleSelectPilotPhase(4)}
              >
                <div className="phase-header">
                  <span
                    className={`phase-tag ${
                      activePilotPhase === 4 ? 'bg-amber-200 text-amber-900 border border-amber-300' : ''
                    }`}
                  >
                    Months 11–12
                  </span>
                  <h3 className="phase-title">Phase 4 — Dependency-aware decision</h3>
                </div>
                <p>
                  Apply prespecified decision criteria. Prepare a confirmatory protocol, joint manuscript, and external funding case for the next justified generativity level.
                </p>
                <div className="phase-outputs">
                  <strong>Primary outputs:</strong> Confirmatory protocol, manuscript plan, and funding-ready proposal.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6.9 Decision Gates */}
        <section className="section section-tinted" id="gates" aria-labelledby="gates-title">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Accountability Milestones</span>
              <h2 id="gates-title">Progression is conditional</h2>
              <p>
                The programme enforces clear decision gates at each milestone. The next study should be ethics-ready and funding-ready only if the relevant gate is passed.
              </p>
            </div>

            <div className="grid-4">
              {/* Gate 1 */}
              <div className="gate-card" id="gate-card-1">
                <span className="gate-badge">MONTH 3</span>
                <h4>Empirical Specification v1.0</h4>
                <p className="text-sm">
                  <strong>Pass condition:</strong> Every target claim has an independent operationalisation, identified auxiliary assumptions, prespecified competitors, and a local revision condition.
                </p>
              </div>

              {/* Gate 2 */}
              <div className="gate-card" id="gate-card-2">
                <span className="gate-badge">MONTH 6</span>
                <h4>Bilingual materials review</h4>
                <p className="text-sm">
                  <strong>Pass condition:</strong> Blinded classification and cognitive interviewing meet prespecified material-validity thresholds in Russian and English.
                </p>
              </div>

              {/* Gate 3 */}
              <div className="gate-card" id="gate-card-3">
                <span className="gate-badge">MONTH 9</span>
                <h4>Core feasibility study</h4>
                <p className="text-sm">
                  <strong>Pass condition:</strong> The pilot estimates the discriminability of manifestations, coordinates, and selected relation identities without circular scoring.
                </p>
              </div>

              {/* Gate 4 */}
              <div className="gate-card" id="gate-card-4">
                <span className="gate-badge">MONTH 12</span>
                <h4>Core decision</h4>
                <p className="text-sm">
                  <strong>Possible decisions:</strong>
                  <br />• Progression
                  <br />• Targeted revision
                  <br />• Discontinuation
                </p>
              </div>
            </div>

            {/* Prominent Restrained Stop-Rule Panel (Warm Ochre) */}
            <div className="stop-rule-panel" id="stop-rule-container" role="note">
              <h3 className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[var(--color-ochre-dark)]" />
                <span>Year 1 stop rule</span>
              </h3>
              <p>
                If independently constructed materials repeatedly fail to discriminate the manifestations or coordinate assignments, revise the upstream architecture before testing downstream generativities or constructing a broad LPT scale.
              </p>
            </div>
          </div>
        </section>

        {/* 6.10 Three-Year Research Horizon */}
        <section className="section" id="horizon" aria-labelledby="horizon-title">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Long-Term Trajectory</span>
              <h2 id="horizon-title">Research horizon</h2>
              <p>
                Empirical progression beyond Year 1 is conditional on the preceding decision gates. Studies for Year 2 and Year 3 have not yet begun and will only proceed upon passing earlier gates.
              </p>
            </div>

            <div className="grid-3">
              {/* Year 1 */}
              <div className="horizon-col" id="col-year-1">
                <h3>
                  Year 1<br />
                  <span className="text-[0.9375rem] font-normal text-[var(--color-teal)]">Operationalise and test</span>
                </h3>
                <ul>
                  <li>Claim–assumption–test–failure register</li>
                  <li>Bilingual operationalisation</li>
                  <li>Upstream architecture test</li>
                  <li>Initial Generativity I feasibility work</li>
                  <li>Confirmatory protocol and funding case</li>
                </ul>
              </div>

              {/* Year 2 */}
              <div className="horizon-col" id="col-year-2">
                <h3>
                  Year 2<br />
                  <span className="text-[0.9375rem] font-normal text-[var(--color-teal)]">Test mechanisms</span>
                </h3>
                <ul>
                  <li>Generativity I distinctiveness</li>
                  <li>Generativity II process pathway</li>
                  <li>Generativity III accessibility and configurations</li>
                  <li>Repeated-measures designs</li>
                  <li>Prespecified comparison with alternatives</li>
                </ul>
              </div>

              {/* Year 3 */}
              <div className="horizon-col" id="col-year-3">
                <h3>
                  Year 3<br />
                  <span className="text-[0.9375rem] font-normal text-[var(--color-teal)]">Model persons &amp; extensions</span>
                </h3>
                <ul>
                  <li>Person-specific architecture</li>
                  <li>Generativity IV developmental hypotheses</li>
                  <li>Social and dyadic extensions</li>
                  <li>Embodied and physiological feasibility work</li>
                  <li>Independent DCC feasibility programme</li>
                  <li>Multi-institutional funding proposal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6.11 Commitments & 6.12 Non-Claims Section */}
        <section className="section section-tinted" id="commitments" aria-labelledby="commit-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Integrity &amp; Open Science</span>
              <h2 id="commit-heading">How the programme will protect scientific independence</h2>
            </div>

            <div className="grid-2 mb-10">
              <div className="academic-card">
                <h4>Programme-wide scientific commitments</h4>
                <ul className="list-square pl-5 text-[0.9375rem] flex flex-col gap-2 text-[var(--color-text-main)]">
                  <li>Testability before advocacy</li>
                  <li>Independent evaluation</li>
                  <li>Comparator-first design</li>
                  <li>Preregistration where appropriate</li>
                  <li>Transparent methods and versioned materials</li>
                  <li>Design-specific power or precision analysis rather than arbitrary fixed sample sizes</li>
                </ul>
              </div>

              <div className="academic-card">
                <h4>Methodological safeguards</h4>
                <ul className="list-square pl-5 text-[0.9375rem] flex flex-col gap-2 text-[var(--color-text-main)]">
                  <li>Publication of informative null or disconfirming results</li>
                  <li>Stage gates permitting revision, narrowing, or rejection</li>
                  <li>Independent methods input and, where feasible, at least one collaborator without a commercial interest in LPT or DCC</li>
                  <li>Ethical and culturally responsible cross-linguistic research</li>
                  <li>Clear separation of theory, evidence, application, product claims, and clinical claims</li>
                </ul>
              </div>
            </div>

            {/* 6.12 Claims that require separate evidence */}
            <div className="caution-box" id="caution-unclaimed">
              <h4 className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#bc5a2b]" />
                <span>Claims that require separate evidence</span>
              </h4>
              <p className="text-[0.9375rem] mb-4 text-[#69290a]">
                To maintain strict scientific precision and prevent unverified assumptions, the Language Personality Theory Research Collaborative will not claim prematurely:
              </p>
              <ul className="list-unclaimed">
                <li>that the formal count of 28 relations proves 28 psychologically distinct contradiction classes;</li>
                <li>that the eight ideal configurations are fixed personality types, diagnoses, competence levels, or employee-selection categories;</li>
                <li>that illustrative trait labels or team-role propensities are validated mappings;</li>
                <li>that proposed body–organ or physiological correspondences are validated;</li>
                <li>that somatic hypotheses establish disease causation or support diagnosis or treatment;</li>
                <li>that DCC has demonstrated therapeutic efficacy;</li>
                <li>that any university collaborator endorses LPT, DCC, Inner Dialectica, or related commercial products.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6.13 Partnership Model */}
        <section className="section" id="partnership" aria-labelledby="partner-model-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Institutional Collaboration</span>
              <h2 id="partner-model-heading">A complementary university partnership</h2>
              <p>
                The project offers a bounded test of a specified, high-risk theoretical architecture rather than an open-ended request to endorse a new theory. It can produce a publishable methods or feasibility result even if major claims require revision.
              </p>
            </div>

            <div className="grid-2">
              {/* LPT-RC Contribution */}
              <div className="academic-card border-t-4 border-t-[var(--color-navy)]">
                <h3>LPT-RC contribution</h3>
                <ul className="list-square pl-5 text-[0.9375rem] flex flex-col gap-1.5 text-[var(--color-text-main)]">
                  <li>Theory stewardship and canonical source set</li>
                  <li>Dependency map and draft research materials</li>
                  <li>Draft manifestation, relation, and stimulus materials</li>
                  <li>Founder time and project coordination</li>
                  <li>Russian and English conceptual rationale</li>
                  <li>International and multilingual direction</li>
                  <li>Dissemination and future funding narrative</li>
                </ul>
              </div>

              {/* University Contribution */}
              <div className="academic-card border-t-4 border-t-[var(--color-teal)]">
                <h3>University contribution</h3>
                <ul className="list-square pl-5 text-[0.9375rem] flex flex-col gap-1.5 text-[var(--color-text-main)]">
                  <li>Academic co-lead and independent scientific challenge</li>
                  <li>Methods and psychometrics expertise</li>
                  <li>Ethics and data-governance route</li>
                  <li>Research assistants and student involvement</li>
                  <li>Appropriate participant access</li>
                  <li>Grant and contracting consultation</li>
                  <li>Institutional sponsorship if subsequently agreed in writing</li>
                </ul>
              </div>
            </div>

            {/* Possible Deliverables / Outputs */}
            <div className="academic-card mt-8">
              <h4>Anticipated joint outputs</h4>
              <div className="grid-2 mt-3">
                <ul className="list-square pl-5 text-sm text-[var(--color-text-muted)] flex flex-col gap-1">
                  <li>Empirical Specification v1.0</li>
                  <li>Comparator matrix</li>
                  <li>Russian–English stimulus and indicator bank</li>
                  <li>Coding and adjudication materials</li>
                </ul>
                <ul className="list-square pl-5 text-sm text-[var(--color-text-muted)] flex flex-col gap-1">
                  <li>Material-validity and feasibility report</li>
                  <li>Confirmatory protocol</li>
                  <li>Joint manuscript</li>
                  <li>Next-stage funding proposal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6.14 Collaboration Roles Currently Sought */}
        <section className="section section-tinted" id="roles" aria-labelledby="roles-title">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Academic Positions</span>
              <h2 id="roles-title">Current partnership needs</h2>
              <p>
                Appointments are project-based and time-bounded. Advisory participation does not imply endorsement. Authorship will follow documented contribution using the CRediT taxonomy.
              </p>
            </div>

            <div className="grid-4">
              {/* Role 1 */}
              <div className="academic-card" id="role-academic-co-lead">
                <h4>University Academic Co-Lead</h4>
                <span className="role-badge-unfilled">Proposed / unfilled</span>
                <p className="text-xs mt-3 text-[var(--color-text-muted)]">
                  Senior or mid-career university-based researcher providing independent scientific challenge, oversight, and institutional hosting.
                </p>
              </div>

              {/* Role 2 */}
              <div className="academic-card" id="role-psychometrics">
                <h4>Methods &amp; Psychometrics Lead</h4>
                <span className="role-badge-unfilled">Proposed / unfilled</span>
                <p className="text-xs mt-3 text-[var(--color-text-muted)]">
                  Psychometrician or quantitative methodologist with expertise in construct validation, item response models, and comparator-first designs.
                </p>
              </div>

              {/* Role 3 */}
              <div className="academic-card" id="role-cross-lang">
                <h4>Russian–English Contributor</h4>
                <span className="role-badge-unfilled text-[#15464a] bg-[#e8f2f3] border-[#b6d7d9]">
                  Proposed / project-specific
                </span>
                <p className="text-xs mt-3 text-[var(--color-text-muted)]">
                  Bilingual researcher specialising in psycholinguistics, cognitive interviewing, or cross-cultural stimulus matching.
                </p>
              </div>

              {/* Role 4 */}
              <div className="academic-card" id="role-open-science-data">
                <h4>Open Science &amp; Data Contributor</h4>
                <span className="role-badge-unfilled">Proposed / unfilled</span>
                <p className="text-xs mt-3 text-[var(--color-text-muted)]">
                  Researcher steward managing preregistration workflows, data dictionaries, FAIR-compliant repositories, and versioned materials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6.15 Governance, 6.16 Commercial Boundary, 6.17 Founder */}
        <section className="section" id="independence" aria-labelledby="indep-heading">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-eyebrow">Institutional Neutrality</span>
              <h2 id="indep-heading">Academic independence</h2>
            </div>

            <p>
              The Founder and Research Lead stewards theoretical provenance, definitions, version history, and programme coherence. He does not unilaterally determine empirical methods, results, or authorship.
            </p>
            <p>
              Project scientific decisions are shared with the relevant Project Lead, Methods Lead, and project co-leads. LPT-RC cannot self-approve studies requiring institutional ethics review.
            </p>
            <p>
              Valid disconfirming findings may be published. Commercial approval is not required for the interpretation or publication of research results.
            </p>
            <p>
              No institutional affiliation, sponsorship, or endorsement is implied unless documented in a written agreement with a named university partner.
            </p>

            {/* 6.16 Research-Commercial Boundary */}
            <div className="academic-card my-10 border-l-4 border-l-[var(--color-navy)]">
              <h3>Research and commercial activity are separate</h3>
              <p>
                LPT-RC is the research pathway. Inner Dialectica and Dialectical Contradictions Coaching constitute a separate application and commercialisation pathway.
              </p>
              <p>
                The LPT-RC identity and academic website must remain separate from Inner Dialectica or DCC sales and product pages.
              </p>
              <p>
                Relevant intellectual property and financial interests will be disclosed in proposals, publications, participant information, and partner agreements.
              </p>
              <p>
                Product users are not research participants without separate information, consent, ethics approval, and data-governance arrangements.
              </p>
              <p>
                Commercial materials must distinguish reflective or coaching use from validated assessment, diagnosis, treatment, or institutional endorsement.
              </p>
              <div className="bg-[var(--color-surface-subtle)] p-4 rounded border border-[var(--color-border-subtle)] mt-4">
                <p className="text-sm italic mb-0 text-[var(--color-text-main)]">
                  <strong>Conflict-of-interest disclosure:</strong> “Sergey V. Golubkov is the originator of Language Personality Theory and Dialectical Contradictions Coaching and may have a financial interest in their future commercial applications. Research conducted through university partnerships will be governed by the study protocol, institutional ethics and data requirements, prespecified analyses where applicable, and the right to publish results irrespective of outcome.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6.17 Founder and Research Lead Section */}
        <section
          className="section bg-[var(--color-surface)] border-y border-[var(--color-border-subtle)]"
          id="founder"
          aria-labelledby="founder-heading"
        >
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">FOUNDER AND RESEARCH LEAD</span>
              <h2 id="founder-heading">Research leadership and theoretical provenance</h2>
            </div>

            <div className="founder-grid">
              {/* Left Column: Academic Portrait (32-36% width on desktop) */}
              <div className="founder-portrait-col">
                <div className="founder-portrait-frame">
                  <Image
                    src={portraitSrc}
                    alt="Sergey V. Golubkov, Founder and Research Lead of LPT-RC"
                    width={400}
                    height={520}
                    priority
                    className="founder-portrait-img w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="founder-portrait-caption">
                  <span className="font-semibold text-[var(--color-navy)]">Sergey V. Golubkov, Ph.D.</span>
                  <br />
                  <span className="text-xs text-[var(--color-teal)]">
                    Founder and Research Lead, LPT-RC
                  </span>
                </div>
              </div>

              {/* Right Column: Identity, Biography, Selected Background, Links */}
              <div className="founder-bio-col">
                <div className="founder-name-title">
                  <h3 className="founder-name">Sergey V. Golubkov, Ph.D.</h3>
                  <div className="founder-role">
                    Independent Researcher
                    <br />
                    Founder and Research Lead, LPT-RC
                  </div>
                </div>

                {/* Founder Biography: British English per Section 5 */}
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
                    His role in LPT-RC is to steward the provenance, definitions, and coherence of the theory while opening its architecture to independent operationalisation, comparison, critical examination, and empirical testing. Theory stewardship does not give the founder unilateral authority over empirical methods, results, interpretation, or authorship.
                  </p>
                </div>

                {/* Selected background list: Section 6 */}
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

                {/* Founder links: Section 7 */}
                <div className="founder-links-row">
                  {/* ORCID: hidden if placeholder not replaced */}
                  {hasConfiguredOrcid && (
                    <a
                      href={ORCID_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline inline-flex items-center gap-1.5"
                      id="founder-orcid-link"
                    >
                      <span>ORCID</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Publications */}
                  <a
                    href="#foundations"
                    className="btn btn-sm btn-outline inline-flex items-center gap-1.5"
                    id="founder-publications-link"
                  >
                    <span>Selected Publications</span>
                  </a>

                  {/* Academic CV */}
                  {/* 
                    Expected local file: assets/Sergey_Golubkov_Academic_CV.pdf
                    Placed in /assets and /public/assets to activate.
                  */}
                  <a
                    href="/assets/Sergey_Golubkov_Academic_CV.pdf"
                    download="Sergey_Golubkov_Academic_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline inline-flex items-center gap-1.5"
                    id="founder-cv-link"
                    title="Download Sergey V. Golubkov Academic CV (PDF)"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Academic CV</span>
                  </a>

                  {/* Contact Sergey */}
                  {hasConfiguredEmail ? (
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Research%20Enquiry`}
                      className="btn btn-sm btn-primary inline-flex items-center gap-1.5"
                      id="founder-contact-link"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Contact Sergey</span>
                    </a>
                  ) : (
                    <span className="btn btn-sm btn-disabled opacity-60 cursor-not-allowed">
                      Contact details forthcoming
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6.18 Selected Foundations */}
        <section className="section section-tinted" id="foundations" aria-labelledby="foundations-title">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-eyebrow">Academic Literature</span>
              <h2 id="foundations-title">Selected foundations</h2>
              <p>
                Key publications outlining the theoretical architecture, historical foundation, and applied bridge:
              </p>
            </div>

            {/* Reference 1 */}
            <div className="reference-card" id="paper-ref-1">
              <div className="reference-label">Current theoretical master</div>
              <div className="reference-text">
                Golubkov, S. V. (2026). <em>From Taxonomies to Generative Architecture: Language Personality Theory and What a Theory of Personality Should Explain</em>. Zenodo.
              </div>
              <a
                href="https://doi.org/10.5281/zenodo.22727605"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-doi inline-flex items-center gap-1"
              >
                <span>https://doi.org/10.5281/zenodo.22727605</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reference 2 */}
            <div className="reference-card" id="paper-ref-2">
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

            {/* Reference 3 */}
            <div className="reference-card" id="paper-ref-3">
              <div className="reference-label">Historical foundation</div>
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
          </div>
        </section>

        {/* 6.19 Final Call to Action */}
        <section className="section" id="contact" aria-labelledby="cta-heading">
          <div className="container container-narrow text-center">
            <span className="section-eyebrow">Academic Fit &amp; Scoping</span>
            <h2 id="cta-heading">Explore a university partnership</h2>
            <p className="mx-auto mb-8 max-w-[64ch]">
              LPT-RC is seeking a university-based academic co-lead and an independent methods or psychometrics contributor for an initial 60–90 minute scientific scoping meeting.
              <br /><br />
              The meeting should assess scientific fit, identify the appropriate ethics and data pathway, and reach a go/no-go decision on a jointly revised 12-month pilot.
            </p>

            <div className="btn-group justify-center">
              {hasConfiguredEmail ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=LPT-RC%20Scientific%20Scoping%20Meeting`}
                  className="btn btn-primary"
                  id="final-meeting-link"
                >
                  Request a Scientific Scoping Meeting
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn-disabled cursor-not-allowed"
                  title="Contact details forthcoming"
                  disabled
                >
                  Contact details forthcoming
                </button>
              )}

              <a
                href="/assets/LPT_RC_University_Concept_Note_v0.2.pdf"
                download="LPT_RC_University_Concept_Note_v0.2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="final-concept-link"
                title="Download University Concept Note v0.2 (PDF)"
              >
                Download University Concept Note v0.2
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6.20 Footer */}
      <footer className="site-footer" role="contentinfo" id="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <h4>Language Personality Theory Research Collaborative</h4>
              <p className="text-[#92cbd0] text-xs mb-2">Public short form: LPT Research Collaborative</p>
              <p className="text-[#a4b3c4] text-xs max-w-[48ch]">
                An independent international, project-based network established to operationalise, test, compare, and extend the generative architecture of LPT through open, cross-linguistic, and person-specific research.
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="footer-links-list">
                <li>
                  <a href="https://doi.org/10.5281/zenodo.22727605" target="_blank" rel="noopener noreferrer">
                    2026 scientific manuscript
                  </a>
                </li>
                <li>
                  <a href="https://doi.org/10.2224/sbp.2002.30.6.571" target="_blank" rel="noopener noreferrer">
                    2002 foundational article
                  </a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#site-header">Back to top ↑</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>© 2026 LPT-RC · Independent international project-based research network</span>
            <span className="text-[#7b8e9f]">No institutional affiliation or endorsement is implied.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
