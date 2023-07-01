import React, { useState } from "react";

export const useHandleChange = (initialValue) => {
	const [field, setField] = useState(initialValue);

	const handleChange = (event) => {
		const { value, name } = event.target;
		setField((prev) => ({
			...prev,
			[name]: value,
		}));
	};

    const handleUserLogin =(event)=>{
        localStorage.setItem('user', JSON.stringify(field))    
    } 

    // console.log(field);

	return {field, handleChange, handleUserLogin}
};
