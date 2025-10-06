"use client"
import Image from "next/image";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import Child from "./Child";
import { getDailyError, getDailyStart, getDailySuccess, getInformartionStart, getInformationError, getInformationSuccess, getvalue } from "@/redux/slices/weatherSlice";
import { useEffect } from "react";
import axios from "axios";
import ChildSkeleton from "./childSkeleton";
import { ImSpinner3 } from "react-icons/im";


export default function Main() {

  const apikey=process.env.NEXT_PUBLIC_BASE_URL

const {value,loading,weathers,dailyWeathers,dailyLoading,geoinfo}=useSelector((state:RootState)=>state.weather)
const dispatch=useDispatch<AppDispatch>()





  useEffect(() => {
    const fetchdata = async () => {
      try {
             dispatch(getInformartionStart());
             const { data } = await axios.get(
               `https://api.openweathermap.org/data/2.5/weather?q=Bukhara&appid=${apikey}&units=metric`
             );
             dispatch(getInformationSuccess(data)) 
      } catch (error) {
         dispatch(getInformationError(error))
      }
    };
    fetchdata();
  }, []);

useEffect(()=>{
 async   function  fetchdailyWeatherData(){
  try {
    dispatch(getDailyStart())
    const {data}=await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=39.7747&longitude=64.4286&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&hourly=temperature_2m,precipitation,weathercode,wind_speed_10m&timezone=Asia/Tashkent`
    );
     dispatch(getDailySuccess(data))
  } catch (error) {
    dispatch(getDailyError(error))
  }
 }  

 fetchdailyWeatherData()
},[])






  function handleSearch() {
    dispatch({type:"GETWEATHER",payload:value})
    dispatch({type:"GETWEATHERGEOLOK",payload:value})
  }



  if(weathers.length===0 || dailyWeathers.length===0){
   return (
     <div className="w-full h-[300px]  flex items-start justify-center">
       <ImSpinner3 size={50} color="#3C3B5E" className="animate-spin"  />
     </div>
   );
  }


  return (
    <div className="max-w-[343px] md:max-w-[720px]  lg:max-w-[1216px]  w-full md:h-auto  lg:h-[797px] h-[2034px] lg:mb-[80px] mb-[48px]   mt-[48px] md:mt-[48px] md:mb-[80px] lg:mt-[64px] flex flex-col items-center">
      <div className=" max-w-[343px]  md:max-w-[720px]  lg:max-w-[656px] w-full h-[124px]  md:h-[56px] lg:h-[56px] flex flex-col  md:flex-wrap lg:flex-wrap  items-center gap-[12px] md:gap-[16px]  lg:gap-[16px]">
        <div className="max-w-[343px] md:max-w-[540px]  lg:max-w-[526px] w-full hover:bg-[#37364d] h-[56px] md:px-2 flex justify-around items-center rounded-[12px] lg:px-2  bg-[#262540]">
          <Image
            src={"/icon-search.svg"}
            alt="search"
            width={20}
            height={20}
          />
          <input
            value={value}
            onChange={(e) => dispatch(getvalue(e.target.value))}
            type="text"
            placeholder="search for a place..."
            className="max-w-[280px]  md:max-w-[480px] lg:max-w-[455px]   placeholder:font-medium   focus:outline-none text-[18px] text-white placeholder:text-[20px] placeholder:text-[#D4D3D9]  w-full h-[56px] "
          />
        </div>
        <button
          onClick={handleSearch}
          className="max-w-[343px] md:max-w-[114px] lg:max-w-[114px] w-full cursor-pointer h-[56px] rounded-[12px] bg-[#4658D9] hover:bg-[#2c3898]  flex items-center justify-center text-center text-medium text-white  text-[20px]"
        >
          {loading ? (
            <Image
              className="animate-spin"
              src={"/icon-loading.svg"}
              alt="loading"
              width={22}
              height={22}
            />
          ) : (
            "Search"
          )}
        </button>
      </div>
      {loading ||dailyLoading ? <ChildSkeleton /> : <Child />}
    </div>
  );
}
