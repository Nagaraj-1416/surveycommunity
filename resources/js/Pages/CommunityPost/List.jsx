import CustomizedDialogBox from "@/CustomComponents/CustomizedDialogBox";
import CustomizedHtmlSelect from "@/CustomComponents/CustomizedHtmlSelect";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState, useCallback } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { BiMessageError } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import Loader from "@/Components/Loader";
import { IoArrowUp } from "react-icons/io5";
import ReactPaginate from "react-paginate";
const List = ({
    auth,
    communityPostCategoryOptions,
    communityPosts,
    selectedCategory,
    viewState,
}) => {
    const { data, setData, post } = useForm({
        selectedCategory: selectedCategory ? selectedCategory : "",
        communityPost: communityPosts ? communityPosts : [],
        pageSize: 5,
        currentPage: 0,
        searchQuery: "",
        pageCount: 0,
    });
    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [categoryChangeState, setCategoryChangeState] = useState(false);
    const [viewmode, setViewmode] = useState(false);
    const [resetForm, setResetForm] = useState(false);
    const [viewItem, setViewItem] = useState({});
    const [categorySelected, setCategorySelected] = useState("");

    const scrollToElement = () => {
        const element = document.getElementById("targetElementId");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        setViewmode(viewState);
    }, [viewState]);

    useEffect(() => {
        if (data?.selectedCategory !== "" && viewmode == true) {
            axios
                .post("/", data)
                .then((res) => {
                    console.log(res.data.selectedCategory);
                    setLoading(true);
                    setData((prevState) => ({
                        ...prevState,
                        communityPost: res.data.communityPosts,
                        pageCount: res.data.last_page,
                        selectedCategory: res.data.selectedCategory,
                    }));
                    setCategorySelected(res.data.selectedCategory);
                    setCategoryChangeState(true);
                })
                .catch((error) => {
                    // Handle any errors that occurred during the request
                    console.error("Error:", error);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false); // After 5 seconds, hide the loader
                        setViewmode(false);
                    }, 1000); // Hide the loader when request completes
                });
        }
    }, [data.selectedCategory]);
    useEffect(() => {
        //if (data?.selectedCategory !== "" && viewmode == true) {
        axios
            .post("/", data)
            .then((res) => {
                setData((prevState) => ({
                    ...prevState,
                    communityPost: res.data.communityPosts,
                    pageCount: res.data.last_page,
                }));
                setCategorySelected(res.data.selectedCategory);
                setCategoryChangeState(false);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error("Error:", error);
            });
    }, [data.currentPage]);

    const handlePageChange = (currentPage) => {
        console.log(currentPage.selected);
        setData((prevState) => ({
            ...prevState,
            currentPage: currentPage.selected + 1,
            selectedCategory: categorySelected,
        }));
        scrollToElement();
    };
    const handleCategoryChange = useCallback(
        (selectedValue) => {
            console.log(selectedValue);
            setLoading(true);
            setViewmode(true);
            setViewItem({});
            setEditMode(false);

            setTimeout(() => {
                setLoading(false); // After 5 seconds, hide the loader
            }, 2000);
            //setData("selectedCategory", selectedValue);
            setData((prevData) => ({
                ...prevData,
                selectedCategory: selectedValue,
                pageSize: 5,
                currentPage: 0,
                searchQuery: "",
                pageCount: 0,
            }));
        },
        [data?.selectedCategory]
    );
    const addNewPost = () => {
        //console.log();
        setLoading(true);
        setViewmode(true);
        setViewItem({});
        setEditMode(false);

        setTimeout(() => {
            setLoading(false); // After 5 seconds, hide the loader
        }, 2000);
        //setData("selectedCategory", selectedValue);
        setData((prevData) => ({
            ...prevData,
            selectedCategory: categorySelected,
            pageSize: 5,
            currentPage: 0,
            searchQuery: "",
            pageCount: 0,
        }));
    };

    const handleResetCategory = () => {
        setData("selectedCategory", "");
        setCategoryChangeState(false);
    };

    const showPost = (post) => {
        setData("selectedCategory", post.category_id);
        setViewItem(post);
        setCategoryChangeState(true);
        setResetForm(true);
        setEditMode(true);
    };

    const getDataOnAddOrView = (data) => {
        console.log(data);
        setData((prevState) => ({
            ...prevState,
            communityPost: data.data.communityPosts,
        }));
    };
    const setResetFormToDefault = () => {
        setResetForm(false);
        setViewItem({});
    };
    const handleCloseModal = () => {
        setViewItem({});
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Community Post" />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {data?.selectedCategory !== "" && categoryChangeState && (
                        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
                            <div className="absolute inset-0 bg-black opacity-50 z-40"></div>
                            <div className="p-4 z-50">
                                {" "}
                                {/* Dialog Box */}
                                <CustomizedDialogBox
                                    selectedCategory={data?.selectedCategory}
                                    handleResetCategory={handleResetCategory}
                                    options={communityPostCategoryOptions}
                                    item={viewItem}
                                    resetForm={resetForm}
                                    handleCloseModal={handleCloseModal}
                                    setResetFormToDefault={
                                        setResetFormToDefault
                                    }
                                    getdataAfterAddOrView={getDataOnAddOrView}
                                    editMode={editMode}
                                />
                            </div>
                        </div>
                    )}
                    <div
                        style={{
                            maxHeight: "calc(100vh - 80px)",
                            overflowY: "auto",
                            alignContent: "center",
                        }}
                    >
                        <div
                            className="grid grid-cols-1 md:grid-cols-3"
                            id="targetElementId"
                        >
                            <div className="p-4"></div>
                            <div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="uploads/logo1.png"
                                        alt="Image 1"
                                    />
                                </div>
                                <CustomizedHtmlSelect
                                    options={communityPostCategoryOptions}
                                    placeHolder="Select Category"
                                    onChange={handleCategoryChange}
                                    selectedCategory={data?.selectedCategory}
                                />
                                {data?.communityPost?.length > 0 && (
                                    <div className="flex justify-center gap-36 md:gap-24 mt-8">
                                        <a href="/">
                                            <button
                                                className="px-4 py-4 text-white rounded-md"
                                                style={{
                                                    backgroundColor:
                                                        "rgb(1, 41, 112)",
                                                }}
                                            >
                                                Back to Home
                                            </button>
                                        </a>

                                        <button
                                            className="px-4 py-4 text-white rounded-md"
                                            style={{
                                                backgroundColor:
                                                    "rgb(1, 41, 112)",
                                            }}
                                            onClick={() => addNewPost(data)}
                                        >
                                            Add New Post
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="p-4"></div>
                        </div>

                        {data?.communityPost?.length <= 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-4 mt-16 gap-4">
                                <div
                                    className="p-4 cursor-pointer"
                                    style={{
                                        display: "block",
                                        marginRight: "10%",
                                        marginLeft: "10%",
                                    }}
                                    onClick={() => handleCategoryChange("2")}
                                >
                                    <img
                                        src="uploads/homeicon3.png"
                                        alt="Image 1"
                                        className="w-full h-60"
                                    />
                                    <button
                                        className="w-full rounded-2xl text-white px-4 py-2 hoverEffect font-bold text-xl"
                                        style={{
                                            backgroundColor: "rgb(1, 41, 112)",
                                        }}
                                        onClick={() =>
                                            handleCategoryChange("2")
                                        }
                                    >
                                        Assistant Surveyor
                                    </button>
                                </div>
                                <div
                                    className="p-4 cursor-pointer"
                                    style={{
                                        display: "block",
                                        marginRight: "10%",
                                        marginLeft: "10%",
                                    }}
                                    onClick={() => handleCategoryChange("3")}
                                >
                                    <img
                                        src="uploads/homeicon2.png"
                                        alt="Image 1"
                                        className="w-full h-60"
                                    />
                                    <button
                                        className="w-full rounded-2xl text-white px-4 py-2 hoverEffect font-bold text-xl"
                                        style={{
                                            backgroundColor: "rgb(1, 41, 112)",
                                        }}
                                        onClick={() =>
                                            handleCategoryChange("3")
                                        }
                                    >
                                        Property Survey
                                    </button>
                                </div>
                                <div
                                    className="p-4 cursor-pointer"
                                    style={{
                                        display: "block",
                                        marginRight: "10%",
                                        marginLeft: "10%",
                                    }}
                                    onClick={() => handleCategoryChange("4")}
                                >
                                    <img
                                        src="uploads/homeicon5.png"
                                        alt="Image 1"
                                        className="w-full h-60"
                                    />
                                    <button
                                        className="w-full rounded-2xl  text-white px-4 py-2 hoverEffect font-bold text-xl"
                                        style={{
                                            backgroundColor: "rgb(1, 41, 112)",
                                        }}
                                        onClick={() =>
                                            handleCategoryChange("4")
                                        }
                                    >
                                        Machine Rent
                                    </button>
                                </div>
                                <div
                                    className="p-4 cursor-pointer"
                                    style={{
                                        display: "block",
                                        marginRight: "10%",
                                        marginLeft: "10%",
                                    }}
                                    onClick={() => handleCategoryChange("1")}
                                >
                                    <img
                                        src="uploads/homeicon4.png"
                                        alt="Image 1"
                                        className="w-full h-60"
                                    />
                                    <button
                                        className="w-full rounded-2xl text-white px-4 py-2 hoverEffect font-bold text-xl"
                                        style={{
                                            backgroundColor: "rgb(1, 41, 112)",
                                        }}
                                        onClick={() =>
                                            handleCategoryChange("1")
                                        }
                                    >
                                        Total Station Operator
                                    </button>
                                </div>
                            </div>
                        )}
                        {data?.communityPost?.length > 0 && (
                            <div className="fixed bottom-10 right-10 z-50">
                                <div
                                    className="rounded-full p-2"
                                    style={{
                                        backgroundColor: "#F6F6FE",
                                        border: "2px solid #012970",
                                    }}
                                >
                                    <IoArrowUp
                                        className="text-4xl cursor-pointer"
                                        style={{ color: "#012970" }}
                                        title="Scroll to Top"
                                        onClick={scrollToElement}
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            {data?.communityPost.map((post) => (
                                <div className="card-list" key={post.id}>
                                    <h1
                                        className="text-2xl font-semibold font-nunito"
                                        style={{ color: "#012970" }}
                                    >
                                        {post.title}
                                    </h1>
                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-5 lg:flex md:block">
                                        <div className="w-56 h-56 mt-5 lg:ml-6 lg:flex">
                                            <div className="flex-none">
                                                {post.category_id == "1" && (
                                                    <img
                                                        src="uploads/homeicon4.png"
                                                        alt="Image 1"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                                {post.category_id == "2" && (
                                                    <img
                                                        src="uploads/homeicon3.png"
                                                        alt="Image 2"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                                {post.category_id == "3" && (
                                                    <img
                                                        src="uploads/homeicon2.png"
                                                        alt="Image 3"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                                {post.category_id == "4" && (
                                                    <img
                                                        src="uploads/homeicon5.png"
                                                        alt="Image 4"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                            </div>
                                            <div className="block w-full">
                                                <div className="flex lg:ml-7 mt-1">
                                                    <FaRegUserCircle
                                                        className="card-list-default-userProfile w-10 h-10"
                                                        style={{
                                                            color: "#012970",
                                                        }}
                                                    />
                                                    <h1 className="ml-2 text-xl">
                                                        User
                                                    </h1>
                                                </div>
                                                <div className="flex lg:ml-7 mt-7">
                                                    <div className="w-10 h-10 flex-none">
                                                        <TfiLocationPin
                                                            className="w-full h-full"
                                                            style={{
                                                                color: "#012970",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex">
                                                        <p className="ml-2 text-xl w-full">
                                                            {post.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                width:
                                                    window.innerWidth > 768
                                                        ? "1000px"
                                                        : "",
                                                marginLeft:
                                                    window.innerWidth > 768
                                                        ? "250px"
                                                        : "",
                                                marginTop:
                                                    window.innerWidth > 768
                                                        ? "20px"
                                                        : "160px",
                                            }}
                                            className="flex"
                                        >
                                            <div className="w-10 h-10 flex-none">
                                                <BiMessageError
                                                    className="w-full h-full"
                                                    style={{ color: "#012970" }}
                                                />
                                            </div>
                                            <div
                                                style={{ flex: 1 }}
                                                className="ml-3"
                                            >
                                                {post.description}
                                            </div>
                                        </div>
                                        <div
                                            className="lg:ml-auto md:mt-5"
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <button
                                                onClick={() => showPost(post)}
                                                className="w-40 h-30 text-black text-xl p-2 rounded-md border shadow-xl border-gray-300 transition-colors hover:bg-blue-500 hover:text-white"
                                            >
                                                View
                                            </button>
                                            <button className="w-40 h-30 mt-4 text-black text-xl p-2 rounded-md border shadow-xl border-gray-300 transition-colors hover:bg-green-500 hover:text-white">
                                                <a
                                                    href={`tel:+91 ${post?.mobile}`}
                                                >
                                                    Call
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {data?.communityPost?.length > 0 && (
                            <div className="pagination-container flex justify-center">
                                <ReactPaginate
                                    previousLabel={
                                        <span className="inline-flex items-center justify-center w-8 h-8 m-1 border border-gray-500 rounded-full cursor-pointer">
                                            {"<"}
                                        </span>
                                    }
                                    nextLabel={
                                        <span className="inline-flex items-center justify-center w-8 h-8 m-1 border border-gray-500 rounded-full cursor-pointer">
                                            {">"}
                                        </span>
                                    }
                                    pageCount={data.pageCount}
                                    onPageChange={handlePageChange}
                                    containerClassName={"flex p-4"}
                                    pageClassName={
                                        "pagination-item inline-flex items-center justify-center w-8 h-8 m-1 border border-gray-500 rounded-full cursor-pointer"
                                    }
                                    activeClassName="active"
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
        </AuthenticatedLayout>
    );
};

export default List;
