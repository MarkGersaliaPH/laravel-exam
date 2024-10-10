import React from "react";
import { useDrag } from "react-dnd";
import SimpleCard from "./SimpleCard";

export default function DragCard({ item }) {
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
        <span ref={dragRef}>
            <SimpleCard style={{ opacity }}>
                <div className="mb-2">
                    <span className="font-semibold text-lg line-clamp-2 text-gray-800">
                        {item.text}
                    </span>
                </div>

                <div className="text-sm text-gray-600">
                    <div>
                        <span className="font-medium">Difficulty:</span>{" "}
                        {item.difficulty_display}
                    </div>
                    <div>
                        <span className="font-medium">Language:</span>{" "}
                        {item.langguage_display}
                    </div>
                </div>
            </SimpleCard>
        </span>
    );
}
