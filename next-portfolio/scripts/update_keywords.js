const fs = require('fs');
const path = require('path');

// Paths relative to project root
const mdPath = path.join(__dirname, '../keywords.md');
const skillsPath = path.join(__dirname, '../src/components/Skills.jsx');

console.log('Parsing keywords.md...');
const md = fs.readFileSync(mdPath, 'utf-8');
const lines = md.split('\n');

const skillsData = [];
let currentCategory = null;

const catMap = {
    '## Embedded Systems & IoT': 'Embedded',
    '## AI & Machine Learning': 'AI',
    '## Web Apps & Software': 'Web Apps',
    '## Languages, Frameworks & Core Tools': 'Apps',
    '## Innovation, Strategy & Other': 'Other'
};

for (const line of lines) {
    if (line.startsWith('## ')) {
        const cat = line.trim().replace(/\r/g, '');
        if (catMap[cat]) {
            currentCategory = catMap[cat];
            skillsData.push({ category: currentCategory, tags: [] });
        }
    } else if (line.startsWith('- ') && currentCategory) {
        let tag = line.replace('- ', '').trim();
        // Remove old tags
        tag = tag.replace(/\*\*\[.*?\]\*\*\s*/g, '');
        // Remove carriage returns
        tag = tag.replace(/\r/g, '');
        if (tag) {
            skillsData[skillsData.length - 1].tags.push(tag);
        }
    }
}

let out = `export const skillsData = [\n`;
for (const cat of skillsData) {
    out += `    {\n`;
    out += `        category: "${cat.category}",\n`;
    out += `        tags: [\n            ${cat.tags.map(t => `"${t}"`).join(',\n            ')}\n        ]\n`;
    out += `    },\n`;
}
out += `];\n`;

console.log('Injecting keywords into Skills.jsx...');
const skillsContent = fs.readFileSync(skillsPath, 'utf-8');
const newContent = skillsContent.replace(/export const skillsData = \[[\s\S]*?\];/, out.trim());
fs.writeFileSync(skillsPath, newContent);

console.log('✅ Successfully updated Skills.jsx with new keywords!');
