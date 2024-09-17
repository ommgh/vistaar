"use client";

import { FeaturesSection } from "@/components/features";
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
            className="text-[15vh] md:text-[20vh] lg:text-[50vh] font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-white dark:via-neutral-300 dark:to-background"
          >
            विस्तार
          </motion.h1>
        </div>
        <FeaturesSection />
      </div>
    </>
  );
}
