import rainbowBg from '/code/React Projects/KidsFun/MyReact/src/assets/bgRainbow.jpg';
import { Link } from 'react-router-dom';
export default function Home() {
    let styles = {
        backgroundImage: `url(${rainbowBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    return (
        <>
            <div style={styles} className="overflow-x-hidden">
                <header className='flex justify-center'>
                    <ul id='nav' className='flex space-x-10 mt-4'>
                      <Link to='/numbers'>  <li className='bg-yellow-400 p-2 rounded-lg text-white text-3xl shadow-md cursor-pointer hover:bg-yellow-500'>Numbers</li></Link>
                      <Link to='/colors'>    <li className='bg-green-400 p-2 rounded-lg text-white text-3xl shadow-md cursor-pointer hover:bg-green-500'>Colors</li></Link> 
                      <Link to='/animals'>    <li className='bg-red-400 p-2 rounded-lg text-white text-3xl shadow-md cursor-pointer hover:bg-red-500'>Animals</li> </Link> 
                    </ul>
                </header>

                {/* Add flex container to ensure proper layout */}
                <div className="flex justify-end">
                    <div id='title' className='flex flex-col space-y-2 text-blue-900 mt-40 mr-10'>
                        <h1 className='text-5xl font-bold drop-shadow-lg'>Explore the World of</h1>
                        <h1 className='text-5xl font-bold drop-shadow-lg'>Kids Fun</h1>
                        <p className='text-xl drop-shadow-lg  text-purple-500'>Your ultimate destination for fun and learning!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
