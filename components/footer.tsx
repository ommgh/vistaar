import React from "react";
import { Slack, Github, Linkedin, Twitter, Moon } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <Image
                src="/logo.png"
                alt="Logo"
                height={100}
                width={100}
              ></Image>
            </div>
            <p className="max-w-xs mb-4">
              Generate smooth, AI-based satellite video visualizations
            </p>
            <div className="flex space-x-4">
              <Slack size={20} />
              <Github size={20} />
              <Linkedin size={20} />
              <Twitter size={20} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className="space-y-2">
                <li>Registry</li>
                <li>Pricing</li>
                <li>Sign in ↗</li>
                <li>Docs ↗</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Brand ↗</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>Site credit ↗</li>
                <li>Telemetry Compliance</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-black/10 flex justify-between items-center">
          {/* <div className="text-3xl font-bold">विस्तार</div> */}
          {/* <Moon size={24} /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
