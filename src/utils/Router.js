import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthScreen from "../containers/auth/AuthScreen";
import HomeScreen from "../containers/home/HomeScreen";
import LogInScreen from "../containers/login/LogInScreen";

//Switch Navigator

const AppNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthScreen
    },
    LogIn: {
        screen: LogInScreen
    },
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(AppNavigator);
