export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    VALIDATE: '/auth/validate',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  
  // User endpoints
  USERS: {
    PROFILE: '/users/me',
    UPDATE_PROFILE: '/users/profile',
    UPLOAD_AVATAR: '/users/avatar',
    SETTINGS: '/users/settings',
    LIST: '/users',
    BY_ID: (id: string) => `/users/${id}`,
  },
  
  // Booking endpoints
  HOTELS: {
    GET: '/admin/hotels',
    CREATE: '/admin/hotels',
    BY_ID: (id: string) => `/admin/hotels/${id}`,
    UPDATE: (id: string) => `/admin/hotels/${id}`,
    DELETE: (id: string) => `/admin/hotels/${id}`,
  },
  
  // Storage endpoints
  STORAGE: {
    LIST: '/storage',
    UPLOAD: '/storage/upload',
    DOWNLOAD: (id: string) => `/storage/${id}/download`,
    DELETE: (id: string) => `/storage/${id}`,
  },
} as const;