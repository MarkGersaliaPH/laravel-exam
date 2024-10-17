import { useDrop } from "react-dnd";
import SimpleCard from "./SimpleCard";
import DangerButton from "./DangerButton";

export default function DropArea({ handleDrop, data, removeSelected }) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className="w-full bg-gray-100 p-3 rounded-lg border border-gray-300"
        >
            <span className="mb-5">Selected Questions ({data.length}):</span>
            <div>
                {data.map((item, key) => (
                    <div className="relative mb-2">
                    <SimpleCard className="mb-2">
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
                        <div>
                            <div 
                                className="absolute top-1 cursor-pointer right-1 px-3 py-1 text-white bg-red-500 rounded-full"
                                onClick={() => removeSelected(item)}
                            >
                                x
                            </div>
                        </div>
                    </SimpleCard>
                    </div>
                ))}
            </div>
        </div>
    );
}
