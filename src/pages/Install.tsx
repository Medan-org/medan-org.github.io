// src/pages/Install.tsx

export default function Install() {
  const codeStyle = {
    background: "#111",
    color: "#0f0",
    padding: "1rem",
    borderRadius: "8px",
    overflowX: "auto",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Install</h1>
      <p>
        There are different ways to install Medan. Below are all supported
        installation methods.
      </p>

      <h2>Supported Devices</h2>
      <p>Medan currently supports installation on the following platforms:</p>
      <ul>
        <li>Windows 10 (Command Prompt)</li>
        <li>Windows PowerShell</li>
        <li>Android (Termux)</li>
        <li>Linux (all major distributions)</li>
        <li>macOS (Intel & Apple Silicon)</li>
      </ul>

      <h2>Windows 10 (Command Prompt)</h2>
      <p>Run this command in Command Prompt:</p>
      <pre style={codeStyle}>
{`curl -fsSL https://medan-org.github.io/install.sh | sh`}
      </pre>

      <h2>Windows PowerShell</h2>
      <p>Run this command in PowerShell:</p>
      <pre style={codeStyle}>
{`iwr https://medan-org.github.io/install.ps1 -UseBasicParsing | iex`}
      </pre>

      <h2>Termux on Android</h2>
      <p>Termux supports the same universal installer:</p>
      <pre style={codeStyle}>
{`curl -fsSL https://medan-org.github.io/install.sh | sh`}
      </pre>

      <h2>Linux (Debian, Ubuntu, Arch, Fedora, etc.)</h2>
      <p>Use the universal curl installer:</p>
      <pre style={codeStyle}>
{`curl -fsSL https://medan-org.github.io/install.sh | sh`}
      </pre>

      <h2>macOS (Intel & Apple Silicon)</h2>
      <p>Use the same installer on macOS:</p>
      <pre style={codeStyle}>
{`curl -fsSL https://medan-org.github.io/install.sh | sh`}
      </pre>

      <h2>npm (Coming Soon)</h2>
      <p>Medan will soon be installable globally via npm:</p>
      <pre style={codeStyle}>
{`npm install -g medan`}
      </pre>

      <h2>Direct Binary Downloads (Coming Soon)</h2>
      <p>Prebuilt binaries for all platforms will be available here:</p>
      <pre style={codeStyle}>
{`https://github.com/Medan-org/medan-cli/releases/latest`}
      </pre>
    </div>
  );
}
