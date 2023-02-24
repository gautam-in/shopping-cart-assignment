export const useFormButtonDisable = (formObj) => {
    for (let key in formObj) {
        if (!formObj[key])
            return true;
    }

    return false;
}