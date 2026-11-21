import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const width = 1200;
const height = 630;
const logo = (await readFile(new URL('../public/images/valbas-logo.svg', import.meta.url), 'utf8'))
  .replace(/#012f49|#669bbb|#6f6f6e|#1d1d1b/gi, '#ffffff');
const logoData = Buffer.from(logo).toString('base64');

const card = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#113047"/>
  <path d="M-30 530C180 390 310 660 520 520S860 380 1230 560" fill="none" stroke="#739ab9" stroke-opacity=".42" stroke-width="4"/>
  <circle cx="1160" cy="-22" r="190" fill="none" stroke="#739ab9" stroke-opacity=".42" stroke-width="4"/>
  <image href="data:image/svg+xml;base64,${logoData}" x="84" y="70" width="430" height="144" preserveAspectRatio="xMinYMid meet"/>
  <line x1="84" y1="278" x2="1116" y2="278" stroke="#b02a29" stroke-opacity=".9" stroke-width="3"/>
  <text x="84" y="380" fill="#f3f3ea" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="700">Invitaciones digitales</text>
  <text x="84" y="458" fill="#f3f3ea" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="700">para momentos únicos</text>
  <text x="87" y="545" fill="#739ab9" font-family="Arial, Helvetica, sans-serif" font-size="27" letter-spacing="1">EXPERIENCIAS PERSONALIZADAS E INTERACTIVAS</text>
</svg>`;

await sharp(Buffer.from(card))
  .png({ compressionLevel: 9 })
  .toFile(fileURLToPath(new URL('../public/og-default.png', import.meta.url)));
