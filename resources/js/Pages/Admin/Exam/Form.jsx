import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import Card, { CardBody, CardFooter } from "@/Components/Card";
import DynamicForm from "@/Components/DynamicForm";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragCard from "@/Components/DragCard";
import DropArea from "@/Components/DropArea";
import QuestionPicker from "./QuestionPicker";
import Modal from "@/Components/Modal";
import Modal2 from "@/Components/Modal2";

function Form({ auth, item, difficulty_options, question_options }) {
    const {
        data,
        setData,
        errors,
        put,
        reset,
        post,
        processing,
        recentlySuccessful,
    } = useForm(item || {});

    const baseUrl = "admin.exams";

    const submit = (e) => {
        e.preventDefault();

        if (data.id) {
            put(route(`${baseUrl}.update`, data.id), {
                preserveScroll: true,
                onSuccess: () => reset(),
            });
        } else {
            post(route(`${baseUrl}.store`), {
                preserveScroll: true,
                onSuccess: () => reset(),
            });
        }
    };

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData(name, value);
        if (e.target.name == "difficulty") {
            filterQuestions({ [name]: value });
        }
    };

    const inputs = [
        {
            type: "select",
            name: "difficulty",
            label: "Difficulty",
            handleChange: handleChange,
            options: difficulty_options,
        },
        {
            type: "text",
            name: "name",
            label: "Name",
            handleChange: handleChange,
        },
        {
            type: "number",
            name: "time_limit",
            label: "Time Limit (Minutes)",
            handleChange: handleChange,
        },
        {
            type: "textarea",
            name: "description",
            label: "Description",
            handleChange: handleChange,
        },
    ];

    let [questionList, setQuestionList] = useState(
        question_options || [
            { id: 1, text: "Laravel 1" },
            { id: 2, text: "Laravel 2" },
            { id: 3, text: "Laravel 3" },
            { id: 4, text: "Laravel 4" },
        ]
    );

    const [selectedQuestions, setSelectedQuestions] = useState([]); // Initialize with an empty array

    const handleDrop = (item) => {
        // questionList.filter((question)=>question.id != item)
        addAndRemoveSelected(item);
    };

    const addAndRemoveSelected = (item) => {
        setQuestionList((prev) => {
            return prev.filter((question) => question.id != item.id);
        });

        setSelectedQuestions((prevQuestions) => [...prevQuestions, item]);
    };

    const removeSelected = (item) => {
        setSelectedQuestions((prev) => {
            return prev.filter((question) => question.id != item.id);
        });

        setQuestionList((prevQuestions) => [...prevQuestions, item]);
    };

    const filterQuestions = (filter) => {
        console.log(data.difficulty);
        console.log(filter);
    };

    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Exam
                    </h2>
                }
            >
                <Head title="Exam Form" />

                <div className="py-5">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div
                            className={`grid grid-cols-1 ${
                                data.id && "md:grid-cols-3"
                            } gap-4`}
                        >
                            <div className="col-span-1 md:col-span-2">
                                <Card className="mb-5">
                                    <CardBody>
                                        <form
                                            onSubmit={submit}
                                            className="mt-6 space-y-6"
                                        >
                                            <DynamicForm
                                                inputs={inputs}
                                                data={data}
                                                handleChange={handleChange}
                                                errors={errors}
                                            />
                                            <QuestionPicker
                                                questionList={questionList}
                                                addAndRemoveSelected={
                                                    addAndRemoveSelected
                                                }
                                                selectedQuestions={
                                                    selectedQuestions
                                                }
                                                handleDrop={handleDrop}
                                                removeSelected={removeSelected}
                                            />
                                        </form>
                                    </CardBody>
                                    <CardFooter>
                                        <PrimaryButton
                                            className="mr-2"
                                            onClick={submit}
                                        >
                                            Submit
                                        </PrimaryButton>
                                        <SecondaryButton
                                            onClick={() =>
                                                router.visit(
                                                    route(`${baseUrl}.index`)
                                                )
                                            }
                                        >
                                            Cancel
                                        </SecondaryButton>
                                    </CardFooter>
                                </Card>
                            </div>

                            {data.id && (
                                <div className="col-span-1 md:col-span-1">
                                    <Card>
                                        <CardBody>
                                            <table className="w-full">
                                                <tr>
                                                    <th className="p-2 text-left">
                                                        Created at
                                                    </th>
                                                    <td className="p-2">
                                                        {data.created_at}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="p-2 text-left">
                                                        Last Updated{" "}
                                                    </th>
                                                    <td className="p-2">
                                                        {data.updated_at}
                                                    </td>
                                                </tr>
                                            </table>
                                        </CardBody>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}

export default Form;
