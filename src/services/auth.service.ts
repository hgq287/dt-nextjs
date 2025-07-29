const BASE_URL = `${process.env.HG_API_BASE_URL}/${process.env.HG_API_NAMESPACE}`;

import { SignInPayload, SignInResponse } from "@/types/auth";

const API_BASE = process.env.HG_API_BASE_URL;
const API_NAMESPACE = process.env.HG_API_NAMESPACE;

export const signIn = async (data: SignInPayload): Promise<SignInResponse> => {
  const response = await fetch(`${API_BASE}/${API_NAMESPACE}/accounts/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || "Failed to sign in");
  }

  return response.json();
};