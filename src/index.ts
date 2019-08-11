/**
 * @todo: convert this into a NPM package
 * @todo: create factory interface and expose constructors
 */

type HttpCode = 400 | 401 | 403 | 404 | 409 | 500;
type Context = Record<string, any>;

class Exception extends Error {
    constructor(
        public readonly name: string,
        public readonly message: string,
        public readonly httpCode: number,
        public readonly context: Context = {}
    ) {
        super();
    }
}

type ExceptionType = Exception;

const $error = {
    InternalError(
        message: string = "Interal Error",
        context?: Context
    ): Exception {
        return new Exception("InternalError", message, 500, context);
    },

    ValidationError(
        message: string = "Validation Error",
        context?: Context
    ): Exception {
        return new Exception("ValidationFailed", message, 400, context);
    },

    NotFound(message: string = "Resource not found"): Exception {
        return new Exception("NotFound", message, 404);
    },

    Unauthorized(message: string = "Unauthorized"): Exception {
        return new Exception("Unauthorized", message, 401);
    },

    Error(message: string, httpCode: HttpCode): Exception {
        return new Exception("Error", message, httpCode);
    }
};

export default $error;
export { ExceptionType as Exception };
