import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";
import RegistrationWrapper from "./pages/Registration/RegistrationWrapper";
import RegistrationLayout from "./pages/Registration/Layout/RegistrationLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/apply" element={<RegistrationLayout />}>
      <Route path=":stepId" element={<RegistrationWrapper />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
