import { useRef, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaPlay, FaPause } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import mockDatas from '../assets/mockVideos.json';


const VideoDetailsPage = () => {
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  
  const navigate = useNavigate()
  const {id}= useParams<{id: string}>();
  
  const videoItem = mockDatas.find((vid) => vid.id === Number(id)   );

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  // Seek to a Specific Time
  const handleSeek = (time: number) => {
    if (videoRef.current) videoRef.current.currentTime = time;
  };

  // Update Current Time on Progress
  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };

  // Set Playback Speed
  const handleSpeedChange = (speed: number) => {
    if (videoRef.current) videoRef.current.playbackRate = speed;
  };

  // Retrieve Video Metadata (e.g., duration)
  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

   // Format Time (e.g., 01:23)
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return videoItem ? (<div data-aos='zoom-in'
                          data-aos-offset='200'
                          data-aos-delay='200'
                          data-aos-duration='1000'
                          data-aos-easing='ease-in-out' className="rounded-lg shadow-lg card bg-gray-800 hover:bg-gray-900 relative">
      <FaArrowAltCircleLeft className='text-2xl text-gray-300 hover:text-green-500 absolute top-10 md:top-5 xl:top-10 left-20 cursor-pointer md:text-3xl xl:text-5xl ' onClick={()=>navigate('/')}/>
      <div className='flex justify-center'>
        <div className="w-full h-full mx-20 mt-20 mb-40 xl:mt-40  bg-gray-950">
          <video controls width="100%" height="auto" className="w-full xl:h-[750px] h-auto rounded-lg mb-4" ref={videoRef} 
                           onTimeUpdate={handleTimeUpdate}
                           onLoadedMetadata={handleLoadedMetadata}>
            <source src={videoItem.vidoeUrl}  type="video/mp4" />
          </video>
          <h1 className="text-lg font-bold mt-4 mx-4 mb-2 text-gray-300"><span className="text-gray-500 font-serif">Tittle:</span> {videoItem.title}</h1>
          <p className="text-sm font-semibold my-2 mb-2 mx-4 text-gray-300"><span className="text-gray-500 font-serif">Description:</span> {videoItem.description}</p>
          <button className='mt-0 mb-10 mr-5 float-end btn btn-sm md:btn-md bg-gray-300 hover:bg-green-600 duration-1000 px-4 md:px-8 xl:px-8' onClick={togglePlayPause}>
            {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
          <div className="flex items-center justify-between space-x-2">
            <div className='inline-flex'>
              <p className="text-sm font-semibold my-2 mb-2 mx-4 text-gray-400">Duration: </p> 
              <div className="text-md text-gray-300 mt-1 ">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
          </div>
            <div className="flex items-center mt-4 px-5">
              <input
                type="range"
                min={0}
                max={duration}
                step={0.1}
                value={currentTime}
                onChange={(e) => handleSeek(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          <div className="flex justify-around mt-4 mb-10">
            <button
              onClick={() => handleSpeedChange(0.5)}
             className="px-6 py-2 bg-gray-400 text-black hover:text-white hover:bg-gray-700 duration-1000 rounded-md"
            >
              0.5x
            </button>
            <button
              onClick={() => handleSpeedChange(1)}
              className="px-6 py-2 bg-gray-400 text-black hover:text-white hover:bg-gray-700 duration-1000 rounded-md"
            >
              1x
            </button>
            <button
              onClick={() => handleSpeedChange(1.5)}
              className="px-4 py-2 bg-gray-400 text-black hover:text-white hover:bg-gray-700 duration-1000 rounded-md"
            >
              1.5x
            </button>
            <button
              onClick={() => handleSpeedChange(2)}
              className="px-6 py-2 bg-gray-400 text-black hover:text-white hover:bg-gray-700 duration-1000 rounded-md"
            >
              2x
            </button>
          </div>
        </div>
      </div>
    </div>): <div className ="flex justify-center">
      <div className="container bg-gray-200 shadow-2xl border-solid  border-black mt-10 rounded-3xl ">
        <div className='hero'>
          <div className="text-center hero-content">
            <div className="lg:max-w-md max-w-xs">
              <h1 className="lg:text-8xl text-4xl font-bold  text-red-500 mb-4">Oops!</h1>
              <p className="lg:text-3xl text-1.5xl mb-4 font-bold  text-black-500">Something went wrong. The requested contact ID doesn't exist!.</p>
              <button onClick={()=> navigate('/')} className='btn bg-red-500 btn-md lg:btn-lg  text-white lg:text-2xl text-xl'>
                <FaHome className="lg:text-3xl text-xl" />
                <p>Go Back </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
};
export default VideoDetailsPage
