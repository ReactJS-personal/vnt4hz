import React, { memo } from "react";

function SVGCircle({
  width = 600,
  height = 515,
  sdStart = 2,
  sdEnd = 8,
  theme = "dark",
}) {
  console.log("render");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 900 815"
      fill="none"
      id="circles"
      style={{ backgroundColor: "transparent" }}
    >
      <g transform="translate(450 407.5)">
        <circle
          class="Products_gradientCircle__KxRgY"
          id="gradientCircle"
          r="234.85"
          fill="url(#gradient)"
        ></circle>
        <circle
          r="234.85"
          data-radius="213.5"
          stroke="#34b8b6"
          id="firstCircle"
          stroke-dasharray={`${sdStart} ${sdEnd}`}
          class="js-main-circle"
        ></circle>
        <defs>
          <radialGradient id="gradient">
            <stop
              offset="0%"
              stop-color={theme === "dark" ? "#34b8b6" : "#e7e7e7"}
            ></stop>
            <stop
              offset="100%"
              stop-color={theme === "dark" ? "#100F21" : "white"}
            ></stop>
          </radialGradient>
        </defs>
        <circle
          r="307.272222"
          data-radius="389.5"
          stroke="none"
          class="js-main-circle"
          stroke-dasharray=""
        ></circle>
        <circle
          r="377.65"
          data-radius="539.5"
          stroke="none"
          class="js-main-circle"
          stroke-dasharray=""
        ></circle>
        <circle
          r="438.777273"
          data-radius="699.5"
          stroke="none"
          class="js-main-circle"
          stroke-dasharray=""
        ></circle>
        <circle
          id="firstDot"
          cy="-234.85"
          r="6"
          fill="none"
          transform="rotate(0)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0"
            to="360"
            dur="15s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          id="secondDot"
          cy="-307.272222"
          r="6"
          fill="none"
          transform="rotate(0)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="25"
            to="385"
            dur="15s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          id="thirdDot"
          cy="-377.65"
          r="6"
          fill="none"
          transform="rotate(0)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="45"
            to="405"
            dur="15s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          class="js-dashed-circle-dot"
          cy="-234.85"
          r="6"
          fill="#33e6e2"
          transform="rotate(0)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0"
            to="360"
            dur="20s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          class="js-dashed-circle-dot"
          cy="-234.85"
          r="6"
          fill="#33e6e2"
          transform="rotate(0)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="135"
            to="495"
            dur="20s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          class="js-dashed-circle-dot"
          cy="-234.85"
          r="6"
          fill="#33e6e2"
          transform="rotate(0)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="270"
            to="630"
            dur="20s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
    </svg>
  );
}

export default memo(SVGCircle);
