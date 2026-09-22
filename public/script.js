/**
 * Language Personality Theory Research Collaborative (LPT-RC)
 * Static Vanilla JavaScript for GitHub Pages
 * Zero external dependencies. Accessible and progressive.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  if (toggleBtn && primaryNav) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('is-open');
    });

    // Close mobile nav when clicking a link
    primaryNav.querySelectorAll('.nav-link, .header-cta-btn').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          primaryNav.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Placeholder Handling according to Specification Section 10:
  // 1. Email Placeholder Check (REPLACE_WITH_CONTACT_EMAIL)
  const emailButtons = document.querySelectorAll('a[href*="REPLACE_WITH_CONTACT_EMAIL"]');
  emailButtons.forEach(btn => {
    // Show neutral disabled state and notice
    btn.classList.add('btn-disabled');
    btn.setAttribute('aria-disabled', 'true');
    btn.removeAttribute('href');
    btn.textContent = 'Contact details forthcoming';
    btn.title = 'Institutional contact details will be activated upon publication of the partner channel.';
  });

  // 2. ORCID Placeholder Check (REPLACE_WITH_ORCID_URL)
  const orcidLinks = document.querySelectorAll('a[href*="REPLACE_WITH_ORCID_URL"], [data-orcid-placeholder]');
  orcidLinks.forEach(elem => {
    // Hide element entirely if placeholder is unreplaced
    elem.style.display = 'none';
  });

  // 3. Concept Note PDF Availability Check
  const conceptNoteLinks = document.querySelectorAll('a[href*="LPT_RC_University_Concept_Note_v0.2.pdf"]');
  conceptNoteLinks.forEach(link => {
    // Test if file is available; if not or if marked inactive, style disabled
    fetch(link.getAttribute('href'), { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          disableConceptNoteLink(link);
        }
      })
      .catch(() => {
        disableConceptNoteLink(link);
      });
  });

  function disableConceptNoteLink(link) {
    link.classList.add('btn-disabled');
    link.setAttribute('aria-disabled', 'true');
    link.title = 'University Concept Note v0.2 file will be available in assets/ directory upon repository setup.';
  }

  // 4. Personality Cube Vertex Hover & Click-to-Copy
  const cubeDiagram = document.getElementById('cube-diagram');
  if (cubeDiagram) {
    const feedbackText = cubeDiagram.querySelector('.cube-feedback-text');
    const vertices = cubeDiagram.querySelectorAll('.cube-vertex');
    const quickButtons = cubeDiagram.querySelectorAll('.cube-quick-copy-btn');

    function showCopiedFeedback(vector, vertexId) {
      if (feedbackText) {
        feedbackText.innerHTML = `✓ Copied formal vector <strong>${vector}</strong> to clipboard`;
        feedbackText.style.color = '#047857';
      }
      // Highlight quick button if present
      quickButtons.forEach(btn => {
        if (btn.getAttribute('data-id') === vertexId) {
          btn.classList.add('is-copied');
          btn.textContent = `✓ ${vector}`;
          setTimeout(() => {
            btn.classList.remove('is-copied');
            btn.textContent = vector;
          }, 2000);
        }
      });
      // Flash vertex label
      const targetVertex = document.getElementById(`static-${vertexId}`);
      if (targetVertex) {
        const textElem = targetVertex.querySelector('text');
        if (textElem) {
          const original = textElem.textContent;
          textElem.textContent = '✓ Copied';
          textElem.setAttribute('fill', '#047857');
          setTimeout(() => {
            textElem.textContent = original;
            textElem.setAttribute('fill', '#112238');
          }, 2000);
        }
      }
      setTimeout(() => {
        if (feedbackText) {
          feedbackText.textContent = 'Hover vertices to highlight · Click any coordinate to copy';
          feedbackText.style.color = 'var(--color-text-light)';
        }
      }, 2500);
    }

    function copyVector(vector, vertexId) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(vector).then(() => {
          showCopiedFeedback(vector, vertexId);
        }).catch(() => {
          showCopiedFeedback(vector, vertexId);
        });
      } else {
        showCopiedFeedback(vector, vertexId);
      }
    }

    vertices.forEach(v => {
      const vector = v.getAttribute('data-vector');
      const vId = v.getAttribute('data-id');

      v.addEventListener('mouseenter', () => {
        v.classList.add('is-hovered');
        if (feedbackText) {
          feedbackText.innerHTML = `Formal vector: <strong>${vector}</strong> (Click to copy)`;
          feedbackText.style.color = 'var(--color-teal)';
        }
      });

      v.addEventListener('mouseleave', () => {
        v.classList.remove('is-hovered');
        if (feedbackText && !feedbackText.textContent.includes('Copied')) {
          feedbackText.textContent = 'Hover vertices to highlight · Click any coordinate to copy';
          feedbackText.style.color = 'var(--color-text-light)';
        }
      });

      v.addEventListener('click', () => {
        copyVector(vector, vId);
      });

      v.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          copyVector(vector, vId);
        }
      });
    });

    quickButtons.forEach(btn => {
      const vector = btn.getAttribute('data-vector');
      const vId = btn.getAttribute('data-id');

      btn.addEventListener('click', () => {
        copyVector(vector, vId);
      });
    });
  }

  // Flagship Pilot 12-Month Visual Progress Indicator
  const pilotCard = document.getElementById('pilot-progress-indicator');
  if (pilotCard) {
    const rulerButtons = pilotCard.querySelectorAll('.pilot-ruler-btn');
    const trackButtons = pilotCard.querySelectorAll('.pilot-track-btn');
    const timelinePhases = document.querySelectorAll('.timeline-phase');
    const inspector = document.getElementById('pilot-inspector-content');

    const phaseData = {
      1: {
        tag: 'PHASE 1 · MONTHS 1–3 (Q1)',
        objective: 'Objective: Empirical specification & comparator models',
        desc: 'Converts theoretical manuscript into a claim–assumption–test–failure register. Selects target manifestations, coordinates, relations, and prespecified competitor models.',
        deliverables: ['Empirical Specification v1.0', 'Comparator matrix'],
        gate: 'Gate 1 (Month 3)',
        gateCondition: 'Every target claim has independent operationalisation & auxiliary assumptions.',
        cardId: 'phase-1',
        isPhase4: false
      },
      2: {
        tag: 'PHASE 2 · MONTHS 4–6 (Q2)',
        objective: 'Objective: Bilingual Russian–English operationalisation',
        desc: 'Develops matched Russian–English stimuli and independent indicators. Conducts multidisciplinary review, blinded classification, and material refinement.',
        deliverables: ['Bilingual stimulus bank', 'Coding materials', 'Material-validity record'],
        gate: 'Gate 2 (Month 6)',
        gateCondition: 'Blinded classification meets validity thresholds in RU & EN.',
        cardId: 'phase-2',
        isPhase4: false
      },
      3: {
        tag: 'PHASE 3 · MONTHS 7–10 (Q3–Q4)',
        objective: 'Objective: Preregistered core feasibility study',
        desc: 'Conducts cognitive interviews and a small preregistered feasibility study under the university’s ethics and data-governance pathway.',
        deliverables: ['Core pilot report', 'Documented revision log'],
        gate: 'Gate 3 (Month 9–10)',
        gateCondition: 'Clean execution, coding reliability, and initial discriminability documented.',
        cardId: 'phase-3',
        isPhase4: false
      },
      4: {
        tag: 'PHASE 4 · MONTHS 11–12 (Q4)',
        objective: 'Objective: Dependency-aware decision & Year 1 stop rule',
        desc: 'Applies prespecified decision criteria. Prepares a confirmatory protocol, joint manuscript, and external funding case for the next justified generativity level.',
        deliverables: ['Confirmatory protocol', 'Manuscript plan', 'Funding proposal'],
        gate: 'Year 1 Decision Gate (Month 12)',
        gateCondition: 'Year 1 stop rule enforced: if distinctiveness fails, stop or revise locally without progressing.',
        cardId: 'phase-4',
        isPhase4: true
      }
    };

    function setActivePhase(phaseId, scrollToCard = false) {
      const data = phaseData[phaseId];
      if (!data) return;

      // Update track buttons
      trackButtons.forEach(btn => {
        const pId = parseInt(btn.getAttribute('data-phase'), 10);
        const isMatch = pId === phaseId;
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        btn.classList.toggle('is-active', isMatch && !data.isPhase4);
        btn.classList.toggle('is-active-phase4', isMatch && data.isPhase4);
      });

      // Update ruler buttons
      rulerButtons.forEach(btn => {
        const m = parseInt(btn.getAttribute('data-month'), 10);
        const pForM = m <= 3 ? 1 : m <= 6 ? 2 : m <= 10 ? 3 : 4;
        const isMatch = pForM === phaseId;
        btn.classList.toggle('is-active', isMatch && !data.isPhase4);
        btn.classList.toggle('is-active-phase4', isMatch && data.isPhase4);
      });

      // Update timeline items
      timelinePhases.forEach(tp => {
        const tpId = tp.id;
        const isMatch = tpId === data.cardId;
        tp.classList.toggle('is-active', isMatch);
      });

      // Update dynamic inspector
      if (inspector) {
        const badgeColor = data.isPhase4 ? 'color: #78350f; background-color: #fef3c7; border: 1px solid #fde68a;' : 'color: var(--color-teal); background-color: var(--color-teal-light);';
        const deliverablesHtml = data.deliverables.map(d => `<span style="display:inline-block; padding:0.15rem 0.4rem; background:#fff; border:1px solid var(--color-border); border-radius:4px; font-family:var(--font-mono); font-size:0.6875rem;">${d}</span>`).join(' ');

        inspector.innerHTML = `
          <div style="flex: 1; max-width: 820px;">
            <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; ${badgeColor}">
                ${data.tag}
              </span>
              <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-text-muted);">
                ${data.objective}
              </span>
            </div>
            <p style="font-size: 0.875rem; color: var(--color-navy); margin-bottom: 0.5rem; font-weight: 500;">
              ${data.desc}
            </p>
            <div style="font-size: 0.75rem; color: var(--color-text-muted); display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem;">
              <strong style="color: var(--color-navy);">Deliverables:</strong>
              ${deliverablesHtml}
              <span style="color: #cbd5e1; margin: 0 0.25rem;">|</span>
              <strong style="color: ${data.isPhase4 ? '#92400e' : 'var(--color-navy)'};">${data.gate}:</strong>
              <span>${data.gateCondition}</span>
            </div>
          </div>
          <button type="button" class="pilot-jump-btn" id="pilot-inspector-jump-btn" aria-label="Inspect ${data.tag} details">
            <span>Inspect Details</span>
            <span aria-hidden="true">↓</span>
          </button>
        `;

        const jumpBtn = document.getElementById('pilot-inspector-jump-btn');
        if (jumpBtn) {
          jumpBtn.addEventListener('click', () => {
            scrollToPhaseCard(data.cardId);
          });
        }
      }

      if (scrollToCard) {
        scrollToPhaseCard(data.cardId);
      }
    }

    function scrollToPhaseCard(cardId) {
      const target = document.getElementById(cardId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('highlight-flash');
        setTimeout(() => {
          target.classList.remove('highlight-flash');
        }, 2000);
      }
    }

    // Attach listeners
    trackButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = parseInt(btn.getAttribute('data-phase'), 10);
        setActivePhase(pId);
      });
    });

    rulerButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const m = parseInt(btn.getAttribute('data-month'), 10);
        const pForM = m <= 3 ? 1 : m <= 6 ? 2 : m <= 10 ? 3 : 4;
        setActivePhase(pForM);
      });
    });

    timelinePhases.forEach(tp => {
      tp.addEventListener('click', () => {
        if (tp.id === 'phase-1') setActivePhase(1);
        else if (tp.id === 'phase-2') setActivePhase(2);
        else if (tp.id === 'phase-3') setActivePhase(3);
        else if (tp.id === 'phase-4') setActivePhase(4);
      });
    });

    // Initialize with Phase 1
    setActivePhase(1);
  }
});
