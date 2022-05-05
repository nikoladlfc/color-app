import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((clr, i) => (
        <DraggableColorBox
          color={clr.color}
          name={clr.name}
          key={clr.name}
          index={i}
          handleClick={() => removeColor(clr.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
