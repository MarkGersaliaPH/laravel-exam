import React from "react";
import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import { router } from "@inertiajs/react";
import SecondaryButton from "./SecondaryButton";
// import Swal from "sweetalert2";

function SimpleTable({ children,headers, body, actions, additional_action, fromNumber = 1 }) {
    const handleDelete = (id) => {
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!",
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         router.delete(route(actions.destroy, id), {
        //             onSuccess: (page) => {
        //                 Swal.fire(
        //                     "Good job!",
        //                     "Data has been deleted!",
        //                     "success"
        //                 );
        //             },
        //         });
        //     }
        // });

        confirm("You won't be able to revert this!");
        if (confirm) {
            router.delete(route(actions.destroy, id));
        }
    };
    return (
        <div className="w-full overflow-y-auto">
            <table className="items-center justify-center w-full mb-0 align-top border-collapse dark:bg-slate-800 dark:border-white/40 text-slate-500">
                <thead className="align-bottom dark:border-slate-700">
                    <tr className="bg-gray-100 dark:bg-slate-800   dark:border-slate-700 ">
                        <th className="w-10"></th>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 font-bold text-left     align-middle bg-transparent   shadow-none  dark:text-slate-500   tracking-none whitespace-nowrap text-slate-400 "
                            >
                                {header}
                            </th>
                        ))} 
                        <th></th>
                    </tr>
                </thead>
                <tbody className="border-t">
                    
                    {children}
                        
                </tbody>
            </table>
        </div>
    );
}

export default SimpleTable;
