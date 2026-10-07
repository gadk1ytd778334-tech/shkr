import { z } from 'zod';

export const OwnerSchema = z.object({
    id: z.number().int().positive(),
    fullName: z.string().min(1).max(255),
    phone: z.string().regex(/^\+?[0-9]{7,15}$/),
    email: z.string().email()
});

export const CarSchema = z.object({
    id: z.number().int().positive(),
    brand: z.string().min(1),
    model: z.string().min(1),
    manufactureYear: z.number().int().min(1900).max(new Date().getFullYear() + 1),
    vin: z.string().length(17),
    plateNumber: z.string().min(1)
});

export const OrderSchema = z.object({
    id: z.number().int().positive(),
    description: z.string().min(1).max(1000),
    cost: z.number().nonnegative(),
    carId: z.number().int().positive(),
    mechanicId: z.number().int().positive()
});

export type OwnerInput = z.infer<typeof OwnerSchema>;
export type CarInput = z.infer<typeof CarSchema>;
export type OrderInput = z.infer<typeof OrderSchema>;
