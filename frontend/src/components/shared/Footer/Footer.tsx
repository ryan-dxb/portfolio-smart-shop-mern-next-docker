import React, { FC } from "react";
import SubscribeForm from "../SubscribeForm";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <SubscribeForm />

      <footer className="py-12 content-container">
        <div className="flex flex-row space-x-8">
          <div className="flex-[1.5]">
            <h3 className="text-lg font-semibold text-primary">About Us</h3>
            <Separator orientation="horizontal" className="my-4 " />
            <ul className="flex flex-col space-y-2">
              <li>
                <div className="flex flex-row items-center space-x-4 ">
                  <p className="text-4xl">
                    <TfiHeadphoneAlt />
                  </p>
                  <div>
                    <p className="text-sm font-semibold">Have a question?</p>
                    <p className="text-lg font-bold text-primary">
                      +1 123 456 7890
                    </p>
                  </div>
                </div>
              </li>

              <li className="flex flex-row items-center pt-2 space-x-4">
                <p className="text-sm font-semibold">Email Us: </p>
                <p className="text-xs font-bold tracking-wide text-primary">
                  mail@example.com
                </p>
              </li>

              <li className="flex flex-row items-center mt-2 space-x-4">
                <p className="text-sm font-semibold">Address: </p>
                <p className="text-xs font-bold tracking-wide text-primary">
                  Dubai, UAE
                </p>
              </li>

              <li className="flex flex-row items-center mt-2 space-x-4">
                <p className="text-sm font-semibold">Working Hours: </p>
                <p className="text-xs font-bold tracking-wide text-primary">
                  9:00 AM - 5:00 PM
                </p>
              </li>

              <li className="flex flex-row items-center mt-2 space-x-4">
                <p className="text-sm font-semibold">Working Days: </p>
                <p className="text-xs font-bold tracking-wide text-primary">
                  Monday - Friday
                </p>
              </li>
            </ul>

            <ul className="flex flex-row items-center mt-4 space-x-6">
              <li className="p-2 text-gray-500 transition-colors duration-200 border rounded-full cursor-pointer hover:border-primary hover:text-primary">
                <Facebook />
              </li>
              <li className="p-2 text-gray-500 transition-colors duration-200 border rounded-full cursor-pointer hover:border-primary hover:text-primary">
                <Linkedin />
              </li>
              <li className="p-2 text-gray-500 transition-colors duration-200 border rounded-full cursor-pointer hover:border-primary hover:text-primary">
                <Twitter />
              </li>
              <li className="p-2 text-gray-500 transition-colors duration-200 border rounded-full cursor-pointer hover:border-primary hover:text-primary">
                <Instagram />
              </li>
            </ul>
          </div>
          <div className="flex-[1]">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <Separator orientation="horizontal" className="my-4 " />

            <ul className="flex flex-col space-y-4">
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Home
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Contact Us
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Submit a Ticket
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Privacy Policy
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Terms & Conditions
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Site Map
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-[1]">
            <h3 className="text-lg font-semibold text-primary">
              Account Information
            </h3>
            <Separator orientation="horizontal" className="my-4 " />

            <ul className="flex flex-col space-y-4">
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    My Account
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Order History
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    My Wishlist
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Shopping Cart
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Product Support
                  </span>
                </div>
              </li>
              <li className="text-sm font-semibold text-gray-700 ">
                <div className="flex items-center space-x-2 transition-all duration-200 cursor-pointer w-max max-w-max group">
                  <ChevronRight className="w-4 h-4 transition-all duration-200 group-hover:text-primary " />
                  <span className="inline-block transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary ">
                    Checkout
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-[2]">
            <h3 className="text-lg font-semibold text-primary">
              Download Our App
            </h3>
            <Separator orientation="horizontal" className="my-4 " />

            <p className="text-sm font-semibold text-gray-700">
              Smart Shop App is now available on Google Play & App Store. Get it
              now.
            </p>

            <div className="flex flex-row mt-4 space-x-4">
              <Button
                variant="outline"
                className="flex flex-row items-center justify-start w-1/2 h-12 transition-all duration-200 hover:text-white hover:bg-primary"
              >
                <div className="text-3xl">
                  <AiOutlineApple />
                </div>
                <Separator orientation="vertical" className="h-8 mx-2" />

                <div className="flex flex-col items-start">
                  <p className="text-xs ">Download from</p>
                  <p className="text-[12px] font-semibold tracking-wideantialiased uppercase">
                    App Store
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="flex flex-row items-center justify-start w-1/2 h-12 transition-all duration-200 hover:text-white hover:bg-primary"
              >
                <div className="text-3xl">
                  <FaGooglePlay />
                </div>
                <Separator orientation="vertical" className="h-8 mx-2" />

                <div className="flex flex-col items-start">
                  <p className="text-xs ">Download from</p>
                  <p className="text-[12px] font-semibold tracking-wideantialiased uppercase">
                    Google Play
                  </p>
                </div>
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">
                Get a<span className="text-primary"> 10% discount </span> on
                your first order when you download our app!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
