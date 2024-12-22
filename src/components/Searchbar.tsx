import { PiVideoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }:Props) => {

 return <>
  <nav className="navbar mb-12 text-neutral-content bg-neutral shadow-lg p-5 ">
        <div className='container mx-auto '>
          <div data-aos="zoom-in" className="flex-none px-2 mx-2 hover:scale-110 hover:text-green-600" onClick={()=> toast.success('You Are Home')}>
            <PiVideoBold className='text-5xl md:text-6xl xl:text-7xl inline pr-2 cursor-pointer' />
            <Link to='/' className='text-lg align-meddle font-bold md:text-xl xl:text-2xl'>
               Optimal_Videos
            </Link>
          </div>
          <div data-aos="zoom-in" className="flex-1 px-4 mx-2">
            <div className="flex justify-end">
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn md:text-xl xl:text-2xl hover:scale-110 hover:text-green-600' onClick={()=> toast.success('You Are Home')}>
                Home
              </Link>
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn md:text-xl xl:text-2xl hover:scale-110 hover:text-green-600' onClick={()=> toast.success('We Are Still On It')}>
                About
              </Link>
            </div> 
          </div>
        </div>
      </nav>
      <div data-aos='flip-left'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out' className=" flex justify-center py-20"> 
   <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8'>
    <div className="input input-lg bg-gray-200 w-[300px] md:w-[500px] xl:w-[750px] pr-40 text-black relative">
        <input
            type="text"
            placeholder="Search by title or genre..."
            onChange={(e) => onSearch(e.target.value)}
            className="absolute top-4"
          />
      </div>
    </div>
  </div>
  </>
  
  }
 ;

export default SearchBar
