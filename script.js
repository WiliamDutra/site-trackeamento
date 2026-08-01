// ==========================================
// TRACKING SCRIPT & ANALYTICS API
// ==========================================

// Helper function to read cookie by name
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

// Parse URL Parameters (fbclid, ttclid, gclid) and Cookies (fbc, fbp)
function getTrackingUserData() {
    const params = new URLSearchParams(window.location.search);
    const userData = {};
    
    const fbclid = params.get('fbclid');
    const ttclid = params.get('ttclid');
    const gclid = params.get('gclid');
    
    if (fbclid) userData.fbclid = fbclid;
    if (ttclid) userData.ttclid = ttclid;
    if (gclid) userData.gclid = gclid;

    // Capture _fbp cookie
    const fbp = getCookie('_fbp');
    if (fbp) {
        userData.fbp = fbp;
    }

    // Capture _fbc cookie or construct manually if fbclid exists
    const fbcCookie = getCookie('_fbc');
    if (fbcCookie) {
        userData.fbc = fbcCookie;
    } else if (fbclid) {
        const timestamp = Date.now();
        userData.fbc = `fb.1.${timestamp}.${fbclid}`;
    }
    
    return userData;
}

// Fire & Forget HTTP POST Event Tracker
function trackEvent(eventName, eventUserData = {}) {
    let eventId;
    try {
        eventId = crypto.randomUUID();
    } catch (e) {
        eventId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const trackingData = getTrackingUserData();
    const mergedUserData = { ...trackingData, ...eventUserData };

    const body = {
        event_id: eventId,
        event_name: eventName,
        user_data: mergedUserData,
        custom_data: {}
    };

    fetch('https://track.companynervonine.online/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(body)
    }).catch(err => {
        // Fire and forget - silent catch so it doesn't interrupt visitors
        console.warn('Tracking fail:', err);
    });
}

// YouTube Player Iframe API Integration
let player;
let videoPlayTracked = false;

// Load the Iframe Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtube-player', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
};

function onPlayerStateChange(event) {
    // 1 represents PLAYING in YouTube Player API
    if (event.data === 1 && !videoPlayTracked) {
        trackEvent('VideoPlay');
        videoPlayTracked = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Fire PageView event on load
    trackEvent('PageView');

    // DOM Elements
    const leadForm = document.getElementById('lead-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const whatsappInput = document.getElementById('whatsapp');
    
    const formContainer = document.getElementById('form-container');
    const successContainer = document.getElementById('success-container');
    const resetBtn = document.getElementById('reset-btn');
    
    const resultName = document.getElementById('result-name');
    const resultWhatsapp = document.getElementById('result-whatsapp');
    
    // Admin Dashboard Elements
    const toggleAdminBtn = document.getElementById('toggle-admin-btn');
    const closeAdminBtn = document.getElementById('close-admin-btn');
    const adminDashboard = document.getElementById('admin-dashboard');
    const leadsTableBody = document.getElementById('leads-table-body');
    const leadCountEl = document.getElementById('lead-count');
    const clearLeadsBtn = document.getElementById('clear-leads-btn');
    const exportLeadsBtn = document.getElementById('export-leads-btn');

    // Phone mask (Brazilian Format: (XX) XXXXX-XXXX or (XX) XXXX-XXXX)
    whatsappInput.addEventListener('input', (e) => {
        let value = e.target.value;
        // Keep only digits
        value = value.replace(/\D/g, '');
        
        // Truncate to maximum 11 digits
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        // Format string
        if (value.length > 10) {
            // (XX) XXXXX-XXXX
            value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (value.length > 6) {
            // (XX) XXXX-XXXX (transitional or landline)
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
        } else if (value.length > 2) {
            // (XX) XXXX
            value = value.replace(/^(\d{2})(\d{0,4})$/, '($1) $2');
        } else if (value.length > 0) {
            // (XX
            value = value.replace(/^(\d{0,2})$/, '($1');
        }
        
        e.target.value = value;
        
        // Clear error if typing valid format
        const numericLength = e.target.value.replace(/\D/g, '').length;
        if (numericLength >= 10) {
            hideError('whatsapp');
        }
    });

    // Helper functions for showing/hiding validation errors
    function showError(fieldId) {
        const group = document.getElementById(fieldId).closest('.input-group');
        group.classList.add('invalid');
    }

    function hideError(fieldId) {
        const group = document.getElementById(fieldId).closest('.input-group');
        group.classList.remove('invalid');
    }

    // Input event listeners to clear errors on typing
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length >= 3) {
            hideError('name');
        }
    });

    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value.trim())) {
            hideError('email');
        }
    });

    // Form Validation Logic
    function validateForm() {
        let isValid = true;
        
        // Name validation
        const nameVal = nameInput.value.trim();
        if (nameVal.length < 3) {
            showError('name');
            isValid = false;
        } else {
            hideError('name');
        }

        // Email validation
        const emailVal = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            showError('email');
            isValid = false;
        } else {
            hideError('email');
        }

        // WhatsApp validation
        const whatsappDigits = whatsappInput.value.replace(/\D/g, '');
        if (whatsappDigits.length < 10 || whatsappDigits.length > 11) {
            showError('whatsapp');
            isValid = false;
        } else {
            hideError('whatsapp');
        }

        return isValid;
    }

    // Form Submit Handler
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const whatsapp = whatsappInput.value.trim();
        const date = new Date().toLocaleString('pt-BR');

        // Save lead
        saveLead({ name, email, whatsapp, date });

        // Track Lead Event
        trackEvent('Lead', {
            nome: name,
            email: email,
            telefone: whatsapp
        });

        // Update success message UI
        resultName.textContent = name;
        resultWhatsapp.textContent = whatsapp;

        // Animate visibility transition
        formContainer.style.display = 'none';
        successContainer.style.display = 'flex';
        
        // Reset form controls
        leadForm.reset();
    });

    // Reset button (allows registering another lead)
    resetBtn.addEventListener('click', () => {
        successContainer.style.display = 'none';
        formContainer.style.display = 'block';
    });

    // Save lead to Local Storage
    function saveLead(newLead) {
        let leads = [];
        try {
            const rawLeads = localStorage.getItem('captured_leads');
            if (rawLeads) {
                leads = JSON.parse(rawLeads);
            }
        } catch (e) {
            console.error('Error parsing leads from localStorage', e);
        }

        leads.push(newLead);
        localStorage.setItem('captured_leads', JSON.stringify(leads));
    }

    // Load and populate Leads in Admin Table
    function renderLeadsTable() {
        let leads = [];
        try {
            const rawLeads = localStorage.getItem('captured_leads');
            if (rawLeads) {
                leads = JSON.parse(rawLeads);
            }
        } catch (e) {
            console.error(e);
        }

        leadsTableBody.innerHTML = '';
        leadCountEl.textContent = leads.length;

        if (leads.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = `<td colspan="4" style="text-align: center; color: var(--text-muted); padding: 32px 16px;">Nenhum lead capturado até o momento.</td>`;
            leadsTableBody.appendChild(emptyRow);
            return;
        }

        // Render from newest to oldest
        [...leads].reverse().forEach(lead => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${escapeHTML(lead.name)}</strong></td>
                <td>${escapeHTML(lead.email)}</td>
                <td>${escapeHTML(lead.whatsapp)}</td>
                <td>${escapeHTML(lead.date)}</td>
            `;
            leadsTableBody.appendChild(row);
        });
    }

    // Helper to prevent HTML Injection
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    // Admin Panel Toggles
    toggleAdminBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderLeadsTable();
        adminDashboard.style.display = 'flex';
    });

    closeAdminBtn.addEventListener('click', () => {
        adminDashboard.style.display = 'none';
    });

    // Close on overlay click outside content
    adminDashboard.addEventListener('click', (e) => {
        if (e.target === adminDashboard) {
            adminDashboard.style.display = 'none';
        }
    });

    // Clear Leads functionality
    clearLeadsBtn.addEventListener('click', () => {
        if (confirm('Tem certeza de que deseja apagar TODOS os leads capturados localmente? Esta ação não pode ser desfeita.')) {
            localStorage.removeItem('captured_leads');
            renderLeadsTable();
        }
    });

    // Export Leads as CSV
    exportLeadsBtn.addEventListener('click', () => {
        let leads = [];
        try {
            const rawLeads = localStorage.getItem('captured_leads');
            if (rawLeads) {
                leads = JSON.parse(rawLeads);
            }
        } catch (e) {
            console.error(e);
        }

        if (leads.length === 0) {
            alert('Não há leads para exportar.');
            return;
        }

        // CSV Construction with UTF-8 BOM to support Excel accentuation in pt-BR
        let csvContent = '\uFEFF'; 
        csvContent += 'Nome;E-mail;WhatsApp;Data de Registro\n';

        leads.forEach(lead => {
            // Clean semi-colons and double quotes to prevent CSV breakages
            const name = lead.name.replace(/;/g, ',').replace(/"/g, '""');
            const email = lead.email.replace(/;/g, ',').replace(/"/g, '""');
            const whatsapp = lead.whatsapp.replace(/;/g, ',').replace(/"/g, '""');
            const date = lead.date.replace(/;/g, ',').replace(/"/g, '""');
            
            csvContent += `"${name}";"${email}";"${whatsapp}";"${date}"\n`;
        });

        // Trigger CSV File Download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `leads_capturados_${new Date().toISOString().slice(0,10)}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
