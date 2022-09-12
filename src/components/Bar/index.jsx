/* eslint-disable no-console */
import { useRef, useState, useEffect } from 'react';
import Controls from '../Controls';
import TrackPlay from '../TrackPlay';
import Volume from '../Volume';
import * as S from './styles';

function Bar() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [trackDuration, setTrackDuration] = useState(120);
  const [progressWidth, setProgressWidth] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setProgressWidth((currentTime / trackDuration) * 100);
  }, [currentTime]);

  const handleStart = () => {
    console.log('start');
    audioRef.current.play();
    setTrackDuration(audioRef.current.duration);
    const newIntervalId = setInterval(() => {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);
      console.log(time);
    },1000);
    setIntervalId(newIntervalId);

    setIsPlaying(true);
  }

  const handleStop = () => {
    console.log('stop');
    audioRef.current.pause();
    console.log(intervalId);
    clearInterval(intervalId);
    console.log(currentTime);

    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;


  return (
    <>
      <audio controls ref={audioRef}>
          <track kind="captions"/>
          <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>
      <S.Content>
        <S.PlayerProgressWrap>
        <S.PlayerProgress width={progressWidth} />
        </S.PlayerProgressWrap>
        <S.PlayerBlock>
          <S.Player>
            <Controls togglePlay={togglePlay}/>
            <TrackPlay />
          </S.Player>
          <Volume />
        </S.PlayerBlock>
      </S.Content>
    </>
  );
}

export default Bar;
