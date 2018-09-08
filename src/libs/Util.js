class Util {

    static isAlphabets(text) {
        return (/^[a-zA-Z]+$/.test(text));
    }
    static isDigits(text) {
        return (/^\d+$/.test(text));
    }
    static isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    static isAlphaNumeric(text) {
        const re = /^[a-zA-Z0-9]+$/;
        return re.test(text);
    }
    static isNotEmpty(text) {
        return text !== '';
    }
    static aadhar(text) {
        (text.length === 12 && Util.isDigits(text)) ? true : false

    }
    static pan(text) {
        const regex = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        const code = /([C,P,H,F,A,T,B,L,J,G])/;
        if (regex.test(text) === true) {
            if (code.test(text.substring(3, 4))) {
                return true;
            }
            return false;
        }
        return false;
    }
}

export default Util;
