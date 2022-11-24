import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import Prism from "prismjs";
import React, { useEffect } from "react";
import { SCSSparse } from "../../utils/Prism";

function VisualCSS() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Grid
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <pre className="item" style={{ fontSize: "14px" }}>
          <code className="language-css">{SCSSparse}</code>
        </pre>
      </motion.div>
    </Grid>
  );
}

export default VisualCSS;
