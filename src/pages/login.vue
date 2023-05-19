<template>
    <v-theme-provider dark>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <div class="login-form">
                    <v-container>
                        <v-card class="mx-auto text-center card-border" width="400">
                            <h2 class="uppercase ma-8">Sign In</h2>
                            <form @submit.prevent="login()" class="px-4">
                                <div>
                                    <v-text-field v-model="email" label="Email" required type="email"
                                        width="300px"></v-text-field>
                                </div>
                                <div>
                                    <v-text-field v-model="password" label="Password" required type="password"
                                        width="300px"></v-text-field>
                                </div>
                                <v-checkbox v-model="rememberMe" label="Stay logged in" />
                                <div class="my-4 d-flex flex-column align-center justify-center">
                                    <v-btn type="submit" class="primary my-4" width="100%" tile>Sign In</v-btn>
                                    <v-label>
                                        <span>Not registered?</span>
                                        <router-link to="/register" class="mx-2">
                                            <span class="uppercase primary font-weight-bold">Create account</span>
                                        </router-link>
                                    </v-label>
                                </div>
                            </form>
                        </v-card>
                    </v-container>
                </div>
            </v-layout>
        </v-container>
    </v-theme-provider>
</template>

<script lang="ts">
import { LoginData, AuthService } from '@/services/auth-service';
import Vue from "vue";

export default Vue.extend({
    name: "login",
    data(): LoginData {
        return {
            email: '',
            password: '',
            rememberMe: false
        };
    },
    methods: {
        async login() {
            const data: LoginData = {
                email: this.email,
                password: this.password,
                rememberMe: this.rememberMe
            }

            try {
                let response = await AuthService.login(data)
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
    },
});
</script>

<style scoped>
.login-form {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-border {
    border-radius: 0;
    padding: 5px;
}
</style>