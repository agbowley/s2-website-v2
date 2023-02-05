import fs from 'fs';

export default {
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxt/typescript-build'
    ],
    srcDir: 'src/',
    head: {
        titleTemplate: '%s - Savage2',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial scale=1' },
            { name: 'keywords', content: 'Savage2, Savage, Savage1, Free, Multiplayer, Strategy, Games, Video games, SavageII'},
            { name: 'description', content: 'Savage 2: A Tortured Soul is a fantasy and science fiction themed video game that combines elements of the first-person shooter, real-time strategy, and action role-playing game genres.'}
        ]
    },
    server: process.env.NODE_ENV !== 'production' ? {
        https: {
            key: fs.readFileSync('./certs/localhost+2-key.pem'),
            cert: fs.readFileSync('./certs/localhost+2.pem')
        }
    } : {}
}