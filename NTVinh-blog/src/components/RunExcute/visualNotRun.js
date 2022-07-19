import { Grid } from "@material-ui/core";
import React from "react";
import { SiVisualstudiocode } from "react-icons/si";
import styles from "./styles.module.css";

function VisualNotRun() {
  return (
    <>
      <Grid xs={12} item className={styles.screenVs}>
        <SiVisualstudiocode />
      </Grid>
    </>
  );
}

export default VisualNotRun;
