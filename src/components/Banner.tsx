
import Image from "next/image";
import React from "react";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="container mx-auto mt-8 flex flex-col-reverse items-center justify-between gap-6 rounded-3xl bg-white px-5 py-6 sm:px-8 lg:flex-row lg:gap-4 lg:py-5 lg:pr-10">
      <div className="w-full lg:flex-1">
        <span className="inline-block rounded-full bg-green-100 p-2 text-green-700">
          {date}
        </span>
        <h1 className="pb-5 pt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="pb-6 leading-relaxed text-gray-500">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
          বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন- <br />সর্বাধিক এবং
          দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="rounded-xl bg-green-500 px-6 py-3 text-white">
          Browse
        </button>
      </div>
      <div className="flex w-full justify-center lg:w-auto lg:shrink-0">
        <Image
          src="/bazar-hero.png"
          alt="Bazar hero"
          width={355}
          height={263}
          priority
          className="h-auto w-56 object-contain sm:w-64 lg:w-88.75"
        />
      </div>

    </div>
  );
};

export default Banner;
