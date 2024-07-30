"use client";
import contactMe from "@/public/assets/contactMe.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Contact = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8 ">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-5xl text-accent">
              Let&rsquo;s Work Together!
            </span>
            <p className="mt-10 max-w-[600px] text-white/80 text-xl ">
              I am looking to be part of a team that is committed to making a
              positive impact through technology. With my background in
              full-stack development, I am ready to help build solutions that
              enhance people&rsquo;s lives.
            </p>
            <Link href="mailto:danindunawa@gmail.com" target="_blank" rel="noopener noreferrer" passHref>
            <Button
                variant="outline"
                size="lg"
                className="lowercase flex items-center gap-2 mt-10"
              >
                
                <span>Email: danindunawa@gmail.com</span>
          
              </Button>
              </Link>

            {/* <motion.div
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4, ease: "easeInOut" }}
            >
              <Lottie className="w-[300px] h-[300px]" animationData={contactMe} />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
