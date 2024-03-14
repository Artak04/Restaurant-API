interface Config {
    port: number;
    mongoUrl: string;
}

const config: Config = {
    port: +process.env.port || 3005,
    mongoUrl: process.env.mongoConnectUrl
};


export default config;