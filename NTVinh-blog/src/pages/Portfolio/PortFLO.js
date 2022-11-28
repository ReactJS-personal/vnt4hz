import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { BiGitRepoForked, BiGridVertical, BiStar } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { VscRepo } from "react-icons/vsc";
import { v4 as uuidv4 } from "uuid";
import VinhdzLoading from "../../components/hooks/VLoading";
import { URL_API_PINNED_PROJECT } from "../../utils/api";
import DataPfl from "../../utils/DataPft";

//css
import "./PortFLO.css";

function PortFLO() {
  const [tabValue, setTabvalue] = useState("ALL");
  const [projectDialog, setProjectdialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataProject, setDataProject] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    try {
      axios.get(URL_API_PINNED_PROJECT).then((data) => setDataProject(data));
    } catch (error) {
      throw new Error(error);
      // console.log(error)
    }
  }, []);
  const { data = [] } = dataProject || {};
  // console.log(data);
  return loading ? (
    <VinhdzLoading />
  ) : (
    <Grid container className="Sec pb_40 ">
      {/* title */}
      <Grid item className="Sec-Tlt mb_20">
        {/* <span></span> */}
        <h4 className="Sec-Tlt_text">Collections</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="92"
          height="9"
          viewBox="0 0 80 8"
          fill="none"
          className="svgEffect"
        >
          <path
            d="M1.36658 3.43961C5.25984 2.21819 9.10198 2.35113 13.042 1.74498C16.5973 1.19801 20.2829 1.33594 23.9226 1.33594C27.3725 1.33594 30.9056 1.5463 34.2891 1.5463C35.5441 1.5463 37.2693 2.05276 38.3912 2.55139C39.6341 3.10379 41.4642 3.25919 42.8089 3.4513C44.602 3.70745 46.3029 3.86034 48.1616 3.86034C49.0606 3.86034 49.9761 3.43961 50.9081 3.43961C51.4475 3.43961 52.841 3.17686 53.3273 2.97213C55.1318 2.21235 56.3597 3.3818 57.5346 4.49145C58.2657 5.18187 59.2379 3.46932 60.0123 3.18249C60.9779 2.82484 61.679 2.53519 62.4783 3.33443C62.7994 3.65557 63.8588 5.51258 64.3716 5.22773C65.485 4.60917 66.7235 4.15447 67.7258 3.33443C69.0587 2.24383 71.3278 2.48068 73 2.38777C74.4626 2.30652 75.525 2.05998 77 2.38777C77.7415 2.55256 78.7556 2.38777 79.518 2.38777C80.2804 2.38777 81.1728 1.74498 82 1.74498"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="2"
            stroke="hsl(333deg, 100%, 65%)"
          ></path>
        </svg>
      </Grid>
      <Grid item xs={12} className="wrapPinned">
        <Grid item xs={12} className="titlePinned">
          <Typography>pinned</Typography>
        </Grid>

        <Grid item container style={{ position: "relative", zIndex: 99 }}>
          {data?.map((project) => (
            <Grid item xs={12} lg={6} className="cardProject" key={uuidv4()}>
              <Grid
                item
                direction="row"
                className="wrapCardTitle"
                alignItems="center"
                justify="space-between"
              >
                <Grid
                  style={{ display: "flex" }}
                  item
                  alignItems="center"
                  className="cardTitle"
                >
                  <VscRepo style={{ color: "  #8b949e ", fontSize: "18px" }} />
                  <a
                    className="nameProject"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >{`${project.owner}/${project.repo}`}</a>
                  <Box className="public">Public</Box>
                </Grid>
                <BiGridVertical
                  style={{
                    color: "#8b949e",
                    cursor: "pointer",
                  }}
                />
              </Grid>

              <Grid style={{ marginTop: "6px" }}>
                <Box className="content">{project.description}</Box>
                <Grid
                  container
                  item
                  alignItems="center"
                  className="vdz-projectInfo"
                >
                  <Grid item alignItems="center" className="lang">
                    <GoPrimitiveDot
                      style={{ color: project.languageColor || "#8b949e" }}
                    />
                    <Typography>{project.language}</Typography>
                  </Grid>
                  <Grid item alignItems="center" className="star">
                    <BiStar />
                    <Typography>{project.stars}</Typography>
                  </Grid>
                  <Grid item alignItems="center" className="fork">
                    {project.forks ? (
                      <>
                        <BiGitRepoForked />
                        <Typography>{project.forks}</Typography>{" "}
                      </>
                    ) : null}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* tabs dialog */}
      <Grid item xs={12} style={{ marginTop: "40px" }}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          className="custom_tabs"
          onChange={(event, newValue) => setTabvalue(newValue)}
        >
          <Tab
            label="ALL"
            value="ALL"
            className={
              tabValue === "ALL"
                ? clsx("customTab_item active", "tab_ctn")
                : clsx("customTab_item", "tab_ctn")
            }
          />
          {[
            ...new Set(DataPfl.gitHubProjectLive.map((item, key) => item.tag)),
          ].map((tag, key) => (
            <Tab
              label={tag}
              value={tag}
              key={key}
              className={
                tabValue === tag ? "customTab_item active" : "customTab_item"
              }
            />
          ))}
        </Tabs>
      </Grid>
      {/* project live */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {DataPfl.gitHubProjectLive.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "ALL" ? (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectdialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_img"
                          image={project.img}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customCard_cap"
                          >
                            {project.cap}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={projectDialog}
        onClose={() => setProjectdialog(false)}
        className="projectDialog"
        fullWidth
      >
        <DialogTitle
          onClose={() => setProjectdialog(false)}
          className="projectTitleDiablog"
        >
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.img} alt="" className="projectDialog_img" />
        <DialogContent className="diablog-bottom">
          <Typography className="projectDialog_desc">
            {projectDialog.desc}
            {projectDialog.live ? (
              <button className="btn_ProjectDiablogLive">
                <a href={projectDialog.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              </button>
            ) : (
              ""
            )}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.link?.map((element) => (
            <a
              href={element.link}
              target="_blank"
              rel="noreferrer"
              className="projectDialog_icon"
            >
              {element.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default PortFLO;
