import { Avatar, Box, Grid, Icon, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsArrowUp, BsHash } from "react-icons/bs";
import { GoRepo } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { ImEarth } from "react-icons/im";
import { RiSettings4Fill } from "react-icons/ri";
import Loader from "react-loader-spinner";
import Typist from "react-typist";
import styled from "styled-components";
import { map } from "styled-components-breakpoint";
import { mb } from "styled-components-spacing";
import GithubLink from "../../components/Customlink/ReponsitoriesLink";
import BtnLike from "../../components/hooks/BtnLike/BtnLike";
import VinhdzLoading from "../../components/hooks/VLoading";
import Gmation from "../../components/svgDesign/Gmation";
import TimeL from "../../components/TimeLine/TimeL";
import colors from "../../themes/components/colors";
import Heading from "../../themes/components/Heading";
import DataPft from "../../utils/DataPft";
import HighlightText from "../../utils/HighlightText";
import "./Resume.css";
//date
// import { formatDistance } from 'date-fns';
// import viLocale from "date-fns/locale/vi";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginTop: "10px",
  },
}));

const HeroContainer = styled.div`
  display: flex;
  flex-grow: 1;
  ${map(
    {
      mobile: "100%",
      tablet: "auto",
      desktop: "auto",
    },
    (size) => `width: ${size};`
  )}
  ${map(
    {
      mobile: "100%",
      tablet: "512px",
      desktop: "768px",
    },
    (size) => `max-width: ${size};`
  )}
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${mb(3)};
  position: relative;
`;

const CardWrapper = styled.div`
  position: relative;
`;

const CardShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 3px;
  left: 3px;
  border-radius: 4px;
`;

function Resume({ theme }) {
  const classes = useStyles();
  const [loadingSingal, setLoadingSignal] = useState(true);
  const [loadingBtn, setLoadbtn] = useState(true);
  const [loadingContent, setLoadingcontent] = useState(true);
  const [developing, setDeveloping] = useState(true);
  const handleSetDeveloping = () => {
    setTimeout(() => {
      setDeveloping(!developing);
    }, 400);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoadingSignal(false);
    }, 3200);
    setTimeout(() => {
      setLoadbtn(false);
    }, 3200);
    setTimeout(() => {
      setLoadingcontent(false);
    }, 1000);
  }, []);

  return loadingContent ? (
    // <ContentSkeleton theme={theme} />
    <VinhdzLoading />
  ) : (
    <>
      {/* about */}

      <Grid container className="Sec pb_40">
        <Grid item className="Sec-Tlt mb_20">
          {/* <span></span> */}
          <h4 className="Sec-Tlt_text">About me</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="8"
            viewBox="0 0 80 8"
            fill="none"
            className="svgEffect"
          >
            <path
              d="M1.36658 3.43961C5.25984 2.21819 9.10198 2.35113 13.042 1.74498C16.5973 1.19801 20.2829 1.33594 23.9226 1.33594C27.3725 1.33594 30.9056 1.5463 34.2891 1.5463C35.5441 1.5463 37.2693 2.05276 38.3912 2.55139C39.6341 3.10379 41.4642 3.25919 42.8089 3.4513C44.602 3.70745 46.3029 3.86034 48.1616 3.86034C49.0606 3.86034 49.9761 3.43961 50.9081 3.43961C51.4475 3.43961 52.841 3.17686 53.3273 2.97213C55.1318 2.21235 56.3597 3.3818 57.5346 4.49145C58.2657 5.18187 59.2379 3.46932 60.0123 3.18249C60.9779 2.82484 61.679 2.53519 62.4783 3.33443C62.7994 3.65557 63.8588 5.51258 64.3716 5.22773C65.485 4.60917 66.7235 4.15447 67.7258 3.33443C69.0587 2.24383 71.3278 2.48068 73 2.38777C74.4626 2.30652 75.525 2.05998 77 2.38777C77.7415 2.55256 78.7556 2.38777 79.518 2.38777C80.2804 2.38777 81.1728 1.74498 82 1.74498"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="2"
              stroke="hsl(222deg, 100%, 60%)"
            ></path>
          </svg>
        </Grid>
        <Grid item xs={12} style={{ position: "relative" }}>
          <Box className="content_about-me">
            {DataPft.about}
            <Box>{theme === "dark" && <Gmation />}</Box>
          </Box>
          <span className="signature-top"></span>
          {loadingSingal ? (
            <Loader
              className="loadSignal"
              type="ThreeDots"
              color="#1093f3"
              height={80}
              width={40}
              timeout={0}
            />
          ) : (
            <Typist cursor={{ show: false, hideWhenDone: true }}>
              <Typist.Delay ms={400} />
              <Typography className="signalture">
                {DataPft.signature}
              </Typography>
            </Typist>
          )}
        </Grid>
      </Grid>
      {/* EduInfor */}
      <Grid container className="Sec pb_40">
        <Grid item className="Sec-Tlt mb_20 ">
          {/* <span></span> */}

          <h4 className="Sec-Tlt_text">Infor</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="8"
            viewBox="0 0 83 7"
            fill="none"
            className="svgEffect"
          >
            <path
              d="M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="2"
              stroke="hsl(222deg, 100%, 60%)"
            ></path>
          </svg>
        </Grid>
        <Grid item xs={12} className="Step-skill">
          <Grid container className="project_timeL">
            <Grid item sm={12} md={6}>
              <TimeL
                className="Step-skill"
                title="Respositories"
                icon={<CodeIcon />}
              >
                {DataPft.projects.map((project, key) => (
                  <TimelineItem key={key}>
                    <TimelineSeparator className="timeL-custom">
                      <GoRepo className="timeL_repo" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography className="timeline-tlt">
                        {project.title}
                      </Typography>
                      <Typography className="timeline-date" variant="caption">
                        {project.date ? (
                          <>
                            <BsArrowUp className="timeline-date_timer__iconArrowTop" />
                            created: {project.dateCreate} ago ·{" "}
                            <ImEarth className="timeline-date_timer__iconEarth" />
                          </>
                        ) : (
                          ""
                        )}
                        {project.date}
                      </Typography>
                      <Typography className="timeline-desc" variant="body2">
                        <Typography className="timeline-desc_detail">
                          {project.descfunction}
                        </Typography>
                        {project.descfunction
                          ? `project used with main technology: ${project.desc}`
                          : "Other project available at my github."}
                      </Typography>
                      <span className="d-block"> </span>
                      {loadingBtn ? (
                        <Loader
                          type="TailSpin"
                          color="#00BFFF"
                          height={60}
                          width={30}
                          timeout={0}
                        />
                      ) : (
                        <>
                          <BtnLike
                            text={project.btntext}
                            icon={<InfoIcon />}
                            link={project.link}
                            onSound={true}
                          />
                          <Typography
                            onClick={handleSetDeveloping}
                            className="timeLine_developing"
                            component="span"
                            variant="overline"
                          >
                            {project.develop ? (
                              <>
                                <RiSettings4Fill
                                  className="timeLine_developing-icon"
                                  onAnimationEnd={handleSetDeveloping}
                                />
                                {developing ? "" : "developing..."}
                              </>
                            ) : (
                              ""
                            )}
                          </Typography>
                        </>
                      )}

                      {project.linkgit ? (
                        <GithubLink link={project.linkgit} />
                      ) : (
                        ""
                      )}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimeL>
            </Grid>

            <Grid item sm={12} md={6} className="Step-skill2">
              <TimeL title="Work experience" icon={<GrTechnology />}>
                {DataPft.techs.map((project, key) => (
                  <TimelineItem key={key}>
                    <TimelineSeparator className="timeL-custom">
                      <TimelineDot
                        variant="outlined"
                        className="timeL_header_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography className="timeline-tlt">
                        {project.title}
                      </Typography>
                      <Typography
                        className="timeline-date"
                        style={{ fontSize: "11px" }}
                        variant="caption"
                      >
                        {project.time}
                      </Typography>
                      <Typography className="timeline-desc">
                        {project.desc}
                      </Typography>
                      <Box className="FrameWork">
                        <Avatar
                          src={project.avatar}
                          ariant="rounded"
                          alt="avatar of NTV"
                          className={classes.small}
                        />

                        {project.avatarFrameWork ? (
                          <div className="position">
                            {project.avatarFrameWork}
                          </div>
                        ) : (
                          ""
                        )}
                      </Box>
                      {/* <span className="d-block"> </span>
                                    <BtnLike  text={project.btntext} icon={<InfoIcon />} link={project.link}/> */}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimeL>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* My hobbies */}
      <Grid container className="Sec pb_40">
        <Grid item className="Sec-Tlt mb_20 ">
          {/* <span></span> */}
          <h4 className="Sec-Tlt_text">Steps</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="9"
            viewBox="0 0 80 8"
            fill="none"
            className="svgEffect"
          >
            <path
              d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="2"
              stroke="hsl(222deg, 100%, 60%)"
            ></path>
          </svg>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {DataPft.MyHobbies.map((hobbie, key) => (
              <Grid item xs={12} sm={6} md={3} key={key}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ position: "relative" }}
                >
                  <div className="service">
                    <Icon className="service_icon">{hobbie.icon}</Icon>
                    <Heading
                      as="p"
                      variant="p"
                      style={{
                        color: colors.teal40,
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      <HighlightText
                        stopOne={`${colors.blue30}`}
                        stopTwo={`${colors.teal40}`}
                      >
                        {hobbie.title}
                      </HighlightText>
                    </Heading>
                    {/* <Typography className="service_title" variant="h6"> */}

                    {/* </Typography> */}
                    <Typography className="service_desc" variant="body2">
                      {hobbie.desc}
                    </Typography>
                    {hobbie.stress ? (
                      <Typography
                        className={
                          hobbie.maxstress
                            ? "service_maxstress"
                            : "service_mildstress"
                        }
                        variant="button"
                      >
                        {hobbie.stress}
                      </Typography>
                    ) : (
                      ""
                    )}
                  </div>
                  {theme === "dark" ? (
                    <CardShadow
                      style={{
                        background:
                          "linear-gradient(68.18deg, #80DBFF 0.54%, #52BFFF 99.37%)",
                        zIndex: "9",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skill */}
      <Grid container spacing={3} className="Sec pb_40 p_50">
        <Grid item xs={12}>
          <h4 className="skill_tlt">
            <BsHash className="skill_tlt_hash" />
            Skills
          </h4>
          <Grid container justify="space-between" spacing={3}>
            {DataPft.mySkills.map((skill, key) => (
              <Grid item xs={12} sm={6} md={3} key={key}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Paper elevation={0} className="skill">
                    <Typography variant="h6" className="skill_title">
                      {skill.title}
                    </Typography>
                    {skill.desc.map((item, key) => (
                      <Typography
                        variant="body2"
                        className="skill_desc"
                        key={key}
                      >
                        <TimelineDot
                          variant={"outlined"}
                          className="timeline_dot"
                        />
                        {item}
                      </Typography>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* contact */}
    </>
  );
}

export default Resume;
