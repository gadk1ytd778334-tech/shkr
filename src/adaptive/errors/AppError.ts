export class AppError extends Error {
    constructor(
        message: string,
        public readonly code: string,
        public readonly statusCode: number = 500,
        public readonly meta?: Record<string, unknown>
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFoundError extends AppError {
    constructor(entity: string, id: number) {
        super(`${entity} с id=${id} не найден`, 'NOT_FOUND', 404, { entity, id });
    }
}

export class ValidationError extends AppError {
    constructor(message: string, meta?: Record<string, unknown>) {
        super(message, 'VALIDATION_ERROR', 400, meta);
    }
}

export class BusinessRuleError extends AppError {
    constructor(message: string, meta?: Record<string, unknown>) {
        super(message, 'BUSINESS_RULE_VIOLATION', 422, meta);
    }
}
