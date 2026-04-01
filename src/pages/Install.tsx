export default function Install() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Install Medan</h1>

      <p>Run this command in your terminal:</p>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
{`curl -fsSL https://medan-org.github.io/install.sh | sh`}
      </pre>
    </div>
  );
}
