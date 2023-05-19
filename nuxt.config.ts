import fs from "fs";
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {

    // export default {
    buildModules: ["@nuxtjs/vuetify", "@nuxt/typescript-build"],
    build: {
        loaders: {
            scss: {
                implementation: require("sass"),
            },
        },
        postcss: false,
    },
    srcDir: "src/",
    head: {
        titleTemplate: "%s - Savage 2",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial scale=1" },
            {
                name: "keywords",
                content:
                    "Savage2, Savage, Savage1, Free, Multiplayer, Strategy, Games, Video games, SavageII",
            },
            {
                name: "description",
                content:
                    "Savage 2: A Tortured Soul is a fantasy and science fiction themed video game that combines elements of the first-person shooter, real-time strategy, and action role-playing game genres.",
            },
        ],
    },
    css: ["@mdi/font/css/materialdesignicons.css", "src/styles/styles.scss"],
    plugins: ["~/plugins/preload-assets.ts", "~/plugins/event-bus.ts", '~/plugins/global-components.ts'],
    vuetify: {
        theme: {
            dark: true,
            themes: {
                light: {
                    primary: '#c98200',
                    // primary: '#e9662e',
                    accent: '#1e81b0',
                    background: '#0c0c0c'
                },
                dark: {
                    primary: '#c98200',
                    accent: '#1e81b0',
                    background: '#0c0c0c'
                }
            }
        }
    },
    server: {
        // process.env.NODE_ENV !== "production"
        //   ? {
        https: {
            key: fs.readFileSync("./certs/localhost+2-key.pem"),
            cert: fs.readFileSync("./certs/localhost+2.pem"),
        },
        //     }
        //   : {},
    },

};

export default config;