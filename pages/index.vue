<script setup lang="ts">

const response = ref(null)
const createOrderGET = async () => {
    const res = await $fetch('/api/create', {
        method: "GET"
    })
    console.log(res)
    response.value = res.data
}

const createOrderPOST = async () => {
    const res = await $fetch('/api/create', {
        method: "POST",
        body: {
            lineItems: [
                {
                    name: "New Item",
                    quantity: "1",
                    basePriceMoney: {
                        amount: BigInt(100),
                        currency: "USD"
                    },
                },
            ],
        }
    })
    response.value = res.data
}

const getBigInt = async () => {
    const res = await $fetch('/api/bigint', {
        method: "GET"
    })
    console.log(res)
    response.value = res.data
}

const sendBigInt = async () => {
    const res = await $fetch('/api/bigint', {
        method: "POST",
        body: {
            lineItems: [
                {
                    name: "New Item",
                    quantity: "1",
                    basePriceMoney: {
                        amount: BigInt(100),
                        currency: "USD"
                    },
                },
            ],
        }
    })
    console.log(res)
    response.value = res.data
}
</script>

<template>
    <button @click="getBigInt()" type="button">Get Big Int</button>
    <button @click="sendBigInt()" type="button">Send Big Int</button>
    <button @click="createOrderGET()" type="button">Read Order</button>
    <button @click="createOrderPOST()" type="button">Create New Order</button>
    {{ response }}
</template>
