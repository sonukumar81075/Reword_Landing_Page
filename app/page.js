import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Merchants from "@/components/Merchants";
import Customers from "@/components/Customers";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Merchants />
      <Customers />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </>
  );
}
