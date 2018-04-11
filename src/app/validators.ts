import {FormControl} from '@angular/forms';

export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormControl): {
        [key: string]: any
    } => {
        let password = group.get(passwordKey);
        let confirmPassword = group.get(confirmPasswordKey);

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    }
 }

