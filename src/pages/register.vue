<template>
    <v-theme-provider dark>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <div class="register-form">
                    <v-container>
                        <v-card class="mx-auto text-center card-border" width="400">
                            <h2 class="uppercase ma-8">CREATE ACCOUNT</h2>
                            <form @submit.prevent="register()" class="px-4">
                                <div>
                                    <v-text-field v-model="email" label="Email" required type="email"
                                        width="300px"></v-text-field>
                                </div>
                                <div>
                                    <v-text-field v-model="password" label="Password" required type="password"
                                        width="300px"></v-text-field>
                                </div>
                                <div>
                                    <v-text-field v-model="confirmPassword" label="Confirm Password" required
                                        type="password" width="300px"></v-text-field>
                                </div>
                                <v-checkbox v-model="rememberMe" label="Stay logged in" />
                                <div class="my-4 d-flex flex-column align-center justify-center">
                                    <v-btn type="submit" class="primary my-4" width="100%" tile>Register</v-btn>
                                    <v-label>
                                        <span>Already have an account?</span>
                                        <router-link to="/login" class="mx-2">
                                            <span class="uppercase primary font-weight-bold">Sign in</span>
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
import { RegisterData, AuthService } from '@/services/auth-service';
import Vue from "vue";

export default Vue.extend({
    name: "register",
    data(): { email: string, password: string, confirmPassword: string, rememberMe: boolean } {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            rememberMe: false
        };
    },
    methods: {
        async register() {
            if (this.password !== this.confirmPassword) {
                return
            }

            const data: RegisterData = {
                email: this.email,
                password: this.password
            }

            try {
                let response = await AuthService.register(data)
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
    },
});
</script>

<style scoped>
.register-form {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-border {
    border-radius: 0;
    padding: 5px;
}

/* .card-border>div {
    padding: 5px;
    border: 1px solid grey;
    width: 100%;
    height: 100%;
} */
</style>