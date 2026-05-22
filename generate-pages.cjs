const fs = require('fs');

const pages = [
  { file: 'about.html', title: 'About Us' },
  { file: 'it-auditing.html', title: 'IT Auditing & Consulting' },
  { file: 'cloud-infrastructure.html', title: 'Cloud & Infrastructure Solutions' },
  { file: 'cyber-security.html', title: 'Cyber Security & Compliance' },
  { file: 'managed-services.html', title: 'Managed Technology Services' },
  { file: 'ai-audit.html', title: 'AI Audit & Intelligent Systems' },
  { file: 'app-solutions.html', title: 'Application Solutions' },
  { file: 'data-analytics.html', title: 'Data Analytics & Reporting' },
  { file: 'green-computing.html', title: 'Green Computing & IT Optimization' },
  { file: 'resource-deployment.html', title: 'IT Resource Deployment' },
  { file: 'case-studies.html', title: 'Case Studies' },
  { file: 'blog.html', title: 'Blog / Insights' },
  { file: 'careers.html', title: 'Careers' },
  { file: 'contact.html', title: 'Contact Us' },
  { file: 'value.html', title: 'Value' }
];

const template = (title) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appzant | \${title}</title>
  <link rel="stylesheet" href="/src/scss/style.scss">
</head>
<body>
  <div class="cyber-grid"></div>
  
  {{> navbar }}

  <!-- Inner Page Hero -->
  <section class="section-padding position-relative" style="margin-top: 76px; background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop') no-repeat center center / cover; border-bottom: 1px solid rgba(255,255,255,0.05);">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(5,5,5,0.85);"></div>
    <div class="container text-center position-relative" style="z-index: 2;" data-aos="fade-up">
      <h1 class="display-4 fw-bold mb-3"><span class="text-glow">\${title}</span></h1>
      <p class="lead text-light opacity-75 max-w-600 mx-auto">Enterprise-grade solutions tailored for your organizational needs.</p>
    </div>
  </section>

  <!-- Content Section -->
  <section class="section-padding relative">
    <div class="container">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6" data-aos="fade-right">
          <h3 class="fw-bold mb-4">Transforming with <span class="glow-blue">Intelligence</span></h3>
          <p class="text-light opacity-75 mb-4">Appzant provides industry-leading strategies to optimize performance, enhance security, and accelerate cloud migration.</p>
          <ul class="list-unstyled">
            <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i> Scalable Infrastructure</li>
            <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i> AI-Powered Operations</li>
            <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i> 24/7 Monitoring</li>
          </ul>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="position-relative p-3">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Technology Visualization" class="img-fluid rounded-4 shadow-lg border border-secondary" style="opacity: 0.9;">
             <div class="position-absolute top-0 start-0 w-100 h-100 rounded-4" style="background: linear-gradient(45deg, rgba(255,106,0,0.1), rgba(0,210,255,0.1)); pointer-events: none;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-5 text-center position-relative" style="background: url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop') no-repeat center center / cover;">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(16,17,20,0.9);"></div>
    <div class="container position-relative" style="z-index: 2;">
      <h3 class="fw-bold mb-4">Discuss your enterprise needs</h3>
      <a href="contact.html" class="btn btn-primary">Contact Our Experts</a>
    </div>
  </section>

  {{> footer }}

  <script type="module" src="/src/js/main.js"></script>
</body>
</html>`;

pages.forEach(page => {
  fs.writeFileSync(page.file, template(page.title));
  console.log(`Created ${page.file}`);
});
