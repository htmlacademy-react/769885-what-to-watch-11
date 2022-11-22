import {useState, useRef, useEffect} from 'react';
import {Film} from '../../types/film';

type VideoPlayerPropsType = {
  film: Film;
  isMuted: boolean;
  isAutoPlay: boolean;
}

function VideoPlayer ({film, isMuted, isAutoPlay}: VideoPlayerPropsType): JSX.Element {
  const [, setIsLoading] = useState(true);
  const [isStateAutoPlay] = useState(isAutoPlay);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isStateAutoPlay) {
      setTimeout(() => {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }
      }, 1000);
      return;
    }
    videoRef.current.pause();

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [isStateAutoPlay]);

  return (
    <video
      src={film.previewVideoLink}
      poster={film.posterImage}
      muted={isMuted}
      autoPlay={isAutoPlay}
    />
  );
}

export default VideoPlayer;
