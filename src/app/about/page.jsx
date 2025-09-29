import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="flex gap-8 mt-10">
      <div className="flex-1 gap-8 flex flex-col">
        <h1 className="font-semibold text-2xl"> About Page </h1>
        <p>
          lorem is a dummy text. lorem is a dummy text. lorem is a dummy text.
          lorem is a dummy text. lorem is a dummy text. lorem is a dummy text.
          lorem is a dummy text. lorem is a dummy text. lorem is a dummy text
        </p>
        <div className="flex gap-4">
          <Button className="min-w-[80px] px-4 py-4"> Read </Button>
          <Button className="min-w-[80px] px-4 py-4"> Learn </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/about.png"
          alt="about image"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
