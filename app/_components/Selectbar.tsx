
export function Selectbar() {

  return (
    <div className="w-[129px] bg-[#302F4A]  rounded-[8px]  ">
      <select className="max-w-[119px] w-full h-[43px]  text-white p-2 rounded-[8px] bg-[#302F4A]">
        <option disabled defaultValue={"Units"}>Units</option>
        <option className="text-white" value="1">Celsius (°C)</option>
      </select>
    </div>
  );
}
