import { useFormik } from "formik";
import React from "react";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};

function FormData() {
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Required";
        }
        if (!values.email) {
            errors.email = "Required";
        }
        if (!values.channel) {
            errors.channel = "Required";
        }
        return errors;
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validate,
    });
    return (
        <div className="flex h-screen justify-center items-center">
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-4 p-6 border-2 border-gray-900"
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        className="border border-gray-700 rounded-md px-4 py-2"
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500">{formik.errors.name}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="border border-gray-700 rounded-md px-4 py-2"
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500">
                            {formik.errors.email}
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="channel">Channel</label>
                    <input
                        className="border border-gray-700 rounded-md px-4 py-2"
                        type="text"
                        id="channel"
                        name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel && (
                        <div className="text-red-500">
                            {formik.errors.channel}
                        </div>
                    )}
                </div>

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
