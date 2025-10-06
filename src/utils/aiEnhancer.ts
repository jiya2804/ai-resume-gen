// Mock AI enhancement function - improves professional wording
export const enhanceText = (text: string, type: 'experience' | 'skills'): string => {
  if (!text.trim()) return text;

  if (type === 'experience') {
    // Enhancement patterns for experience descriptions
    const enhancements: Record<string, string> = {
      'worked on': 'spearheaded',
      'helped': 'collaborated to',
      'made': 'developed and implemented',
      'did': 'executed',
      'improved': 'optimized and enhanced',
      'created': 'architected and delivered',
      'managed': 'orchestrated',
      'led': 'directed and supervised',
      'built': 'engineered',
      'fixed': 'resolved and debugged',
      'wrote': 'authored',
      'designed': 'conceptualized and designed',
    };

    let enhanced = text;
    Object.entries(enhancements).forEach(([old, replacement]) => {
      const regex = new RegExp(`\\b${old}\\b`, 'gi');
      enhanced = enhanced.replace(regex, replacement);
    });

    // Add quantifiable metrics if missing
    if (!enhanced.match(/\d+%/) && !enhanced.match(/\$\d+/)) {
      const metrics = [
        'by 30%',
        'resulting in 25% efficiency gain',
        'achieving 40% improvement',
        'leading to 50% increase in productivity',
      ];
      const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
      enhanced = enhanced.trim() + ' ' + randomMetric;
    }

    // Capitalize first letter
    return enhanced.charAt(0).toUpperCase() + enhanced.slice(1);
  }

  if (type === 'skills') {
    // Enhancement for skills - add proficiency levels
    const skills = text.split(',').map(s => s.trim()).filter(Boolean);
    const proficiencyLevels = ['Advanced', 'Expert', 'Proficient', 'Experienced'];
    
    const enhanced = skills.map(skill => {
      const level = proficiencyLevels[Math.floor(Math.random() * proficiencyLevels.length)];
      return `${skill} (${level})`;
    });

    return enhanced.join(', ');
  }

  return text;
};
