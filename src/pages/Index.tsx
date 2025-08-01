import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import QuickIntro from "@/components/home/QuickIntro";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <QuickIntro />
    </Layout>
  );
};

export default Index;
