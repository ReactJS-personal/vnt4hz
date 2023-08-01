import React from "react";
import u1 from "../../assets/images/u1.png";
import u2 from "../../assets/images/u2.png";
import u3 from "../../assets/images/u3.png";
import StarThemes from "../../themes/Effect/StartEffect";
import styles from "./styles.module.css";

function UniverseStar() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%,-50%,0)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h5 className={styles.uniText}>Hello universe</h5>
          <span>V2 is comming soon...</span>
          <img
            class="img-fluid"
            src={u1}
            alt="u1"
            style={{
              maxHeight: "40px",
              maxWidth: "40px",
              position: "absolute",
              top: -30,
              right: 10,
            }}
            className={styles.u1}
          />
          <img
            class="img-fluid"
            src={u2}
            alt="u1"
            style={{
              maxHeight: "40px",
              maxWidth: "40px",
              position: "absolute",
              top: -50,
              left: 20,
            }}
            className={styles.u2}
          />
          <img
            class="img-fluid"
            src={u3}
            alt="u1"
            style={{
              maxHeight: "60px",
              maxWidth: "60px",
              position: "absolute",
              bottom: -70,
              left: 20,
              opacity: "0.3",
            }}
            className={styles.u3}
          />
        </div>
      </div>

      <StarThemes />
    </>
  );
}

export default UniverseStar;
