export class ApplicationError extends Error {
    constructor(message, code) {
        super(message);    // Call the constructor of the Error class with the provided message

        this.code = code;  // Custom property to store an error code (e.g., HTTP status code)
    }
}
