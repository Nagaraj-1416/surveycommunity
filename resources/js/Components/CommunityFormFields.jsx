import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import * as Yup from "yup";
import InputError from "./InputError";
import { useState } from "react";
import axios from "axios";

const CommunityFormFields = ({
    selectedCategory,
    pageSize,
    currentPage,
    pageCount,
    resetForm,
    options,
    handleCloseModal,
    handleResetCategory,
    item,
    getdataAfterAddOrView,
    editMode,
}) => {
    const { data, setData, post } = useForm({
        category_id: selectedCategory ? selectedCategory : "",
        id: item ? item?.id : "",
        title: item ? item?.title : "",
        location: item ? item?.location : "",
        mobile: item ? item?.mobile : "",
        description: item ? item?.description : "",
        pageSize: pageSize ? pageSize : "",
        currentPage: currentPage ? currentPage : "",
        pageCount: pageCount ? pageCount : "",
    });

    useEffect(() => {
        console.log(resetForm);
        if (resetForm === false) {
            setData((prevData) => ({
                ...prevData,
                category_id: selectedCategory,
                title: "",
                location: "",
                mobile: "",
                description: "",
            }));
        }
    }, [selectedCategory]);

    const [errors, setErrors] = useState({});

    const schema = Yup.object().shape({
        title: Yup.string()
            .max(50, "Title cannot exceed 70 characters")
            .required("Title is required"),
        location: Yup.string()
            .max(50, "Location cannot exceed 50 characters")
            .required("Location is required"),
        mobile: Yup.string()
            .matches(/^\d{10}$/, "Mobile number must be 10 digits")
            .required("Mobile number is required"),
        description: Yup.string()
            .min(5, "Description must be at least 5 characters")
            .max(250, "Description cannot exceed 250 characters")
            .required("Description is required"),
    });

    const handleFormSubmit = async () => {
        try {
            await schema.validate(data, { abortEarly: false });
            setErrors({}); // Clear previous errors on successful validation

            console.log("Form Data:", data);
            //post(route('communitypost.store')); // Assuming `route` is properly defined
            axios.post("/communitypost/store", data).then((res) => {
                console.log("************", res);
                getdataAfterAddOrView(res);
            });

            handleCloseModal(true);
            handleResetCategory("");
        } catch (validationErrors) {
            const formattedErrors = {};

            validationErrors.inner.forEach((error) => {
                formattedErrors[error.path] = error.message;
            });

            setErrors(formattedErrors);
        }
    };

    return (
        <div className="form-container">
            {editMode === false ? (
                <>
                    <div className="form-item">
                        <label>Category :</label>
                        <select
                            disabled
                            value={data.category_id || ""}
                            style={{
                                border: "none",
                                background: "none",
                                padding: 0,
                                margin: 0,
                                width: "auto",
                                fontSize: "inherit",
                                color: "inherit",
                                cursor: "pointer",
                            }}
                        >
                            {options.map((val) => (
                                <option key={val.value} value={val.value}>
                                    {val.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-item">
                        <label>Title :</label>
                        <div className="block">
                            <input
                                type="text"
                                value={data.title}
                                className="form-item-field"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        title: event.target.value,
                                    });
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        title: "",
                                    }));
                                }}
                            />
                            {errors.title && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.title}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Location :</label>
                        <div className="block">
                            <input
                                type="text"
                                value={data.location}
                                className="form-item-field"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        location: event.target.value,
                                    });
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        location: "",
                                    }));
                                }}
                            />
                            {errors.location && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.location}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Mob no :</label>
                        <div className="block">
                            <input
                                type="text"
                                value={data.mobile}
                                className="form-item-field"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        mobile: event.target.value,
                                    });
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        mobile: "",
                                    }));
                                }}
                            />
                            {errors.mobile && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.mobile}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Description :</label>
                        <div className="block">
                            <textarea
                                value={data.description}
                                className="form-item-field"
                                style={{ height: "120px" }}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        description: event.target.value,
                                    });
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        description: "",
                                    }));
                                }}
                            />
                            {errors.description && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.description}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item mt-10 flex justify-end">
                        <button
                            className="px-4 py-2 bg-transparent text-blue-500 rounded-md  border border-blue-500  hover:bg-blue-500 hover:text-white hover:border-transparent"
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="form-item mt-5">
                        <label>Category :</label>
                        <select
                            disabled
                            value={data.category_id || ""}
                            style={{
                                border: "none",
                                background: "none",
                                padding: 0,
                                margin: 0,
                                width: "auto",
                                fontSize: "inherit",
                                color: "inherit",
                                cursor: "pointer",
                            }}
                        >
                            {options.map((val) => (
                                <option key={val.value} value={val.value}>
                                    {val.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-item mt-5">
                        <label>Title :</label>
                        <div
                            className="block"
                            style={{ wordWrap: "break-word", width: "200px" }}
                        >
                            <p className="form-item-field mt-4 mb-4">
                                {data.title}
                            </p>
                            {errors.title && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.title}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item mt-5">
                        <label>Location :</label>
                        <div
                            className="block"
                            style={{ wordWrap: "break-word", width: "200px" }}
                        >
                            <p className="form-item-field mt-4 mb-4">
                                {data.location}
                            </p>
                            {errors.location && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.location}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item mt-5">
                        <label>Mob no :</label>
                        <div className="block">
                            <p className="form-item-field mt-4 mb-4">
                                {data.mobile}
                            </p>
                            {errors.mobile && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.mobile}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item mt-9">
                        <label>Description :</label>
                        <div className="block">
                            <p className="form-item-field mt-4 mb-4">
                                {data.description}
                            </p>
                            {errors.description && (
                                <InputError
                                    className="mt-2 flex-none"
                                    message={errors.description}
                                />
                            )}
                        </div>
                    </div>
                    <div className="form-item mt-10 flex justify-end">
                        {/*<button
                            className="px-4 py-2 bg-transparent text-blue-500 rounded-md  border border-blue-500  hover:bg-blue-500 hover:text-white hover:border-transparent"
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>*/}
                    </div>
                </>
            )}
        </div>
    );
};

export default CommunityFormFields;
