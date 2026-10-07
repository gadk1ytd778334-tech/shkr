import { Order } from '../../models';
import { OrderDTO } from '../dto';

export class OrderMapper {
    static toDTO(order: Order): OrderDTO {
        return {
            id: order.id,
            description: order.description,
            cost: order.cost,
            status: order.status,
            carId: (order as any).car?.id ?? 0,
            mechanicId: (order as any).mechanic?.id ?? 0,
            createdAt: new Date().toISOString()
        };
    }
    static toDTOList(orders: Order[]): OrderDTO[] {
        return orders.map(o => this.toDTO(o));
    }
}
