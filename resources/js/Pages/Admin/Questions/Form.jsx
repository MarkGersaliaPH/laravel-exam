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
import OptionsArea from "@/Components/OptionsArea";
import { dificuty_options } from "@/Components/data_list";

function Form({ auth, item }) {
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

    const baseUrl = "admin.questions";

    const submit = (e) => {
        e.preventDefault();
        const correct_answer = options.find(option => option.is_correct == true);
        
        data.correct_answer = `${correct_answer.label}). ${correct_answer.text}`


        data.options = JSON.stringify(options);
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
        setData(e.target.name, e.target.value);
    };

    const inputs = [
        {
            type: "text",
            name: "text",
            label: "Text",
            handleChange: handleChange,
        }, 
        {
            type: "select",
            name: "difficulty",
            label: "Difficulty",
            handleChange: handleChange,
            options:dificuty_options
        }, 
    ];

    const handleOptions = (e, key) => {
        //Remove all the check
        if (e.target.type == "checkbox") {
            setOptions((prevOptions) => {
                const updatedOptions = prevOptions.map((option, index) => ({
                    ...option,
                    is_correct: false,
                }));
                return updatedOptions;
            });
        }
        setOptions((prevOptions) => {
            // Create a copy of the previous options array
            const updatedOptions = [...prevOptions];

            // Check if the input type is radio or something else (like text or checkbox)
            const valueToUpdate =
                e.target.type === "text" ? e.target.value : e.target.checked;

            // Update the specific option at the 'key' index
            updatedOptions[key] = {
                ...updatedOptions[key], // Spread the existing properties of that option
                [e.target.name]: valueToUpdate, // Update the 'text' property with the new value
            };

            return updatedOptions; // Return the updated array
        });
    };

    let [options, setOptions] = useState([
        { label: "A", text: "", is_correct: "" },
    ]);

    useEffect(() => {
        setOptions(
            data.id
                ? JSON.parse(data.options)
                : [
                    { label: "A", text: "", is_correct: "" },
                    { label: "B", text: "", is_correct: "" },
                    { label: "C", text: "", is_correct: "" },
                    { label: "D", text: "", is_correct: "" },
                ]
        );
    }, []);

    const addOptionsRow = () => {
        // if(options.length < 4){
        setOptions((options) => [
            ...options,
            { label: getLabel(options.length), text: "", is_correct: "" },
        ]);
        // }
    };

    const removeOptionRow = (key) => {
        let newOptions = options.filter((__, index) => index != key);
        setOptions(newOptions);
    };

    const labelArr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    const getLabel = (length) => {
        return labelArr[length];
    };

    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Questions
                    </h2>
                }
            > 
                <Head title="Questions Form" />

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
                                            <div>
                                                <p>Correct Answer: <br></br>
                                                <span className="font-extrabold text-green-500">{data.correct_answer}</span></p>
                                            </div>
                                            <OptionsArea
                                                addOptionsRow={addOptionsRow}
                                                options={options}
                                                handleOptions={handleOptions}
                                                removeOptionRow={
                                                    removeOptionRow
                                                }
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
