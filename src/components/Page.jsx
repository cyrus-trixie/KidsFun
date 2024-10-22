 export default function Page(){
    return(
        <>
<div  className="flex flex-wrap space-x-20 justify-center mt-8">
  <div className="flex flex-col items-center justify-center w-56 h-56 bg-red-400 text-white rounded-full p-4 shadow-md" data-aos="flip-left">
    <h1 className="text-xl font-bold text-center">Games</h1>
    <p className="text-center">Explore a variety of fun and interactive games that enhance learning and creativity!</p>
  </div>
  
  <div className="flex flex-col items-center justify-center w-56 h-56 bg-blue-400 text-white rounded-full p-4 shadow-md" data-aos="flip-left">
    <h1 className="text-xl font-bold text-center">Activities</h1>
    <p className="text-center">Engage in exciting activities designed to promote teamwork, problem-solving, and fun!</p>
  </div>
  
  <div className="flex flex-col items-center justify-center w-56 h-56 bg-purple-400 text-white rounded-full p-4 shadow-md" data-aos="flip-left">
    <h1 className="text-xl font-bold text-center">Education</h1>
    <p className="text-center">Discover educational resources that make learning enjoyable and effective for kids!</p>
  </div>
</div>


        </>
    );
}