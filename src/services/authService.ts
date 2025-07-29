import { api } from '@/utils/clientApi';
import { SignInPayload, SignInResponse } from "@/types/auth";

export const authService = {
  signIn: (payload: SignInPayload) => api.post('auth/signin', payload),
};