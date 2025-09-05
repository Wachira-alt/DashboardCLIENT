class AuthService {
    constructor() {
        this.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    }

    /**
     * Initiate Google OAuth login by redirecting to backend
     */
    async login() {
        // No need to load Google SDK - backend handles everything
        window.location.href = `${this.baseURL}/api/auth/google`;
    }

    /**
     * Logout user and clear session
     */
    async logout() {
        try {
            const response = await fetch(`${this.baseURL}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include', // Include HTTP-only cookies
                headers: {
                    'Content-Type': 'application/json',
                    // CSRF token will be handled automatically by browser
                }
            });

            if (response.ok) {
                // Redirect to login page
                window.location.href = '/login';
            } else {
                throw new Error('Logout failed');
            }
        } catch (error) {
            console.error('Logout error:', error);
            // Force redirect even if API call fails
            window.location.href = '/login';
        }
    }

    /**
     * Get current user information
     */
    async getCurrentUser() {
        try {
            const response = await fetch(`${this.baseURL}/api/user/me`, {
                credentials: 'include', // Include HTTP-only cookies
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                return await response.json();
            } else if (response.status === 401) {
                // Try to refresh token
                const refreshed = await this.refreshToken();
                if (refreshed) {
                    // Retry the original request
                    const retryResponse = await fetch(`${this.baseURL}/api/user/me`, {
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (retryResponse.ok) {
                        return await retryResponse.json();
                    }
                }
                throw new Error('Unauthorized');
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            console.error('Get current user error:', error);
            throw error;
        }
    }

    /**
     * Refresh access token using refresh token
     */
    async refreshToken() {
        try {
            const response = await fetch(`${this.baseURL}/api/auth/refresh`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return response.ok;
        } catch (error) 