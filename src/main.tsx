import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import diLogo from "@/assets/di-logo.png";

// Preload critical logo asset to prevent initial flicker
(() => {
  const id = "preload-di-logo";
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "preload";
    link.as = "image";
    link.href = diLogo;
    // @ts-ignore - fetchpriority is supported by modern browsers
    link.fetchPriority = "high";
    document.head.appendChild(link);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
