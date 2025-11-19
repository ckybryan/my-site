const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();

  const htmlPath = path.join(__dirname, 'public', 'resume.html');
  const pdfPath = path.join(__dirname, 'public', 'Bryan_Chan_Resume.pdf');

  await page.goto(`file://${htmlPath}`, {
    waitUntil: 'networkidle0'
  });

  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    printBackground: true
  });

  await browser.close();

  console.log(`PDF generated successfully at: ${pdfPath}`);
})();
