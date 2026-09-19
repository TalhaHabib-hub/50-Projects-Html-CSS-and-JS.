import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Poster from "./components/post.jsx";
import Card from "./components/Card.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, 
  children: [
    { path: "", element: <Card/>},
    { path: "create-post", element: <Poster /> },
  ],
},
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
