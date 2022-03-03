import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDragabbleCard {
  todoId: number;
  todoText: string;
  index: number;
}

const DragabbleCard = ({ todoId, index, todoText }: IDragabbleCard) => {
  return (
    <Draggable draggableId={todoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);
