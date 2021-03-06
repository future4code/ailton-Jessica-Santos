import ApplicationFormPage  from "../pages/ApplicationFormPage"
import  LoginPage  from "../pages/LoginPage"
import  AdminHomePage  from "../pages/AdminHomePage"
import  ListTripsPage  from "../pages/ListTripsPage"
import CreateTripPage from "../pages/CreateTripPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  TripDetailsPage  from "../pages/TripDetailsPage"
import HomePage from "../pages/HomePage";


export const Router = ()=> {
    return(
<BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="list" element={<ListTripsPage />} />
          <Route path="application" element={<ApplicationFormPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="details" element={<TripDetailsPage />} />
          <Route path="create" element={<CreateTripPage />} />
        </Routes>
      </BrowserRouter>
    )
 
}