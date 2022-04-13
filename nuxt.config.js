import fs from 'fs';

export default {
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxt/typescript-build'
    ],

    server: process.env.NODE_ENV !== 'production' ? {
        https: {
            key: fs.readFileSync('./certs/localhost+2-key.pem'),
            cert: fs.readFileSync('./certs/localhost+2.pem')
        }
    } : {}
}