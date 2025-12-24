export const getCredentials = () => {
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;

  if (!username || !password) {
    throw new Error("Credentials are missing. Set environment variables.");
  }

  return { username, password };
};