import { SquareClient, SquareEnvironment } from "square";
import * as crypto from "crypto";

export default defineEventHandler(async (event) => {
    const { SQUARE_SANDBOX_ACCESS_TOKEN, SQUARE_SANDBOX_LOCATION_ID } = useRuntimeConfig(event)

    const { orders } = new SquareClient({
        token: SQUARE_SANDBOX_ACCESS_TOKEN,
        environment: SquareEnvironment.Sandbox
    })

    const { lineItems } = await readBody(event)

    // Create initial order for testing
    const orderResponse = await orders.create({
        idempotencyKey: crypto.randomUUID(),
        order: {
            locationId: SQUARE_SANDBOX_LOCATION_ID,
            lineItems
        },
    });

    let orderId = orderResponse.order.id;
    let lineItemUid = orderResponse.order.lineItems[0].uid;

    console.log(orderResponse, orderId, lineItemUid);
    return orderResponse;
});
