import Badge from "@/Components/Badge";
import DangerBadge from "@/Components/Badge";
import DragCard from "@/Components/DragCard";
import DragRow from "@/Components/DragRow";
import DropArea from "@/Components/DropArea";
import DynamicForm from "@/Components/DynamicForm";
import SimpleTable from "@/Components/SimpleTable";
import Table from "@/Components/Table";
import React from "react";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function QuestionPicker({
    questionList,
    addAndRemoveSelected,
    selectedQuestions,
    handleDrop,
    removeSelected,
    filterData,
    onChangeFilter,
    filterInputs
}) {
      
    return (
        <div className="">
            <div className="p-5 border-gray-100 border bg-gray-50 rounded mb-5">
                <h2>Filter Questions</h2>
                <DynamicForm inputs={filterInputs} data={filterData} errors={[]}  />
            </div>
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
