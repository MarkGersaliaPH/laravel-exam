import { useDrop } from "react-dnd";
import SimpleCard from "./SimpleCard";
import DangerButton from "./DangerButton";
import QuestionCard from "./QuestionCard";

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
                    <QuestionCard item={item} key={key} action={removeSelected} isDrag={false} /> 

                ))}
            </div>
        </div>
    );
}
