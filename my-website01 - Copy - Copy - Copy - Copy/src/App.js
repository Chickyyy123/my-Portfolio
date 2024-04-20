import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./modules/Home/HomeScreen";
import ServiceScreen from "./modules/Services/ServiceScreen";
import AboutScreen from "./modules/About/AboutScreen";
import BlogGridScreen from "./modules/Blog/Blog Grid/BlogGridScreen";
import BlogDetailScreen from "./modules/Blog/Blog Detail/BlogDetailScreen";
import PricingPlanScreen from "./modules/Pages/Pricing Plan/PricingPlanScreen";
import TeamMemberScreen from "./modules/Pages/Team Members/TeamMemberScreen";
import OurFeaturesScreen from "./modules/Pages/Our Features/OurFeaturesScreen";
import TestimonialScreen from "./modules/Pages/Testimonial/TestimonialScreen";
import FreeQuoteScreen from "./modules/Pages/Free Quote/FreeQuoteScreen";
import ContactScreen from "./modules/Contact/ContactScreen";
import Layout from "./Components/layout/Index";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh(); // Refresh AOS after initialization
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />}></Route>
            <Route path="about" element={<AboutScreen />}></Route>
            <Route path="services" element={<ServiceScreen />}></Route>
            <Route path="bloggrid" element={<BlogGridScreen />}></Route>
            <Route path="blogdetail" element={<BlogDetailScreen />}></Route>
            <Route path="pricingplan" element={<PricingPlanScreen />}></Route>
            <Route path="ourfeatures" element={<OurFeaturesScreen />}></Route>
            <Route path="teammembers" element={<TeamMemberScreen />}></Route>
            <Route path="testimonial" element={<TestimonialScreen />}></Route>
            <Route path="freequote" element={<FreeQuoteScreen />}></Route>
            <Route path="contact" element={<ContactScreen />}></Route>
            <Route path="*" element={<h1>Error Page</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
