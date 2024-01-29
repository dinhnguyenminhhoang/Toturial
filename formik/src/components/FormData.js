import { useFormik } from "formik";
import React from "react";

function FormData() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: "",
        },
        onSubmit: (values) => handleSubmit(values),
    });
    const handleSubmit = (values) => {
        console.log("values", values);
    };
    return (
        <div className="flex h-screen justify-center items-center ">
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-4 p-6 border-2 border-gray-900"
            >
                <label htmlFor="name">Name</label>
                <input
                    className="border border-gray-700 rounded-md px-4 py-2"
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <label htmlFor="email">Email</label>
                <input
                    className="border border-gray-700 rounded-md px-4 py-2"
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="channel">channel</label>
                <input
                    className="border border-gray-700 rounded-md px-4 py-2"
                    type="text"
                    id="channel"
                    name="channel"
                    onChange={formik.handleChange}
                    value={formik.values.channel}
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
