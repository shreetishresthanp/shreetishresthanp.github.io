// milestones.js - Data configuration file

export const eventTypeColors = {
  milestone: '#dc2626',    // Red - Major life transitions
  achievement: '#eab308',  // Yellow - Awards and recognition  
  experience: '#16a34a',   // Green - Jobs and work experience
  mentorship: '#2563eb',   // Blue - Teaching and mentoring
  leadership: '#7c3aed'    // Purple - Leadership roles
};

export const phases = {
  college: {
    id: 'college',
    title: 'College Years - Foundation Building',
    label: 'College',
    period: '2018 - 2021',
    color: '#64748b',        // Elegant slate gray-blue
    bgColor: 'rgba(100, 116, 139, 0.08)',
    description: 'Building technical foundations while developing leadership and mentoring skills through diverse campus involvement.',
    startPercent: 0,         // Start at 0% - full left edge
    endPercent: 52           // Proportional to actual time period
  },
  industry: {
    id: 'industry',
    title: 'Industry Experience - Professional Growth',
    label: 'Industry Experience',
    period: '2022 - 2024',
    color: '#92400e',        // Warm amber-brown
    bgColor: 'rgba(146, 64, 14, 0.08)',
    description: 'Rapid professional development from entry-level to senior engineer, consistently exceeding expectations and driving innovation.',
    startPercent: 52,        // Continue from college
    endPercent: 87           // Proportional to actual time period
  },
  research: {
    id: 'research',
    title: 'Research Journey - Academic Pursuit',
    label: 'Research Journey',
    period: '2025 - Present',
    color: '#8b5a8c',        // Soft muted purple
    bgColor: 'rgba(139, 90, 140, 0.08)',
    description: 'Transitioning to research-focused career, contributing to cutting-edge developments in machine learning and AI.',
    startPercent: 87,        // Continue from industry
    endPercent: 100          // End at 100% - full right edge
  }
};

export const milestones = [
  { 
    id: 'college-start', 
    title: 'Started College Journey', 
    date: 'Aug 2018', 
    phase: 'college', 
    type: 'milestone', 
    description: 'Began Computer Science studies, diving into the world of programming and technology.' 
  },
  { 
    id: 'csi-award', 
    title: 'New Staff of the Year - CSI', 
    date: 'May 2020', 
    phase: 'college', 
    type: 'achievement', 
    description: 'Recognized for outstanding contribution in campus job at Computer Science Initiative.' 
  },
  { 
    id: 'google-mentor', 
    title: 'Google CSSI Mentor', 
    date: 'July 2020', 
    phase: 'college', 
    type: 'mentorship', 
    description: 'Guided underrepresented students in Computer Science Summer Institute program.' 
  },
  { 
    id: 'tutor-start', 
    title: 'CS Tutor Position', 
    date: 'Aug 2020', 
    phase: 'college', 
    type: 'mentorship', 
    description: 'Helped fellow students master programming concepts and debugging skills.' 
  },
  { 
    id: 'provost-rep', 
    title: 'Provost Council Representative', 
    date: 'Sept 2020', 
    phase: 'college', 
    type: 'leadership', 
    description: 'Represented student body in university academic governance and policy discussions.' 
  },
  { 
    id: 'iqvia-intern', 
    title: 'IQVIA Internship', 
    date: 'May 2021', 
    phase: 'college', 
    type: 'experience', 
    description: 'Gained industry experience in healthcare technology and data analytics.' 
  },
  { 
    id: 'tutor-end', 
    title: 'Completed CS Tutoring', 
    date: 'Dec 2021', 
    phase: 'college', 
    type: 'mentorship', 
    description: 'Finished tutoring role, having helped dozens of students succeed in CS courses.' 
  },
  { 
    id: 'graduation', 
    title: 'Graduation', 
    date: 'Dec 2021', 
    phase: 'college', 
    type: 'milestone', 
    description: 'Completed Computer Science degree with strong technical foundation and leadership experience.' 
  },
  { 
    id: 'fulltime-start', 
    title: 'Started Full-Time Career', 
    date: 'Jan 2022', 
    phase: 'industry', 
    type: 'milestone', 
    description: 'Transitioned from student to professional software engineer, ready to make an impact.' 
  },
  { 
    id: 'q3-mvp', 
    title: 'Q3 MVP Award', 
    date: 'Dec 2022', 
    phase: 'industry', 
    type: 'achievement', 
    description: 'Recognized as Most Valuable Player for exceptional contributions to team goals and product delivery.' 
  },
  { 
    id: 'promotion', 
    title: 'Promoted to SWE II', 
    date: 'Feb 2023', 
    phase: 'industry', 
    type: 'milestone', 
    description: 'Advanced to Senior Software Engineer role, taking on greater technical leadership responsibilities.' 
  },
  { 
    id: 'hackathon', 
    title: 'Hackathon Top 20', 
    date: 'Oct 2023', 
    phase: 'industry', 
    type: 'achievement', 
    description: 'Placed in top 20 out of hundreds of participants, showcasing innovation and rapid prototyping skills.' 
  },
  { 
    id: 'left-fulltime', 
    title: 'Left Full-Time for Grad School', 
    date: 'Dec 2024', 
    phase: 'industry', 
    type: 'milestone', 
    description: 'Made strategic decision to leave industry and pursue graduate research, driven by passion for advancing the field.' 
  },
  { 
    id: 'grad-start', 
    title: 'Started Graduate School', 
    date: 'Jan 2025', 
    phase: 'research', 
    type: 'milestone', 
    description: 'Began advanced studies in Computer Science with focus on AI and machine learning research.' 
  },
  { 
    id: 'ra-position', 
    title: 'Research Assistant Position', 
    date: 'Aug 2025', 
    phase: 'research', 
    type: 'experience', 
    description: 'Leading evaluation frameworks for large language models and contributing to academic publications.' 
  }
];

// Date mapping for position calculations
export const dateMapping = {
  'Aug 2018': new Date('2018-08-01'),
  'May 2020': new Date('2020-05-01'),
  'July 2020': new Date('2020-07-01'),
  'Aug 2020': new Date('2020-08-01'),
  'Sept 2020': new Date('2020-09-01'),
  'May 2021': new Date('2021-05-01'),
  'Dec 2021': new Date('2021-12-01'),
  'Jan 2022': new Date('2022-01-01'),
  'Dec 2022': new Date('2022-12-01'),
  'Feb 2023': new Date('2023-02-01'),
  'Oct 2023': new Date('2023-10-01'),
  'Dec 2024': new Date('2024-12-01'),
  'Jan 2025': new Date('2025-01-01'),
  'Aug 2025': new Date('2025-08-01')
};