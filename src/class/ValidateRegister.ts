export class ValidateRegister {
    valid: boolean;
    reason: string;
    constructor(valid: boolean, reason: string) {
        this.valid = valid;
        this.reason = reason;
    }
}
