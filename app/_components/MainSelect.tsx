"use client"
import { filteredIndex } from "@/redux/slices/weatherSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



export function SelectMain() {

  const {dailyWeathers}=useSelector((state:RootState)=>state.weather)
  const dispatch=useDispatch<AppDispatch>()


  function changeSelect(index:number){
   dispatch(filteredIndex({ min: 24 * index, max: 24 * index + 24 }));
  }






  return (
    <div className="max-w-[300px] w-full  mx-auto">
      <select onChange={(e)=>changeSelect(e.target.selectedIndex-1)} className="border text-sm rounded-lg  block w-full p-2.5 bg-[#3C3B5E] border-gray-600  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
        <option defaultValue={"weekdays"}  disabled>Weekdays</option>
        { dailyWeathers.length!==0&&dailyWeathers[0].daily.time.map((item, index) => (
          <option   key={index+1} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
