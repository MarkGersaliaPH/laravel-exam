import React from "react";

export default function SimpleCard({ children, ...props }) {
    return (
        <div
            {...props}
            className="p-2 border-gray-100 block border bg-white shadow-md rounded-md"
        >
            {children}
        </div>
    );
}
