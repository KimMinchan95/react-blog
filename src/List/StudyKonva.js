import { Stage, Layer, Text, Image } from "react-konva";
import useImage from "use-image";

import Jake from "../assets/img/jake.png";

const StudyKonva = () => {
  const [image] = useImage(Jake);
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="let's practice Konva" fontSize={30} fontStyle={"bold"} />
        <Image draggable x={50} y={50} image={image} />
      </Layer>
    </Stage>
  );
};

export default StudyKonva;
