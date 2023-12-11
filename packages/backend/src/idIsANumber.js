function idIsANumber(id) {
    // eslint-disable-next-line sonarjs/prefer-single-boolean-return
    if (Number.isInteger(id) && id >= 0) {
        return true;
    }
    return false;
}

module.exports = { idIsANumber };
