// mocks.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// This will be our in-memory database
const usersDb: any = [
];

// Mock account creation
mock.onPost('/users').reply(config => {
    const newUser = JSON.parse(config.data);
    const duplicateUser = usersDb.find((user: any) => user.email === newUser.email);

    if (duplicateUser) {
        return [400, { error: 'User already exists' }];
    } else {
        newUser.id = Date.now();
        usersDb.push(newUser);
        return [200, newUser];
    }
});

// Mock signing in
mock.onPost('/login').reply(config => {
    const credentials = JSON.parse(config.data);
    const user = usersDb.find((user: any) => user.email === credentials.email && user.password === credentials.password);

    if (user) {
        // Return a mock JWT
        return [200, { user, token: 'mock.jwt.token' }];
    } else {
        return [400, { error: 'Invalid credentials' }];
    }
});
