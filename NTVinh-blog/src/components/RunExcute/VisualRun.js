import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import React, { useEffect } from "react";
import colors from "../../themes/components/colors";
import Heading from "../../themes/components/Heading";
import HighlightText from "../../utils/HighlightText";
import { JSparse } from "../../utils/Prism";
import Sparkles from "../Sparkles";
import styles from "./styles.module.css";

function VisualRun({ handleExcute, isMobile }) {
  const [load, setLoad] = React.useState(false);
  // console.log();
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const handleGotoVdz = () => {
    setTimeout(() => {
      handleExcute(false);
    }, Math.floor(Math.random() * 5400 + 1));
    setLoad(true);
  };
  return (
    <Grid
      style={{
        width: "100%",
        height: "100%",
        transition: "all .2s",
      }}
    >
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <pre style={{ fontSize: "14px" }}>
          <code className="language-js">{JSparse}</code>
        </pre>

        {/* <Button
          onClick={handleGotoVdz}
          variant="contained"
          className={clsx(styles.btnRun, load && styles.btnRunning)}
        >
         
        </Button> */}

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
                style={{
                  color: colors.heading,
                  fontSize: "14px",
                  marginBottom: "0",
                }}
              >
                <HighlightText
                  direction="bottom"
                  stopOne={`${colors.blue30}`}
                  stopTwo={`${colors.purple40}`}
                >
                  Run code 🤖
                </HighlightText>
              </Heading>
            </Sparkles>
          )}
        </Button>
      </motion.div>
    </Grid>
  );
}

export default VisualRun;
