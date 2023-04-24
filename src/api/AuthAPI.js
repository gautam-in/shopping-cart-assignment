const loginSimulator = (authData) => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            name: "Test User",
            userId: 1001,
            email: authData.email
        });
    }, 1000);
});

export const AuthAPI = {
    login: async function (email, password) {
        const response = await loginSimulator({email, password});
        localStorage.setItem("userInfo", JSON.stringify(response));

        return response;
    },
    logout: () => {
        localStorage.removeItem("userInfo");
    }
};
