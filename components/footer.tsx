"use client";
import React from "react";
import { Slack, Github, Linkedin, Twitter, Moon } from "lucide-react";
import Image from "next/image";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4">
              <Image src="/logo.png" alt="Logo" height={64} width={64}></Image>
            </div>
            <p className="max-w-xs mb-4">
              Generate smooth, AI-based satellite video visualizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className="space-y-2">
                <li>Registry</li>
                <li>Pricing</li>
                <li>
                  <Link href="">Sign in ↗</Link>
                </li>
                <li>
                  <Link href="">Docs ↗</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>Refrences</li>
                <li>Telemetry Compliance</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="w-full justify-center mt-5 -mb-10">
          <TextHoverEffect text="विस्तार" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
