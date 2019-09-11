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
        public readonly httpCode: HttpCode,
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

    BadRequest(message: string = "Bad Request", context?: Context): Exception {
        return new Exception("BadRequest", message, 400, context);
    },

    NotFound(message: string = "Resource not found"): Exception {
        return new Exception("NotFound", message, 404);
    },

    Unauthorized(message: string = "Unauthorized"): Exception {
        return new Exception("Unauthorized", message, 401);
    },

    Error(
        name: string,
        message: string,
        httpCode: HttpCode,
        context?: Context
    ): Exception {
        return new Exception(name, message, httpCode, context);
    },
};

export default $error;
export { ExceptionType as Exception };
