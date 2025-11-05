import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdJournal } from "react-icons/io";
import { MdAnalytics, MdEditDocument, MdSearch, MdSentimentVerySatisfied, MdShield, MdSummarize, MdTrendingUp } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

export const HomePage = () => {
  const[isAccess, setIsAccess] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("token")) setIsAccess(true) 
    else setIsAccess(false)
  },[])
  const navigate = useNavigate();
  const HandleStartJournal = ()=>{
    if(isAccess) navigate("/entries")
    else navigate("/login")
  }
  return (
    <div className="bg-[#b0c4b1] z-[-1]">
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative text-center py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-1">
          <img
            loading="lazy"
            alt="Abstract background"
            className="w-full h-full object-cover"
            src="/landingpage.jpg"
          />
          
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4 drop-shadow-[0_0_12px_rgba(99,102,241,0.85)]">
            Reflect. Summarize. Grow.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white mb-8 drop-shadow-[0_0_12px_rgba(99,102,241,0.85)]">
            AI-powered journaling that gives you weekly insights about your
            thoughts, habits, and moods.
          </p>
          <button className="px-6 py-3 rounded-full bg-black text-white font-bold border border-white 
          shadow-[0_0_8px_rgba(34,197,94,0.9),0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_15px_rgba(34,197,94,1),0_0_30px_rgba(34,197,94,0.8)] transition duration-300"
          onClick={HandleStartJournal}>
            <span className="truncate ">Start Journaling</span>
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white sm:py-24" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center hover:scale-102 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined text-3xl"><MdEditDocument /></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Write daily journal ✍️
              </h3>
              <p className="text-gray-600">
                Capture your thoughts, experiences, and emotions in a private,
                secure space.
              </p>
            </div>
            <div className="text-center hover:scale-102 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined text-3xl"><MdSummarize /></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI summarizes weekly 📊
              </h3>
              <p className="text-gray-600">
                Receive a concise, AI-generated summary of your journal entries
                each week.
              </p>
            </div>
            <div className="text-center hover:scale-102 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined text-3xl"><MdTrendingUp /></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Grow with insights 🌱
              </h3>
              <p className="text-gray-600">
                Identify patterns, track your mood, and gain valuable insights
                into your personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Features
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Item */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start hover:scale-102 transition-transform duration-500">
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined"><IoMdJournal /></span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Daily Journaling
              </h3>
              <p className="text-gray-600">
                Write freely or use guided prompts to explore your thoughts and
                feelings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start hover:scale-102 transition-transform duration-500">
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined"><MdAnalytics /></span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                AI Weekly Summaries
              </h3>
              <p className="text-gray-600">
                Get a concise overview of your week, highlighting key themes and
                emotions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start hover:scale-102 transition-transform duration-500">
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined"><MdSentimentVerySatisfied /></span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Mood Tracking
              </h3>
              <p className="text-gray-600">
                Track your mood over time with visual charts and insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start hover:scale-102 transition-transform duration-500">
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined"><MdSearch /></span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Smart Search &amp; Tags
              </h3>
              <p className="text-gray-600">
                Easily find past entries with powerful search and customizable
                tags.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start hover:scale-102 transition-transform duration-500">
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined"><MdShield /></span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Privacy First
              </h3>
              <p className="text-gray-600">
                Your journal entries are encrypted and kept private.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start hover:scale-102 transition-transform duration-500">
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-[var(--primary-color)]">
                <span className="material-symbols-outlined"><FaFilePdf /></span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Export as PDF
              </h3>
              <p className="text-gray-600">
                Export your journal entries as a PDF for personal archiving or
                sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="py-16 bg-white sm:py-24" id="visual-mockup">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              See It in Action
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-2xl">
              <img
                alt="Journal editor mockup"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmKaSmC5pgc5mgx_H56_7y3eQqcA5C95YoQpEA-QjUL2EFByj0vab-svTX1liC6b-Gb7IGmSfjSnoTpBIh_VfJFfvMasAqmyCi3-SRWcTy_Vex9Ou-Ie6t5mwpnsmoWg1196-jfUGnU6A1VzGTCgOy7KIWjQSWODp1YsfC7MK59rnl2P9izgNWu30yD7HcWHNBwzz0DBzwiqb7k3j9U_xSjJV_ZdOSPSpb1ucAuVsOZouje_FbJUovpNgH18QRN644lVJKIspOgGad"
              />
            </div>
            <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-2xl">
              <img
                alt="Mood graph mockup"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBYOHneCDs1dlWbvbrsCIRFRZenGwJpm40wkBctL6KSC0vq545eiZ1Vo17ybp9106eIXMxg2ys8XyJfBUIe3P11fWgHIKev-EzXa8e4ue9sMPWq7cDcn4ZVfPonWnT8gFiMtFEraTxxlwLsY81gb68hAF0yxm9F4Nkbc6lBamvR71U2QK_zCsaMfXFr65--2uiX0Rnkf7U9A02xbr2PuQPnip2JoOt0hxCRLVThIjJiJb8NId_ywVhPhUzOeB3iZXf3vl6p-QzQJ8L"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white sm:py-24" id="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Ready to start journaling?
          </h2>
          <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#4f46e5] text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
          onClick={HandleStartJournal}>
            <span className="truncate">Get Started Free</span>
          </button>
        </div>
      </section>
    </div>
    </div>
  );
};
