import React from "react";
import { useDrag } from "react-dnd";
import SimpleCard from "./SimpleCard";
import PrimaryButton from "./PrimaryButton";
import Badge from "./Badge";
import QuestionCard from "./QuestionCard";

export default function DragCard({ item, onAddToSelected }) {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: "div",
            item: item,
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1,
            }),
        }),
        []
    ); 
    return (
        <div ref={dragRef} className="relative mb-2 pr-2">
            <QuestionCard item={item}  action={onAddToSelected} isDrag={true} />
        </div>
    );
}
