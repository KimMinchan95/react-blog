import { Stage, Layer, Text, Image } from "react-konva";
import useImage from "use-image";

import Jake from "../assets/img/jake.png";

const windowWith = window.innerWidth;
const windowHeight = window.innerHeight;

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
  return (
    <Stage width={windowWith} height={windowHeight}>
      <Layer>
        <Text text="let's practice Konva" fontSize={30} fontStyle={"bold"} />
        <Image
          draggable
          x={50}
          y={50}
          image={image}
          width={jakeWidth}
          height={jakeHeight}
          dragBoundFunc={({ x, y }) => {
            return {
              x: calculatePosition(x, jakeWidth, windowWith),
              y: calculatePosition(y, jakeHeight, windowHeight),
            };
          }}
        />
      </Layer>
    </Stage>
  );
};

export default StudyKonva;
