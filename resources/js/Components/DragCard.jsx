import React from "react";
import { useDrag } from "react-dnd";
import SimpleCard from "./SimpleCard";
import PrimaryButton from "./PrimaryButton";
import Badge from "./Badge";

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
            
            <SimpleCard style={{ opacity }}>
                <div className="mb-2">
                    <span className="font-semibold text-lg line-clamp-2 text-gray-800">
                        {item.text}
                    </span>
                    <Badge>
                    {item.difficulty_display}  
                    </Badge>
                    
                    <Badge color="green">
                    {item.langguage_display}  
                    </Badge>
                    <Badge color="red">
                    {item.type_display}

                    </Badge>
                </div>

                {/* <div className="text-sm text-gray-600">
                    <div>
                        <span className="font-medium">Difficulty:</span>{" "}
                    </div>
                    <div>
                        <span className="font-medium">Language:</span>{" "}
                        {item.langguage_display}
                    </div>
                    <div>
                        <span className="font-medium">Type:</span>{" "}
                        {item.type_display}
                    </div>
                </div>  */}

                <div>
                    <div
                        className="absolute top-2 px-2 cursor-pointer right-3 text-white bg-slate-800 rounded-full"
                        onClick={() => onAddToSelected(item)}
                    >
                        +
                    </div>
                </div>
            </SimpleCard>
        </div>
    );
}
