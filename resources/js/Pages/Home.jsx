import CustomizedHtmlSelect from "@/CustomComponents/CustomizedHtmlSelect";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState, useCallback } from "react";

const Home = ({ auth, communityPostCategoryOptions, communityPosts }) => {
    //  const [selectedCategory, setSelectedCategory] = useState('');
    const { data, setData, post } = useForm({
        selectedCategory: "",
    });

    useEffect(() => {
        console.log(data);
        if (data?.selectedCategory !== "") {
            post(route("communitypost.listbycategory"));
        }
    }, [data?.selectedCategory]);
    const handleCategoryChange = (selectedValue) => {
        setData("selectedCategory", selectedValue);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Community Post" />
            <div className="justify-center items-center h-screen">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4">
                        <img
                            src="uploads/save4.jpg"
                            alt="Image 1"
                            className="w-full h-96"
                        />
                    </div>
                    <div className="p-4 md:mr-10 lg:mt-48">
                        <CustomizedHtmlSelect
                            options={communityPostCategoryOptions}
                            placeHolder="Select Category"
                            onChange={handleCategoryChange}
                            selectedCategory={
                                data?.AuthenticatedLayoutselectedCategory
                            }
                            viewState={true}
                        />
                    </div>
                    <div className="p-4">
                        <img
                            src="uploads/save5.jpg"
                            alt="Image 1"
                            className="w-full h-96"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <h1>Gello</h1>
                    <div className="p-4">
                        <img
                            src="uploads/homeicon1.png"
                            alt="Image 1"
                            className="w-full h-96"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Home;
