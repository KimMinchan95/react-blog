import { Stage, Layer, Text } from "react-konva";

const StudyKonva = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="let's practice Konva" fontSize={30} fontStyle={"bold"} />
      </Layer>
    </Stage>
  );
};

export default StudyKonva;
