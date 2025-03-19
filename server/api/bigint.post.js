export default defineEventHandler(async (event) => {
    const { lineItems } = await readBody(event)

    console.log(lineItems)
});
