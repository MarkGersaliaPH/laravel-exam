import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";
import TextArea from "./TextArea";
import Select from "./Select";

export default function DynamicForm({ inputs, handleChange, data, errors }) {
    const Inputs = (input) => {
        if (input.type === "text") {
            return (
                <TextInput
                    name={input.name}
                    id={input.name}
                    className="mt-1 block w-full"
                    value={data[input.name]}
                    onChange={(e)=>input.handleChange(e)}
                    required
                    isFocused
                    autoComplete={input.name}
                    type="text"
                />
            );
        }
        
        if (input.type === "select") {
            return (
                <Select
                    name={input.name}
                    id={input.name}
                    className="mt-1 block w-full"
                    value={data[input.name]}
                    onChange={(e)=>input.handleChange(e)}
                    required
                    isFocused
                    autoComplete={input.name}
                    type="text"
                    options={input.options}
                />
            );
        }

        if (input.type === "textarea") {
            return (
                <TextArea
                    name={input.name}
                    id={input.name}
                    className="mt-1 block w-full"
                    value={data[input.name]}
                    onChange={(e)=>input.handleChange(e)}
                    required
                    isFocused
                    autoComplete={input.name}
                    type="text"
                />
            );
        }

        
        // Add more conditions if there are other input types (e.g., "number", "email", etc.)
        return null; // Return null if the type doesn't match.
    };


    return (
        <div>
            {inputs.map((input, key) => (
                <div key={key} className="mt-4">
                    <InputLabel htmlFor={input.name} value={input.label} />
                    {Inputs(input)}
                    <InputError className="mt-2" message={errors[input.name]} />
                </div>
            ))}
        </div>
    );
}
