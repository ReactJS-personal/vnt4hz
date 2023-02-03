import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { AiFillPauseCircle } from "react-icons/ai";
import { GoPlay } from "react-icons/go";
import { HiArrowNarrowRight } from "react-icons/hi";
import Particles from "react-particles";
import ReactPlayer from "react-player/youtube";
import useSound from "use-sound";
import soundOff from "../../assets/sounds/soundOff.mp3";
import VinhdzLoading from "../../components/hooks/VLoading";
import "./Blog.css";

function Blog() {
  const [loading, setLoading] = useState(true);
  const [mute, setMute] = useState(true);

  const [playSong] = useSound(soundOff);

  useEffect(() => {
    const loadingRender = setTimeout(() => {
      setLoading(false);
    }, 500);

    const song = setTimeout(() => {
      setMute(false);
    }, 152200);

    return () => {
      clearTimeout(loadingRender);
      clearTimeout(song);
    };
  }, []);

  const handleMuted = () => {
    setMute(!mute);
    playSong();
    // setTimeout(() => {
    //   setMute(false);
    // }, 222200);
  };

  const URL = "https://www.youtube.com/watch?v=3VTkBuxU4yk";

  return loading ? (
    <VinhdzLoading />
  ) : (
    <>
      <div className="blog">
        {/* <div className="blog" style={{border:`2px solid ${borderbg}`, transition:'all .3s ease-in'}}></div> */}
        {/* <h1 className="tltBlog">My blog at : https://vdzblog.xyz/</h1> */}
        <Button
          className="btnbLog"
          variant="contained"
          href="https://vinhdzblog.site/"
        >
          Move
          <HiArrowNarrowRight className="ArrowIcon" />
        </Button>

        <span
          style={{
            marginTop: "5px",
            height: "5px",
            display: "block",
            position: "relative",
          }}
        ></span>
        <Button
          className="btnbLog iCon"
          variant="contained"
          style={{ width: "2%" }}
          onClick={handleMuted}
        >
          {mute ? <AiFillPauseCircle /> : null}
          {mute ? (
            <ReactPlayer
              height="0px"
              width="0px"
              style={{ opacity: "0" }}
              playing={true}
              playsinline={true}
              url={URL}
            />
          ) : (
            <GoPlay />
          )}
        </Button>

        <Particles
          className="lib"
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.15,
              },
              size: {
                value: 3,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    </>
  );
}

export default Blog;
