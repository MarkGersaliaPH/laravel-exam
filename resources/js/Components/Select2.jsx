import React from "react";
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

export default function Select2({creatable=false,...props}) {
    if(creatable){
        return <CreatableSelect  classNames={{
            control: (state) =>
              state.isFocused ? 'border-red-600' : 'border-grey-300',
          }}
          isMulti options={options} />
    }
    return <Select {...props}  options={options} />;
}
