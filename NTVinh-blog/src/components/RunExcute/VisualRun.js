import { Grid } from "@material-ui/core";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import React, { useEffect } from "react";
import { JSparse } from "../../tiul/Prism";

function VisualRun({ handleExcute }) {
  const [load, setLoad] = React.useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const handleGotoVdz = () => {
    setTimeout(() => {
      handleExcute(false);
    }, 1000);
    setLoad(true);
  };
  return (
    <Grid
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <pre>
        <code className="language-js">{JSparse}</code>
      </pre>
      <button onClick={handleGotoVdz}>{load ? "loading" : "runVdz"}</button>
    </Grid>
  );
}

export default VisualRun;
