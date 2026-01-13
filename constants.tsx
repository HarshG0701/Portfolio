import { Ship, Cpu, Award, Layers, Target, Mail, Phone, Linkedin, ExternalLink, Globe, Anchor, ShieldCheck, Map, Activity, Zap, BarChart, Globe2, Palette, FileCode, PenTool, TrendingUp } from 'lucide-react';
import React from 'react';

export const COLORS = {
  primary: '#030712',
  accent: '#64ffda',
  blue: '#3b82f6',
  surface: '#111827',
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'business', label: 'Deconstructed' },
  { id: 'contact', label: 'Contact' },
];

export const METRICS = [
  { label: 'Operational Efficiency', value: '30', suffix: '%', icon: <Zap size={24}/> },
  { label: 'Thought Leadership Reach', value: '31', suffix: 'K+', icon: <Activity size={24}/> },
  { label: 'Industry Certifications', value: '12', suffix: '+', icon: <Award size={24}/> },
];

export const EXPERIENCE = [
  {
    company: 'Virtual Street Group',
    role: 'Process Associate (Managerial Role)',
    period: 'May 2024 – Sep 2024',
    location: 'Noida',
    highlights: [
      'Improved execution speed by 30% via automated reporting',
      '25% reduction in escalations through proactive monitoring',
      'Enhanced supervisor decision-making with predictive bottlenecks identification'
    ],
  },
  {
    company: 'IBM',
    role: 'Data Engineer Intern',
    period: 'Jun 2023 – Aug 2023',
    location: 'Dehradun',
    highlights: [
      'Optimized AWS pipelines, reducing latency by 18%',
      '30% cut in system downtime via cloud infrastructure hardening',
      'Saved 12% in data storage costs through architecture refactoring'
    ],
  },
  {
    company: 'IRCTC 2.0 Project',
    role: 'System Architect',
    period: 'Jan 2024 – May 2024',
    location: 'Academic Project',
    highlights: [
      'Designed enhanced railway booking architecture',
      'Implemented load-balanced backend for massive concurrency',
      'Architected resilient infrastructure for national scaling'
    ],
  },
];

export const EDUCATION = [
  {
    institution: 'UPES Dehradun',
    degree: 'MBA (Logistics & Supply Chain Management)',
    details: 'Maritime Elective focus | CGPA: Awaiting',
    period: '2024 - Present'
  },
  {
    institution: 'UPES Dehradun',
    degree: 'B.Tech (Hons) Cloud Computing & Virtualization',
    details: 'Major in Cloud & Virtualization | Minor in Cybersecurity | CGPA: 7.7',
    period: '2020 - 2024'
  },
  {
    institution: 'Brooklyn School, Dehradun',
    degree: 'ISC (12th) & ICSE (10th)',
    details: '12th PCM: 70% | 10th: 84%',
    period: 'Schooling'
  }
];

export const EXPERTISE = [
  { icon: <Anchor size={32} />, title: 'Maritime Logistics', desc: 'Port operations, container flow optimization, and strategic corridor development.' },
  { icon: <PenTool size={32} />, title: 'Case Study Strategy', desc: 'Deconstructing complex business scenarios to design winning tactical frameworks.' },
  { icon: <TrendingUp size={32} />, title: 'Strategic Operations', desc: 'Driving operational excellence and scalability through process re-engineering.' },
  { icon: <ShieldCheck size={32} />, title: 'Digital Resilience', desc: 'AWS architecture and cybersecurity hardening for enterprise supply chains.' },
  { icon: <Palette size={32} />, title: 'Visual Branding', desc: 'Expertise in Canva and professional presentation for brand positioning.' },
  { icon: <FileCode size={32} />, title: 'Process Automation', desc: 'Workflow optimization using Six Sigma methodologies and automated pipelines.' },
];

export const CERTIFICATIONS = [
  'SAP Material Management - Alison',
  'Inventory Management - HP LIFE',
  'Siemens Project Manager Simulation',
  'Logistics & SCM - Alison',
  'Google Business Intelligence',
  'Six Sigma Yellow Belt',
  'AWS Academy Cloud Foundations',
  'Power BI Mastery',
  'Advanced Excel - Elearnmarkets',
  'Cybersecurity Foundations - IBM'
];