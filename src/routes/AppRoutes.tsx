import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./PrivateRoutes";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import SingleContact from "../pages/SingleContact/SingleContact";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<p>login</p>} path="/login" />
      <Route element={<p>sign up</p>} path="/signup" />

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
