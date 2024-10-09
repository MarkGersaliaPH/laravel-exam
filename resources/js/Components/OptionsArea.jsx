import React from "react";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import DangerButton from "./DangerButton";
import Checkbox from "./Checkbox";

export default function OptionsArea({ addOptionsRow, options, handleOptions, removeOptionRow }) {
    return (
        <div className="p-5 bg-gray-50 border border-gray-200 rounded-md  w-full">
            <div className="flex mt-4 items-center justify-between">
                <h5>Options:</h5>
                <PrimaryButton type="button" onClick={addOptionsRow}>
                    Add options
                </PrimaryButton>
            </div>
            <div className="w-full">
                {options.map((option, key) => (
                    <div className="flex mt-4  w-full items-center  ">
                        <div className="flex w-full items-center">
                            {`${option.label}.`}
                            <TextInput
                                placeholder="Text"
                                name="text"
                                className="mt-1 block w-full mx-3"
                                value={option.text}
                                onChange={(e) => handleOptions(e, key)}
                                required
                                isFocused
                                type="text"
                            />
                        </div>

                        <div className="flex items-center ">
                            <InputLabel htmlFor="is_correct" value="Correct" />
                            <input
                                type="checkbox"
                                name="is_correct"
                                className=" mx-3"
                                id="is_correct"  
                                checked={option.is_correct}
                                onChange={(e) => handleOptions(e, key)}
                            />
                        </div>
                        <DangerButton type="button" onClick={()=>removeOptionRow(key)}>
                            X
                        </DangerButton>
                    </div>
                ))}
            </div>
        </div>
    );
}
