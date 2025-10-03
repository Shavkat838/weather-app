import { ParamsOf } from './../../.next/types/routes.d';
import { getDailyError, getDailySuccess } from '@/redux/slices/weatherSlice';
import { getDailyStart } from '@/redux/slices/weatherSlice';
import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { getgeolocation, getInformartionStart, getInformationError, getInformationSuccess, resetInput } from "../slices/weatherSlice";
import { toast, Toaster } from "sonner";


type WeatherTypte = {
  id: number;
  main: string;
  description: string;
  icon: string;
};



type GetActionType={
  type:string;
  payload:string;
}


type GetDailyType={
  type:string;
  payload:{
    lon:number;
    lat:number;
  }
}





function * workGetWeather(e:GetActionType){
    if (e.payload===""){
        toast.info("Shahar nomini kiriting!")
        return
    }
    try {  
       yield  put(getInformartionStart())  
       const {data}= yield axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${e.payload}&appid=71dc1dae0428277b3380b51732e70795&units=metric`
        );
       if (data === undefined) {
        toast.error("Malumot topilmadi!");
         return;
        }
        yield put(getInformationSuccess(data))
        yield put(resetInput())
    } catch (error:any) {
      yield put(getInformationError(error));
      yield put(resetInput())
        if(error.status=404){
              toast.error("Ma'lumot topilmadi");
        }
        if(error.status===429){
          toast.error('Juda kop sorov yuborildi')
        }
        if(error.status===500||error.status===502||error.status===503||error.status===504){
          toast.error("Server bilan bog`liq muammo")
        }
    }
}



function* workGetGeoLok(e:GetActionType){
  try {
  const {data}= yield axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${e.payload}&limit=1&appid=71dc1dae0428277b3380b51732e70795`
    );
    if(data.length===0){
     toast.error("Shahar nomi topilmadi")
     return
    }
    const lat=data[0].lat
    const lon=data[0].lon
    yield put(getgeolocation({lat,lon}))

    yield put({
      type: "GETWEATHERDAYHOURLY",
      payload:{lat,lon}
    });
  } catch (error) {
    console.log(error)
  }
}



function* workDateHourly(action:GetDailyType){
  try {
    yield put(getDailyStart())
    const { data } = yield axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${action.payload.lat}&longitude=${action.payload.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&hourly=temperature_2m,precipitation,weathercode,wind_speed_10m&timezone=Asia/Tashkent`
    );
   yield put(getDailySuccess(data))
  } catch (error) {
    yield put(getDailyError(error))
  }
}

function * mySaga(){
   yield  takeEvery("GETWEATHER",workGetWeather)
   yield  takeEvery("GETWEATHERGEOLOK",workGetGeoLok)
   yield  takeEvery("GETWEATHERDAYHOURLY",workDateHourly)
}


export default mySaga;



// https://api.open-meteo.com/v1/forecast?latitude=41.3123363&longitude=69.2787079&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&hourly=temperature_2m,precipitation,weathercode,wind_speed_10m&timezone=Asia/Tashkent