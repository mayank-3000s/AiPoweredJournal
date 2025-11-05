import Chart, { defaults, plugins } from "chart.js/auto"
import { useEffect, useState } from "react"
import {Line} from "react-chartjs-2"

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true ;
defaults.plugins.title.color = "black" ;
defaults.plugins.title.font = 20 ;
defaults.plugins.title.align = "center" ;

export const WeeklyStats = ({summary, week})=>{
    const [avail, setAvail] = useState(false);
    const [day, setDay] = useState({
        'Mon' : 0,
        'Tues' : 0,
        'We' : 0,
        'Thurs': 0,
        'Fri' : 0,
        'Satur' : 0,
        'Sun' : 0,
    })

    useEffect(() => {
        if (summary.length > 0) {
          setAvail(true);
        
          const counts = {
            Mon: 0,
            Tues: 0,
            We: 0,
            Thurs: 0,
            Fri: 0,
            Satur: 0,
            Sun: 0,
          };
      
          summary[week].summaries.forEach((curEle) => {
            if (curEle.day) {
              const _day = curEle.day.split("d")[0];
              if (counts[_day] !== undefined) {
                counts[_day] += 1;
              }
            }
          });
          setDay(counts); 
  }
}, [summary, week]);


    if(!avail) {
        return (
            <>
                <div className="bg-[#ffffff] rounded-xl shadow-card p-6">
                    <h1>No Journal...</h1>
                </div>
            </>
        )
    }
    return(
        <>
            <div className="bg-[#ffffff] rounded-xl shadow-card p-6 h-[25rem]">
                <Line 
                data={{
                    labels: Object.keys(day).map(key=>key),
                    datasets: [{
                        label: "Journal written",
                        data:Object.values(day).map(value=>value),
                    }],
                }}
                options={{
                            elements : {
                                line : {
                                    tension : 0.7
                                }
                            },
                            animations: {
                                tension: {
                                    duration: 1000,
                                    easing: 'linear',
                                    from: 0.4,
                                    to: 0.2,
                                    loop: true
                                },
                            },
                            scales: {
                                y: { 
                                   min: 0,
                                   max: 10
                                },
                            },
                            plugins : {
                                title: {
                                    text : "Journal Entry"
                                }
                            }
                        }}
                
                />
                
              </div>
        </>
    )
}