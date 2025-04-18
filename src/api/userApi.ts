import apiClient from './apiClient';

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type AuthResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
};

export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (userData: RegisterData): Promise<AuthResponse> => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

export const fetchUser = async (userId: string) => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};


