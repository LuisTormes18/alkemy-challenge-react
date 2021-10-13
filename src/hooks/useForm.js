import { useState } from "react";

const useForm = (initalValues) => {
    const [state, setState] = useState(initalValues);

    const reset = (newvalues = initalValues) => {
        setState(newvalues);
    };
    const handleInputChange = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
    };
    return [state, handleInputChange, reset];
};
export default useForm;
