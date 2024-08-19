module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module:react-native-dotenv", // Add this line
        {
          moduleName: "@env", // This is the name you'll use when importing the variables
          path: ".env", // Path to your .env file
          blocklist: null, // Variables you want to exclude (optional)
          allowlist: null, // Variables you want to include (optional)
          safe: false, // Set to true if you want to load .env.example and compare it to .env
          allowUndefined: true, // Allow undefined variables (optional)
        },
      ],
    ],
  };
};
