const users = {
    standard: { username: 'standard_user', password: 'secret_sauce' },
    lockedOut: { username: 'locked_out_user', password: 'secret_sauce' },
    unknown: { username: 'not_a_real_user', password: 'secret_sauce' },
    wrongPassword: { username: 'standard_user', password: 'wrong_password' }
};
const errorMessages = {
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    lockedOut: 'Epic sadface: Sorry, this user has been locked out.'
};
const invalidLoginScenarios = [
    {
        id: 'LOGIN-03', scenario: 'Locked-out user is rejected', username: users.lockedOut.username, password:
            users.lockedOut.password, expectedError: errorMessages.lockedOut
    },
    {
        id: 'LOGIN-04', scenario: 'Unknown username is rejected', username: users.unknown.username, password:
            users.unknown.password, expectedError: errorMessages.invalidCredentials
    },
    {
        id: 'LOGIN-05', scenario: 'Incorrect password is rejected', username: users.wrongPassword.username,
        password: users.wrongPassword.password, expectedError: errorMessages.invalidCredentials
    },
    {
        id: 'LOGIN-06', scenario: 'Empty username and password are rejected', username: '', password: '',
        expectedError: errorMessages.usernameRequired
    },
    {
        id: 'LOGIN-07', scenario: 'Missing password is rejected', username: users.standard.username, password:
            '', expectedError: errorMessages.passwordRequired
    },
    {
        id: 'LOGIN-08', scenario: 'Missing username is rejected', username: '', password:
            users.standard.password, expectedError: errorMessages.usernameRequired
    }
];
export default { users, errorMessages, invalidLoginScenarios };