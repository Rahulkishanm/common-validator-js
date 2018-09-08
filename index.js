import Util from './libs/Util';

export const validateBulk = (arr) => {
    return new Promise((resolve) => {
        const error = [];
        arr.forEach((ele) => {
            if (validateDefintions[Object.keys(ele)[0]]) {
                if (!validateDefintions[Object.keys(ele)[0]]()) {
                    error.push(
                        {
                            errorCode: Object.keys(ele)[1],
                            errorDisplayText: ele[Object.keys(ele)[1]]
                        }
                    );
                }

            } else {
                error.push('Invalid selection, key not found in validateDefintions JSON');
            }
        });
        resolve(error);
    });
}

export const validateDefintions = {
    'NUMERIC': (item) => {
        Util.isDigits(item? item :ele[Object.keys(ele)[0]]);
    },
    'ALPHANUMERIC': (item) => {
        Util.isAlphaNumeric(item? item :ele[Object.keys(ele)[0]]);
    },
    'ALPHABETIC': (item) => {
        Util.isAlphabets(item? item :ele[Object.keys(ele)[0]]);
    },
    'EMAIL': (item) => {
        Util.isValidEmail(item? item :ele[Object.keys(ele)[0]]);
    },
    'NON_EMPTY': (item) => {
        Util.isNotEmpty(item? item :ele[Object.keys(ele)[0]]);
    },
    'AADHAR': (item) => {
        Util.aadhar(item? item :ele[Object.keys(ele)[0]]);
    },
    'PAN': (item) => {
        Util.pan(item? item :ele[Object.keys(ele)[0]]);
    }
}