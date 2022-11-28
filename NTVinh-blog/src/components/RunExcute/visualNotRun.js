import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import React from "react";
import { SiVisualstudiocode } from "react-icons/si";
import colors from "../../themes/components/colors";
import Heading from "../../themes/components/Heading";
import HighlightText from "../../utils/HighlightText";
import Sparkles from "../Sparkles";
import styles from "./styles.module.css";

function VisualNotRun({ handleExcute, isMobile }) {
  const [load, setLoad] = React.useState(false);

  const handleGotoVdz = () => {
    setTimeout(() => {
      handleExcute(false);
    }, Math.floor(Math.random() * 5400 + 1));
    setLoad(true);
  };

  return (
    <>
      <Grid xs={12} item className={styles.screenVs}>
        <SiVisualstudiocode />
        <Grid>
          <Typography
            style={{ color: " #7E7E7E" }}
            className={clsx(isMobile && styles.hiddenOnMobile)}
          >
            Press <span className={styles.keyBoard}>ctrl</span> +{" "}
            <span className={clsx(styles.keyBoard)}>v</span> to run excute
          </Typography>
          <Typography
            style={{ color: " #7E7E7E" }}
            className={clsx(isMobile && styles.hiddenOnMobile)}
          >
            Press <span className={styles.keyBoard}>ctrl</span> +{" "}
            <span className={clsx(styles.keyBoard)}>d</span> to show file
          </Typography>
          <Typography
            style={{ color: " #7E7E7E" }}
            className={clsx(isMobile && styles.hiddenOnMobile)}
          >
            Press <span className={styles.keyBoard}>ctrl</span> +{" "}
            <span className={clsx(styles.keyBoard)}>z</span> to run terminal
          </Typography>
        </Grid>

        {isMobile && (
          <>
            <Typography style={{ color: " #7E7E7E" }}>
              You are using a mobile device
            </Typography>
            <Button
              className={clsx(styles.btnVdz, load && styles.btnRunning)}
              onClick={handleGotoVdz}
            >
              {load ? (
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  size={20}
                  thickness={4}
                  className={styles.loadCir}
                />
              ) : (
                <Sparkles enabled>
                  <Heading
                    as="p"
                    variant="h3"
                    style={{ fontSize: "14px", marginBottom: "0" }}
                  >
                    <HighlightText
                      direction="bottom"
                      stopOne={`${colors.blue30}`}
                    >
                      Run code 🤖
                    </HighlightText>
                  </Heading>
                </Sparkles>
              )}
            </Button>
          </>
        )}
      </Grid>
    </>
  );
}

export default VisualNotRun;
