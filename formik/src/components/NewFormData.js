import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};

function NewFormData() {
    const validationSchema = Yup.object({
        name: Yup.string().required("required"),
        email: Yup.string().email("invalid email formats").required("required"),
        channel: Yup.string().required("required"),
    });
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            className="flex h-screen justify-center items-center"
        >
            <Form className="flex flex-col gap-4 p-6 border-2 border-gray-900">
                <div>
                    <label htmlFor="name">Name</label>
                    <Field
                        className="border border-gray-700 rounded-md px-4 py-2"
                        type="text"
                        id="name"
                        name="name"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500">{formik.errors.name}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <Field
                        className="border border-gray-700 rounded-md px-4 py-2"
                        type="email"
                        id="email"
                        name="email"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500">
                            {formik.errors.email}
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="channel">Channel</label>
                    <Field
                        className="border border-gray-700 rounded-md px-4 py-2"
                        type="text"
                        id="channel"
                        name="channel"
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
            </Form>
        </Formik>
    );
}

export default NewFormData;
