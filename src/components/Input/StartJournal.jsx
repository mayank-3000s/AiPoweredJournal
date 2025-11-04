export const StartJournal = ({ isReady, setIsReady }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url("/journey.jpg")`,
        }}
      ></div>

      {/* Centered Card */}
      <div className="relative flex items-center justify-center h-full p-4">
        <div className="w-full max-w-lg p-8 space-y-6 text-center opacity-95 bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-gray-800">
            Start Your Journal
          </h1>
          <p className="text-lg text-gray-600">
            Your thoughts deserve a place to grow.
          </p>
          <button
            className="w-full sm:w-auto px-8 py-3 text-lg font-bold text-white  bg-blue-600 rounded-lg shadow-lg transition-transform duration-300  ease-in-out hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => {
              setIsReady((prev) => !prev);
            }}
          >
            Begin Writing
          </button>
        </div>
      </div>
    </div>
  );
};
