// Named icon set. Each entry is the FULL inner markup of the <svg> used in the
// existing pages (everything inside the <svg ...> ... </svg> children), so the
// layout can wrap it with the correct stroke-width per context. Seeded directly
// from the SVGs already present in the hand-written HTML, byte-for-byte, so the
// rendered output is identical. `name` -> array of inner path/shape elements.
//
// Convention: store the inner SVG markup as a string. The layout inlines it
// inside <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
// stroke-width="1.8">...</svg> (the stroke-width used by all card icons).

module.exports = {
  // --- shared / multi-page card icons ---
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M5 20a7 7 0 0 1 14 0"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',
  shieldCheck: '<path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="m9.2 12 2 2 3.6-3.8"/>',
  sliders: '<path d="M3 7h18M3 12h18M3 17h12"/><circle cx="19" cy="17" r="2"/>',
  clipboardCheck: '<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  bars: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9.5" r="2.4"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M15 19a4 4 0 0 1 6 0"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',

  // --- technology-services specific ---
  appWindow: '<path d="M4 5h16v12H4z"/><path d="m8 9 2.5 2L8 13M13 13h3"/>',
  grid: '<rect x="3" y="4" width="7" height="7" rx="1.5"/><rect x="14" y="4" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',

  // --- customer-experience specific ---
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 4.5 1.5c0 1.7-2.5 2-2.5 3.5M12 17h.01"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h7v18H6a2 2 0 0 1-2-2Z"/><path d="M13 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/>',
  ticket: '<path d="M4 4h16v12H4z"/><path d="M2 20h20M9 9h6M9 12h4"/>',
  refresh: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h6a4 4 0 0 1 4 4v6M6 8v6a4 4 0 0 0 4 4h6"/>',
  checkDoc: '<path d="M4 4h16v12H4z"/><path d="M2 20h20M9 8l2 2 4-4"/>',

  // --- "ideal for" audience icons (shared across service pages) ---
  building: '<path d="M3 21V8l5-3 5 3v13M13 21V11l4-2 4 2v10M3 21h18"/>',
  heart: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/>',
  church: '<path d="M12 2v6M9 5h6M5 22V11l7-4 7 4v11M5 22h14M9 22v-5h6v5"/>',
  rocket: '<path d="M12 19c-4 0-7-2.5-7-6 0-4 3-9 7-9s7 4 7 8c0 2.5-1.5 4-3.5 4S15 14 14 14c-1.2 0-2 .8-2 2 0 1.5-.5 3 0 3Z"/>',

  // --- "why thrtn85" item icons (shared) ---
  home2: '<path d="M3 21V7l9-4 9 4v14M3 21h18M9 21v-6h6v6"/>',
  badge: '<path d="m11 14 2 2 4-4M3 11l5-5 4 3 4-4 5 5-9 9-9-8Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',

  // --- creative-branding specific ---
  creativeDots: '<path d="M12 19c-4 0-7-2.5-7-6 0-4 3-9 7-9s7 4 7 8c0 2.5-1.5 4-3.5 4S15 14 14 14c-1.2 0-2 .8-2 2 0 1.5-.5 3 0 3Z"/><circle cx="8.5" cy="10.5" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="15.5" cy="10.5" r="1"/>',
  idCard: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h8M8 16h5"/>',
  guidelines: '<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  document: '<path d="M4 4h12l4 4v12H4z"/><path d="M8 12h8M8 16h6M8 8h4"/>',
  layers: '<path d="M3 11a9 9 0 0 1 18 0M3 11l9 4 9-4M3 11v4l9 4 9-4v-4"/>',

  // --- managed-support specific ---
  cloudUp: '<path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9a3.5 3.5 0 0 1-.5 9H7Z"/><path d="M12 16v-5M9.5 13 12 10.5 14.5 13"/>',
  updateArrow: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>',
  monitorEye: '<path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9M3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9"/><circle cx="12" cy="12" r="3"/>',
  database: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2 2l6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z"/>',

  // --- strategic-partnerships specific ---
  display: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  camera: '<rect x="3" y="6" width="14" height="12" rx="2"/><path d="m17 10 4-2v8l-4-2Z"/>'
};
