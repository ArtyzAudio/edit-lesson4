// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in book.html:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class and add a .seen .unit-art .NAME
// rule with its keyframes in book.html (see the examples there: swap-a, hop, spin, tilt, breathe, ...).
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const C = (cx, cy, r, cls = '') => `<circle class="d ${cls}" pathLength="1" style="--k:${k++}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Подготовка: a phone frame with the eye line, the frame zooming in around the eyes.
    reset(P('M404 8h62a12 12 0 0 1 12 12v140a12 12 0 0 1-12 12h-62a12 12 0 0 1-12-12V20a12 12 0 0 1 12-12z', 'a') +
      P('M392 74H478', '', 'stroke-dasharray=".04 .03"') +
      `<g class="t zoom" style="--k:${k++}"><ellipse cx="435" cy="86" rx="20" ry="30" fill="none" stroke="currentColor" stroke-width="3"/>` +
      `<circle cx="428" cy="74" r="3" fill="currentColor"/><circle cx="442" cy="74" r="3" fill="currentColor"/></g>` +
      Tx(490, 80, '690', 24) + Tx(250, 150, '1080 × 1920', 22, 'a')),
  ];
})();
