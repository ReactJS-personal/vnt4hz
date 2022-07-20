import { DiJavascript1, DiSass } from "react-icons/di";
import styles from "./styles.module.css";

export const dataFileTopVscode = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

export const dataFileRunTopVscode = [
  {
    icon: <DiJavascript1 className={styles.js} />,
    fileName: "index.js",
    id: 1,
  },
  {
    icon: <DiSass className={styles.sass} />,
    fileName: "styles.scss",
    id: 2,
  },
];
