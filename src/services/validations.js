// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isValid = (label) => {
    if(label.length >= 8 && /[^a-zA-Z0-9]/.test(label)) return true;
    return false;
}

exports.isEmpty = isEmpty;
exports.isValid = isValid;
