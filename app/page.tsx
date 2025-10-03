
import Header from "./_components/Header";
import Main from "./_components/Main";
import { bricolage } from "./layout";

export default function Home() {




  return (
    <div className="max-w-[375px] md:max-w-[720px]  px-[16px] md:px-[24px]  lg:px-0 lg:max-w-[1216px] w-full mx-auto flex flex-col items-center">
      <Header />
      <h1 className={`${bricolage.className} max-w-[343px] font-bold text-center  md:max-w-[482px] lg:max-w-[731px] w-full text-white  text-[52px]  mt-[48px] md:mt-[48px] lg:mt-[64px]`}>How`s the sky looking today?</h1>
      < Main />
    </div>
  );
}
