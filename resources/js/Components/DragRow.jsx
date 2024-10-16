import React from "react";
import { useDrag } from "react-dnd";
import SimpleCard from "./SimpleCard";
import PrimaryButton from "./PrimaryButton";

export default function DragRow({ item, onAddToSelected }) {
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
        <tr ref={dragRef} style={{ opacity }} 
        className="border-b hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-slate-700">
            <td className="px-6 py-3 align-middle bg-transparent  whitespace-nowrap shadow-transparent">
                {item.id}
            </td>
            <td className="px-6 py-3 align-middle bg-transparent  whitespace-nowrap shadow-transparent">
                <span className="font-semibold text-lg line-clamp-2 text-gray-800">
                    {item.text}
                </span>
            </td>

            <td className="px-6 py-3 align-middle bg-transparent  whitespace-nowrap shadow-transparent">{item.difficulty_display}</td>
            <td className="px-6 py-3 align-middle bg-transparent  whitespace-nowrap shadow-transparent">{item.langguage_display}</td>
            <td className="px-6 py-3 align-middle bg-transparent  whitespace-nowrap shadow-transparent">{item.type_display}</td>
            <td className="px-6 py-3 align-middle bg-transparent  whitespace-nowrap shadow-transparent">
                <button
                    className="absolute top-1 cursor-pointer right-1 px-3 py-1 text-white bg-green-500 rounded-full"
                    onClick={() => onAddToSelected(item)}
                >
                    +
                </button>
            </td>
        </tr>
    );
}
