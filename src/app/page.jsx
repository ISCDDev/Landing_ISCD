import { HeroSection } from "@/components/component/hero-section";
import { Navbar } from "@/components/component/navbar";
import { Sections } from "@/components/component/sections";
import { Services } from "@/components/component/services";
import { Footer } from "@/components/component/footer";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      {/* <video src="wallpaper3.mp4" autoPlay muted loop className="background-video video-filter" /> */}
      <Navbar />
      <HeroSection />
      <Services />
      <Sections />
      <Footer />
      <video
        src="background.mp4"
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
    </>
  );
}
