export default {
  expo: {
    name: "SpotterAI",
    slug: "SpotterAI",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "spotterai",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    plugins: [
      "expo-font",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      BASE_URL: process.env.BASE_URL,
      RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    },
  },
};
