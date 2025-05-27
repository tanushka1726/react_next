"use client"
import { useState } from 'react';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login attempt with email: ${email}`);
  };

  return (
    <>
      <main className="d-flex align-items-center justify-content-center vh-100 position-relative overflow-hidden">
        <div className="background-overlay"></div>
        <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.85)' }}>
          <h2 className="text-center mb-3">Welcome Back</h2>
          <p className="text-center text-muted mb-4">
            Log in to your book reading account
          </p>
          <form onSubmit={handleSubmit} noValidate>
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
                autoFocus
              />
            </div>
            <div className="mb-4">
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
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg w-100 mb-3">
              Log In
            </button>
          </form>
          <p className="text-center text-muted mb-0">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-dark fw-semibold text-decoration-none">
              Sign Up
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

export default LoginPage;
