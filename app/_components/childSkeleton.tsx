export default function ChildSkeleton() {
  return (
    <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[1216px] w-full md:h-auto h-[1878px] mt-[32px] md:mt-[32px] lg:mt-[48px] flex flex-col lg:flex-wrap justify-between lg:gap-[32px]">
      {/* Chap qism */}
      <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[800px] w-full h-[1161px] md:h-auto lg:h-[693px] flex flex-col gap-[32px] lg:gap-[48px]">
        {/* Katta karta */}
        <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[800px] md:h-auto h-[558px] lg:h-[436px] w-full flex flex-col gap-[20px] md:gap-[20px] lg:gap-[32px]">
          <div className="max-w-[800px] w-full h-[286px] rounded-[20px] bg-[#2F2E41] flex items-center justify-center animate-pulse">
            <div className="md:flex gap-[16px] md:gap-0 mx-auto max-w-[294px] md:max-w-[672px] lg:max-w-[752px] w-full md:items-center">
              <div className="md:max-w-[378px] lg:max-w-[460px] w-full h-[68px] flex flex-col justify-between items-center md:items-start">
                <div className="w-[200px] h-[28px] bg-[#3C3B5E] rounded-md"></div>
                <div className="w-[150px] h-[20px] bg-[#3C3B5E] rounded-md"></div>
              </div>
              <div className="max-w-[292px] w-full flex gap-[20px] items-center justify-center">
                <div className="w-[120px] h-[120px] rounded-full bg-[#3C3B5E]"></div>
                <div className="w-[80px] h-[96px] bg-[#3C3B5E] rounded-md"></div>
              </div>
            </div>
          </div>

          {/* 4 ta kichik karta */}
          <div className="max-w-[800px] w-full h-[118px] grid grid-cols-2 md:grid-cols-4 gap-[16px]">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-full h-[118px] bg-[#2F2E41] rounded-[12px] animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Daily forecast */}
        <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[800px] w-full h-[571px] lg:h-[209px] flex flex-col justify-between">
          <div className="w-[200px] h-[24px] bg-[#3C3B5E] rounded-md animate-pulse"></div>
          <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[800px] w-full grid grid-cols-3 md:grid-cols-7 gap-[16px]">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-full h-[165px] bg-[#2F2E41] rounded-[12px] animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* O‘ngdagi Hourly forecast */}
      <div className="max-w-[343px] md:max-w-[720px] lg:max-w-[384px] w-full h-[685px] lg:h-[693px] rounded-[20px] bg-[#262540] flex flex-col items-center py-[24px] gap-[16px]">
        <div className="max-w-[311px] md:max-w-[672px] lg:max-w-[336px] w-full flex justify-between items-center h-[37px]">
          <div className="w-[150px] h-[24px] bg-[#3C3B5E] rounded-md animate-pulse"></div>
          <div className="w-[119px] h-[43px] bg-[#3C3B5E] rounded-md animate-pulse"></div>
        </div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="max-w-[311px] md:max-w-[672px] lg:max-w-[336px] w-full h-[60px] bg-[#2F2E41] rounded-[8px] animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
