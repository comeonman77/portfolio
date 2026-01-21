// Admin Panel JavaScript
// Handles editing, saving, and managing portfolio data

let portfolioData = null;

document.addEventListener('DOMContentLoaded', () => {
    // Load data
    portfolioData = initializeData();
    
    // Initialize tabs
    initTabs();
    
    // Populate forms with existing data
    populateForms();
    
    // Initialize event listeners
    initEventListeners();
});

// ==========================================
// TABS
// ==========================================

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active to clicked
            btn.classList.add('active');
            const tabId = `tab-${btn.dataset.tab}`;
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// ==========================================
// POPULATE FORMS
// ==========================================

function populateForms() {
    // Personal info
    document.getElementById('personal-name').value = portfolioData.personal.name || '';
    document.getElementById('personal-title').value = portfolioData.personal.title || '';
    document.getElementById('personal-email').value = portfolioData.personal.email || '';
    document.getElementById('personal-phone').value = portfolioData.personal.phone || '';
    document.getElementById('personal-location').value = portfolioData.personal.location || '';
    document.getElementById('personal-linkedin').value = portfolioData.personal.linkedin || '';
    document.getElementById('personal-github').value = portfolioData.personal.github || '';
    document.getElementById('personal-available').checked = portfolioData.personal.available || false;
    document.getElementById('personal-bio').value = portfolioData.personal.bio || '';
    
    // Education
    document.getElementById('education-school').value = portfolioData.education.school || '';
    document.getElementById('education-degree').value = portfolioData.education.degree || '';
    document.getElementById('education-location').value = portfolioData.education.location || '';
    document.getElementById('education-start').value = portfolioData.education.startDate || '';
    document.getElementById('education-end').value = portfolioData.education.endDate || '';
    document.getElementById('education-note').value = portfolioData.education.note || '';
    
    // Skills
    document.getElementById('skills-languages').value = portfolioData.skills.languages.join(', ');
    document.getElementById('skills-technologies').value = portfolioData.skills.technologies.join(', ');
    document.getElementById('skills-databases').value = portfolioData.skills.databases.join(', ');
    
    // Experience
    renderExperienceList();
    
    // Projects
    renderProjectsList();
}

// ==========================================
// EXPERIENCE LIST
// ==========================================

function renderExperienceList() {
    const container = document.getElementById('experience-list');
    
    if (portfolioData.experience.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                </svg>
                <p>No work experience added yet</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = portfolioData.experience.map((exp, index) => `
        <div class="item-card" data-id="${exp.id}">
            <div class="item-card-header" onclick="toggleItemCard(this)">
                <div>
                    <div class="item-card-title">${exp.company}</div>
                    <div class="item-card-subtitle">${exp.role} • ${exp.startDate} — ${exp.endDate}</div>
                </div>
                <div class="item-card-actions">
                    <button class="item-btn" onclick="event.stopPropagation(); moveItem('experience', ${index}, -1)" title="Move up">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="18 15 12 9 6 15"/>
                        </svg>
                    </button>
                    <button class="item-btn" onclick="event.stopPropagation(); moveItem('experience', ${index}, 1)" title="Move down">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </button>
                    <button class="item-btn delete" onclick="event.stopPropagation(); deleteItem('experience', ${index})" title="Delete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="item-card-content">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Company</label>
                        <input type="text" class="form-input" value="${exp.company}" 
                               onchange="updateExperience(${index}, 'company', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Role</label>
                        <input type="text" class="form-input" value="${exp.role}"
                               onchange="updateExperience(${index}, 'role', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Location</label>
                        <input type="text" class="form-input" value="${exp.location}"
                               onchange="updateExperience(${index}, 'location', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Start Date</label>
                        <input type="text" class="form-input" value="${exp.startDate}"
                               onchange="updateExperience(${index}, 'startDate', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">End Date</label>
                        <input type="text" class="form-input" value="${exp.endDate}"
                               onchange="updateExperience(${index}, 'endDate', this.value)">
                    </div>
                </div>
                <div class="highlights-editor">
                    <label class="highlights-label">Key Highlights / Achievements</label>
                    ${exp.highlights.map((h, hIndex) => `
                        <div class="highlight-item">
                            <textarea class="form-textarea" 
                                      onchange="updateExperienceHighlight(${index}, ${hIndex}, this.value)">${h}</textarea>
                            <button class="item-btn delete" onclick="deleteExperienceHighlight(${index}, ${hIndex})" title="Remove">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                    <button class="add-highlight-btn" onclick="addExperienceHighlight(${index})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        Add Highlight
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// PROJECTS LIST
// ==========================================

function renderProjectsList() {
    const container = document.getElementById('projects-list');
    
    if (portfolioData.projects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
                <p>No projects added yet</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = portfolioData.projects.map((project, index) => `
        <div class="item-card" data-id="${project.id}">
            <div class="item-card-header" onclick="toggleItemCard(this)">
                <div>
                    <div class="item-card-title">${project.title}</div>
                    <div class="item-card-subtitle">${project.subtitle} • ${project.role}</div>
                </div>
                <div class="item-card-actions">
                    <button class="item-btn" onclick="event.stopPropagation(); moveItem('projects', ${index}, -1)" title="Move up">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="18 15 12 9 6 15"/>
                        </svg>
                    </button>
                    <button class="item-btn" onclick="event.stopPropagation(); moveItem('projects', ${index}, 1)" title="Move down">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </button>
                    <button class="item-btn delete" onclick="event.stopPropagation(); deleteItem('projects', ${index})" title="Delete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="item-card-content">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Project Title</label>
                        <input type="text" class="form-input" value="${project.title}"
                               onchange="updateProject(${index}, 'title', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Subtitle</label>
                        <input type="text" class="form-input" value="${project.subtitle}"
                               onchange="updateProject(${index}, 'subtitle', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <input type="text" class="form-input" value="${project.description}"
                               onchange="updateProject(${index}, 'description', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Context (e.g., Hackathon, School)</label>
                        <input type="text" class="form-input" value="${project.context}"
                               onchange="updateProject(${index}, 'context', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Your Role</label>
                        <input type="text" class="form-input" value="${project.role}"
                               onchange="updateProject(${index}, 'role', this.value)">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Date</label>
                        <input type="text" class="form-input" value="${project.date}"
                               onchange="updateProject(${index}, 'date', this.value)">
                    </div>
                </div>
                <div class="highlights-editor">
                    <label class="highlights-label">Key Features / Achievements</label>
                    ${project.highlights.map((h, hIndex) => `
                        <div class="highlight-item">
                            <textarea class="form-textarea"
                                      onchange="updateProjectHighlight(${index}, ${hIndex}, this.value)">${h}</textarea>
                            <button class="item-btn delete" onclick="deleteProjectHighlight(${index}, ${hIndex})" title="Remove">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                    <button class="add-highlight-btn" onclick="addProjectHighlight(${index})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        Add Feature
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function initEventListeners() {
    // Save button
    document.getElementById('save-btn').addEventListener('click', saveAllChanges);
    
    // Reset button
    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all data to default? This cannot be undone.')) {
            portfolioData = resetData();
            populateForms();
            showToast('Data reset to default');
        }
    });
    
    // Export button
    document.getElementById('export-btn').addEventListener('click', exportData);
    
    // Import button
    document.getElementById('import-input').addEventListener('change', importData);
    
    // Add experience
    document.getElementById('add-experience').addEventListener('click', addExperience);
    
    // Add project
    document.getElementById('add-project').addEventListener('click', addProject);
}

// ==========================================
// DATA OPERATIONS
// ==========================================

function saveAllChanges() {
    // Collect personal data
    portfolioData.personal = {
        name: document.getElementById('personal-name').value,
        title: document.getElementById('personal-title').value,
        email: document.getElementById('personal-email').value,
        phone: document.getElementById('personal-phone').value,
        location: document.getElementById('personal-location').value,
        linkedin: document.getElementById('personal-linkedin').value,
        github: document.getElementById('personal-github').value,
        available: document.getElementById('personal-available').checked,
        bio: document.getElementById('personal-bio').value
    };
    
    // Collect education data
    portfolioData.education = {
        school: document.getElementById('education-school').value,
        degree: document.getElementById('education-degree').value,
        location: document.getElementById('education-location').value,
        startDate: document.getElementById('education-start').value,
        endDate: document.getElementById('education-end').value,
        note: document.getElementById('education-note').value
    };
    
    // Collect skills data
    portfolioData.skills = {
        languages: parseSkills(document.getElementById('skills-languages').value),
        technologies: parseSkills(document.getElementById('skills-technologies').value),
        databases: parseSkills(document.getElementById('skills-databases').value)
    };
    
    // Save to localStorage
    saveData(portfolioData);
    
    showToast('Changes saved successfully!');
}

function parseSkills(value) {
    return value.split(',').map(s => s.trim()).filter(s => s.length > 0);
}

function exportData() {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Data exported successfully!');
}

function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const importedData = JSON.parse(event.target.result);
            portfolioData = importedData;
            saveData(portfolioData);
            populateForms();
            showToast('Data imported successfully!');
        } catch (err) {
            alert('Invalid JSON file. Please check the file format.');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// ==========================================
// EXPERIENCE OPERATIONS
// ==========================================

function addExperience() {
    const newExp = {
        id: Date.now(),
        company: 'New Company',
        role: 'Your Role',
        location: 'Location',
        startDate: 'Start Date',
        endDate: 'End Date',
        highlights: ['Add your achievements here']
    };
    portfolioData.experience.unshift(newExp);
    renderExperienceList();
    
    // Expand the new card
    const firstCard = document.querySelector('#experience-list .item-card');
    if (firstCard) firstCard.classList.add('expanded');
}

function updateExperience(index, field, value) {
    portfolioData.experience[index][field] = value;
    // Update the header display
    renderExperienceList();
    // Re-expand the card
    const cards = document.querySelectorAll('#experience-list .item-card');
    if (cards[index]) cards[index].classList.add('expanded');
}

function updateExperienceHighlight(expIndex, highlightIndex, value) {
    portfolioData.experience[expIndex].highlights[highlightIndex] = value;
}

function addExperienceHighlight(expIndex) {
    portfolioData.experience[expIndex].highlights.push('New highlight');
    renderExperienceList();
    const cards = document.querySelectorAll('#experience-list .item-card');
    if (cards[expIndex]) cards[expIndex].classList.add('expanded');
}

function deleteExperienceHighlight(expIndex, highlightIndex) {
    portfolioData.experience[expIndex].highlights.splice(highlightIndex, 1);
    renderExperienceList();
    const cards = document.querySelectorAll('#experience-list .item-card');
    if (cards[expIndex]) cards[expIndex].classList.add('expanded');
}

// ==========================================
// PROJECT OPERATIONS
// ==========================================

function addProject() {
    const newProject = {
        id: Date.now(),
        title: 'New Project',
        subtitle: 'Project Description',
        description: 'Brief description',
        context: 'Context',
        role: 'Your Role',
        date: 'Date',
        highlights: ['Add your features/achievements here']
    };
    portfolioData.projects.unshift(newProject);
    renderProjectsList();
    
    const firstCard = document.querySelector('#projects-list .item-card');
    if (firstCard) firstCard.classList.add('expanded');
}

function updateProject(index, field, value) {
    portfolioData.projects[index][field] = value;
    renderProjectsList();
    const cards = document.querySelectorAll('#projects-list .item-card');
    if (cards[index]) cards[index].classList.add('expanded');
}

function updateProjectHighlight(projIndex, highlightIndex, value) {
    portfolioData.projects[projIndex].highlights[highlightIndex] = value;
}

function addProjectHighlight(projIndex) {
    portfolioData.projects[projIndex].highlights.push('New feature');
    renderProjectsList();
    const cards = document.querySelectorAll('#projects-list .item-card');
    if (cards[projIndex]) cards[projIndex].classList.add('expanded');
}

function deleteProjectHighlight(projIndex, highlightIndex) {
    portfolioData.projects[projIndex].highlights.splice(highlightIndex, 1);
    renderProjectsList();
    const cards = document.querySelectorAll('#projects-list .item-card');
    if (cards[projIndex]) cards[projIndex].classList.add('expanded');
}

// ==========================================
// COMMON OPERATIONS
// ==========================================

function toggleItemCard(headerEl) {
    const card = headerEl.closest('.item-card');
    card.classList.toggle('expanded');
}

function moveItem(type, index, direction) {
    const arr = portfolioData[type];
    const newIndex = index + direction;
    
    if (newIndex < 0 || newIndex >= arr.length) return;
    
    [arr[index], arr[newIndex]] = [arr[newIndex], arr[index]];
    
    if (type === 'experience') {
        renderExperienceList();
    } else if (type === 'projects') {
        renderProjectsList();
    }
}

function deleteItem(type, index) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    portfolioData[type].splice(index, 1);
    
    if (type === 'experience') {
        renderExperienceList();
    } else if (type === 'projects') {
        renderProjectsList();
    }
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================

function showToast(message) {
    const toast = document.getElementById('toast');
    const messageEl = toast.querySelector('.toast-message');
    messageEl.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Make functions globally available
window.toggleItemCard = toggleItemCard;
window.moveItem = moveItem;
window.deleteItem = deleteItem;
window.updateExperience = updateExperience;
window.updateExperienceHighlight = updateExperienceHighlight;
window.addExperienceHighlight = addExperienceHighlight;
window.deleteExperienceHighlight = deleteExperienceHighlight;
window.updateProject = updateProject;
window.updateProjectHighlight = updateProjectHighlight;
window.addProjectHighlight = addProjectHighlight;
window.deleteProjectHighlight = deleteProjectHighlight;
