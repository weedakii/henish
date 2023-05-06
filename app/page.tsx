"use client";
import {
  About,
  Edu,
  FirstCard,
  Home,
  Navbar,
  Schedule,
  SecondCard,
  Services,
  ThirdCard,
} from "./components";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Edu />
      <Services />
      <Schedule />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      {/* maps */}

      {/* Footer */}
    </main>
  );
}
