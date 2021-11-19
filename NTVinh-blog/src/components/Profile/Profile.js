import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Profile.css";
import TimeL, { CustomTimeL } from "../TimeLine/TimeL";
import DataPft from "../../tiul/DataPft";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import Btn from "../hooks/Btn/Btn";
import BtnLike from "../hooks/BtnLike/BtnLike";
import Linkcontact from "../Linkcontact/Linkcontact";
import { ProfileSkeleton } from '../loadingSkeleton/ProfileSkeleton';
import ProfileAvatar from "./ProfileAvatar";
//icon
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { GoVerified } from 'react-icons/go';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { FaFacebookMessenger } from 'react-icons/fa';
//load
import BtnProfile from "../hooks/BtnProfile/BtnProfile";

const CstItemTimeL = ( { title, id, link } ) => (
  <TimelineItem >
    <CustomTimeL />
    <TimelineContent className='timeline_content'>
      { link ? (<Typography className='timelineItem_text'><span>{title} </span><a href={link} rel="noreferrer">{id}</a> </Typography>)
             : (<Typography className='timelineItem_text'><span>{title} </span>{id}</Typography>) }
    </TimelineContent>
  </TimelineItem>
);


function Profile({theme}) {
  const [loadingContent, setLoadingcontent] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoadingcontent(false)
    }, 1200)
  })
  
  

  return (loadingContent ? <ProfileSkeleton theme={theme} />
    :
    <>
      <div className="p-f ctn-sd container_shadow ">  
        <div className="p-f_Image">
          {/* <img src={v} alt="avatar of NTV"  className="avatar"/> */}
          <ProfileAvatar />
        </div>
        <div className="p-f_name">
          <Typography className="name" component='div'>
            {DataPft.name}
            <div className="Verification">
              <GoVerified />
              <div className="Verification_hover">
                  <p className="Verification_hover-center"><GoVerified /></p> 
                  <p className="hover_owned">NT Vinh</p>
                  {DataPft.hoverVerification}
              </div>
            </div>   
          </Typography>
          <Typography component={'p'} className="tlt">{DataPft.bio}</Typography>
        </div>

        <div className="p-f_infor">
          <TimeL icon={<AssignmentIndIcon />}>
          {DataPft.ProfileIcon.map((Icon,index)=>(        
            <div className="p-f-list_Icon" key={index}>
              <span className="P-f_Icon" >{Icon.Live}</span>
              <CstItemTimeL title='Lives in' id={DataPft.address} />
              <span className="P-f_Icon" >{Icon.Location}</span>
              <CstItemTimeL title='From' id={DataPft.From} />
              <span className="P-f_Icon" >{Icon.Follow}</span>
              <CstItemTimeL title='Followed by' id={DataPft.Follow} />    
            </div>
            ))}
            {/* <CstItemTimeL title='Lives in' id={DataPft.address} />
            <CstItemTimeL title='From' id={DataPft.From} />
            <CstItemTimeL title='Followed by' id={DataPft.Follow} /> */}
            <Linkcontact />
          </TimeL >
          <div  className='btn_center_like'>
            <BtnLike text={'Cook'} icon={<FastfoodIcon />} />
            <BtnLike text={'Pictures'} icon={<PhotoCameraIcon />} link='https://devntv.github.io/seeImages/' />
          </div>
          <br />
          <div className='btn_center btn_message'  >   
            {/* <Btn text={'Send message'} icon={<FaFacebookMessenger className="btn_messageIcon" />} /> */}
            {/* <Link to='/contact' >To</Link> */}
            <BtnProfile icon={<FaFacebookMessenger className="btn_messageIcon" />} path={'/contact'} textLink={'send message'}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
