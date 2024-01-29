import React from "react";

function FormData({}) {
    return (
        <div className="flex h-screen justify-center items-center ">
            <form className="flex flex-col gap-4 p-6 border-2 border-gray-900">
                <label htmlFor="name">Name</label>
                <input
                    className="border border-gray-700 rounded-md px-4 py-2"
                    type="text"
                    id="name"
                    name="name"
                />

                <label htmlFor="email">Email</label>
                <input
                    className="border border-gray-700 rounded-md px-4 py-2"
                    type="email"
                    id="email"
                    name="email"
                />

                <label htmlFor="channel">Name</label>
                <input
                    className="border border-gray-700 rounded-md px-4 py-2"
                    type="text"
                    id="channel"
                    name="channel"
                />
                <button
                    type="submit"
                    className="border-2 px-2 py-4 hover:bg-slate-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormData;
