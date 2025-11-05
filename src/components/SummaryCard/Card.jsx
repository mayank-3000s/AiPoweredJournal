import { lazy, Suspense, useEffect, useState } from "react" 
import { LoadingPage } from "../../pages/LoadingPage";

const NoSummaryCard = lazy(
  ()=>import("./NoSummaryCard")
);
// import { NoSummaryCard } from "./NoSummaryCard"

export const Card = ({summary, week, setWeek})=>{
    const [isAvail, setIsAvail] = useState(false)
    
    useEffect(()=>{
        if(summary.length > 0 ) setIsAvail(true)
        else setIsAvail(false)
    },[summary])
    
    const handleChangeWeek = (e) => {
        const sel_week = Number(e.target.value);
        setWeek(sel_week-1)
    }

    if(!isAvail) return (
      <Suspense fallback={<LoadingPage />}>
        <NoSummaryCard />
      </Suspense>
    )
    return(
      <>
      <select name="ChooseWeek" id="week" className="bg-white h-10 w-28 rounded-lg shadow-md px-2
             transition-all duration-300 ease-in-out hover:scale-105 outline-0 absolute translate-y-[-2.6rem]"
            value={week+1}
            onChange={handleChangeWeek} >
              {
                summary.map((curEle, indx)=>{
                  return(
                        <option 
                        key={indx}
                        value={curEle.weekNumber}
                        label={`week-${curEle.weekNumber}`}
                        className="p-2 border-0"></option>
                  )
                })
              }
            </select>
        <div className="py-1 px-5 grid grid-cols-1 gap-6 ">
            {(summary[week].summaries).map((curEle, indx)=>{
                return(
                    <div key={indx} className="bg-[#ffffff] min-h-[7rem] max-h-[12rem] rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 flex flex-col sm:flex-row gap-6">
                      <div className="flex-1 min-h-[7rem]">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{curEle.day}, {(curEle.createdAt).split("T")[0]}</h3>
                          <div className="text-2xl" title="Happy">😊</div>
                        </div>
                        <p className="text-[#5a6a7b] text-sm leading-relaxed mb-4">
                            {curEle.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                            AI
                          </span>
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                            AI
                          </span>
                        </div>
                      </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}