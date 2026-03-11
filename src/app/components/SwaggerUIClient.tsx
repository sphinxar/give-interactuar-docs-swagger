"use client";

import dynamic from "next/dynamic";

const SwaggerUIReact = dynamic(() => import("./SwaggerUI"), {
  ssr: false,
  loading: () => (
    <div className="loader-wrapper">
      <div className="loader-spinner" />
      <p>Cargando documentación...</p>
    </div>
  ),
});

export default function SwaggerUIClient() {
  return <SwaggerUIReact />;
}
