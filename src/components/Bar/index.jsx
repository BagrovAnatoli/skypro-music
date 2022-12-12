/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { currentTrackFileSelector } from '../../store/selectors/catalog';
import Controls from '../Controls';
import TrackPlay from '../TrackPlay';
import Volume from '../Volume';
import * as S from './styles';

function Bar() {
    const trackFile = useSelector(currentTrackFileSelector);
    console.log(trackFile);

    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [trackDuration, setTrackDuration] = useState(120);
    const [progressWidth, setProgressWidth] = useState(0);
    const [progressClick, setProgressClick] = useState(0);
    const audioRef = useRef(null);

    const handleStop = () => {
        console.log('stop');
        audioRef.current.pause();
        clearInterval(intervalId);
        setIsPlaying(false);
    };

    // const handleStart = () => {
    //     console.log('start');
    //     audioRef.current.play();
    //     setTrackDuration(audioRef.current.duration);
    //     const newIntervalId = setInterval(() => {
    //         const time = audioRef.current.currentTime;
    //         setCurrentTime(time);
    //         if (audioRef.current.ended) {
    //             clearInterval(newIntervalId);
    //             setIsPlaying(false);
    //         }
    //     }, 1000);
    //     setIntervalId(newIntervalId);

    //     setIsPlaying(true);
    // };

    const start = (audio = audioRef.current) => {
        debugger;
        console.log('start');
        audio.play();
        console.log(`audio.duration ${audio.duration}`);
        setTrackDuration(audio.duration);
        const newIntervalId = setInterval(() => {
            const time = audio.currentTime;
            setCurrentTime(time);
            if (audio.ended) {
                clearInterval(newIntervalId);
                setIsPlaying(false);
            }
        }, 1000);
        setIntervalId(newIntervalId);

        setIsPlaying(true);
    }

    useEffect(() => {
        if(isPlaying) {
            handleStop();
        } 
        audioRef.current = new Audio(trackFile);
        setCurrentTime(0);
        start(audioRef.current);

    }, [trackFile]);

    

    const handleStart = () => {
        start(audioRef.current);
    };

    useEffect(() => {
        setProgressWidth((currentTime / trackDuration) * 100);
    }, [currentTime, trackDuration]);

    useEffect(() => {
        console.log('audioRef.current');
        console.log(audioRef.current);
        console.log('audioRef.current.currentTime');
        console.log(audioRef.current.currentTime);
        console.log(`progressClick ${progressClick} * trackDuration ${trackDuration}`);
        audioRef.current.currentTime = progressClick * trackDuration;
        setProgressWidth(progressClick * 100);
    }, [progressClick, trackDuration]);

    

    const togglePlay = isPlaying ? handleStop : handleStart;

    const handleMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const { left, width } = rect;
        const leftClick = event.clientX;
        setProgressClick((leftClick - left) / width);
        setProgressWidth((currentTime / trackDuration) * 100);
    };



    return (
        <S.Content>
            <S.PlayerProgressWrap onClick={handleMove}>
                <S.PlayerProgress width={progressWidth} />
            </S.PlayerProgressWrap>
            <S.PlayerBlock>
                <S.Player>
                    <Controls
                        togglePlay={togglePlay}
                        isPlaying={isPlaying}
                    />
                    <TrackPlay />
                </S.Player>
                <Volume />
            </S.PlayerBlock>
        </S.Content>
    );
}

export default Bar;
