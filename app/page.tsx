import Hero from "@/components/home/Hero";
import Paths from "@/components/home/Paths";
import Diensten from "@/components/home/Diensten";
import BestratingBlock from "@/components/home/BestratingBlock";
import Jaaronderhoud from "@/components/home/Jaaronderhoud";
import Werkwijze from "@/components/Werkwijze";
import OnsWerkTeaser from "@/components/home/OnsWerkTeaser";
import PaardenTeaser from "@/components/home/PaardenTeaser";
import OverBlock from "@/components/home/OverBlock";
import Werkgebied from "@/components/home/Werkgebied";
import Bereikbaarheid from "@/components/home/Bereikbaarheid";
import Closing from "@/components/home/Closing";

export default function Home() {
  return (
    <>
      <Hero />
      <Paths />
      <Diensten />
      <BestratingBlock />
      <Jaaronderhoud />
      <Werkwijze />
      <OnsWerkTeaser />
      <PaardenTeaser />
      <OverBlock />
      <Werkgebied />
      <Bereikbaarheid />
      <Closing />
    </>
  );
}
