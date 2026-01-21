// Authentication Module for Portfolio Admin
// Uses SHA-256 hashing for password verification

const Auth = {
    // IMPORTANT: Change this hash to your own password hash
    // To generate a new hash:
    // 1. Open browser console on your portfolio site
    // 2. Run: Auth.generateHash('your-password-here')
    // 3. Copy the output and replace the hash below
    // 
    // Default password is: admin123 (CHANGE THIS!)
    PASSWORD_HASH: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
    
    // Session duration in milliseconds (24 hours)
    SESSION_DURATION: 24 * 60 * 60 * 1000,
    
    // Storage keys
    STORAGE_KEY: 'portfolio_auth_session',
    
    /**
     * Generate SHA-256 hash of a string
     * @param {string} text - Text to hash
     * @returns {Promise<string>} - Hex encoded hash
     */
    async generateHash(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        console.log('Generated hash:', hashHex);
        console.log('Copy this hash and replace PASSWORD_HASH in auth.js');
        return hashHex;
    },
    
    /**
     * Verify password against stored hash
     * @param {string} password - Password to verify
     * @returns {Promise<boolean>} - True if password matches
     */
    async verifyPassword(password) {
        const hash = await this.generateHashSilent(password);
        return hash === this.PASSWORD_HASH;
    },
    
    /**
     * Generate hash without console output
     * @param {string} text - Text to hash
     * @returns {Promise<string>} - Hex encoded hash
     */
    async generateHashSilent(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    },
    
    /**
     * Create a new session
     */
    createSession() {
        const session = {
            authenticated: true,
            createdAt: Date.now(),
            expiresAt: Date.now() + this.SESSION_DURATION
        };
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
        return session;
    },
    
    /**
     * Check if user is authenticated
     * @returns {boolean} - True if authenticated and session is valid
     */
    isAuthenticated() {
        try {
            const sessionData = sessionStorage.getItem(this.STORAGE_KEY);
            if (!sessionData) return false;
            
            const session = JSON.parse(sessionData);
            
            // Check if session is expired
            if (Date.now() > session.expiresAt) {
                this.logout();
                return false;
            }
            
            return session.authenticated === true;
        } catch (e) {
            return false;
        }
    },
    
    /**
     * Attempt to login with password
     * @param {string} password - Password to verify
     * @returns {Promise<{success: boolean, message: string}>}
     */
    async login(password) {
        if (!password || password.trim() === '') {
            return { success: false, message: 'Please enter a password' };
        }
        
        const isValid = await this.verifyPassword(password);
        
        if (isValid) {
            this.createSession();
            return { success: true, message: 'Login successful' };
        } else {
            return { success: false, message: 'Incorrect password' };
        }
    },
    
    /**
     * Logout and clear session
     */
    logout() {
        sessionStorage.removeItem(this.STORAGE_KEY);
    },
    
    /**
     * Get remaining session time
     * @returns {number} - Remaining time in milliseconds, or 0 if not authenticated
     */
    getSessionTimeRemaining() {
        try {
            const sessionData = sessionStorage.getItem(this.STORAGE_KEY);
            if (!sessionData) return 0;
            
            const session = JSON.parse(sessionData);
            const remaining = session.expiresAt - Date.now();
            return remaining > 0 ? remaining : 0;
        } catch (e) {
            return 0;
        }
    }
};

// Setup helper - run this in console to generate your password hash
// Example: Auth.generateHash('mySecurePassword123')

// Make Auth globally available
window.Auth = Auth;
