
import VideoCard from './VideoCard';

type Video = {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
};

type Props = {
  videos: Video[];
  onLike: (id: number) => void;
  handlePlay: (id: number) => void;
  likedVideos: number[];
};

const VideoGrid = ({ videos, onLike, likedVideos, handlePlay }:Props) => {
  
 return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-10">
    {videos.map(video => (
      <VideoCard
        key={video.id}
        {...video}
        onLike={onLike}
        handlePlay={handlePlay}
        isLiked={likedVideos.includes(video.id)}
      />
    ))}
  </div>
}
;

export default VideoGrid