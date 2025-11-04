import { useEffect, useState } from "react"
import { Card } from "../components/SummaryCard/Card"
import { fetchSummary } from "../api/UserSummaryApi"
import { WeeklyStats } from "../components/Chart/WeeklyStats";

export const WeeklySummaryPage = ({ token }) => {
  const [summary, setSummary] = useState([]);
  const [week, setWeek] = useState(0)

  useEffect(() => {
    const fetchWeeklySummary = async () => {
      try {
        const response = await fetchSummary(token);
        if (response) {
          const data = response.response[0].weeks;
          setSummary(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeeklySummary();
  }, []);

  return (
    <>
    <div className="bg-[#e0e1dd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12  ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Your Weekly Stats
            </h2>
            <p className="mt-2 text-lg text-[#5a6a7b]">
              A summary of your reflections this week.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            {/* Left Side - Daily Summaries */}
            <div className="col-span-1 lg:col-span-4 space-y-6 max-h-[52rem] overflow-y-auto scroll-smooth">
              <Card summary={summary} week={week} setWeek={setWeek} />
            </div>

            {/* Right Side - Stats and Reflections */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              <WeeklyStats summary={summary} week={week}/>

              <div className="bg-[#ffffff] rounded-xl shadow-card p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-[#22c55e]">✅</span> Highlights
                </h3>
                <ul className="space-y-3 text-sm text-[#5a6a7b]">
                  <li>None</li>
                </ul>
              </div>

              <div className="bg-[#ffffff] rounded-xl shadow-card p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-[#f59e0b]">⚡️</span> Challenges
                </h3>
                <ul className="space-y-3 text-sm text-[#5a6a7b]">
                  <li>None</li>
                </ul>
              </div>

              <div className="bg-[#ffffff] rounded-xl shadow-card p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-[#3b82f6]">💡</span> Reflection
                </h3>
                <p className="text-sm text-[#5a6a7b] italic">
                  None
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}
