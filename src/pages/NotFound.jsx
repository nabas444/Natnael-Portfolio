import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "var(--space-xl)",
        paddingTop: "var(--navbar-height)",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "6rem",
            fontWeight: 700,
            color: "var(--color-primary)",
            marginBottom: "var(--space-md)",
          }}
        >
          404
        </h1>
        <h2 style={{ marginBottom: "var(--space-lg)" }}>Page Not Found</h2>
        <p style={{ marginBottom: "var(--space-2xl)", color: "var(--color-text-secondary)" }}>
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

