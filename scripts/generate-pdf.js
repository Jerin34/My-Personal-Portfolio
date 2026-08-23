import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '../public/resume.pdf');

// Create PDF document (A4: 595.28 x 841.89 points)
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  autoFirstPage: true,
  info: {
    Title: 'Jerin Benny - Resume',
    Author: 'Jerin Benny',
    Subject: 'Full Stack Developer / MERN Stack Developer Resume',
    Keywords: 'Full Stack, React, Node.js, MERN, Express, MongoDB, JavaScript, TypeScript',
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const pageWidth = 595.28;
const pageHeight = 841.89;
const leftColWidth = 245;
const rightColWidth = pageWidth - leftColWidth; // 350.28

// Backgrounds
// Left Column Background (Dark Navy/Slate)
doc.rect(0, 0, leftColWidth, pageHeight).fill('#16222f');

// Right Column Background (Soft White)
doc.rect(leftColWidth, 0, rightColWidth, pageHeight).fill('#fafafa');

// --- LEFT COLUMN CONTENT ---
const leftPad = 26;
const leftContentWidth = leftColWidth - leftPad * 2; // 193
let leftY = 48;

// Name
doc.fillColor('#ffffff')
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('Jerin Benny', leftPad, leftY);

leftY += 28;

// Role
doc.fillColor('#e2e8f0')
   .font('Helvetica')
   .fontSize(12)
   .text('Full Stack Developer |', leftPad, leftY, { width: leftContentWidth });
leftY += 15;
doc.text('MERN Stack Developer', leftPad, leftY, { width: leftContentWidth });

leftY += 28;

// Contact Items Helper
function drawContactItem(text, linkUrl = null) {
  doc.fillColor('#cbd5e1')
     .font('Helvetica')
     .fontSize(8.5);

  if (linkUrl) {
    doc.text(text, leftPad, leftY, {
      width: leftContentWidth,
      link: linkUrl,
      underline: false
    });
  } else {
    doc.text(text, leftPad, leftY, { width: leftContentWidth });
  }
  leftY += doc.heightOfString(text, { width: leftContentWidth, fontSize: 8.5 }) + 8;
}

drawContactItem('✉  jerinbenny875@gmail.com', 'mailto:jerinbenny875@gmail.com');
drawContactItem('☎  8156872980', 'tel:8156872980');
drawContactItem('📍 Malappuram, Kerala, India.');
drawContactItem('in LinkedIn: linkedin.com/in/jerin-benny-299aab343', 'https://linkedin.com/in/jerin-benny-299aab343');
drawContactItem('GitHub: https://github.com/Jerin34', 'https://github.com/Jerin34');
drawContactItem('🔗 Portfolio: my-personal-portfolio-one-lovat.vercel.app', 'https://my-personal-portfolio-one-lovat.vercel.app');

leftY += 12;

// Section Badge for Left Column
function drawLeftBadge(title) {
  const badgeWidth = leftContentWidth;
  const badgeHeight = 22;
  
  doc.roundedRect(leftPad, leftY, badgeWidth, badgeHeight, 3)
     .fill('#223347');

  doc.fillColor('#ffffff')
     .font('Helvetica-Bold')
     .fontSize(10)
     .text(title, leftPad, leftY + 6, {
       width: badgeWidth,
       align: 'center'
     });

  leftY += badgeHeight + 12;
}

// SUMMARY
drawLeftBadge('SUMMARY');

const summaryText = 'Full Stack Developer with hands-on experience building web applications using React, JavaScript, Node.js, Express.js, and MongoDB. Familiar with TypeScript and experienced in developing REST APIs, authentication systems, database-driven applications, and AI-integrated features. Seeking an entry-level Full Stack Developer / Software Developer role.';

doc.fillColor('#cbd5e1')
   .font('Helvetica')
   .fontSize(8.5)
   .text(summaryText, leftPad, leftY, {
     width: leftContentWidth,
     lineGap: 3.5,
     align: 'left'
   });

leftY += doc.heightOfString(summaryText, { width: leftContentWidth, lineGap: 3.5, fontSize: 8.5 }) + 22;

// LANGUAGES
drawLeftBadge('LANGUAGES');

const languages = ['• English', '• Hindi', '• Malayalam'];
languages.forEach((lang) => {
  doc.fillColor('#cbd5e1')
     .font('Helvetica')
     .fontSize(9)
     .text(lang, leftPad + 6, leftY, { lineGap: 3 });
  leftY += 16;
});


// --- RIGHT COLUMN CONTENT ---
const rightPad = leftColWidth + 28;
const rightContentWidth = pageWidth - rightPad - 28; // ~294
let rightY = 48;

// Section Badge for Right Column
function drawRightBadge(title) {
  const badgeWidth = rightContentWidth;
  const badgeHeight = 22;

  doc.roundedRect(rightPad, rightY, badgeWidth, badgeHeight, 3)
     .fill('#e7edf3');

  doc.fillColor('#0f172a')
     .font('Helvetica-Bold')
     .fontSize(10)
     .text(title, rightPad, rightY + 6, {
       width: badgeWidth,
       align: 'center'
     });

  rightY += badgeHeight + 14;
}

// EDUCATION
drawRightBadge('EDUCATION');

doc.fillColor('#0f172a')
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Bachelor of Computer Applications (BCA)', rightPad, rightY, { width: rightContentWidth });
rightY += 14;

doc.fillColor('#334155')
   .font('Helvetica')
   .fontSize(9)
   .text('MES College of Arts and Science', rightPad, rightY, { width: rightContentWidth });
rightY += 13;

doc.fillColor('#64748b')
   .font('Helvetica-Oblique')
   .fontSize(8.5)
   .text('08/2023 – 04/2026 | Calicut', rightPad, rightY, { width: rightContentWidth });
rightY += 14;

const eduDesc = 'Focused on software development, web technologies, programming, data structures and algorithms, and database systems.';
doc.fillColor('#334155')
   .font('Helvetica')
   .fontSize(8.5)
   .text(eduDesc, rightPad, rightY, { width: rightContentWidth, lineGap: 2 });
rightY += doc.heightOfString(eduDesc, { width: rightContentWidth, lineGap: 2, fontSize: 8.5 }) + 22;


// SKILLS
drawRightBadge('SKILLS');

const skillRows = [
  { label: 'Languages', value: 'JavaScript, TypeScript, Python, SQL' },
  { label: 'Frontend', value: 'React.js, HTML5, CSS3' },
  { label: 'Backend', value: 'Node.js, Express.js, REST APIs' },
  { label: 'Database', value: 'MongoDB' },
  { label: 'Tools', value: 'Git, GitHub, Postman' },
  { label: 'Concepts', value: 'JWT Authentication, MVC Architecture, CRUD, API Integration' },
];

skillRows.forEach((row) => {
  doc.fillColor('#0f172a')
     .font('Helvetica-Bold')
     .fontSize(8.8)
     .text(`${row.label}: `, rightPad, rightY, { continued: true });
  
  doc.fillColor('#334155')
     .font('Helvetica')
     .fontSize(8.8)
     .text(row.value, { width: rightContentWidth, lineGap: 2 });

  rightY += doc.heightOfString(`${row.label}: ${row.value}`, { width: rightContentWidth, lineGap: 2, fontSize: 8.8 }) + 5;
});

rightY += 16;


// PROJECTS
drawRightBadge('PROJECTS');

doc.fillColor('#0f172a')
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('AI-Powered E-Commerce Application', rightPad, rightY, { width: rightContentWidth });
rightY += 14;

doc.fillColor('#64748b')
   .font('Helvetica-Oblique')
   .fontSize(8.5)
   .text('06/2026 – 07/2026', rightPad, rightY, { width: rightContentWidth });
rightY += 13;

doc.fillColor('#0f172a')
   .font('Helvetica-Bold')
   .fontSize(8.8)
   .text('Tech Stack: ', rightPad, rightY, { continued: true });
doc.fillColor('#334155')
   .font('Helvetica')
   .text('React.js, Node.js, JavaScript, Express.js, MongoDB, JWT, Gemini AI', { width: rightContentWidth });
rightY += doc.heightOfString('Tech Stack: React.js, Node.js, JavaScript, Express.js, MongoDB, JWT, Gemini AI', { width: rightContentWidth, fontSize: 8.8 }) + 8;

const bullets = [
  '• Developed a full-stack e-commerce application with user authentication.',
  '• Implemented product filtering, sorting, pagination, cart, and order features.',
  '• Built an admin dashboard for product management.',
  '• Developed REST APIs and integrated MongoDB for persistent data storage.',
  '• Integrated AI functionality using the Google Gemini API.',
];

bullets.forEach((b) => {
  doc.fillColor('#334155')
     .font('Helvetica')
     .fontSize(8.5)
     .text(b, rightPad, rightY, { width: rightContentWidth, lineGap: 2 });
  rightY += doc.heightOfString(b, { width: rightContentWidth, lineGap: 2, fontSize: 8.5 }) + 4;
});

rightY += 4;

// Live demo
doc.fillColor('#0f172a')
   .font('Helvetica-Bold')
   .fontSize(8.5)
   .text('• Live Demo: ', rightPad, rightY, { continued: true });

doc.fillColor('#0284c7')
   .font('Helvetica')
   .text('ecommerce-web-jerin4.vercel.app 🔗', {
     link: 'https://ecommerce-web-jerin4.vercel.app',
     underline: true
   });

doc.end();

writeStream.on('finish', () => {
  console.log('PDF successfully generated at:', outputPath);
});
