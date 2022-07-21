import {
  CircularProgress,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import {
  VscAccount,
  VscChevronDown,
  VscChevronRight,
  VscDebugAlt,
  VscExtensions,
  VscFiles,
  VscGear,
  VscGitMerge,
  VscSearch,
  VscSymbolMethod,
} from "react-icons/vsc";
import { v4 as uuidv4 } from "uuid";
import {
  dataFileRunTopVscode,
  dataFileTopVscode,
  dataTerminal,
} from "../../contants/topFileVscode";
import useKey from "../hooks/useKey";
import styles from "./styles.module.css";
import VisualCSS from "./VisualCSS";
import VisualNotRun from "./visualNotRun";
import VisualRun from "./VisualRun";

const dataIconLeft = [
  <VscFiles />,
  <VscSearch />,
  <VscGitMerge />,
  <VscDebugAlt />,
  <VscExtensions />,
];
const dataIconLeftSpace = [<VscAccount />, <VscGear />];
function RunExcute({ handleExcute }) {
  const [hover, setHover] = useState(false);
  const [showFile, setShowfile] = useState(false);
  const [excute, setExcute] = useState(false);
  const [hoverIdClose, setHoverIdClose] = useState(null);
  const [closeFile, setCloseFile] = useState(false);
  const handleShowfile = () => setShowfile(!showFile);

  const handleHover = (id) => {
    if (id !== hoverIdClose) {
      setHoverIdClose(id);
    }
    if (!id) setHover(false);
  };
  useKey("ctrld", () => setShowfile(true));

  const [fileId, setFileId] = useState(null);
  const handleOpenFileWithID = (id) => {
    if (fileId !== id) setFileId(id);
    setExcute(true);
    setCloseFile(false);
  };

  const handleCloseFileWithID = (id) => {
    if (fileId === id) {
      setCloseFile(true);
      setExcute(false);
    }
  };

  // terminal
  const [openT, setOpenT] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickTerminal = () => setOpenT(true);

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [runCm, setRunCm] = useState(false);
  const [errCmd, setErrcmd] = useState(false);
  const handleEnterComand = (e) => {
    if (e.keyCode === 13) {
      if (
        value.includes("npm start") ||
        value.includes("npm run dev") ||
        value.includes("yarn start")
      ) {
        setTimeout(() => {
          handleExcute(false);
        }, Math.floor(Math.random() * 4500 + 1));
        setRunCm(true);
        setErrcmd(false);
      } else {
        setErrcmd(true);
      }
    }
  };

  useKey("ctrlz", () => setOpenT(true));
  console.log(runCm);
  return (
    <>
      <Grid container item className={styles.container}>
        <Grid container xs={1} item className={styles.topHeader}>
          <SiVisualstudiocode className={styles.logoVs} />
          <Grid className={styles.topMenu}>
            {dataFileTopVscode.map((menu, i) => {
              return (
                <>
                  <Typography
                    style={{ position: "relative" }}
                    key={uuidv4()}
                    onClick={menu.id === 7 ? handleClick : null}
                  >
                    {menu.fileName}
                  </Typography>
                  <Menu
                    style={{ position: "absolute" }}
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    getContentAnchorEl={null}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ horizontal: "center" }}
                    className={styles.menuTerminal}
                  >
                    <MenuItem onClick={handleClickTerminal}>
                      New Terminal
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Split Terminal</MenuItem>
                    <MenuItem onClick={handleClose}>Run Task</MenuItem>
                  </Menu>
                </>
              );
            })}
          </Grid>

          <Grid className={styles.nameMain}>
            <Typography>VinhDz.js</Typography>
          </Grid>

          <Grid className={styles.topClose}>
            <RiCloseFill />
          </Grid>
        </Grid>
        <Grid container item xs={11} className={styles.center}>
          <Grid
            item
            xs={1}
            className={styles.left}
            container
            direction="column"
          >
            <Grid>
              {dataIconLeft.map((item, index) => (
                <Grid
                  key={uuidv4()}
                  style={{ width: "40px", height: "40px" }}
                  container
                  className={styles.wrapIcon}
                >
                  {item}
                </Grid>
              ))}
            </Grid>
            <Grid>
              {dataIconLeftSpace.map((item, index) => (
                <Grid key={uuidv4()} className={styles.wrapIconBottom}>
                  {item}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid className={styles.collapseCode}>
            <Grid item xs={12} className={styles.file} onClick={handleShowfile}>
              {showFile ? <VscChevronDown /> : <VscChevronRight />}
              <Typography>VinhDz</Typography>
            </Grid>
            {showFile && (
              <>
                {dataFileRunTopVscode.map((file) => (
                  <Grid
                    className={styles.collapseFile}
                    onClick={() => handleOpenFileWithID(file.id)}
                    // onClick={handleShowExxcute}
                    key={uuidv4()}
                  >
                    <Grid>{file.icon}</Grid>
                    <Typography>{file.fileName}</Typography>
                  </Grid>
                ))}
              </>
            )}
          </Grid>

          <Grid className={styles.s}>
            <Grid className={clsx(styles.topFile, !hover && styles.paddingR)}>
              {dataFileRunTopVscode.map((file) => (
                <Grid
                  className={clsx(styles.topFileStyle)}
                  onMouseEnter={() => handleHover(file.id)}
                  onMouseLeave={() => handleHover(null)}
                  key={uuidv4()}
                >
                  {fileId === file.id && !closeFile && (
                    <>
                      <Grid>{file.icon}</Grid>
                      <Typography>{file.fileName}</Typography>
                      {file.id === hoverIdClose && (
                        <RiCloseFill
                          onClick={() => handleCloseFileWithID(file.id)}
                        />
                      )}
                    </>
                  )}
                </Grid>
              ))}
            </Grid>
            {excute ? (
              <>
                <Grid className={styles.runBottomFile}>
                  <Grid className={styles.excuteP}>
                    <VscChevronRight />
                    <VscSymbolMethod className={styles.package} />{" "}
                    <Typography className={styles.excuteFileName}>
                      VinhDz
                    </Typography>
                  </Grid>
                </Grid>

                <Grid className={styles.primsmCode}>
                  {fileId === 1 ? (
                    <VisualRun
                      language="javascript"
                      handleExcute={handleExcute}
                    />
                  ) : (
                    <VisualCSS />
                  )}
                </Grid>
              </>
            ) : (
              <VisualNotRun handleExcute={handleExcute} />
            )}
            {openT && (
              <>
                <Grid className={styles.openTerminal}>
                  <Grid key={uuidv4()} className={styles.terminalFile}>
                    <Grid className={styles.terminalFileName}>
                      {dataTerminal.map((data) => (
                        <Typography
                          className={clsx(
                            data.id === 3 && styles.activeTerminal
                          )}
                        >
                          {data.fileName}
                        </Typography>
                      ))}
                    </Grid>
                    <Grid style={{ marginRight: "14px" }}>
                      <RiCloseFill
                        style={{
                          cursor: "pointer",
                          color: "#fff",
                        }}
                        onClick={() => setOpenT(false)}
                      />
                    </Grid>
                  </Grid>
                  <Grid className={styles.comandLine}>
                    <Typography>{`Copyright (C) VDZ. All rights reserved`}</Typography>
                    <Grid className={styles.commandI}>
                      <Typography>PS C:\Users\project\vdz&gt;</Typography>
                      <input
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleEnterComand}
                      />
                    </Grid>
                    {runCm && (
                      <Typography>
                        <VscChevronRight />{" "}
                        <span
                          style={{
                            color: "#6BBBF7",
                          }}
                        >
                          Starting the development server...
                          <CircularProgress
                            variant="indeterminate"
                            disableShrink
                            size={12}
                            thickness={4}
                            className={styles.loadCir}
                          />
                        </span>
                      </Typography>
                    )}
                    {errCmd && (
                      <Typography>
                        npm <span style={{ color: "red" }}>ERR!</span> search
                        must be called with arguments
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
// Starting the development server...
export default RunExcute;
