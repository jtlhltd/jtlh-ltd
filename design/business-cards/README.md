# JTLH LTD — square business cards (65 × 65 mm)

Print-ready SVG fronts for a QR-first square card. QR encodes `https://jtlhltd.com`.

## Designs

| File | Idea |
|------|------|
| `01-qr-dominant.svg` | Brand header + large gold QR + URL |
| `02-split-panel.svg` | Brand / tagline on top, QR panel below |
| `03-minimal-scan.svg` | Scan-first: QR fills the card |
| `04-contact-strip.svg` | QR + gold contact bar (Jonah + email) |
| `05-gold-field.svg` | Inverse: gold field, dark QR |
| `00-reverse-brand.svg` | Optional reverse: mark + JTLH LTD only |

## Specs

- Size: **65 × 65 mm** (square)
- Colours: black `#050505`, gold `#E8C36A`, muted `#A3A3A3`
- Rebuild QR / layouts: `node design/business-cards/build-cards.js`

## Recommendation

For a QR square card, prefer **03** (pure scan) or **01** (brand + scan). Use **00** as the reverse so the logo still shows when the card sits face-down. Soft-touch black stock; rounded corners if available.
