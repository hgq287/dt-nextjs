"use client";

import { useState } from "react";
import styles from "@/styles/SignIn.module.css";
import { useSignIn } from "@/hooks/useSignIn";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn, loading, error } = useSignIn();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSignIn({ email, password });
  };

  return (
    <div className={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}