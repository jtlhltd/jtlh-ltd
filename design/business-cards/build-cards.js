const fs = require("fs");
const path = require("path");
const QR = require("qrcode");

const OUT = path.join(__dirname);

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
<svg xmlns="http://www.w3.org/2000/svg" width="65mm" height="65mm" viewBox="0 0 650 650">
  <rect width="650" height="650" fill="${bg}"/>
  ${body}
</svg>
`;
  fs.writeFileSync(path.join(OUT, name), svg);
  console.log("wrote", name);
}

(async () => {
  const qrGold = await qrInner("#E8C36A");
  const qrDark = await qrInner("#050505");

  writeCard(
    "01-qr-dominant.svg",
    `
    <g transform="translate(95 70) scale(0.55)">${mark}</g>
    <text x="325" y="175" text-anchor="middle" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="3">JTLH LTD</text>
    <g transform="translate(145 210) scale(3.6)">${qrGold}</g>
    <text x="325" y="590" text-anchor="middle" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="1">jtlhltd.com</text>
  `,
  );

  writeCard(
    "02-split-panel.svg",
    `
    <rect y="340" width="650" height="310" fill="#0C0C0C"/>
    <rect y="340" width="650" height="2" fill="#E8C36A" opacity="0.45"/>
    <g transform="translate(70 90) scale(0.7)">${mark}</g>
    <text x="70" y="230" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700" letter-spacing="4">JTLH LTD</text>
    <text x="70" y="275" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="18">Bespoke AI systems</text>
    <g transform="translate(185 365) scale(2.8)">${qrGold}</g>
    <text x="325" y="615" text-anchor="middle" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="1">SCAN TO CONNECT</text>
  `,
  );

  writeCard(
    "03-minimal-scan.svg",
    `
    <g transform="translate(125 95) scale(4)">${qrGold}</g>
    <g transform="translate(255 520) scale(0.35)">${mark}</g>
    <text x="325" y="600" text-anchor="middle" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="2">jtlhltd.com</text>
  `,
  );

  writeCard(
    "04-contact-strip.svg",
    `
    <g transform="translate(48 48) scale(0.45)">${mark}</g>
    <text x="48" y="145" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" letter-spacing="2">JTLH LTD</text>
    <g transform="translate(175 175) scale(3)">${qrGold}</g>
    <rect y="520" width="650" height="130" fill="#E8C36A"/>
    <text x="325" y="568" text-anchor="middle" fill="#050505" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700">Jonah Hughes</text>
    <text x="325" y="600" text-anchor="middle" fill="#050505" font-family="Arial, Helvetica, sans-serif" font-size="16">jtlhltd@gmail.com</text>
  `,
  );

  writeCard(
    "05-gold-field.svg",
    `
    <g transform="translate(125 80) scale(4)">${qrDark}</g>
    <text x="325" y="560" text-anchor="middle" fill="#050505" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" letter-spacing="3">JTLH LTD</text>
    <text x="325" y="600" text-anchor="middle" fill="#050505" font-family="Arial, Helvetica, sans-serif" font-size="18">jtlhltd.com</text>
  `,
    "#E8C36A",
  );

  // paired reverse for single-sided QR front: brand reverse
  writeCard(
    "00-reverse-brand.svg",
    `
    <g transform="translate(145 220) scale(1.4)">${mark}</g>
    <text x="325" y="400" text-anchor="middle" fill="#F4F4F4" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700" letter-spacing="4">JTLH LTD</text>
    <text x="325" y="450" text-anchor="middle" fill="#A3A3A3" font-family="Arial, Helvetica, sans-serif" font-size="20">Bespoke AI systems</text>
  `,
  );

  console.log("done");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
