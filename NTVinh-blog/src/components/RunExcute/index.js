import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import Prism from "prismjs";
import { useEffect, useState } from "react";
import { DiJavascript1 } from "react-icons/di";
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
import { dataFileTopVscode } from "../../contants/topFileVscode";
import styles from "./styles.module.css";
import VisualNotRun from "./visualNotRun";

const dataIconLeft = [
  <VscFiles />,
  <VscSearch />,
  <VscGitMerge />,
  <VscDebugAlt />,
  <VscExtensions />,
];
const dataIconLeftSpace = [<VscAccount />, <VscGear />];
function RunExcute(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [hover, setHover] = useState(false);
  const [showFile, setShowfile] = useState(false);
  const [excute, setExcute] = useState(false);
  const handleShowfile = () => setShowfile(!showFile);
  const handleShowExxcute = () => setExcute(true);
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
              <Grid className={styles.collapseFile} onClick={handleShowExxcute}>
                <DiJavascript1 className={styles.js} />
                <Typography>index.js</Typography>
              </Grid>
            )}
          </Grid>

          <Grid className={styles.s}>
            {excute ? (
              <>
                <Grid
                  className={clsx(styles.topFile, !hover && styles.paddingR)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Grid className={clsx(styles.topFileStyle)}>
                    <DiJavascript1 className={styles.js} />
                    <Typography>index.js</Typography>
                    {hover && <RiCloseFill onClick={() => setExcute(false)} />}
                  </Grid>
                </Grid>

                <Grid className={styles.runBottomFile}>
                  <Grid className={styles.excuteP}>
                    <VscChevronRight />{" "}
                    <VscSymbolMethod className={styles.package} />{" "}
                    <Typography className={styles.excuteFileName}>
                      VinhDz
                    </Typography>
                  </Grid>
                </Grid>

                <Grid className={styles.primsmCode}>huhuhu</Grid>
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
