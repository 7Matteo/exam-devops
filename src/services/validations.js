// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isValid = (label) => {
    if(label.length >= 8) return true;
    return false;
}

exports.isEmpty = isEmpty;
exports.isValid = isValid;
