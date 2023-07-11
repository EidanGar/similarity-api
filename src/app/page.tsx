import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free and open-source similarity API.",
};

export default function Home() {
  return (
    <div className="realtive h-screen flex items-center justify-center overflow-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size={"lg"}
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            With the Text Similarity API, you can easily determine the
            similarity between two pieces of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API key
            </Link>
            .
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
