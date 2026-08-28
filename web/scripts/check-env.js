const required = ["DATABASE_URL", "OPENAI_API_KEY", "ADMIN_PASSWORD", "ADMIN_COOKIE_SECRET"];

if (typeof process.loadEnvFile === "function") {
  process.loadEnvFile(".env");
}

for (const key of required) {
  const value = process.env[key];
  const status = value && !value.includes("placeholder") && !value.includes("change-this") ? "set" : "missing";
  console.log(`${key}: ${status}`);
}
