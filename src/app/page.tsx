import SwaggerUIClient from "./components/SwaggerUIClient";

export default function Home() {
  return (
    <main>
      <header className="docs-header">
        <div className="docs-header-inner">
          <div className="docs-brand">
            <span className="docs-brand-badge">API</span>
            <div>
              <h1 className="docs-brand-title">GIVE Interactuar</h1>
              <p className="docs-brand-subtitle">
                Documentación interactiva · Swagger 2.0
              </p>
            </div>
          </div>

          <div className="docs-meta">
            <span className="docs-meta-https">
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.5 0A2.75 2.75 0 0 0 2.75 2.75V4.5H2a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1H8.25V2.75A2.75 2.75 0 0 0 5.5 0zm0 1.5A1.25 1.25 0 0 1 6.75 2.75V4.5H4.25V2.75A1.25 1.25 0 0 1 5.5 1.5z" />
              </svg>
              HTTPS
            </span>
            <span className="docs-meta-version">v1.0.0</span>
          </div>
        </div>
      </header>

      <div className="docs-infobar">
        <div className="docs-infobar-inner">
          <div className="docs-infobar-item">
            <span className="docs-infobar-label">Base URL</span>
            <span className="docs-infobar-value">
              give-interactuar.vercel.app/api
            </span>
          </div>
          <div className="docs-infobar-divider" />
          <div className="docs-infobar-item">
            <span className="docs-infobar-label">Formato</span>
            <span className="docs-infobar-value">JSON · snake_case</span>
          </div>
          <div className="docs-infobar-divider" />
          <div className="docs-infobar-item">
            <span className="docs-infobar-label">Timestamps</span>
            <span className="docs-infobar-value">ISO 8601 UTC</span>
          </div>
          <div className="docs-infobar-divider" />
          <div className="docs-infobar-item">
            <span className="docs-infobar-label">Backend</span>
            <span className="docs-infobar-value">Supabase (PostgreSQL)</span>
          </div>
          <div className="docs-infobar-divider" />
          <div className="docs-infobar-item">
            <span className="docs-infobar-label">Acceso</span>
            <span className="docs-infobar-value">Solo lectura</span>
          </div>
        </div>
      </div>

      <div className="swagger-container">
        <SwaggerUIClient />
      </div>
    </main>
  );
}
