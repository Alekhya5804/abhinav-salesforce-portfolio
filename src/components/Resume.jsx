import { motion } from 'framer-motion';
import { HiDownload, HiDocumentText } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Resume"
          title="Professional Resume"
          subtitle="View or download the latest resume and professional highlights"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="glass-card overflow-hidden">
            <div className="border-b border-slate-200 bg-gradient-to-r from-brand-600 to-accent-500 px-6 py-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <HiDocumentText className="h-6 w-6" />
                  <span className="font-semibold">Resume Preview</span>
                </div>
                <a href={personalInfo.resumePath} download className="btn-secondary !border-white/30 !bg-white/10 !text-white hover:!bg-white/20">
                  <HiDownload className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="mt-1 text-brand-600 dark:text-brand-400">{personalInfo.title}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {personalInfo.email} · {personalInfo.phone} · {personalInfo.location}
                </p>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:border-slate-700 dark:text-white">
                    Summary
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Salesforce Developer with 4+ years of experience building business-driven solutions using Apex, LWC, Flows, SOQL, Agentforce and Salesforce automation.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:border-slate-700 dark:text-white">
                    Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Apex', 'Batch Apex', 'LWC', 'SOQL', 'Salesforce Flows', 'Agentforce', 'Experience Cloud', 'Flosum', 'Copado', 'JavaScript',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:border-slate-700 dark:text-white">
                    Education
                  </h4>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    B.Tech — Electronics & Communication Engineering
                  </p>
                  <p className="text-xs text-slate-500">Aug 2018 – Jun 2022</p>
                </div>
                <div>
                  <h4 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:border-slate-700 dark:text-white">
                    Client Engagements
                  </h4>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    BMS – Veeva Vault & Discount Tire
                  </p>
                  <p className="text-xs text-slate-500">Apex · LWC · Flows · Agentforce · CI/CD</p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a href={personalInfo.resumePath} download className="btn-primary">
                  <HiDownload className="h-5 w-5" />
                  Download Full Resume
                </a>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
