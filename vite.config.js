import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        itAuditing: resolve(__dirname, 'it-auditing.html'),
        cloudInfrastructure: resolve(__dirname, 'cloud-infrastructure.html'),
        cyberSecurity: resolve(__dirname, 'cyber-security.html'),
        managedServices: resolve(__dirname, 'managed-services.html'),
        aiAudit: resolve(__dirname, 'ai-audit.html'),
        appSolutions: resolve(__dirname, 'app-solutions.html'),
        dataAnalytics: resolve(__dirname, 'data-analytics.html'),
        greenComputing: resolve(__dirname, 'green-computing.html'),
        resourceDeployment: resolve(__dirname, 'resource-deployment.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        blog: resolve(__dirname, 'blog.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
        value: resolve(__dirname, 'value.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // To use modern sass features and suppress warnings if needed
      },
    },
  },
});
