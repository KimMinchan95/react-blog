import { Stage, Layer, Text, Image, Group } from "react-konva";
import useImage from "use-image";

import Jake from "../assets/img/jake.png";
import { useEffect, useState } from "react";

// jake size
const jakeWidth = 200;
const jakeHeight = 200;

const calculatePosition = (position, imageSize, positionSize) => {
  const maxPosition = positionSize - imageSize;
  if (position < 0) {
    return 0;
  }
  if (position > maxPosition) {
    return maxPosition;
  }
  return position;
};

const StudyKonva = () => {
  const [image] = useImage(Jake);
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  const { windowWidth, windowHeight } = windowSize;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        <Text text="let's practice Konva" fontSize={30} fontStyle={"bold"} />
        <Group
          draggable
          dragBoundFunc={({ x, y }) => {
            console.log({
              x: calculatePosition(x, jakeWidth, windowWidth),
              y: calculatePosition(y, jakeHeight, windowHeight),
            });
            return {
              x: calculatePosition(x, jakeWidth + 100, windowWidth),
              y: calculatePosition(y, jakeHeight + 30, windowHeight),
            };
          }}
        >
          <Text text="This is Jake" fontSize={15} x={100} y={30} />
          <Image
            x={50}
            y={50}
            image={image}
            width={jakeWidth}
            height={jakeHeight}
          />
        </Group>
      </Layer>
    </Stage>
  );
};

export default StudyKonva;
