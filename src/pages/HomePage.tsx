import  { useState, useEffect } from 'react';
import mockDatas from '../assets/mockVideos.json';
import VideoGrid from '../components/VideoGrid';
import SearchBar from '../components/Searchbar';
import PaginationButton from '../components/PaginationButton';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [videos, setVideos] = useState(mockDatas.slice(0, 6));
  const [query, setQuery] = useState('');
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
 
  const navigate = useNavigate()

  useEffect(()=>{
    //Let's Check if the localStorage has likedVidios by poolling the localStorage
    const storedLikes = localStorage.getItem("likedVideos")
    if(storedLikes){
      setLikedVideos(JSON.parse(storedLikes))
    } 
  },[])
  // Let's Save liked videos to localStorage whenever the likedVideos state chane
  useEffect(()=>{
    localStorage.setItem("likedVideos", JSON.stringify(likedVideos))
  },[likedVideos])

   const handleLike = (id: number) => {
    setLikedVideos((prevLikedVideos) =>
      prevLikedVideos.includes(id) ? prevLikedVideos.filter((videoId) => videoId !== id) : [...prevLikedVideos, id]
    );
  };

  const handleSearch = (query: string) =>{ 
    setQuery(query.toLowerCase())
  };

  const handleLoadMore = () =>{
    if(videos.length < mockDatas.length){
      setVideos(mockDatas.slice(0, videos.length + 6));
      toast.success('You may want more videos')
    }
  }

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(query) || video.genre.toLowerCase().includes(query)
  );

  const handlePlay = (id:number)=>{
     navigate(`/video/${id}`)
  }

   return (
    <div className="">
      <SearchBar onSearch={handleSearch} />
      <VideoGrid videos={filteredVideos} onLike={handleLike} likedVideos={likedVideos} handlePlay={handlePlay} />
      <PaginationButton onClick={handleLoadMore} hasMore={videos.length < mockDatas.length} />
    </div>
  );
};

export default HomePage