import CommunityFormFields from "@/Components/CommunityFormFields";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function CustomizedDialogBox({
    title,
    selectedCategory,
    handleResetCategory,
    options,
    item,
    resetForm,
    getdataAfterAddOrView,
    setResetFormToDefault,
    editMode,
    pageSize,
    currentPage,
    pageCount,
}) {
    const [closeModal, setCloseModal] = useState(true);

    const handleCloseModal = () => {
        setCloseModal(false);
        handleResetCategory("");
        setResetFormToDefault();
    };

    return closeModal === true ? (
        <div className="custom-card">
            <div className="card-header">
                <h2>{title}</h2>
                <button>
                    <AiFillCloseCircle
                        className="card-cancel-button"
                        onClick={handleCloseModal}
                    />
                </button>
            </div>
            <div className="card-content">
                <CommunityFormFields
                    selectedCategory={selectedCategory}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    pageCount={pageCount}
                    getdataAfterAddOrView={getdataAfterAddOrView}
                    resetForm={resetForm}
                    options={options}
                    handleCloseModal={handleCloseModal}
                    closeModal={closeModal}
                    handleResetCategory={handleResetCategory}
                    item={item}
                    editMode={editMode}
                />
            </div>
        </div>
    ) : null;
}

export default CustomizedDialogBox;
