import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css"; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CopilotKit publicApiKey="<your-publicApiKey>">
        <App />
      </CopilotKit>
    </BrowserRouter>
  </StrictMode>,
)
