import { SquareClient, SquareEnvironment } from "square";
import * as crypto from "crypto";

export default defineEventHandler(async (event) => {
    const { SQUARE_SANDBOX_ACCESS_TOKEN, SQUARE_SANDBOX_LOCATION_ID } = useRuntimeConfig(event)

    const { orders } = new SquareClient({
        token: SQUARE_SANDBOX_ACCESS_TOKEN,
        environment: SquareEnvironment.Sandbox
    })

    // Create initial order for testing
    const orderResponse = await orders.create({
        idempotencyKey: crypto.randomUUID(),
        order: {
            locationId: SQUARE_SANDBOX_LOCATION_ID,
            lineItems: [
                {
                    name: "New Item",
                    quantity: "1",
                    basePriceMoney: {
                        amount: BigInt(100),
                        currency: "USD",
                    },
                },
            ],
        },
    });

    let orderId = orderResponse.order.id;
    let lineItemUid = orderResponse.order.lineItems[0].uid;

    const response = await orders.batchGet({
        orderIds: [orderId],
    });

    return response;
});
