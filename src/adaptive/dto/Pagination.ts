export interface PageRequest {
    page: number;
    size: number;
    sortBy?: string;
    sortDir?: 'asc' | 'desc';
}

export interface PageResponse<T> {
    items: T[];
    total: number;
    page: number;
    size: number;
    totalPages: number;
    hasNext: boolean;
}

export function buildPage<T>(items: T[], req: PageRequest, total: number): PageResponse<T> {
    return {
        items,
        total,
        page: req.page,
        size: req.size,
        totalPages: Math.ceil(total / req.size),
        hasNext: req.page * req.size < total
    };
}
