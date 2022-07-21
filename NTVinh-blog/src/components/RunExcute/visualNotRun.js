import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { SiVisualstudiocode } from "react-icons/si";
import screenOrientation from "../../tiul/sreenOrientation";
import useMobileDetect from "../hooks/useMobile";
import styles from "./styles.module.css";

function VisualNotRun() {
  const { isMobile } = useMobileDetect();
  const [mobile, setMobile] = React.useState(isMobile);
  React.useEffect(() => {
    const landscape = screenOrientation(window);
    if (landscape) {
      setMobile(false);
    }
  }, []);
  React.useEffect(() => {
    const landscape = screenOrientation(window);
    window.addEventListener(
      "orientationchange",
      () => {
        if (landscape) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      },
      false
    );
  }, [mobile]);

  return (
    <>
      <Grid xs={12} item className={styles.screenVs}>
        <SiVisualstudiocode />
        <Grid>
          <Typography
            style={{ color: " #7E7E7E" }}
            className={clsx(mobile && styles.hiddenOnMobile)}
          >
            Press <span className={styles.keyBoard}>ctrl</span> +{" "}
            <span className={clsx(styles.keyBoard)}>v</span> to run excute
          </Typography>
          <Typography
            style={{ color: " #7E7E7E" }}
            className={clsx(mobile && styles.hiddenOnMobile)}
          >
            Press <span className={styles.keyBoard}>ctrl</span> +{" "}
            <span className={clsx(styles.keyBoard)}>d</span> to show file
          </Typography>
          <Typography
            style={{ color: " #7E7E7E" }}
            className={clsx(mobile && styles.hiddenOnMobile)}
          >
            Press <span className={styles.keyBoard}>ctrl</span> +{" "}
            <span className={clsx(styles.keyBoard)}>z</span> to run terminal
          </Typography>
        </Grid>

        {mobile && (
          <Typography style={{ color: " #7E7E7E" }}>
            You are using a mobile device
          </Typography>
        )}
      </Grid>
    </>
  );
}

export default VisualNotRun;
