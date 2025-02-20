export const env = {
  baseUrl: getEnvVariable('BASE_URL'),
  apiBaseUrl: getEnvVariable('API_BASE_URL')
} as const;

function getEnvVariable(variableName: string): string {
  const variable = process.env[variableName];

  if (!variable) {
    throw new Error(`"${variableName}" does not exist. Please add it to your .env file.`);
  }

  return variable;
}

