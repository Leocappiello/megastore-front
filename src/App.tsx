import { Route, Routes } from "react-router-dom";
import './App.css';
import AdminRoute from "./routes/adminRoute";
import DashboardLayout from "./routes/dashboard";
import ProfileLayout from "./routes/profile";
import SignupLayout from "./routes/signup";
import UserRoute from "./routes/userRoute";
import MainLayout from "./routes/main/layout";
import LayoutLanding from "./routes/landing/layout";
import LandingLayout from "./routes/landing/layout";
import ProductLayout from "./routes/product";

function App() {
  return (
   <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />} />

          <Route 
            path="/landing"
            element={<LandingLayout />}
          />

          <Route path="/dashboard" element={
            // <AdminRoute>
            //   <DashboardLayout />
            // </AdminRoute>
            <DashboardLayout />
          } />

          <Route path="/profile" element={
            <UserRoute>
              <ProfileLayout />
            </UserRoute>
          } />

          <Route path="/login" element={
              <SignupLayout />
          } />

          <Route path="/product/:id" element={
            <ProductLayout />
          } />

          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </>
 );
}

export default App
