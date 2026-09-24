import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeItem from "./routes/HomeItem.jsx";
import Bag from "./routes/Bag.jsx";

const item = {
  id: "001",
  image: "images/1.jpg",
  company: "Carlton London",
  item_name: "Rhodium-Plated CZ Floral Studs",
  original_price: 1045,
  current_price: 606,
  discount_percentage: 42,
  return_period: 14,
  delivery_date: "10 Oct 2023",
  rating: { stars: 4.5, count: 1400 },
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeItem item={item} /> },
      { path: "bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
