import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./PrivateRoutes";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import SingleContact from "../pages/SingleContact/SingleContact";
import ErrorsPage from "../pages/ErrorPage/ErrorsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<p>login</p>} path="/login" />
      <Route element={<p>sign up</p>} path="/signup" />
      {/* Page Not Found */}
      <Route path="*" element={<Navigate to="/error/404" />} />
      <Route path="error/*" element={<ErrorsPage />} />

      {/* Private Pages*/}
      <Route element={<ProtectedRoute />}>
        <Route element={<p>home</p>} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contacts />} path="contacts"></Route>
        <Route element={<SingleContact />} path="contacts/:id" />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
