'use client';

import { useState, useEffect } from 'react';

const SITE_PASSWORD = 'adrian2026';
const STORAGE_KEY = 'portfolio-access';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setAuthorized(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === SITE_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setAuthorized(true);
    } else {
      setError(true);
      setInput('');
      setTimeout(() => setError(false), 1500);
    }
  };

  // Avoid hydration mismatch — render nothing until mounted
  if (!mounted) return null;

  if (authorized) return <>{children}</>;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 220, 0.92)',
        fontFamily: 'var(--font-newsreader), Georgia, serif',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: 420,
          padding: '0 24px',
        }}
      >
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#B0B4DC',
            lineHeight: 1.2,
            marginBottom: 40,
            fontFamily: "'Alte Haas Grotesk', 'Inter', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '-0.025em',
          }}
        >
          Under development
        </h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter password"
            autoFocus
            style={{
              width: '100%',
              maxWidth: 280,
              padding: '12px 16px',
              fontSize: 16,
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              border: `1.5px solid ${error ? '#ff6b6b' : 'rgba(176, 180, 220, 0.35)'}`,
              borderRadius: 8,
              outline: 'none',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#B0B4DC',
              textAlign: 'center',
              letterSpacing: '0.08em',
              transition: 'border-color 0.2s ease',
            }}
            onFocus={(e) => {
              if (!error) e.currentTarget.style.borderColor = 'rgba(176, 180, 220, 0.6)';
            }}
            onBlur={(e) => {
              if (!error) e.currentTarget.style.borderColor = 'rgba(176, 180, 220, 0.35)';
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 32px',
              fontSize: 14,
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'rgba(0, 0, 220, 0.92)',
              background: '#B0B4DC',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'opacity 0.2s ease, transform 0.1s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Enter
          </button>
        </form>

        {error && (
          <p
            style={{
              marginTop: 16,
              fontSize: 14,
              color: '#ff6b6b',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            Incorrect password
          </p>
        )}
      </div>
    </div>
  );
}
