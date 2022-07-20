import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import { DiJavascript1, DiSass } from "react-icons/di";
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
import {
  dataFileRunTopVscode,
  dataFileTopVscode,
} from "../../contants/topFileVscode";
import styles from "./styles.module.css";
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
  console.log(handleExcute);
  const [hover, setHover] = useState(false);
  const [showFile, setShowfile] = useState(false);
  const [excute, setExcute] = useState(false);
  const [hoverIdClose, setHoverIdClose] = useState(null);
  const handleShowfile = () => setShowfile(!showFile);
  const handleShowExxcute = () => setExcute(true);
  const handleHover = (id) => {
    if (id !== hoverIdClose) {
      setHoverIdClose(id);
    }
    if (!id) setHover(false);
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
                  key={index}
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
                <Grid key={index} className={styles.wrapIconBottom}>
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
                <Grid
                  className={styles.collapseFile}
                  onClick={handleShowExxcute}
                >
                  <DiJavascript1 className={styles.js} />
                  <Typography>index.js</Typography>
                </Grid>
                <Grid
                  className={styles.collapseFile}
                  onClick={handleShowExxcute}
                >
                  <DiSass className={styles.sass} />
                  <Typography>styles.scss</Typography>
                </Grid>
              </>
            )}
          </Grid>

          <Grid className={styles.s}>
            {excute ? (
              <>
                <Grid
                  className={clsx(styles.topFile, !hover && styles.paddingR)}
                >
                  {dataFileRunTopVscode.map((file) => (
                    <Grid
                      className={clsx(styles.topFileStyle)}
                      onMouseEnter={() => handleHover(file.id)}
                      onMouseLeave={() => handleHover(null)}
                    >
                      <Grid>{file.icon}</Grid>
                      <Typography>{file.fileName}</Typography>
                      {file.id === hoverIdClose && (
                        <RiCloseFill onClick={() => setExcute(false)} />
                      )}
                    </Grid>
                  ))}
                </Grid>

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
                  <VisualRun
                    language="javascript"
                    handleExcute={handleExcute}
                  />
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
