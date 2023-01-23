/**
 * @format
 */
import { Navigation } from "react-native-navigation";
// import { AppRegistry } from "react-native";
import Welcome from "./navigationTest/Welcome";
import SignIn from "./navigationTest/SignIn";
import SignUp from "./navigationTest/SignUp";
// import { name as appName } from "./app.json";

// AppRegistry.registerComponent(appName, () => App);

// import ReduxCounter from "./ReduxCounter";

Navigation.registerComponent("Welcome", () => Welcome);
Navigation.registerComponent("SignIn", () => SignIn);
Navigation.registerComponent("SignUp", () => SignUp);

// Navigation.registerComponent("Welcome", () => Welcome);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Welcome",
              options: {
                topBar: {
                  title: {
                    text: "Welcome",
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
