import { GiSelfLove } from "react-icons/gi";
import { FaPlay } from "react-icons/fa"

type VideoProps = {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  isLiked: boolean;
  onLike: (id: number) => void;
  handlePlay: (id: number) => void
};

const VideoCard = ({ id, title, thumbnail, duration, onLike, isLiked, handlePlay}:VideoProps) => {
  

  return <div data-aos='fade-up'
              data-aos-offset='200'
              data-aos-delay='300'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out' className="rounded-lg shadow-lg card bg-gray-800 hover:bg-gray-900">
    <div className="card-body">
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2 text-white"><span className="text-gray-500 font-serif">Tittle:</span> {title}</h3>
      <p className="text-sm text-white"><span className="text-gray-500 font-serif">Duration:</span> {duration}</p>
      < GiSelfLove className={`text-2xl  cursor-pointer ${isLiked ? 'text-red-500' : 'text-gray-300'}`} onClick={()=>onLike(id)}/>
      <button className="btn btn-md text-2xl mt-2 p-1 rounded text-gray-300" onClick={()=>handlePlay(id)}>
        <FaPlay className="text-2xl  cursor-pointe text-gray-700 hover:text-green-500"/>
      </button>
    </div>
   
  </div>

}
  
;
export default VideoCard