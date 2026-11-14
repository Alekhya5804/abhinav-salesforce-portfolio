import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { SiSalesforce } from 'react-icons/si';
import { skillCategories } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const iconMap = {
  SiSalesforce: SiSalesforce,
  FaCode: FaCode,
  FaDatabase: FaDatabase,
  FaTools: FaTools,
};

function SkillCategory({ category, index }) {
  const Icon = iconMap[category.icon] || FaCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="The Technologies and platforms behind my work"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
