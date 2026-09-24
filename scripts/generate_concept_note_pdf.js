/**
 * Script to generate LPT_RC_University_Concept_Note_v0.3.pdf
 * Authoritative, professional 3-page academic discussion draft.
 */

const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outputPath = path.join(__dirname, '../assets/LPT_RC_University_Concept_Note_v0.3.pdf');
const publicOutputPath = path.join(__dirname, '../public/assets/LPT_RC_University_Concept_Note_v0.3.pdf');

// Ensure directories exist
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.mkdirSync(path.dirname(publicOutputPath), { recursive: true });

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 48, bottom: 48, left: 52, right: 52 },
  bufferPages: true,
  autoFirstPage: true
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const NAVY = '#112238';
const TEAL = '#0d7377';
const DARK_GRAY = '#2d3748';
const MUTED_GRAY = '#5a6a7e';
const LIGHT_BG = '#f4f7f9';
const BORDER_COLOR = '#cbd5e1';

// Helper for section headings
function sectionHeading(num, title) {
  doc.moveDown(0.7);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(TEAL).text(`${num}. ${title.toUpperCase()}`, { letterSpacing: 0.5 });
  doc.moveDown(0.2);
  doc.strokeColor(BORDER_COLOR).lineWidth(0.75).moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
  doc.moveDown(0.35);
}

function subsectionHeading(title) {
  doc.moveDown(0.35);
  doc.fontSize(10).font('Helvetica-Bold').fillColor(NAVY).text(title);
  doc.moveDown(0.15);
}

function bodyText(text, options = {}) {
  doc.fontSize(8.8).font('Helvetica').fillColor(DARK_GRAY).text(text, {
    lineGap: 2.2,
    paragraphGap: 4,
    align: 'justify',
    ...options
  });
}

function bulletPoint(label, text) {
  doc.fontSize(8.8).font('Helvetica').fillColor(DARK_GRAY);
  const indent = 14;
  const left = doc.page.margins.left + indent;
  const width = doc.page.width - doc.page.margins.right - left;

  const y = doc.y;
  doc.font('Helvetica-Bold').fillColor(NAVY).text('• ' + label + ': ', left, y, { continued: true });
  doc.font('Helvetica').fillColor(DARK_GRAY).text(text, { width, lineGap: 2.0, paragraphGap: 3.5 });
}

// ==================== PAGE 1 ====================
// Document Header
doc.fontSize(8).font('Helvetica-Bold').fillColor(TEAL).text('LANGUAGE PERSONALITY THEORY RESEARCH COLLABORATIVE (LPT-RC)', { letterSpacing: 0.5 });
doc.fontSize(7.5).font('Helvetica').fillColor(MUTED_GRAY).text('Public concept note — discussion draft · Version 0.3 · September 2026');

doc.moveDown(0.4);
doc.strokeColor(TEAL).lineWidth(1.5).moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
doc.moveDown(0.6);

// Main Title
doc.fontSize(15).font('Helvetica-Bold').fillColor(NAVY).text('Towards an Architecture-First Science of Personality: Cross-Linguistic Operationalisation and Feasibility Pilot');
doc.moveDown(0.25);
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(TEAL).text('Founder-led research initiative · University Academic Co-Lead sought · Pilot subject to joint design and funding');
doc.moveDown(0.4);

// Metadata box
doc.rect(doc.page.margins.left, doc.y, doc.page.width - doc.page.margins.left - doc.page.margins.right, 42).fillAndStroke(LIGHT_BG, BORDER_COLOR);
const boxY = doc.y + 7;
doc.fontSize(7.8).font('Helvetica-Bold').fillColor(NAVY).text('Founder & Theoretical Lead: ', doc.page.margins.left + 10, boxY, { continued: true });
doc.font('Helvetica').fillColor(DARK_GRAY).text('Sergey V. Golubkov (Independent Researcher · ORCID: 0000-0002-5288-7817)');
doc.font('Helvetica-Bold').fillColor(NAVY).text('Institutional Seeking: ', doc.page.margins.left + 10, boxY + 12, { continued: true });
doc.font('Helvetica').fillColor(DARK_GRAY).text('University Academic Co-Lead & Methods Lead (Partnership subject to formal institutional agreement)');
doc.font('Helvetica-Bold').fillColor(NAVY).text('Contact: ', doc.page.margins.left + 10, boxY + 24, { continued: true });
doc.font('Helvetica').fillColor(TEAL).text('sergey.golubkov@innerdialectica.com');

doc.y = boxY + 40;

// Section 1
sectionHeading('1', 'Executive Summary & Initiative Status');
bodyText('This concept note invites expressions of interest from university-based researchers in personality psychology, computational linguistics, psychometrics, or cognitive science to serve as Academic Co-Lead for an independent, preregistered empirical test of Language Personality Theory (LPT).');
bodyText('Status clarification: At present, LPT-RC is a founder-led independent research initiative. Sergey V. Golubkov is currently its only confirmed participant. No university partner, academic co-lead, methods lead, research team, institutional sponsorship, or grant funding has yet been secured. The initiative is neither an established international network nor a commercial consultancy; it is an open research project seeking rigorous university collaboration.');
bodyText('The scientific question: Personality taxonomies (such as the Big Five and HEXACO) offer robust statistical frameworks for describing between-person differences, but they do not uniquely specify a generative, within-person functional architecture. LPT proposes that recurrent, pre-theoretical distinctions in natural language reflect substantive constraints on a candidate part–whole functional architecture of personality. The practical empirical question is plain: Can the structural distinctions proposed by LPT be independently identified, operationalised, and reliably discriminated across Russian and English corpora, including when rigorously compared against plausible alternative explanations (such as semantic similarity, word frequency, or conventional trait models)?');

// Section 2
sectionHeading('2', 'Theoretical Architecture & Scientific Distinctions');
bodyText('Language Personality Theory models psychological functioning through eight structural manifestations arranged across three bipolar coordinates:');
bulletPoint('Three Polar Coordinates', 'Subjective–Objective, Natural–Social, and Inter–Intrapersonal. These form a constrained three-dimensional reference space (the Personality Cube).');
bulletPoint('Eight Functional Manifestations', 'Needs (0,0,0), Perception (1,0,0), Emotions (0,0,1), Actions (1,0,1), Values (0,1,0), Thought (1,1,0), Evaluation (0,1,1), and Speech (1,1,1). (Arranged within the 3D frame; not mutually orthogonal).');
bulletPoint('28 Pairwise Structural Relations', 'Formally derived from all pairwise combinations of eight positions (8 × 7 / 2 = 28): 12 cube edges, 12 face diagonals, and 4 space diagonals. Combinatorial derivation is a formal property, not empirical validation.');
bulletPoint('Generativity III & Eight Configurations', 'Generativity III proposes eight idealised whole-person configurations, one per focal manifestation, with a 1–3–3–1 structural-distance pattern. The link between distance and accessibility is a separate testable hypothesis; Cube geometry alone does not prove accessibility ordering or discrete personality classes.');
bulletPoint('Three Distinct Claims & Pilot Focus', 'The programme strictly distinguishes: (1) eight manifestations, (2) 28 pairwise relations, and (3) eight idealised configuration templates. The Year 1 pilot focuses solely on upstream architecture and selected relations, not whole-person validation.');
bodyText('Canonical reference: Golubkov, S. V. (2026). From Taxonomies to Generative Architecture: Language Personality Theory and What a Theory of Personality Should Explain. Zenodo Preprint. DOI: 10.5281/zenodo.22727605.');

// ==================== PAGE 2 ====================
doc.addPage();

// Section 3
sectionHeading('3', 'Proposed Collaborative Study: 12-Month Bilingual Feasibility Pilot');
bodyText('The proposed Russian–English pilot is an exploratory project to be jointly co-designed with the incoming Academic Co-Lead. The twelve-month timeline outlined below is an indicative, conditional planning framework rather than a funded or contractually locked schedule. Scope, start date, staffing, sample size, measurement protocols, progression criteria, and budget will depend on the agreed protocol, institutional approvals, and available resources.');

subsectionHeading('Indicative Phased Structure:');
bulletPoint('Phase 1 (Months 1–3) · Empirical Specification & Comparator Models', 'Translate theoretical claims into an explicit claim–assumption–test–failure register. Prespecify competitor models (e.g., distributional semantics, sentiment, Big Five facet markers). Formulate preregistration plan.');
bulletPoint('Phase 2 (Months 4–6) · Bilingual Russian–English Operationalisation', 'Develop matched stimulus materials and text markers in Russian and English. Conduct multidisciplinary review and blinded classification checks to ensure markers do not depend on LPT jargon or translation artefacts.');
bulletPoint('Phase 3 (Months 7–10) · Preregistered Feasibility Study', 'Execute small-scale preregistered data collection and text classification under host university ethics and data-governance approval. Evaluate construct recoverability and classification stability.');
bulletPoint('Phase 4 (Months 11–12) · Evaluation & Joint Progression Decision', 'Apply prespecified progression criteria. Prepare joint manuscript reporting findings. If feasibility is demonstrated, co-author an external grant proposal (e.g., UKRI, DFG, NSF). If core distinctions fail, enforce stop rules or document local theoretical revisions.');

subsectionHeading('Methodological Precision & Removal of Arbitrary Thresholds:');
bodyText('In contrast to premature exploratory metrics, sample sizes and decision thresholds will not be set arbitrarily. Sample size, inter-rater reliability targets, and classification benchmarks will be determined through design-specific power or precision analyses and joint methodological review during Phase 1. The study will incorporate preregistered stop rules and asymmetric failure localisation to isolate whether an empirical failure challenges a specific linguistic operationalisation, an auxiliary assumption, or the core architecture.');

// Section 4
sectionHeading('4', 'Collaboration Model: "Who Will Do What?"');
bodyText('The collaborative model maintains a clear, equitable division of scientific responsibilities, distinguishing confirmed contributions from roles currently sought:');

bulletPoint('Sergey V. Golubkov (Founder & Theoretical Lead)', 'Contributes the LPT theoretical architecture, source publications, and draft stimulus materials; helps formulate testable empirical claims and interpret what findings mean for the theoretical model. Does not provide project funding or host university infrastructure.');
bulletPoint('University Academic Co-Lead (Partner Sought)', 'Co-designs the empirical study, provides independent scientific scrutiny, supervises data collection, and, subject to formal institutional agreement, leads university-based implementation and ethics compliance.');
bulletPoint('Methods Lead (Partner Sought)', 'Oversees psychometric operationalisation, comparator model specification, statistical power, and analytical execution. (May be combined with Academic Co-Lead depending on expertise).');
bulletPoint('Russian–English Research Contributor (Partner Sought)', 'Develops and audits bilingual stimuli and classification rubrics to ensure findings are cross-linguistically robust and free of translational bias.');
bulletPoint('Research Assistance & Data Support', 'Will be scoped and recruited with the university partner according to the agreed design and secured project funding.');

subsectionHeading('Decision-Making & Scientific Governance:');
bodyText('The founder contributes theoretical definitions and substantive rationale; empirical methods, study design, statistical analysis, and substantive conclusions are determined jointly and remain open to unreserved scientific critique. University ethics, participant safety, and data governance strictly follow the host institution’s formal procedures.');

// ==================== PAGE 3 ====================
doc.addPage();

// Section 5
sectionHeading('5', 'Academic Integrity, Authorship & Open Science Principles');
bodyText('To establish a transparent foundation for institutional partnership, LPT-RC commits to standard international academic best practices:');

bulletPoint('Contribution-Based Authorship (CRediT)', 'Authorship on all resulting scholarly publications will reflect actual, substantive contributions, documented transparently using the Contributor Roles Taxonomy (CRediT) and the applicable journal’s editorial policies. Co-authorship is earned through contribution, not guaranteed a priori.');
bulletPoint('Unrestricted Right to Report Negative Findings', 'University partners retain the unambiguous right to analyse, report, and submit negative, null, or disconfirming findings for peer-reviewed publication without commercial veto. Academic scrutiny requires that uncorroborated hypotheses be openly published to advance the discipline.');
bulletPoint('Responsible Open Science & Data Governance', 'Open-science materials, analysis scripts, coding rubrics, and metadata will be shared openly on public repositories (e.g., OSF, Zenodo). Sharing of participant-level data is strictly subject to participant consent, institutional ethics approval, applicable data-protection laws (e.g., GDPR), and the partner university’s governance policies.');
bulletPoint('Strict Research / Commercial Separation', 'LPT-RC is dedicated purely to open academic research. Applied frameworks (such as Dialectical Contradictions Coaching / DCC) and commercial platforms (such as Inner Dialectica) are distinct private activities. University collaboration does not imply endorsement of commercial products or coaching services. DCC and somatic/physiological correspondences remain unvalidated hypotheses.');

// Section 6
sectionHeading('6', 'The Proposed Institutional Exchange');
bodyText('The partnership offers a mutually beneficial, clearly bounded opportunity:');
bulletPoint('What the Founder Brings', 'A generative, mathematically specified personality architecture; foundational publications; draft stimulus banks; founder time; and active participation in developing and interpreting the research.');
bulletPoint('What the University Partner Brings', 'Rigorous independent methodological scrutiny; empirical study design; university-based hosting; institutional ethics oversight; and co-direction of external grant applications.');
bulletPoint('Resource Requirements for Discussion', 'Project budget, research assistance, participant compensation, and computing resources are matters for joint discussion and external grant co-applications; they are not assumed to exist prior to formal institutional agreement.');

// Section 7
sectionHeading('7', 'Next Steps: Initiating an Exploratory Scoping Discussion');
bodyText('University faculty, postdocs, and laboratory heads interested in exploring an Academic Co-Lead role are warmly invited to schedule an exploratory scientific scoping meeting. Discussions will focus on aligning scientific interests, reviewing draft empirical materials, and evaluating candidate grant mechanisms.');

doc.moveDown(0.5);

// Call to action box
doc.rect(doc.page.margins.left, doc.y, doc.page.width - doc.page.margins.left - doc.page.margins.right, 40).fillAndStroke(LIGHT_BG, TEAL);
const ctaY = doc.y + 8;
doc.fontSize(9).font('Helvetica-Bold').fillColor(NAVY).text('Contact for Academic Collaboration:', doc.page.margins.left + 12, ctaY);
doc.fontSize(8.5).font('Helvetica').fillColor(DARK_GRAY).text('Sergey V. Golubkov · Founder & Theoretical Lead, LPT-RC', doc.page.margins.left + 12, ctaY + 12);
doc.font('Helvetica-Bold').fillColor(TEAL).text('Email: sergey.golubkov@innerdialectica.com · ORCID: 0000-0002-5288-7817', doc.page.margins.left + 12, ctaY + 23);

doc.y = ctaY + 38;

doc.moveDown(0.5);
doc.fontSize(7.5).font('Helvetica-Oblique').fillColor(MUTED_GRAY).text('Note: This public concept note represents a preliminary discussion draft subject to revision in collaboration with an academic co-lead. No institutional affiliation, endorsement, or external consortium status is implied.', { align: 'center' });

// Add running headers and footers to all pages
const range = doc.bufferedPageRange();
console.log(`PDF generated with exactly ${range.count} pages.`);
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);

  // Temporarily set margins to 0 so header/footer text positioned outside normal margins does not trigger auto page breaks
  const savedBottom = doc.page.margins.bottom;
  const savedTop = doc.page.margins.top;
  doc.page.margins.bottom = 0;
  doc.page.margins.top = 0;

  // Running Header (pages 2 and 3)
  if (i > 0) {
    doc.fontSize(7.2).font('Helvetica').fillColor(MUTED_GRAY)
      .text('Language Personality Theory Research Collaborative (LPT-RC) · Public Concept Note v0.3', 52, 24, { width: doc.page.width - 104, align: 'left', lineBreak: false });
    doc.strokeColor(BORDER_COLOR).lineWidth(0.5).moveTo(52, 34).lineTo(doc.page.width - 52, 34).stroke();
  }

  // Running Footer (all pages)
  const footerY = doc.page.height - 30;
  doc.strokeColor(BORDER_COLOR).lineWidth(0.5).moveTo(52, footerY - 6).lineTo(doc.page.width - 52, footerY - 6).stroke();
  doc.fontSize(7.2).font('Helvetica').fillColor(MUTED_GRAY)
    .text('Contact: sergey.golubkov@innerdialectica.com · ORCID: 0000-0002-5288-7817', 52, footerY, { lineBreak: false });
  doc.fontSize(7.2).font('Helvetica').fillColor(MUTED_GRAY)
    .text(`Page ${i + 1} of ${range.count}`, 52, footerY, { width: doc.page.width - 104, align: 'right', lineBreak: false });

  doc.page.margins.bottom = savedBottom;
  doc.page.margins.top = savedTop;
}

doc.end();

writeStream.on('finish', () => {
  // Also copy to public/assets
  fs.copyFileSync(outputPath, publicOutputPath);
  console.log(`Generated ${outputPath} (${fs.statSync(outputPath).size} bytes)`);
  console.log(`Copied to ${publicOutputPath} (${fs.statSync(publicOutputPath).size} bytes)`);
});
