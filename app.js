// Portfolio Application JavaScript
// Handles rendering, file upload/download, and interactions

document.addEventListener('DOMContentLoaded', () => {
    // Initialize portfolio data
    const data = initializeData();
    
    // Render all sections
    renderExperience(data.experience);
    renderProjects(data.projects);
    renderSkills(data.skills);
    updatePersonalInfo(data.personal);
    updateEducation(data.education);
    
    // Initialize file manager
    initFileManager();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize animations
    initAnimations();
});

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderExperience(experience) {
    const container = document.getElementById('experience-content');
    if (!container) return;
    
    container.innerHTML = experience.map(exp => `
        <div class="timeline-item animate-in" data-id="${exp.id}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-company">${exp.company}</h3>
                        <p class="timeline-role">${exp.role}</p>
                    </div>
                    <div class="timeline-meta">
                        <p class="timeline-date">${exp.startDate} — ${exp.endDate}</p>
                        <p class="timeline-location">${exp.location}</p>
                    </div>
                </div>
                <ul class="timeline-list">
                    ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderProjects(projects) {
    const container = document.getElementById('projects-content');
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card animate-in" data-id="${project.id}">
            <div class="project-header">
                <div class="project-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                    </svg>
                </div>
                <p class="project-context">${project.context}</p>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <span class="project-role">${project.role} • ${project.date}</span>
            <ul class="project-list">
                ${project.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderSkills(skills) {
    const container = document.getElementById('skills-content');
    if (!container) return;
    
    container.innerHTML = `
        <div class="skill-category animate-in">
            <h3 class="skill-category-title">Programming Languages</h3>
            <div class="skill-tags">
                ${skills.languages.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
        <div class="skill-category animate-in">
            <h3 class="skill-category-title">Technologies & Tools</h3>
            <div class="skill-tags">
                ${skills.technologies.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
        <div class="skill-category animate-in">
            <h3 class="skill-category-title">Databases</h3>
            <div class="skill-tags">
                ${skills.databases.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    `;
}

function updatePersonalInfo(personal) {
    // Update contact info
    const emailEl = document.getElementById('contact-email');
    const phoneEl = document.getElementById('contact-phone');
    const descEl = document.getElementById('about-description');
    
    if (emailEl) emailEl.textContent = personal.email;
    if (phoneEl) phoneEl.textContent = personal.phone;
    if (descEl) descEl.textContent = personal.bio;
}

function updateEducation(education) {
    const container = document.getElementById('education-content');
    if (!container) return;
    
    container.innerHTML = `
        <div class="education-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
        </div>
        <div class="education-info">
            <h3 class="education-school">${education.school}</h3>
            <p class="education-degree">${education.degree}</p>
            <p class="education-location">${education.location}</p>
            <p class="education-date">${education.startDate} — ${education.endDate}</p>
            ${education.note ? `<p class="education-note">* ${education.note}</p>` : ''}
        </div>
    `;
}

// ==========================================
// FILE MANAGER
// ==========================================

function initFileManager() {
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');
    const filesList = document.getElementById('files-list');
    
    if (!uploadZone || !fileInput) return;
    
    // Load existing files
    renderFiles();
    
    // Click to upload
    uploadZone.addEventListener('click', () => fileInput.click());
    
    // File input change
    fileInput.addEventListener('change', handleFileSelect);
    
    // Drag and drop
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });
    
    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });
    
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });
}

function handleFileSelect(e) {
    handleFiles(e.target.files);
}

function handleFiles(files) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['application/pdf', 'application/msword', 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/png', 'image/jpeg', 'image/gif'];
    
    Array.from(files).forEach(file => {
        // Validate file
        if (file.size > maxSize) {
            alert(`File "${file.name}" is too large. Maximum size is 10MB.`);
            return;
        }
        
        // Save file to IndexedDB
        saveFile(file);
    });
}

function saveFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const fileData = {
            id: Date.now(),
            name: file.name,
            type: file.type,
            size: file.size,
            data: e.target.result,
            uploadedAt: new Date().toISOString()
        };
        
        // Get existing files
        const files = getStoredFiles();
        files.push(fileData);
        
        // Save to localStorage
        localStorage.setItem('portfolioFiles', JSON.stringify(files));
        
        // Re-render
        renderFiles();
    };
    reader.readAsDataURL(file);
}

function getStoredFiles() {
    try {
        return JSON.parse(localStorage.getItem('portfolioFiles')) || [];
    } catch (e) {
        return [];
    }
}

function renderFiles() {
    const filesList = document.getElementById('files-list');
    if (!filesList) return;
    
    const files = getStoredFiles();
    
    if (files.length === 0) {
        filesList.innerHTML = `
            <div class="files-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
                <p>No files uploaded yet</p>
            </div>
        `;
        return;
    }
    
    filesList.innerHTML = files.map(file => `
        <div class="file-item" data-id="${file.id}">
            <div class="file-icon">
                ${getFileIcon(file.type)}
            </div>
            <div class="file-info">
                <p class="file-name">${file.name}</p>
                <p class="file-size">${formatFileSize(file.size)}</p>
            </div>
            <div class="file-actions">
                <button class="file-btn download" onclick="downloadFile(${file.id})" title="Download">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                </button>
                <button class="file-btn delete" onclick="deleteFile(${file.id})" title="Delete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

function getFileIcon(type) {
    if (type.includes('pdf')) {
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
        </svg>`;
    }
    if (type.includes('image')) {
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
        </svg>`;
    }
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
    </svg>`;
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function downloadFile(id) {
    const files = getStoredFiles();
    const file = files.find(f => f.id === id);
    
    if (!file) return;
    
    const link = document.createElement('a');
    link.href = file.data;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function deleteFile(id) {
    if (!confirm('Are you sure you want to delete this file?')) return;
    
    const files = getStoredFiles().filter(f => f.id !== id);
    localStorage.setItem('portfolioFiles', JSON.stringify(files));
    renderFiles();
}

// ==========================================
// NAVIGATION
// ==========================================

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==========================================
// ANIMATIONS
// ==========================================

function initAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all animated elements
    document.querySelectorAll('.animate-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Typing effect for subtitle
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        setTimeout(type, 1000);
    }
}

// Make functions globally available
window.downloadFile = downloadFile;
window.deleteFile = deleteFile;
