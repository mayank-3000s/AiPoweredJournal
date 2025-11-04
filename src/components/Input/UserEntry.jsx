
import { useEffect, useRef, useState } from "react";
import { MdMicNone, MdMicOff } from "react-icons/md";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { StartJournal } from "./StartJournal";
import { addSummary } from "../../api/UserSummaryApi";
import { profile } from "../../api/UserAccountApi";

export const UserEntry = ({token, userinfo, setUserInfo}) => {
  const [checkSubmit, setCheckSubmit] = useState(false)
  const [day, setDay] = useState(new Date().toLocaleDateString("en-US", {weekday: "long"}));
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [entry, setEntry] = useState("");
  const [isMicOn, setIsMicOn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [changedWeek, setChangedWeek] = useState(1)

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const lastSpokenTime = useRef(null);
  const silenceTimer = useRef(null);

  // silence auto-stop
  useEffect(() => {
    if (!isMicOn) return;

    if (transcript.trim()) {
      lastSpokenTime.current = Date.now();
    }

    clearTimeout(silenceTimer.current);
    silenceTimer.current = setTimeout(() => {
      if (Date.now() - (lastSpokenTime.current || 0) > 2500) {
        SpeechRecognition.stopListening();
        setIsMicOn(false);
        setEntry((prev) => {
          if(!prev) return prev+transcript
          if(!transcript) return prev
          return prev+" "+transcript
        });
      }
    }, 2500);

    return () => clearTimeout(silenceTimer.current);
  }, [transcript, isMicOn, entry]);

  useEffect(()=>{
    const time = setInterval(()=>{
      setCurrentDateTime(new Date());
      setDay(new Date().toLocaleDateString("en-US", {weekday: "long"}));
    },1000)

    return () => clearInterval(time)
  },[])

  const handleMicToggle = () => {
    setIsMicOn((prev) => {
      const newState = !prev;
      if (newState) {
        resetTranscript()
        SpeechRecognition.startListening({
          continuous: true,
          language: "en-IN",
        });
      } else {
        SpeechRecognition.stopListening();
        resetTranscript(); 
      }
      return newState;
    });
  };


  // currently working here
  useEffect(()=>{
    if(!token) return;
      const fetchProfile =  async() => {
        const response = await profile(token);
        if(response) {
          setUserInfo(response.user);
        }
        else return <h1>Error fetching profile</h1>;
      }
      fetchProfile();
  },[token])

  useEffect(()=>{
    if(!userinfo) return;
    else {
      const getWeekNumber = (startDate, currentDate) => {
        const start = new Date(startDate);
        const now = new Date(currentDate);
        const diffInMs = now - start;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        console.log(Number(Math.floor(diffInDays / 7) + 1));
        
        setChangedWeek(Number(Math.floor(diffInDays / 2))) ;
      };
      console.log("CreatedAt:", userinfo.createdAt, new Date(userinfo.createdAt));
      getWeekNumber(userinfo.createdAt, new Date())
    }
  },[userinfo])

  const handleSaveEntry = async() => {
    try{
      const data = {
        "weekNumber": changedWeek,
        "day": day ,
        "summary": entry
      }
      const response = await addSummary(token, data);
      if(response){
        const Animation = setTimeout(()=>{
          setEntry("");
        },500);
        setEntry("Submitting...");
      }
      else return <h1>Error saving entry</h1>;
    } catch(error){
      console.error(error);
    }
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!isReady)
    return <StartJournal isReady={isReady} setIsReady={setIsReady} />;

  return (
    <>
      <div className="space-y-6 rounded-lg border border-slate-200 bg-[#f1faee] p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="date"
            >
              Day - {day}
            </label>
            <input
              className="form-input w-full rounded-lg border p-2 focus:border-blue-600 focus:ring-blue-600"
              id="date"
              defaultValue={currentDateTime.toLocaleDateString()}
              
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="time"
            >
              Time 
            </label>
            <input
              className="form-input w-full rounded-lg border p-2 focus:border-blue-600 focus:ring-blue-600"
              id="time"
              defaultValue={currentDateTime.toLocaleTimeString()}
            />
          </div>
        </div>

        {/* <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-700"
            htmlFor="location"
          >
            Location (Optional)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <MdLocationOn />
            </span>
            <input
              className="form-input w-full rounded-lg border p-2 pl-10 focus:border-blue-600 focus:ring-blue-600"
              id="location"
              placeholder="Enter your location"
              type="text"
            />
          </div>
        </div> */}
      </div>

      <div className="space-y-2   focus:border-blue-600 focus:ring-blue-600 p-4 rounded-2xl bg-[#f1faee]">
        <label className="text-sm font-medium text-slate-700" htmlFor="entry">
          Your Entry
        </label>
        <div className="relative">
          {isMicOn ? (
            <div className="min-h-[250px] p-4 pr-12">
              <p className="text-slate-700 whitespace-pre-wrap">
                {transcript || "Listening..."}
              </p>
              <img
                src="/Listening.gif"
                alt="Listening"
                className="size-[5rem] mt-2"
              />
            </div>
          ) : (
            <textarea
              className="form-textarea w-full rounded-lg border-slate-700 focus:border-blue-600 focus:ring-blue-600 min-h-[250px] p-4 pr-12"
              id="entry"
              placeholder="Start writing or click the mic..."
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            ></textarea>
          )}
          <button
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200"
            onClick={handleMicToggle}
          >
            {isMicOn ? <MdMicOff /> : <MdMicNone />}
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <button
          className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-semibold text-white hover:bg-green-700"
          onClick={() => setEntry("")}
        >
          Clear
        </button>
        <div className="flex gap-2">
          <button className="inline-flex h-10 bg-white items-center justify-center rounded-lg px-4 text-sm font-semibold text-slate-600 hover:bg-red-500 hover:text-white">
            Cancel
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
          onClick={handleSaveEntry}>
            Save Entry
          </button>
        </div>
      </div>
    </>
  );
};
