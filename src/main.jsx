import { Chart, registerables } from "chart.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CookiesProvider } from "react-cookie";

Chart.register(...registerables);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
