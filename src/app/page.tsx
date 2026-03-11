import SwaggerUIClient from "./components/SwaggerUIClient";

export default function Home() {
  return (
    <main>
      <header className="docs-header">
        <div className="docs-header-inner">
          <div className="docs-brand">
            <span className="docs-brand-badge">API</span>
            <h1 className="docs-brand-title">GIVE Interactuar</h1>
          </div>
          <p className="docs-brand-subtitle">
            Documentación interactiva · OpenAPI 3.0
          </p>
        </div>
      </header>

      <div className="swagger-container">
        <SwaggerUIClient />
      </div>
    </main>
  );
}
