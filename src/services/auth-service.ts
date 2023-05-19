import axios from 'axios'
import '../services/mock-api';
import { BaseService } from './base-service';

export interface RegisterData {
    email: string
    password: string
}

export interface RegisterResponse {
    message: string
}

export interface LoginData {
    email: string
    password: string,
    rememberMe: boolean
}

export interface LoginResponse {
    message: string,
    token: string
}

export class AuthService extends BaseService {
    private static readonly API_BASE_URL = '/'

    constructor () {
        super();
    }

    // API methods
    public static async register(data: RegisterData): Promise<RegisterResponse> {
        const url = `${this.API_BASE_URL}register`;
        const response = await axios.post<RegisterResponse>(url, data);

        return response.data
    }

    public static async login(data: LoginData): Promise<LoginResponse> {
        try {
            const url = `${this.API_BASE_URL}login`;
            const response = await axios.post<LoginResponse>(url, data);
    
            // Check if the response was successful and a token was returned
            if (response.status === 200 && response.data.token) {
                // Store the token in localStorage or sessionStorage depending on the rememberMe option
                if (data.rememberMe) {
                    localStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.setItem('token', response.data.token);
                }
            }
    
            return response.data
        } 
        catch (error) {
            this.handleError(error);
            
            throw error;
        }
    }

    public static getToken(): string | null {
        return localStorage.getItem('token') || sessionStorage.getItem('token');
    }

}
