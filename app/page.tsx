import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&rsquo;m <br />
              <span className="text-accent">Danindu Nawarathna</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Innovative software developer dedicated to creating efficient,
              secure, and user-friendly web applications with cutting-edge
              technologies.
            </p>
            {/* download resume button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Link href="https://drive.google.com/file/d/1qONGMEXbgyvzAtBcajSxusQBpY-DKwxX/view?usp=sharing" target="_blank" rel="noopener noreferrer" passHref>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="hidden">photo</div>
        </div>
      </div>
    </section>
  );
}
