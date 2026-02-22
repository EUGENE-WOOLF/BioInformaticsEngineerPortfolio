import { Hero } from "@/components/sections/hero";
import { CurrentlyWorkingOn } from "@/components/sections/current-work";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <Hero />
      <CurrentlyWorkingOn />
      {/* Featured Projects preview can go here later */}
    </div>
  );
}
