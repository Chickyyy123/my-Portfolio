import FooterComp from "../../Components/Footer/FooterComp";
import AboutUsComp from "../../Components/HomeScreen/AboutUsComp";
import LatestBlogComp from "../../Components/HomeScreen/LatestBlogComp";
import OurServicesComp from "../../Components/HomeScreen/OurServicesComp";
import PricingPlansComp from "../../Components/HomeScreen/PricingPlansComp";
import RequestAQuoteComp from "../../Components/HomeScreen/RequestAQuoteComp";
import SlideShowComp from "../../Components/HomeScreen/SlideShow";
import TeamMemberComp from "../../Components/HomeScreen/TeamMemberComp";
import Tesimonial from "../../Components/HomeScreen/Tesimonial";
import VendorComp from "../../Components/HomeScreen/VendorComp";
import WhyChooseUsComp from "../../Components/HomeScreen/WhyChooseUsComp";

const HomeScreen = () => {
  return (
    <div>
      <SlideShowComp/>
      <AboutUsComp />
      <WhyChooseUsComp />
      <OurServicesComp />
      <PricingPlansComp />
      <RequestAQuoteComp />
      <Tesimonial />
      <TeamMemberComp />
      <LatestBlogComp />
      <VendorComp/>
      <FooterComp/>
    </div>
  );
};

export default HomeScreen;
