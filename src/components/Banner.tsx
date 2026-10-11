import Image from 'next/image';
import React from 'react';

const Banner = () => {
    const date = new Date().toLocaleDateString
        (
            "bn-BD", {
            dateStyle: "full"
        }
        )
    return (
        <div className='flex justify-between  container mx-auto bg-white mt-8 pt-5 pb-10 pr-15 rounded-3xl'>
            <div className='mt-6 pl-6'>
                <span className='p-2 bg-green-100 rounded-4xl text-green-700'>{date}</span>
                <p className='text-5xl pt-5 pb-6 font-bold'>আজকের বাজারের দাম এক নজরে</p>
                <p className='text-gray-500 pb-8'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন- <br />সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button className='btn bg-green-500 text-white rounded-2xl p-5'>Browse</button>
            </div>
            <div>
                <Image
                    src="/bazar-hero.png"
                    alt="Bazar hero"
                    height={263}
                    width={355}
                />
            </div>
        </div>
    );
};

export default Banner;