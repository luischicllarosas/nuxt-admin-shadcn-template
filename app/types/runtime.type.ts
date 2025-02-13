// config/runtime.d.ts
export interface RuntimeConfig {
    public: {
        API_URL: string | undefined
        // COMPANY_NAME: string | undefined
        // ... otras variables públicas
    };
    private: {
        API_KEY: string | undefined
        // ... otras variables privadas
    };
}
