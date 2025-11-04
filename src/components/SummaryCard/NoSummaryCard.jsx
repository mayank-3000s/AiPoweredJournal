import {useNavigate} from 'react-router-dom'

export const NoSummaryCard = () => {
    const navigate = useNavigate();
    const handleAdd = ()=>{
        navigate('/entries')
    }
  return (
    <>
      <main className="flex-grow flex items-center justify-center bg-white rounded-2xl">
        <div className="w-full max-w-2xl px-4 py-16 text-center">
          <div className="mb-8 w-full max-w-sm mx-auto">
            <div className="relative w-full" style={{ paddingTop: "66.66%" }}>
              <div className="absolute inset-0">
                <img
                  alt="Illustration of a journal and pen"
                  className="w-full h-full object-contain"
                  src="/Summary.png"
                />
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            No Summaries Yet
          </h2>
          <p className="text-lg text-subtle-light dark:text-subtle-dark max-w-md mx-auto mb-8">
            Start writing your first summary to see your weekly insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
            onClick={handleAdd}>
              Add Summary
            </button>
            <button className="bg-primary/10 dark:bg-primary/20 text-primary font-bold py-3 px-6 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
            onClick={()=>{
                navigate("/#");
                setTimeout(() => {
                  const el = document.getElementById("features");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 200);
            }}>
              Learn More
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
