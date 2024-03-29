import { Box, Grid, Typography } from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import React, { useEffect, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { GoVerified, GoVersions } from "react-icons/go";
import { Drawer } from "vaul";
import colors from "../../themes/components/colors";
import DataPft from "../../utils/DataPft";
import HighlightText from "../../utils/HighlightText";
import Linkcontact from "../Linkcontact/Linkcontact";
import TimeL, { CustomTimeL } from "../TimeLine/TimeL";
import UniverseStar from "../Universe/UniverseStar";
import BtnLike from "../hooks/BtnLike/BtnLike";
import BtnProfile from "../hooks/BtnProfile/BtnProfile";
import { ProfileSkeleton } from "../loadingSkeleton/ProfileSkeleton";
import "./Profile.css";
import ProfileAvatar from "./ProfileAvatar";

const CstItemTimeL = ({ title, id, link }) => (
  <TimelineItem>
    <CustomTimeL />
    <TimelineContent className="timeline_content">
      {link ? (
        <Box className="timelineItem_text">
          <span>{title} </span>
          <a href={link} rel="noreferrer">
            {id}
          </a>
        </Box>
      ) : (
        <Box className="timelineItem_text">
          <span>{title} </span>
          {id}
        </Box>
      )}
    </TimelineContent>
  </TimelineItem>
);

function Profile({ theme }) {
  const [loadingContent, setLoadingcontent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingcontent(false);
    }, 1200);
  });
  return loadingContent ? (
    <ProfileSkeleton theme={theme} />
  ) : (
    <>
      <div className="p-f ctn-sd container_shadow ">
        <div className="p-f_Image">
          {/* <img src={v} alt="avatar of NTV"  className="avatar"/> */}
          <ProfileAvatar theme={theme} />
        </div>
        <div className="p-f_name">
          <Box className="name">
            {DataPft.name}
            <div className="Verification">
              <GoVerified />
              <div className="Verification_hover">
                <p className="Verification_hover-center">
                  <GoVerified />
                </p>
                <p className="hover_owned">NT Vinh</p>
                {DataPft.hoverVerification}
              </div>
            </div>
          </Box>
          <Typography component={"p"} className="tlt">
            {DataPft.bio}
          </Typography>
        </div>

        <div className="p-f_infor">
          <TimeL icon={<AssignmentIndIcon />}>
            {DataPft.ProfileIcon.map((Icon, index) => (
              <div className="p-f-list_Icon" key={index}>
                <span className="P-f_Icon">{Icon.Live}</span>
                <CstItemTimeL title="Lives in" id={DataPft.address} />
                <span className="P-f_Icon">{Icon.Location}</span>
                <CstItemTimeL title="From" id={DataPft.From} />
                <span className="P-f_Icon">{Icon.Follow}</span>
                <CstItemTimeL title="Followed by" id={DataPft.Follow} />
              </div>
            ))}
            {/* <CstItemTimeL title='Lives in' id={DataPft.address} />
            <CstItemTimeL title='From' id={DataPft.From} />
            <CstItemTimeL title='Followed by' id={DataPft.Follow} /> */}
            <Linkcontact />
          </TimeL>
          <div className="btn_center_like">
            <BtnLike text={"Cook"} icon={<FastfoodIcon />} />
            <BtnLike
              text={"Pictures"}
              icon={<PhotoCameraIcon />}
              link="https://devntv.github.io/seeImages/"
            />
          </div>
          <br />
          <div className="btn_center btn_message">
            {/* <Btn text={'Send message'} icon={<FaFacebookMessenger className="btn_messageIcon" />} /> */}
            {/* <Link to='/contact' >To</Link> */}
            <BtnProfile
              icon={<FaFacebookMessenger />}
              path={"/contact"}
              textLink={"send message"}
            />
          </div>
        </div>
      </div>

      <Grid container item xs={12} className="your_heath">
        <Grid
          style={{ display: "flex" }}
          alignItems="center"
          direction="row"
          className="wrapHeathType"
        >
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <button className="btnV2">
                <HighlightText
                  stopOne={`${colors.purple40}`}
                  stopTwo={`${colors.teal40}`}
                >
                  <GoVersions style={{ marginRight: "10px" }} />
                  Version 2
                </HighlightText>
              </button>
            </Drawer.Trigger>
            <Drawer.Portal style={{ background: "red !important" }}>
              <Drawer.Overlay className="overlayDrawVinhDz" />
              <Drawer.Content className="contentDrawVinhDz">
                <div className="ctnDrawVinhDz">
                  <div className="wrapCtnD" />
                  <div className="wt">
                    <Drawer.Title>
                      <div style={{ textAlign: "center" }}>
                        <HighlightText>VinhDZ</HighlightText>
                      </div>
                    </Drawer.Title>
                  </div>
                  <UniverseStar />
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
