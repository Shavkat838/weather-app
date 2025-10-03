import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner"
import Providers from "./_components/Provider";
import { HyProvider } from "./_components/HyProvider";

const dmSans = localFont({
 src:[
 {path:"./fonts/DMSans-Bold.ttf",weight:'700',style:"normal"},
 {path:"./fonts/DMSans-Medium.ttf",weight:'500',style:"normal"},
 {path:"./fonts/DMSans-Light.ttf",weight:'300',style:"normal"},
 {path:"./fonts/DMSans-SemiBoldItalic.ttf",weight:'600',style:"italic"},
 {path:"./fonts/DMSans-SemiBold.ttf",weight:'600',style:"normal"},
 ] 
});

const bricolage=localFont({
  src:[
    {path:"./fonts/BricolageGrotesque-Bold.ttf",weight:'700',style:"normal"}
  ]
})

export const metadata: Metadata = {
  title: "Ob-havo",
  description: "Xalqaro ob-havo aniqlash  sayti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased bg-[#02012C] container mx-auto`}
      >
        <HyProvider>
          <Providers>
            {children}
            <Toaster position="top-right" duration={2000} />
          </Providers>
        </HyProvider>
      </body>
    </html>
  );
}


export {bricolage,dmSans}