// import bg from '../assets/img/heroman.jpg'

const Learning = () => {
  return (
    <div className='bg-[url("/src/assets/img/heroman.jpg")] min-h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white'>
        <h2 className="font-bold text-4xl text-center text-white">Learn Forex Trading For Free</h2>
        <p className="text-3xl text-center text-white">Everything You Need is Here</p>
        <p className="my-[2rem]">Join The Next Set of Money Genius</p>
        <button className="w-[40%] hidden md:block mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B] hover:scale-[1.1] ">Register for the next class now </button>
    </div>
  )
}

export default Learning