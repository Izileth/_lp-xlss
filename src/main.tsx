
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./routes/routes";
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find root element with ID 'root'");
}

ReactDOM.createRoot(rootElement).render(
  <RouterProvider router={Router} />
);