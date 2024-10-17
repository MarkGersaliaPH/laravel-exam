import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

export default function Select2({ creatable = false,options, ...props }) {
    if (creatable) {
        return (
            <CreatableSelect
                classNames={{
                    control: (state) =>
                        state.isFocused ? "border-red-600" : "border-grey-300",
                }}
                styles={{ border: "asdasdnone" }}
                isMulti
                options={options} 
                {...props}
            />
        );
    }
    return <Select {...props} options={options} />;
}
