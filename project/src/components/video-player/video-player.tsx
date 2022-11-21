import {useState, useRef, useEffect} from 'react';
import {Film} from '../../types/film';

type VideoPlayerPropsType = {
  film: Film;
  muted: boolean;
  autoPlay: boolean;
}

function VideoPlayer ({film, muted, autoPlay}: VideoPlayerPropsType): JSX.Element {
  const [, setIsLoading] = useState(true);
  const [isStateAutoPlay] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // console.log('>> isLoading', isLoading);

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
      muted={muted}
      autoPlay={autoPlay}
    />
  );
}

export default VideoPlayer;
