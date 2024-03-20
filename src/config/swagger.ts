import { string } from "joi"
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
                        id: {
                            type: 'string',
                            description: "The auto-generated id of the Ingredient"
                        },
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
                    },
                    example: {
                        _id: "65f2d1b1ee7eec1d4abqfqqq",
                        name: "potatoes",
                        group: "vegetables",
                        unit: "kg",
                        price: 1000,
                        critical: 6
                    }
                },
                createIngredient: {
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
                    },
                    example: {
                        name: "potatoes",
                        group: "vegetables",
                        unit: "kg",
                        price: 1000,
                        critical: 6
                    }
                }

            }
        },
    },
    apis: ["./src/routes/*.ts"]
}




export const specs = swaggerJsDoc(options)
