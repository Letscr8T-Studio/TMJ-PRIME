import { Hero } from "@/components/sections/Hero";
import { Sectors } from "@/components/sections/Sectors";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reseller } from "@/components/sections/Reseller";

export default function Home() {
  return (
    <>
      <Hero />
      <Sectors />
      <Products />
      <WhyUs />
      <Reseller />
    </>
  );
}
