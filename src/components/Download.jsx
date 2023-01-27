import apple from '../assets/img/appstore.png'
import android from '../assets/img/google play.png'
import lumen from '../assets/img/lumen phone.png'
import lumen2 from '../assets/img/lumen phone2.png'

const Download = () => {
  return (
    <div className='flex items-center min-h-[80vh]  text-white text-center flex-col md:flex-row p-[1rem]'>
        <aside className='h-[100%]'> <img src={lumen} alt="" className='h-[100%]'/> </aside>
        <aside> 
            <h2 className='text-4xl mb-6'>Download Our New Mobile App Today</h2>
            <p>Never miss a trade again as you recieve HIGHLY accurate trading signals directly to your phone with the ForexAMG app. Traders are also able to enjoy more features and keep up to date to the latest using the app. Available for iPhone® and Android™</p>
            <div className='flex items-center gap-[2%] my-[2rem] flex-col md:flex-row'><img src={android} alt="" className='h-[60px] cursor-pointer mt-[0.5rem] ' /> <img src={apple} alt="" className='h-[60px] cursor-pointer mt-[0.5rem] block'/></div>
        </aside>
        <aside className='md:block hidden'><img src={lumen2} alt="" /></aside>
    </div>
  )
}

export default Download