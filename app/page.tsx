"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="flex flex-col wrapper text-primary gap-3">
        <div className="relative h-[100vh] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
          {/* Sparkles Core Component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={30}
            className="w-full h-full absolute top-0 left-0 z-10"
            particleColor="#00BFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

          {/* Introducing VISTAAR Text */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 0.5, 0.36, 1],
            }}
            className="text-5xl md:text-7xl lg:text-9xl text-center text-primary relative z-20"
          >
            विस्तार
          </motion.h1>

          {/* AI-Powered Space Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.22, 0.5, 0.36, 1] }}
            className="relative z-20"
          >
            {/* <p className="text-2xl md:text-4xl text-center mt-10">
              Advanced frame interpolation and video enhancement for ISRO's
              space exploration missions
            </p> */}
          </motion.div>
        </div>
      </div>
    </>
  );
}
