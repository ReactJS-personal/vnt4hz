import { Grid, Typography } from "@material-ui/core";
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
  return (
    <>
      <Grid container item className={styles.container}>
        <Grid container xs={1} item className={styles.topHeader}>
          <SiVisualstudiocode className={styles.logoVs} />
          <Grid className={styles.topMenu}>
            {dataFileTopVscode.map((menu, i) => (
              <Typography key={i}>{menu}</Typography>
            ))}
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
              <VisualNotRun />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default RunExcute;
