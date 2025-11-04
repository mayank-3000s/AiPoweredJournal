import { useState } from "react";
import { UserEntry } from "../components/Input/UserEntry"

export const EntryPage = ({token, userinfo, setUserInfo}) => {
    

  return (
    <div className="bg-[#0a1128]">
    <div className="flex flex-1 justify-center py-8 px-4 md:px-6">
      <div className="w-full max-w-4xl space-y-8 bg-[#ffe5d9] p-4 rounded-2xl">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">New Entry</h2>
          <p className="text-slate-500">
            Capture your thoughts, feelings, and memories.
          </p>
        </div>

        {/* Form */}

          <UserEntry token={token} userinfo={userinfo} setUserInfo={setUserInfo}/>


        {/* AI Insights */}
        {/* <div className="space-y-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600 text-2xl">
              auto_awesome
            </span>
            <h3 className="text-xl font-bold text-slate-900">AI Insights</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-600">Summary</h4>
              <p className="text-slate-700">
                You seem to be feeling a mix of excitement and anxiety about the
                upcoming presentation. The core of your feelings revolves around
                the desire to perform well and the fear of judgment.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-600">
                Reflection Question
              </h4>
              <p className="text-slate-700">
                What's one small step you can take to feel more prepared and
                confident before your presentation?
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-600">
                Positive Reframe
              </h4>
              <p className="text-slate-700">
                Instead of seeing this as a high-stakes performance, view it as
                an opportunity to share your valuable knowledge and passion with
                others.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  )
}
