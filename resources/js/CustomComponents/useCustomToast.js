import React, { useState } from "react";
import { toast } from "react-toastify"; // Importing toast directly

import "react-toastify/dist/ReactToastify.css";

const useCustomToast = () => {
    const [toastData, setToastData] = useState({
        isVisible: false,
        status: "",
        message: "",
    });

    const showToast = (message, status) => {
        setToastData({
            isVisible: true,
            status,
            message,
        });

        // Correctly accessing POSITION from toast
        toast[status](message, {
            autoClose: 2000,
            onClose: hideToast,
        });
    };

    const hideToast = () => {
        setToastData({
            isVisible: false,
            status: "",
            message: "",
        });
    };

    return { showToast, hideToast };
};

export default useCustomToast;
