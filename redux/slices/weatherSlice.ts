import { createSlice } from "@reduxjs/toolkit";



type WeatherTypte = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type DataType = {
  dt: number;
  timezone: number;
  cod: number;
  id: number;
  name: string;
  weather: WeatherTypte[];
  main: {
    temp: number;
    humidity:number;
    feels_like:number;
  };
  sys: {
    id: number;
    country: string;
    suncrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
    deg: 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 | 360;
  };
};



type DailyWeatherType={
  hourly:{
    time:string[]
    temperature_2m:number[],
    weathercode:string[],
  },
  daily:{
    time:string[],
    temperature_2m_max:number[],
    temperature_2m_min:number[],
    weathercode:string[]
  }
}

type geolok={
  lat:number;
  lon:number;
}




type InitialStateType={
    weathers:DataType[],
    dailyWeathers:DailyWeatherType[]
    loading:boolean,
    value:string,
    error:null,
    geoinfo:geolok;
    dailyLoading:boolean;
    dailyError:null
    selectedIndexmin:number;
    selectedIndexmax:number;
}


const initialState: InitialStateType = {
  weathers: [],
  dailyWeathers:[],
  loading: false,
  value:"",
  error:null,
  geoinfo:{
    lat:0,
    lon:0
  },
  dailyLoading:false,
  dailyError:null,
  selectedIndexmin:0,
  selectedIndexmax:24
};

export const weatherSlice=createSlice({
    name:"weather",
    reducers:{
      getvalue:(state,action)=>{
        state.value=action.payload
      },
      getInformartionStart:(state)=>{
        state.loading=true
      },
      getInformationSuccess:(state,action)=>{
        state.loading=false
        state.error=null
        state.weathers=[action.payload];
      },
      getInformationError:(state,action)=>{
        state.error=action.payload
        state.loading=false;
      },
      resetInput:(state)=>{
       state.value=""
      },
      getgeolocation:(state,action)=>{
        state.geoinfo.lat=action.payload.lat
        state.geoinfo.lon=action.payload.lon
      },
      getDailyStart:(state)=>{
        state.dailyLoading=true
      },
      filteredIndex:(state,action)=>{
        state.selectedIndexmin=Number(action.payload.min)
        state.selectedIndexmax=Number(action.payload.max)
      },
      getDailySuccess:(state,action)=>{
        state.dailyLoading=false;


//  kunlik uchun har bir kunni hafta kunlariga ozgartirish 
        let arr=[]
        for(let i=0;i<7;i++){
         const dat=new Date(action.payload.daily.time[i])
         arr.push(dat.toLocaleDateString("en-US",{weekday:"short"}))
        }
       action.payload.daily.time=arr;
// kunlik  uchun weather kodni icon rasmga almashtirish
       let codearr=[]
   for(let i=0;i<7;i++){
       switch (action.payload.daily.weathercode[i]) {
        case 0:
          codearr.push("/icon-sunny.webp")
          break;
        case 1:
        case 2:
          codearr.push("/icon-partly-cloudy.webp")
          break;
        case 3:
          codearr.push("/icon-overcast.webp")
          break 
        case 45:
        case 48:
          codearr.push("/icon-fog.webp")   
          break
        case 51:
        case 53:
        case 55:
          codearr.push("/icon-drizzle.webp")
          break
        case 61:
        case 63:
        case 65:
        case 57:
        case 56:
        case 66:
        case 67:
          codearr.push("/icon-rain.webp") 
          break     
        case 71:
        case 73:
        case 75:
        case 77:
          codearr.push("/icon-snow.webp")  
          break 
        case 95:
        case 96:
        case 97:  
          codearr.push("/icon-storm.webp") 
          break   
        default:
          codearr.push("/icon-partly-cloudy.webp");
          break;
       }
   }
       action.payload.daily.weathercode=codearr;


// soatlik vaqtni 24 soatlik rejimhga otkazish


        let hourlyarr=[]
        for(let i=0; i<168;i++){
        const dat=new Date(action.payload.hourly.time[i])
        hourlyarr.push(dat.toLocaleTimeString("en-GB",{hour:"numeric",minute:"2-digit"}))
        }

       action.payload.hourly.time=hourlyarr;
// soatlik  uchun weathercodeni icon rasmga moslashtirish
       let hourlycode=[]
       for(let i=0;i<168;i++){
               switch (action.payload.hourly.weathercode[i]) {
                 case 0:
                   hourlycode.push("/icon-sunny.webp");
                   break;
                 case 1:
                 case 2:
                   hourlycode.push("/icon-partly-cloudy.webp");
                   break;
                 case 3:
                   hourlycode.push("/icon-overcast.webp");
                   break;
                 case 45:
                 case 48:
                   hourlycode.push("/icon-fog.webp");
                   break;
                 case 51:
                 case 53:
                 case 55:
                   hourlycode.push("/icon-drizzle.webp");
                   break;
                 case 61:
                 case 63:
                 case 65:
                 case 57:
                 case 56:
                 case 66:
                 case 67:
                   hourlycode.push("/icon-rain.webp");
                   break;
                 case 71:
                 case 73:
                 case 75:
                 case 77:
                   hourlycode.push("/icon-snow.webp");
                   break;
                 case 95:
                 case 96:
                 case 97:
                   hourlycode.push("/icon-storm.webp");
                   break;
                 default:
                   hourlycode.push("/icon-partly-cloudy.webp");
                   break;
               }
       }


       action.payload.hourly.weathercode=hourlycode
       state.dailyWeathers=[action.payload]
      },
      getDailyError:(state,action)=>{
      state.dailyLoading=false
      state.dailyError=action.payload
      },
      
    
    },
    initialState
})




export const {getvalue,getInformartionStart,resetInput,filteredIndex,getInformationError,getInformationSuccess,getgeolocation,getDailyError,getDailyStart,getDailySuccess}=weatherSlice.actions
export default weatherSlice.reducer;