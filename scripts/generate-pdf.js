import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '../public/resume.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 32, bottom: 32, left: 36, right: 36 },
  autoFirstPage: true,
  info: {
    Title: 'Jerin Benny - Resume',
    Author: 'Jerin Benny',
    Subject: 'Full Stack Developer Resume',
    Keywords: 'Full Stack Developer, React, Node.js, Express, MongoDB, TypeScript, AI, Gemini AI',
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const pageWidth = 595.28;
const pageHeight = 841.89;
const leftMargin = 36;
const rightMargin = 36;
const contentWidth = pageWidth - leftMargin - rightMargin; // 523.28

let y = 32;

// --- HEADER SECTION ---
const leftColWidth = 325;
const rightColX = 385;
const rightColWidth = pageWidth - rightColX - rightMargin;

// Left column: Name and Summary
doc.fillColor('#2563eb')
   .font('Helvetica-Bold')
   .fontSize(21)
   .text('Jerin Benny', leftMargin, y);

const summaryY = y + 26;
const summaryText = 'Full Stack Developer with hands-on experience building web applications using React, JavaScript, Node.js, Express.js, and MongoDB. Familiar with TypeScript and experienced in developing REST APIs, authentication systems, database-driven applications, payment integrations, and AI-powered features. Seeking an entry-level Full Stack Developer / Software Developer role.';

doc.fillColor('#334155')
   .font('Helvetica')
   .fontSize(8.6)
   .text(summaryText, leftMargin, summaryY, {
     width: leftColWidth,
     lineGap: 2.4,
     align: 'left'
   });

const summaryHeight = doc.heightOfString(summaryText, { width: leftColWidth, lineGap: 2.4, fontSize: 8.6 });

// Right column: Contact items with icons
let contactY = y + 2;
const contactItems = [
  { type: 'mail', text: 'jerinbenny875@gmail.com', url: 'mailto:jerinbenny875@gmail.com' },
  { type: 'phone', text: '8156872980', url: 'tel:8156872980' },
  { type: 'location', text: 'Malappuram, Kerala, India', url: null },
  { type: 'github', text: 'https://github.com/Jerin34', url: 'https://github.com/Jerin34' },
  { type: 'linkedin', text: 'https://linkedin.com/in/jeri\nn-benny-299aab343', url: 'https://linkedin.com/in/jerin-benny-299aab343' },
  { type: 'portfolio', text: 'https://my-personal-portfol\nio-one-lovat.vercel.app', url: 'https://my-personal-portfolio-one-lovat.vercel.app' }
];

function drawContactIcon(type, ix, iy) {
  doc.save();
  if (type === 'mail') {
    doc.lineWidth(0.7).strokeColor('#0284c7');
    doc.roundedRect(ix, iy + 1, 9.5, 6.5, 1).stroke();
    doc.moveTo(ix, iy + 1).lineTo(ix + 4.75, iy + 4.2).lineTo(ix + 9.5, iy + 1).stroke();
  } else if (type === 'phone') {
    doc.lineWidth(0.7).strokeColor('#0284c7');
    doc.roundedRect(ix + 1.2, iy, 6.2, 9.2, 1.2).stroke();
    doc.moveTo(ix + 3, iy + 1.2).lineTo(ix + 5.5, iy + 1.2).stroke();
    doc.circle(ix + 4.3, iy + 7.6, 0.5).fill('#0284c7');
  } else if (type === 'location') {
    doc.lineWidth(0.7).strokeColor('#0284c7');
    doc.circle(ix + 4.5, iy + 2.8, 2.3).stroke();
    doc.circle(ix + 4.5, iy + 2.8, 0.7).fill('#0284c7');
    doc.moveTo(ix + 2.5, iy + 4.2).lineTo(ix + 4.5, iy + 8).lineTo(ix + 6.5, iy + 4.2).stroke();
  } else if (type === 'github') {
    doc.translate(ix, iy);
    doc.scale(0.85);
    doc.path('M5 0C2.24 0 0 2.24 0 5c0 2.21 1.43 4.08 3.42 4.74.25.05.34-.11.34-.24v-.85c-1.39.3-1.68-.67-1.68-.67-.23-.58-.56-.73-.56-.73-.45-.31.03-.3.03-.3.5.03.77.51.77.51.45.76 1.17.54 1.46.42.05-.32.17-.54.31-.67-1.11-.13-2.28-.56-2.28-2.48 0-.55.2-1 .52-1.35-.05-.13-.23-.64.05-1.33 0 0 .42-.14 1.38.52.4-.11.83-.17 1.26-.17.43 0 .86.06 1.26.17.96-.66 1.38-.52 1.38-.52.28.69.1 1.2.05 1.33.33.35.52.8.52 1.35 0 1.93-1.17 2.35-2.29 2.47.18.15.34.46.34.93v1.38c0 .13.09.29.34.24C8.57 9.08 10 7.21 10 5c0-2.76-2.24-5-5-5z').fill('#0284c7');
  } else if (type === 'linkedin') {
    doc.translate(ix, iy);
    doc.scale(0.85);
    doc.roundedRect(0, 0, 9.5, 9.5, 1.5).fill('#0284c7');
    doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(5.8).text('in', 1.8, 2.2);
  } else if (type === 'portfolio') {
    doc.lineWidth(0.7).strokeColor('#0284c7');
    doc.circle(ix + 4.5, iy + 4.5, 4).stroke();
    doc.moveTo(ix + 0.5, iy + 4.5).lineTo(ix + 8.5, iy + 4.5).stroke();
    doc.ellipse(ix + 4.5, iy + 4.5, 1.8, 4).stroke();
  }
  doc.restore();
}

doc.font('Helvetica').fontSize(8.2);
contactItems.forEach(item => {
  drawContactIcon(item.type, rightColX, contactY);
  
  if (item.url) {
    doc.fillColor('#0284c7')
       .text(item.text, rightColX + 13, contactY, {
         width: rightColWidth - 13,
         link: item.url,
         underline: true,
         lineGap: 1.5
       });
  } else {
    doc.fillColor('#334155')
       .text(item.text, rightColX + 13, contactY, {
         width: rightColWidth - 13,
         lineGap: 1.5
       });
  }
  contactY += doc.heightOfString(item.text, { width: rightColWidth - 13, lineGap: 1.5, fontSize: 8.2 }) + 3.8;
});

y = Math.max(summaryY + summaryHeight, contactY) + 14;

// Section divider function
function drawSectionHeader(title) {
  doc.fillColor('#1e293b')
     .font('Helvetica-Bold')
     .fontSize(12)
     .text(title, leftMargin, y);
  
  y += 16;
  doc.strokeColor('#e2e8f0')
     .lineWidth(0.7)
     .moveTo(leftMargin, y)
     .lineTo(leftMargin + contentWidth, y)
     .stroke();
  
  y += 9;
}

// --- 2. SKILLS ---
drawSectionHeader('Skills');

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'SQL', 'C++', 'React.js', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'FastAPI',
  'REST APIs', 'MongoDB', 'Mongoose', 'Google Gemini', 'LLM APIs', 'Prompt Engineering', 'claude', 'Huggingface',
  'Chatgpt', 'Git', 'GitHub', 'Postman', 'JWT Authentication', 'MVC Architecture', 'CRUD', 'API Integration',
  'Webhooks'
];

doc.font('Helvetica').fontSize(8.2);
let pillX = leftMargin;
const pillHeight = 15;
const pillPaddingX = 6.5;
const pillGapX = 4.5;
const pillGapY = 4;

skills.forEach(skill => {
  const textW = doc.widthOfString(skill);
  const pillW = textW + pillPaddingX * 2;
  
  if (pillX + pillW > leftMargin + contentWidth) {
    pillX = leftMargin;
    y += pillHeight + pillGapY;
  }
  
  doc.roundedRect(pillX, y, pillW, pillHeight, 3.5)
     .fillColor('#eef5f9')
     .strokeColor('#d0e1ec')
     .lineWidth(0.6)
     .fillAndStroke();
  
  doc.fillColor('#1e3a5f')
     .text(skill, pillX + pillPaddingX, y + 3.2, { lineBreak: false });
  
  pillX += pillW + pillGapX;
});

y += pillHeight + 14;

// --- 3. PROJECTS ---
drawSectionHeader('Projects');

// Project 1: AI Property Management Agent
doc.fillColor('#2563eb')
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('AI Property Management Agent', leftMargin, y, {
     link: 'https://ai-property-management-agent.vercel.app/'
   });
y += 14;

doc.fillColor('#475569')
   .font('Helvetica')
   .fontSize(8.2)
   .text('Tech Stack: React.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, JWT, Gemini AI, Razorpay, Cloudinary', leftMargin, y);
y += 12;

const p1Bullets = [
  'Built a role-based property management platform supporting Admin, Manager, Tenant, and Technician workflows.',
  'Developed REST APIs for property management, tenant stay requests, maintenance scheduling, technician assignment, and maintenance status tracking.',
  'Integrated Google Gemini AI to provide AI-assisted property insights and management support.',
  'Implemented Razorpay subscription payments and webhook handling for manager subscription workflows.',
  'Integrated Cloudinary for property image uploads and MongoDB for persistent data storage.',
  'Deployed the backend on Render and maintained the project using Git and GitHub.'
];

p1Bullets.forEach(b => {
  doc.fillColor('#334155')
     .font('Helvetica')
     .fontSize(8.2)
     .text('•  ', leftMargin + 3, y, { continued: true })
     .text(b, {
       width: contentWidth - 10,
       lineGap: 1.8
     });
  y += doc.heightOfString(b, { width: contentWidth - 10, lineGap: 1.8, fontSize: 8.2 }) + 2.5;
});

y += 9;

// Project 2: AI-Powered E-Commerce Application
doc.fillColor('#2563eb')
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('AI-Powered E-Commerce Application', leftMargin, y, {
     link: 'https://ecommerce-web-jerin4.vercel.app',
     continued: false
   });

// Demo link on the right
const demoText = 'Demo ↗';
const demoW = doc.widthOfString(demoText);
doc.fillColor('#2563eb')
   .font('Helvetica')
   .fontSize(9)
   .text(demoText, leftMargin + contentWidth - demoW, y + 1, {
     link: 'https://ecommerce-web-jerin4.vercel.app',
     underline: true
   });

y += 14;

doc.fillColor('#475569')
   .font('Helvetica')
   .fontSize(8.2)
   .text('Tech Stack: React.js, Node.js, JavaScript, Express.js, MongoDB, JWT, Gemini AI', leftMargin, y);
y += 12;

const p2Bullets = [
  'Developed a full-stack e-commerce application with user authentication.',
  'Implemented product filtering, sorting, pagination, cart, and order features.',
  'Built an admin dashboard for product management.',
  'Developed REST APIs and integrated MongoDB for persistent data storage.',
  'Integrated AI functionality using the Google Gemini API.'
];

p2Bullets.forEach(b => {
  doc.fillColor('#334155')
     .font('Helvetica')
     .fontSize(8.2)
     .text('•  ', leftMargin + 3, y, { continued: true })
     .text(b, {
       width: contentWidth - 10,
       lineGap: 1.8
     });
  y += doc.heightOfString(b, { width: contentWidth - 10, lineGap: 1.8, fontSize: 8.2 }) + 2.5;
});

y += 11;

// --- 4. EDUCATION ---
drawSectionHeader('Education');

const eduBarY = y + 1;
doc.fillColor('#2563eb')
   .rect(leftMargin, eduBarY, 2.5, 23)
   .fill();

const eduTextX = leftMargin + 8;

doc.fillColor('#0f172a')
   .font('Helvetica-Bold')
   .fontSize(9.8)
   .text('Bachelor of Computer Applications (BCA)', eduTextX, y + 1);

const dateText = '08/2023 - 04/2026';
doc.font('Helvetica').fontSize(8.5);
const dateW = doc.widthOfString(dateText);
doc.fillColor('#64748b')
   .text(dateText, leftMargin + contentWidth - dateW, y + 2);

y += 14;

doc.fillColor('#334155')
   .font('Helvetica')
   .fontSize(8.8)
   .text('MES College of Arts and Science', eduTextX, y);

doc.end();

writeStream.on('finish', () => {
  console.log('PDF successfully generated at:', outputPath);
});
