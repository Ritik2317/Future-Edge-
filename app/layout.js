import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/assets/ThemeProvider";
import Header from "@/components/assets/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Future Edge",
  description: "AI Powered Career Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        <Header/>
        <main>{children}</main>
        <footer className="bg-gray-950 text-white py-4 fixed bottom-0 w-full">
          <div className="container mx-auto text-center">
            <p className="text-sm md:text-base">
              Efforts by <span className="font-bold">Pushp Jain</span>, <span className="font-bold">Riteek Yadav</span> and <span className="font-bold">Shubham Kumar.</span>
            </p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
