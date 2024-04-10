import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";
import RegistrationWrapper from "./pages/Registration/RegistrationWrapper";
import RegistrationLayout from "./pages/Registration/Layout/RegistrationLayout";
import Redirect from "./pages/Redirect/Redirect";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/apply" element={<RegistrationLayout />}>
        <Route path=":stepId" element={<RegistrationWrapper />}>
          <Route path=":accountType" element={<RegistrationWrapper />} />
        </Route>
      </Route>
      <Route path="/" element={<Redirect />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
