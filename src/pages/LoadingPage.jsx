export const LoadingPage = ()=>{
    return(
        <>
            <div className="flex h-[100%] w-[100%] flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-400 rounded-2xl">
                <div className="flex flex-col items-center">
                    <div className="mb-6 h-32 w-32 overflow-hidden rounded-[50%] shadow-lg">
                        <img alt="ReflectAI Loader Animation" className="h-full w-full object-cover" src="/Pikachu.gif"/>
                    </div>
                    <p className="text-lg font-medium text-slate-100">
                        ReflectAI is getting ready for you...
                    </p>
                </div>
            </div>
        </>
    )
}