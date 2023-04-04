import { FormGroup } from "@angular/forms";
import * as SecureLS from "secure-ls";

export const USER_KEY = 'auth-clubpersonal';
export const ACCESO_KEY = 'ultimoacceso-clubpersonal';

var ls = new SecureLS({
    encodingType: 'aes',
    isCompression: false
});

export const getData = function (key: any) {
    if (localStorage.getItem(key) == null) {
        return null
    }
    try {
        if (ls.get(key)[0] == "{") {
            return JSON.parse(ls.get(key));
        } else {
            console.log(ls.get(key))
            return ls.get(key);
        }
    } catch (e) {
        return ls.get(key);
    }
}
export const setData = function (key: any, data: any) {
    try {
        data = JSON.stringify(data);
        ls.set(key, data);
    } catch (e) {
        ls.set(key, data);
    }


}

export const getErrorMessage = function (controlName: string, form: FormGroup, isEmailControl?: boolean) {
    const control = form.controls[controlName];

    if (control.hasError('required')) {
        return 'Campo obligatorio';
    }
    else if (control.hasError('email')) {
        return 'Email inválido';
    }

    else {
        return '';
    }
};
