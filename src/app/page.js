import BrowseByCategory from "@/components/category/BrowseByCategory";
import BestSellingProduct from "@/components/layout/BestSellingProduct";
import ExploreOurProducts from "@/components/layout/ExploreOurProducts";
import FlashSales from "@/components/layout/FlashSales";
import HeroSection from "@/components/layout/HeroSection";
import NewArrival from "@/components/layout/NewArrival";
import SpeakerBanner from "@/components/layout/SpeakerBanner";
import ServiceFeatures from "@/components/ServiceFeatures";

export default function Home() {
  return(
    <div className="">
    <HeroSection/>
    <FlashSales/>
    <BrowseByCategory/>
    <BestSellingProduct/>
    <SpeakerBanner/>
    <ExploreOurProducts/>
    <NewArrival/>
    <ServiceFeatures/>
    </div>
  )
}
