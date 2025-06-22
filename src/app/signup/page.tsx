'use client';

export default function SignUpPage() {
  return (
    <>
      <div className="container">
        <div className="card">
          <h2 className="title">Sign Up</h2>
          <form className="form">
            <input type="text" placeholder="Full Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button type="submit" className="button">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
}