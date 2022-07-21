import { Avatar, Box, Typography } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { formatDistance } from "date-fns";
import viLocale from "date-fns/locale/vi";
import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillLike,
  AiOutlineHeart,
  AiOutlineLike,
} from "react-icons/ai";
import useSound from "use-sound";
import v from "../../assets/images/VDZ.jpg";
import heartStories from "../../assets/sounds/heartStories.mp3";
import likeStories from "../../assets/sounds/likeStories.wav";
import storiesOpen from "../../assets/sounds/storiesOpen.mp3";
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import DataPft from "../../tiul/DataPft";
import "./ProfileAvatar.css";
import Progress from "./Progress";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "red",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    fontSize: "40px !important",
    position: "absolute",
    zIndex: "99999",
  },
}))(Badge);

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon className="close_Icon" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function ProfileAvatar() {
  const [open, setOpen] = React.useState(false);
  const [storyClick, setStoryClick] = useState(false);
  const [playUp, setPlayUp] = useState(0.75);
  //  open sound
  const [play] = useSound(storiesOpen);
  const [playLike] = useSound(likeStories);
  const [playHeart] = useSound(heartStories, {
    playUp,
    volume: 0.5,
    interrupt: true,
  });

  const [reactIconLike, setReactIconLike] = useLocalStorage(
    "react-icon-like",
    0
  );

  const [reactIconHeart, setReactIconHeart] = useLocalStorage(
    "react-icon-heart",
    0
  );

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleStoryClick = () => {
    setStoryClick(true);
  };
  const wrapHandleAvatarClick = () => {
    handleStoryClick();
    handleClickOpen();
    play();
  };
  const handleIconLike = () => {
    setReactIconLike((current) => current + 1);
    playLike();
  };
  const handleIconHeart = () => {
    setReactIconHeart((current) => current + 1);
    setPlayUp(playUp + 0.1);
    playHeart();
  };

  return (
    <>
      <StyledBadge
        className="ImagePf"
        overlap="circle"
        variant="dot"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Avatar
          onClick={wrapHandleAvatarClick}
          className={storyClick === false ? "avatar" : "avatar_boder"}
          src={v}
          alt="avatar of NTV"
        />
      </StyledBadge>

      <Dialog
        className="Diablog-ctn"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* progress story */}
        {/* <Progress value={valueProgress} max={100}  /> */}
        <Progress open={open} setOpen={setOpen} />
        <DialogTitle
          className="Title-Story"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {DataPft.Story.map((element) => (
            <Box className="Top-Story" key={element.name}>
              {/* <Typography className="admin_Story" component='span'>{element.adminManager}</Typography> */}
              <Avatar src={v} className="Top-Story_avatar" />
              <Typography className="Story_name">{element.name}</Typography>
              {/* <Typography className="Story_time" component='span'>{element.time}</Typography>    */}
              <Typography className="Story_time" component="span">
                {formatDistance(new Date(2021, 2, 14), new Date(), {
                  locale: viLocale,
                })}{" "}
                trước
              </Typography>
            </Box>
          ))}
        </DialogTitle>

        <DialogContent dividers className="T">
          <Typography gutterBottom className="Story_top_content">
            {DataPft.Story.map((element) => (
              <Typography component="div" key={element.name}>
                <Typography component="p">{element.storyTopContent}</Typography>
                <Typography gutterBottom className="Story_body_content">
                  {
                    <img
                      key={element.name}
                      src={element.storyImgBody}
                      alt="story"
                    />
                  }
                </Typography>
                <Typography
                  gutterBottom
                  className="Story_bottom"
                  style={{ width: "100%" }}
                >
                  {element.funContent}
                </Typography>
              </Typography>
            ))}
          </Typography>
        </DialogContent>
        <DialogActions className="Bottom_Story">
          <Box className="icon-react">
            {reactIconLike ? (
              <AiFillLike
                onClick={handleIconLike}
                className="icon-react_liked"
              />
            ) : (
              <AiOutlineLike
                onClick={handleIconLike}
                className="icon-react_like"
              />
            )}

            <Typography
              variant="caption"
              component="span"
              className={reactIconLike ? "react-textLiked" : "icon-react_Text"}
            >
              {reactIconLike}
            </Typography>

            <Typography
              component="span"
              className="Span_icon-react"
            ></Typography>

            {reactIconHeart ? (
              <AiFillHeart
                onClick={handleIconHeart}
                className="icon-react_hearted"
              />
            ) : (
              <AiOutlineHeart
                onClick={handleIconHeart}
                className="icon-react_heart"
              />
            )}

            <Typography
              variant="caption"
              component="span"
              className={
                reactIconHeart ? "react-textHearted" : "icon-react_Text"
              }
            >
              {reactIconHeart}
            </Typography>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProfileAvatar;
