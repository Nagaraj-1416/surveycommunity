import React from "react";
import Select from "react-select";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect } from "react";

const CustomizedReactSelect = ({ ...props }) => {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: "2rem", // Adjust the value for rounded corners
            height: "3rem",
            borderColor: "#012970",
        }),
        singleValue: (provided) => ({
            ...provided,
            textAlign: "left", // Center-align the value
            color: "#012970", // Set the color of the selected value text
            fontWeight: "bold", // Apply font weight to the selected value text
            marginLeft: "2.5%",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#012970" : "white",
            color: state.isSelected ? "white" : provided.color,
            "&:hover": {
                backgroundColor: state.isSelected ? "#012970" : "#d0d0f2",
                color: state.isSelected ? "white" : provided.color,
            },
        }),
    };

    const options = props.options.map((val) => ({
        value: val.value,
        label: val.label,
    }));

    const handleChange = (selectedOption) => {
        if (props.onChange) {
            props.onChange(selectedOption.value);
        }
    };

    return (
        <div className="relative w-full">
            <Select
                options={options}
                isSearchable={false} // Disable the default search input
                placeholder="Click here to search" // Set the placeholder to an empty string to disable it
                onChange={handleChange}
                styles={customStyles}
                components={{
                    DropdownIndicator: null, // Remove the default dropdown indicator
                }}
                value={options.find(
                    (option) => option.value == props.selectedCategory
                )} // Set the selected value
            />

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 md:pr-5">
                <AiOutlineSearch
                    className="h-7 w-7"
                    style={{ color: "#012970" }}
                />
            </div>
        </div>
    );
};

export default CustomizedReactSelect;
