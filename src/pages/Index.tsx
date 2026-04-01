// src/pages/Index.tsx
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="home">
      <h1>Medan</h1>
      <p>Universal Package Installer</p>

      <section>
        <h2>Features</h2>
        <ul>
          <li>Install packages</li>
          <li>Run scripts</li>
          <li>Manage environments</li>
          <li>Sandbox execution</li>
          <li>Registry support (future)</li>
        </ul>
      </section>

      <section>
        <h2>Install</h2>
        <p>
          <Link to="/install">Go to install page →</Link>
        </p>
      </section>
    </main>
  );
}
