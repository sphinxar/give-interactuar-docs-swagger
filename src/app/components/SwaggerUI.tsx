"use client";


import SwaggerUIReact from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function SwaggerUI() {
  return (
    <SwaggerUIReact
      url="/openapi.yaml"
      docExpansion="list"
      defaultModelsExpandDepth={1}
      displayRequestDuration={true}
      tryItOutEnabled={true}
    />
  );
}
