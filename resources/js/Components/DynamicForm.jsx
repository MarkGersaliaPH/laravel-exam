import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";
import TextArea from "./TextArea";
import Select from "./Select";
import Select2 from "./Select2";

export default function DynamicForm({ inputs, handleChange, data, errors }) {
    const Inputs = (input) => {
      
        
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
        if (input.type === "select2") {
            return (
                <Select2
                    name={input.name}
                    id={input.name}
                    className="mt-1 block w-full"
                    value={data[input.name]}
                    // onChange={(e)=>input.handleChange(e)}
                    required
                    isFocused
                    autoComplete={input.name}
                    type="text"
                    options={input.options}
                    isMulti={true}
                    creatable={true}
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
 
            return (
                <TextInput
                type={input.type}
                    name={input.name}
                    id={input.name}
                    className="mt-1 block w-full"
                    value={data[input.name]}
                    onChange={(e)=>input.handleChange(e)}
                    required
                    isFocused
                    autoComplete={input.name}
                />
            )
            ; 
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
