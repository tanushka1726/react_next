"use client"
import { useState } from 'react';
import Link from 'next/link';

const SignupPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Placeholder for signup logic
    alert(`Sign up attempt for: ${fullName} (${email})`);
  };

  return (
    <>
      <main className="d-flex align-items-center justify-content-center vh-100 position-relative overflow-hidden">
        <div className="background-overlay"></div>
        <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.85)' }}>
          <h2 className="text-center mb-3">Create Account</h2>
          <p className="text-center text-muted mb-4">
            Sign up to start reading your favorite books
          </p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label visually-hidden">
                Full Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                autoComplete="name"
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label visually-hidden">
                Email address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label visually-hidden">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label visually-hidden">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg w-100 mb-3">
              Sign Up
            </button>
          </form>
          <p className="text-center text-muted mb-0">
            Already have an account?{' '}
            <Link href="/login" className="text-dark fw-semibold text-decoration-none">
              Log In
            </Link>
          </p>
        </div>
      </main>
      <style jsx>{`
        main {
          background-image: url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .background-overlay {
          position: absolute;
          inset: 0;
          background: rgba(20, 20, 20, 0.5);
          backdrop-filter: brightness(0.7);
          z-index: 0;
        }
        .card {
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        h2 {
          font-weight: 600;
        }
        a {
          transition: color 0.2s ease;
        }
        a:hover {
          color: #111;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default SignupPage;
