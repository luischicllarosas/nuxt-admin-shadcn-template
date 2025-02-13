// config/runtime.ts

const runtimeConfig = {
    public: {
        // COMPANY_NAME : process.env.API_URL  || 'Nuxt',
        API_URL: process.env.API_URL
    },
    private: {
        API_KEY: process.env.API_KEY
    }
};

export default runtimeConfig;
