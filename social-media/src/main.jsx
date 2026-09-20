import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Poster, {createPostActionTalha} from "./components/Post.jsx";
import Card, { postloaderJan } from "./components/Card.jsx";

//Data fetching using loader
//loader expects a function
//Loader method can be used to load data before a particular route is executed.
//The loader method must return the data that is loaded or promise.
//Data is avialable in component and all the child components.
//useLoaderData hook can be used to get the fetched data.
//Loading state can also be used
const router = createBrowserRouter([
  { path: "/", element: <App />, 
  children: [
    { path: "", element: <Card />, loader:postloaderJan},
    { path: "create-post", element: <Poster/> ,action: createPostActionTalha},
  ],
},
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
