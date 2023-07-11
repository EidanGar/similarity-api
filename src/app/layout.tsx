import Providers from "@/components/Providers";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-white text-slate-900 antialiased" lang="en">
      <body
        className={cn(
          "min-h-screen bg-slate-50 dark:bg-slate-900 antialiased",
          inter.className
        )}
      >
        <Providers>
          <main>{children}</main>
          <Navbar />
        </Providers>

        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
