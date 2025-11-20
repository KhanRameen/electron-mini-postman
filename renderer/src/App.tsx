import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    window.api.ping().then((res: string) => { setMsg(res) });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Electron + React + Vite + TS</h1>
      <p>IPC Response: {msg}</p>
    </div>
  );
}
