import swaggerJsDoc from "swagger-jsdoc"

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Restaurant API",
            version: "1.0.1",
            description: "Restaurant"
        },
        servers: [{
            url: "http://localhost:3005/"

        }],
        components: {
            schemas: {
                Ingredient: {
                    type: "array",
                    properties: {
                        name: {
                            type: 'string',
                            description: "The name of the ingredient"
                        },
                        group: {
                            type: "string",
                            description: "The group of the ingredient"
                        },
                        unit: {
                            type: "string",
                            description: "The unit of the ingredient"
                        },
                        price: {
                            type: "number",
                            description: "The price of  the ingredient"
                        },
                        critical: {
                            type: 'number',
                            description: "The critical of the ingredient"
                        }
                    }
                }
            }
        },
        responses:{
            400:{

            }
        }
    },
    apis: ["./src/routes/*.ts"]
}




export const specs = swaggerJsDoc(options)
