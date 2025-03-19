export default defineEventHandler(async (event) => {
    const response = {
        data: {
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
    };

    return response;
});
