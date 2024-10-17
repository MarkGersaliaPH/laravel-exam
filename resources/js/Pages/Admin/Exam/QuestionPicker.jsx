import Badge from "@/Components/Badge";
import DangerBadge from "@/Components/Badge";
import DragCard from "@/Components/DragCard";
import DragRow from "@/Components/DragRow";
import DropArea from "@/Components/DropArea";
import SimpleTable from "@/Components/SimpleTable";
import Table from "@/Components/Table";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function QuestionPicker({
    questionList,
    addAndRemoveSelected,
    selectedQuestions,
    handleDrop,
    removeSelected,
}) {
    const tableHeader = ["Name", "Difficulty", "Langguage", "Type", ""];
    const tableBody = questionList.map((data) => ({
        id: data.id, // the user's ID
        data: [
            data.text,
            <DragCard
                onAddToSelected={addAndRemoveSelected}
                key={data.id}
                item={data}
            />,
        ],
    }));

    return (
        <div className="">
            <DndProvider backend={HTML5Backend}>
                <div className="flex gap-5">
                    <div className="w-1/2  ">
                        <span className="mb-5">
                            Available Questions ({questionList.length}):
                        </span>

                        <div className="h-[400px] overflow-auto">
                            {questionList.map((item) => (
                                <DragCard
                                    onAddToSelected={addAndRemoveSelected}
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2  h-[400px] overflow-auto ">
                        <DropArea
                            data={selectedQuestions}
                            handleDrop={handleDrop}
                            removeSelected={removeSelected}
                        />
                    </div>
                </div>
            </DndProvider>
        </div>
    );
}
