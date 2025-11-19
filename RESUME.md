# Resume Management

## How to Update Your Resume

Your resume is generated from an HTML file and converted to PDF.

### Files:
- `public/resume.html` - The source HTML file with all resume content
- `public/Bryan_Chan_Resume.pdf` - The generated PDF file (390KB)
- `generate-pdf.cjs` - Script to convert HTML to PDF

### To Update Resume:

1. **Edit the HTML file:**
   ```bash
   # Edit public/resume.html with your changes
   code public/resume.html
   ```

2. **Generate new PDF:**
   ```bash
   npm run generate-resume
   ```

3. **Test locally:**
   ```bash
   npm run dev
   # Visit http://localhost:5173 and click "Download Resume"
   ```

4. **Deploy:**
   ```bash
   git add .
   git commit -m "Update resume"
   git push
   ```

### Resume Format:
- Professional single-page layout
- Optimized for ATS (Applicant Tracking Systems)
- Clean typography with proper spacing
- Highlights: 136+ modules, 130+ routes, 8 environments
- Includes all GoBolt experience (2017-Present)

### Styling:
The resume uses a clean, professional design with:
- Blue accent color (#2563eb)
- System fonts for compatibility
- Print-optimized layout
- Proper margins and spacing
