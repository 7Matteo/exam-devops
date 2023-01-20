// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isValid = (label) => {
    return (
        label.length >= 8 && /[^a-zA-Z0-9]/.test(label) && /[0-9]/.test(label)
    );
};

exports.isEmpty = isEmpty;
exports.isValid = isValid;
