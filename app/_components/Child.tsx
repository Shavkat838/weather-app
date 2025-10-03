"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { SelectMain } from './MainSelect';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


export default function Child() {
 const {weathers,dailyLoading,dailyWeathers,selectedIndexmax,selectedIndexmin}=useSelector((state:RootState)=>state.weather)
 const [mounted,setMounted]=useState(false)

useEffect(()=>{
  setMounted(true)
},[])


 function dateChange(){
  const time=new Date(weathers[0]?.dt*1000)

 const formatted=time.toLocaleDateString("en-US",{
    weekday:'long',
    month:"short",
    day:"numeric",
    year:"numeric"
  })
  return formatted;
 }


 if (!mounted) return null

  return (
    <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[1216px] w-full md:h-auto   h-[1878px]   lg:h-[693px]  mt-[32px] md:mt-[32px]  lg:mt-[48px]  flex flex-col lg:flex-wrap justify-between lg:gap-[32px]">
      <div className="max-w-[343px]  md:max-w-[720px] lg:max-w-[800px] w-full  h-[1161px] md:h-auto lg:h-[693px]  flex flex-col gap-[32px]  lg:gap-[48px]">
        <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[800px] md:h-auto  h-[558px] lg:h-[436px]   w-full flex flex-col gap-[20px] md:gap-[20px] lg:gap-[32px]">
          <div
            style={{
              backgroundImage: "url(/bg-today-large.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "286px",
              borderRadius: "20px",
            }}
            className="max-w-[800px] md:px-[24px]  w-full h-[286px] md:h-auto flex items-center justify-center  rounded-[20px]  bg-center bg-cover  bg-[url('/bg-today-small.svg')] "
          >
            <div className="md:flex  gap-[16px] md:gap-0 mx-auto  max-w-[294px]   md:max-w-[672px] lg:max-w-[752px] w-full  md:items-center ">
              <div className=" md:max-w-[378px] lg:max-w-[460px] w-full  h-[68px] flex flex-col justify-between items-center md:items-start ">
                <h1 className="font-bold text-[28px] text-white">
                  {`${weathers[0]?.sys.country}   ${weathers[0].name}`}
                </h1>
                <p className="text-[18px] font-medium text-white ">
                  {dateChange()}
                </p>
              </div>
              <div className="max-w-[292px]  w-full flex gap-[20px] items-center">
                <Image src={"/sun.svg"} alt="photo" width={120} height={120} />
                <h1 className="text-white text-[96px] font-semibold italic   ">
                  {Math.trunc(weathers[0].main.temp)}°
                </h1>
              </div>
            </div>
          </div>
          <div className="max-w-[800px] w-full h-[118px] md:h-auto gap-[16px] lg:gap-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <div className="max-w-[163px]  lg:max-w-[182px] bg-[#262540] border-[#3C3B5E] border-[1px] rounded-[12px] px-[20px] py-[10px]   w-full h-[118px]  flex flex-col justify-around ">
              <p className="text-[18px] font-medium text-[#D4D3D9] ">
                Feels Like
              </p>
              <h2 className="text-[30px] font-light  text-white ">
                {Math.trunc(weathers[0].main.feels_like)}
                <sup>o</sup>
              </h2>
            </div>
            <div className="max-w-[163px] lg:max-w-[182px] bg-[#262540] border-[#3C3B5E] border-[1px] rounded-[12px] px-[20px] py-[10px]   w-full h-[118px]  flex flex-col justify-around ">
              <p className="text-[18px] font-medium text-[#D4D3D9] ">
                Humidity
              </p>
              <h2 className="text-[30px] font-light  text-white ">
                {weathers[0].main.humidity}%
              </h2>
            </div>
            <div className="max-w-[163px] lg:max-w-[182px] bg-[#262540] border-[#3C3B5E] border-[1px] rounded-[12px] px-[20px]  py-[10px]  w-full h-[118px]  flex flex-col justify-around ">
              <p className="text-[18px] font-medium text-[#D4D3D9] ">Wind</p>
              <h2 className="text-[30px] font-light  text-white ">
                {Math.trunc(weathers[0].wind.speed)} mph{" "}
              </h2>
            </div>
            <div className=" max-w-[163px] lg:max-w-[182px] bg-[#262540] border-[#3C3B5E] border-[1px] rounded-[12px] px-[20px] py-[10px]   w-full h-[118px]  flex flex-col justify-around ">
              <p className="text-[18px] font-medium text-[#D4D3D9] ">
                Precipitation
              </p>
              <h2 className="text-[30px] font-light  text-white">0 in</h2>
            </div>
          </div>
        </div>
        <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[800px] md:mb-[32px] w-full md:h-auto h-[571px] lg:h-[209px] flex flex-col justify-between">
          <p className="text-white font-semibold text-[20px]">Daily forecast</p>
          <div className="max-w-[343px] md:max-w-[720px]   lg:max-w-[800px] w-full md:h-auto  h-[527px]  md:mt-[20px]   lg:h-[165px] grid grid-cols-3 md:grid-cols-7  lg:grid-cols-7 gap-[16px]">
            {dailyWeathers.length !== 0 &&
              dailyWeathers[0].daily.time.map((item, index) => (
                <div
                  key={index + 1}
                  className="max-w-[100px] md:max-w-[89px]   bg-[#262540] w-full rounded-[12px] border-1 border-[#3C3B5E]   flex flex-col justify-around items-center h-[165px]"
                >
                  <h2 className="text-[18px] text-white font-medium">{item}</h2>
                  <Image
                    src={dailyWeathers[0]?.daily.weathercode[index]}
                    alt="photo"
                    width={60}
                    height={60}
                  />
                  <div className="w-[80px] md:w-[75px]  h-[19px] flex px-1 items-center  justify-between">
                    <p className="text-[16px] text-white font-medium ">
                      {Math.trunc(
                        dailyWeathers[0].daily.temperature_2m_min[index]
                      )}
                      <sup>0</sup>
                    </p>
                    <p className="text-[16px] text-white font-medium ">
                      {Math.trunc(
                        dailyWeathers[0].daily.temperature_2m_max[index]
                      )}
                      <sup>0</sup>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="max-w-[343px] md:max-w-[720px] md:h-[693px]  overflow-y-scroll  scrollbar-none lg:max-w-[384px] w-full   h-[685px] lg:h-[693px] rounded-[20px] bg-[#262540] md:px-[24px] flex flex-col items-center py-[24px] gap-[16px]">
        <div className="max-w-[311px]  md:max-w-[672px] md:mx-auto  lg:max-w-[336px] w-full   flex justify-between  items-center h-[37px]">
          <h1 className="text-[20px] text-white font-semibold">
            Hourly forecast
          </h1>
          <div className="w-[119px] h-[43px]">
            <SelectMain />
          </div>
        </div>
        {dailyWeathers.length!==0&&dailyWeathers[0].hourly.time
          .slice(selectedIndexmin, selectedIndexmax)
          .map((item, index) => (
            <div key={index+1} className="max-w-[311px] md:max-w-[672px]   lg:max-w-[336px]  w-full md:gap-[8px]  h-[60px] bg-[#302F4A]  px-[12px] border-[1px] border-[#3C3B5E] rounded-[8px]  flex justify-around items-center">
              <Image
                src={dailyWeathers[0].hourly.weathercode[selectedIndexmin+index]}
                alt="photo"
                width={40}
                height={40}
              />
              <div className="w-[226px] md:w-[562px] ml-[5px] h-[24px] flex items-center justify-start ">
                <p className="text-[20px] font-medium text-white ">{item}</p>
              </div>
              <p className="text-[14px]  font-medium text-white ">
                {Math.trunc(dailyWeathers[0].hourly.temperature_2m[selectedIndexmin+index])}<sup className="text-[10px]">0</sup>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
