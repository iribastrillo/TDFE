function isEmpty (value) {
    return value.length === 0;
}

function areEqual (value, confirmation) {
    return value === confirmation;
}

function hasWhiteSpace (value) {
    return value.indexOf(0) >= 0;
}

export {isEmpty, areEqual, hasWhiteSpace};