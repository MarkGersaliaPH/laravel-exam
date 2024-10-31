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
import axios from "axios";

function Form({ auth, item, difficulty_options }) {
    console.log(item);
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

        data.questions = selectedQuestions;
        

        if(selectedTags.length){
            data.tags = selectedTags;
        }
  
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

    let [questionOptions, setQuestionOptions] = useState([]);

    const [filterData, setFilterData] = useState({});
    const [tagOptions, setTagOptions] = useState([]);
    const [selectedTags, setSelectedTags] = useState(data.display_tags || []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData(name, value);

        
        // if (e.target.name == "difficulty") {
        //     setFilterData((prevData) => ({
        //         ...prevData,
        //         [e.target.name]: e.target.value,
        //     }));
        // }
    };

    const handeChangeTag = (tag_options) => {
        setSelectedTags(tag_options);
        let updatedData = { ...filterData };
        updatedData["tags"] = tag_options;
        setFilterData(updatedData);
    };

    const inputs = [
        {
            type: "select2",
            name: "tags",
            label: "Tags",
            options: tagOptions,
            value: selectedTags,
            handleChange: handeChangeTag,
        },
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

    let [questionList, setQuestionList] = useState([]);

    const [selectedQuestions, setSelectedQuestions] = useState(
        item.questions || []
    ); // Initialize with an empty array

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

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const { data } = await axios.get(route("api.get-questions"), {
                    params: filterData,
                });

                //This logic will exclude the data of questions list to the selected questions
                if(selectedQuestions){
                    setQuestionList(
                         data.filter(
                            (prev) => !selectedQuestions.some((selected) => selected.id === prev.id)
                        )
                    );
                }else{
                    setQuestionList(data);

                }
            } catch (error) {
                console.error(error);
            }
        };

        const fetchTagOptions = async () => {
            try {
                const { data } = await axios.get(route("api.get-tags"));
                setTagOptions(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuestions();
        fetchTagOptions();
        // Make a request for a user with a given ID
        // getQuestions()
    }, [filterData]);
  

    const onChangeFilter = (e) => {
        let updatedData = { ...filterData };
        updatedData[e.target.name] = e.target.value;
        setFilterData(updatedData);
    };

    const filterInputs = [
        {
            type: "text",
            name: "text",
            label: "Name",
            handleChange: onChangeFilter,
        },
    ]; 
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
                        <div>
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
                                                filterData={filterData}
                                                onChangeFilter={onChangeFilter}
                                                filterInputs={filterInputs}
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
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}

export default Form;
