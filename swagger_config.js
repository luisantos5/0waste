const options = {
    swaggerDefinition: {
        info: {
            description: 'API for the android App',
            title: '0 Waste',
            version: '1.0.0',
        },
        host: 'localhost:5000',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http'],
        securityDefinitions: {
            Bearer: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "Bearer Token",
            }
        }
        
    },
    basedir: __dirname,
    files: ['./routes/**/*.js', './models/**/*.js']
};

module.exports = options; 