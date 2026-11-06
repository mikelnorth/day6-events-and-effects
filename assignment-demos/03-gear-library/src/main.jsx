import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

// StrictMode note: in development, React runs every effect's setup, then its
// cleanup, then its setup again. So each [] effect in this app adds a listener,
// removes it, and adds it again. The cleanup is what keeps us at one listener
// instead of two. Production builds only set up once.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
