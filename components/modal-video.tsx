"use client";

import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import Thumbnail from "@/public/images/hero.jpg";

export default function SimpleImage() {
  return (
    <div className="relative flex justify-center">
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2 "
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>
      <Image
        className="rounded-2xl !w-[900px] !h-[500px] object-cover object-top -mt-[30px]"
        src={Thumbnail}
        width={900}
        height={350}
        priority
        alt="image"
      />
    </div>
  );
}
