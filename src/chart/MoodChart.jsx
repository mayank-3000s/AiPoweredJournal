import Chart, { defaults, plugins } from "chart.js/auto"
import {Bar, Doughnut, Line} from "react-chartjs-2"
import weekmood from "../json/weekmood.json"

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true ;
defaults.plugins.title.color = "black" ;
defaults.plugins.title.font = 20 ;
defaults.plugins.title.align = "center" ;


export const MoodChart = ()=>{
    return(
        <>
            <div className="size-full flex flex-col gap-2 p-10">
                <div className="h-50 w-100  flex gap-2 justify-center">
                    <div className="h-50 w-50 border">
                    <Bar 
                        data = {{
                            labels : weekmood.map((curEle)=>curEle.label),
                            datasets : [{
                                label : "mood",
                                data : weekmood.map((curEle)=>curEle.mood),
                                backgroundColor : [
                                    "blue",
                                    "red",
                                    "pink",
                                    "green",
                                    "orange",
                                    "yellow",
                                    "black"
                                ],
                                borderRadius: 5
                            }
                            ]
                        }}
                    />
                    </div>
                    <div className="h-50 w-50 border">
                    <Doughnut 
                        data = {{
                            labels : weekmood.map((curEle)=>curEle.label),
                            datasets : [{
                                label : "mood",
                                data : weekmood.map((curEle)=>curEle.mood),
                                backgroundColor : [
                                    "blue",
                                    "red",
                                    "pink",
                                    "green",
                                    "orange",
                                    "yellow",
                                    "black"
                                ],
                                borderColor : [
                                   "whitesmoke"
                                ]
                            }
                            ]
                        }}
                    />
                    </div>
                </div>
                
                <div className="h-50 w-100 border">
                    <Line
                        data={{
                            labels : weekmood.map((curEle)=>curEle.label),
                            datasets : [{
                                label : "mood",
                                data : weekmood.map((curEle)=>curEle.mood),
                                backgroundColor: "red",
                                borderColor: "yellow"
                            }],
                        }}
                        options={{
                            elements : {
                                line : {
                                    tension : 0.4
                                }
                            },
                            animations: {
                                tension: {
                                    duration: 1000,
                                    easing: 'linear',
                                    from: 0.9,
                                    to: 0,
                                    loop: true
                                },
                            },
                            scales: {
                                y: { 
                                   min: 20,
                                   max: 100
                                },
                            },
                            plugins : {
                                title: {
                                    text : "Mood Status this week"
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </>
    )
}