export interface OwnerDTO { id: number; fullName: string; phone: string; email: string; }
export interface EngineDTO { id: number; type: string; volume: number; power: number; }
export interface WheelDTO { id: number; diameter: number; tireType: string; }
export interface CarDTO { id: number; brand: string; model: string; manufactureYear: number; vin: string; plateNumber: string; ownerId: number | null; engineId: number; wheelIds: number[]; }
export interface MechanicDTO { id: number; fullName: string; specialization: string; experience: number; }
export interface OrderDTO { id: number; description: string; cost: number; status: string; carId: number; mechanicId: number; createdAt: string; }
