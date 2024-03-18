import swaggerJsDoc from "swagger-jsdoc"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Restaurant API",
            version: "1.0.0",
            description: "Restaurant"
        },
        servers: [{
            url: "http://localhost:3005"
            
        }],
        components: {
            schemas: {
                Ingredients: {
                    type: "object",
                    preoperties: {
                        name: { type: 'string' },
                        group: { type: "string" },
                        unit: { type: "string" },
                        price: { type: "number" },
                        critical: { type: 'number' }
                    }
                }
            }
        },

    },
    apis: ["../routes/*.ts"]
}




export const specs = swaggerJsDoc(options)
