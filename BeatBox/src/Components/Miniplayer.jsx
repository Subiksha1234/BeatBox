import React from 'react';
import '../App.css';
import { Button, IconButton, makeStyles, Slider} from "@material-ui/core";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousTwoToneIcon from "@material-ui/icons/SkipPreviousTwoTone";
import SkipNextTwoToneIcon from "@material-ui/icons/SkipNextTwoTone";
import QueueMusicRoundedIcon from "@material-ui/icons/QueueMusicRounded";
import { LoopOutlined, PauseCircleFilledRounded } from "@material-ui/icons";
import MediaControlCard from './MediaControlCard'
import { useRef } from "react";
import ContinueSlider from './Slider';

const useStyles = makeStyles({
  icon: {
    color: "#dddddd",
    fontSize: "140%",
  },
  slider: {
    color: "white",
    fontSize: "140%",
  },
  controls:{
    padding:"0.5%"
  },
  seek:{
    padding:"4%"
  }
});

const Miniplayer = ({ song, setcurrentSong, audioElement, 
  isPlaying, setisplaying, currentSong, value, 
  loopActive, setloopActive }) => {

  const clickRef = useRef();

  const playpause = () => {

    setisplaying(!isPlaying);
    console.log(isPlaying);
  }
  const loop = () => {

    setloopActive(!loopActive);
  }

  const checkWidth = (e) => {

    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElement.current.currentTime = divprogress / 100 * currentSong.length;
  }

  const skipprev = () => {

    let index = song.findIndex(x => x.name === currentSong.name);
    if (index === 0) {

      setcurrentSong(song[song.length - 1]);
    }
    else {

      setcurrentSong(song[index - 1]);
    }

    audioElement.current.currentTime = 0;
    setisplaying(true);
  }

  const skipnext = () => {

    let index = song.findIndex(x => x.name === currentSong.name);
    if (index == song.length - 1) {

      setcurrentSong(song[0]);
    }
    else {

      setcurrentSong(song[index + 1]);
    }

    audioElement.current.currentTime = 0;
    setisplaying(true);
  }

  const classes = useStyles();


  return (
    <>
      <div className="music-bar">
        <div className="row">
          <div className="col-md-4">
            <div className={classes.controls}>{<MediaControlCard currentSong={currentSong} />}</div>
          </div>
          <div className="col-md-4">
            <div className={classes.seek}>
              <div className="row" id="music-slider">
                <Slider
                  onClick={checkWidth}
                  ref={clickRef}
                  value={value}
                  className={classes.slider}
                  sx={{
                    color: "white",
                    height: "3px"
                  }}
                ></Slider>
              </div>
              <IconButton className={classes.icon} onClick={skipprev} >
                <SkipPreviousTwoToneIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.icon} onClick={playpause}>
                {(isPlaying) ? <PauseCircleFilledRounded className={classes.icon} />
                  : <PlayCircleFilled className={classes.icon} />
                }
              </IconButton>
              <IconButton className={classes.icon} onClick={skipnext}>
                <SkipNextTwoToneIcon className={classes.icon} />
              </IconButton>

            </div>
          </div>
          <div className="col-md-4" id="music-div-3">
            <Button>
              {/* <ContinueSlider className={classes.icon} /> */}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Miniplayer;