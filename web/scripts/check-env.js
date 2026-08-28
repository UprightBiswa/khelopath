const required = ["DATABASE_URL", "OPENAI_API_KEY", "ADMIN_COOKIE_SECRET"];
const optionalWithDefaults = {
  ADMIN_EMAIL: "admin@admin.com",
  ADMIN_PASSWORD: "12345678"
};

if (typeof process.loadEnvFile === "function") {
  process.loadEnvFile(".env");
}

for (const key of required) {
  const value = process.env[key];
  const status = value && !value.includes("placeholder") && !value.includes("change-this") ? "set" : "missing";
  console.log(`${key}: ${status}`);
}

for (const [key, fallback] of Object.entries(optionalWithDefaults)) {
  const value = process.env[key];
  const status = value ? "set" : `using default ${fallback}`;
  console.log(`${key}: ${status}`);
}
