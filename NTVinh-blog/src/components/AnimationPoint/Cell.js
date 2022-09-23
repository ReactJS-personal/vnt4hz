import styled from "@emotion/styled";
import { motion, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const CELL_SIZE = 40;

const Container = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  border: 1px dashed #555;
  color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Cell = ({ mouseX, mouseY }) => {
  const [position, setPosition] = useState([0, 0]);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // center x coordinate
    const x = rect.left + CELL_SIZE / 2;
    // center y coordinate
    const y = rect.top + CELL_SIZE / 2;
    setPosition([x, y]);
  }, [ref.current]);

  const direction = useTransform([mouseX, mouseY], ([newX, newY]) => {
    const diffY = newY - position[1];
    const diffX = newX - position[0];
    const angleRadians = Math.atan2(diffY, diffX);
    const angleDegrees = Math.floor(angleRadians * (180 / Math.PI));
    return angleDegrees;
  });
  return (
    <Container ref={ref}>
      <motion.div style={{ rotate: direction }}>vdz</motion.div>
    </Container>
  );
};
export default Cell;
