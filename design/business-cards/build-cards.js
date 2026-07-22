const fs = require("fs");
const path = require("path");
const QR = require("qrcode");

const OUT = path.join(__dirname);
// UK standard: 85 × 55 mm. ViewBox at 10px/mm → 850 × 550
const W = 850;
const H = 550;

const mark = `
  <g fill="#E8C36A">
    <path d="M0 72H28V36L0 72Z"/>
    <path d="M36 72H72V18L36 72Z"/>
    <path d="M80 72H124V0L80 72Z"/>
  </g>
`;

async function qrInner(color) {
  const svg = await QR.toString("https://jtlhltd.com", {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 1,
    color: { dark: color, light: "#00000000" },
  });
  return svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
}

function writeCard(name, body, bg = "#050505") {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="85mm" height="55mm" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${bg}"/>
  ${body}
</svg>
`;
  fs.writeFileSync(path.join(OUT, name), svg);
  console.log("wrote", name);
}

(async () => {
  const qrGold = await qrInner("#E8C36A");
  const qrDark = await qrInner("#050505");

  // 01 — Left brand, right square QR
  writeCard(
    "01-qr-dominant.svg",
    `
    <g transform="translate(56 70) scale(0.85)">${mark}</g>
    <text x="56" y="220" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" letter-spacing="3">JTLH LTD</text>
    <text x="56" y="265" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="18">Bespoke AI systems</text>
    <text x="56" y="470" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="1">jtlhltd.com</text>
    <g transform="translate(480 75) scale(3.2)">${qrGold}</g>
  `,
  );

  // 02 — Horizontal split: brand left, QR panel right
  writeCard(
    "02-split-panel.svg",
    `
    <rect x="480" width="370" height="550" fill="#0C0C0C"/>
    <rect x="480" y="0" width="2" height="550" fill="#E8C36A" opacity="0.45"/>
    <g transform="translate(56 90) scale(0.75)">${mark}</g>
    <text x="56" y="230" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700" letter-spacing="3">JTLH LTD</text>
    <text x="56" y="275" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="17">Bespoke AI systems</text>
    <text x="56" y="470" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="15">Jonah Hughes</text>
    <text x="56" y="498" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="15">jtlhltd@gmail.com</text>
    <g transform="translate(535 115) scale(2.7)">${qrGold}</g>
  `,
  );

  // 03 — Minimal scan: QR left, thin brand right
  writeCard(
    "03-minimal-scan.svg",
    `
    <g transform="translate(70 75) scale(3.4)">${qrGold}</g>
    <g transform="translate(520 180) scale(0.7)">${mark}</g>
    <text x="520" y="310" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="2">JTLH LTD</text>
    <text x="520" y="350" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="16">jtlhltd.com</text>
  `,
  );

  // 04 — Contact strip bottom, QR right
  writeCard(
    "04-contact-strip.svg",
    `
    <g transform="translate(48 48) scale(0.55)">${mark}</g>
    <text x="48" y="145" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" letter-spacing="2">JTLH LTD</text>
    <text x="48" y="185" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="16">Bespoke AI systems</text>
    <g transform="translate(500 55) scale(2.9)">${qrGold}</g>
    <rect y="430" width="850" height="120" fill="#E8C36A"/>
    <text x="48" y="485" fill="#050505" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">Jonah Hughes</text>
    <text x="48" y="520" fill="#050505" font-family="Arial, Helvetica, sans-serif" font-size="16">jtlhltd@gmail.com  ·  jtlhltd.com</text>
  `,
  );

  // 05 — Gold end panel with dark QR
  writeCard(
    "05-gold-field.svg",
    `
    <rect x="500" width="350" height="550" fill="#E8C36A"/>
    <g transform="translate(56 90) scale(0.75)">${mark}</g>
    <text x="56" y="230" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700" letter-spacing="3">JTLH LTD</text>
    <text x="56" y="275" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="17">Bespoke AI systems</text>
    <text x="56" y="470" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="15">jtlhltd.com</text>
    <g transform="translate(545 115) scale(2.6)">${qrDark}</g>
  `,
  );

  // Reverse — brand only, landscape
  writeCard(
    "00-reverse-brand.svg",
    `
    <g transform="translate(280 175) scale(1.1)">${mark}</g>
    <text x="425" y="340" text-anchor="middle" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" letter-spacing="4">JTLH LTD</text>
    <text x="425" y="385" text-anchor="middle" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="18">Bespoke AI systems</text>
  `,
  );

  console.log("done");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
