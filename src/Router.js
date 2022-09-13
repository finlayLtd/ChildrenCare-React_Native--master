/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { StackNavigator } from 'react-navigation';

import LogIn from "./screens/LogIn"
import Splash from "./screens/Splash"
import Parent from "./screens/LoginScreen/Parent"
import Children from "./screens/LoginScreen/Children"
// import PhoneNumber from "./screens/VerificationScreen/PhoneNumber"
import QRCodeScanner from "./screens/QRScreen/QRCodeScanner"
import EmailScreen from "./screens/LoginScreen/EmailLoginScreen"
import ChildrenInfo from "./screens/RegisterScreen/ChildrenInfo"
import ParentInfo from "./screens/RegisterScreen/ParentInfo"
// import MapScreen from "./screens/MainScreen/MapScreen"
import QRCodeGenerator from "./screens/QRScreen/QRCodeGenerator"
// import ChildrenQR from "./screens/InfoScreen/ChildrenQR"

export const PrimaryNav = StackNavigator({
    
    SplashScreen: {screen: Splash},
    LogInScreen: {screen: LogIn},
    ParentLoginScreen: {screen: Parent},
    ChildrenLoginScreen: {screen: Children},
    // PhoneScreen: {screen: PhoneNumber},
    EmailLoginScreen: {screen: EmailScreen},
    QRCodeScanScreen: {screen: QRCodeScanner},
    ChildInfoScreen: {screen: ChildrenInfo},
    ParentInfoScreen: {screen: ParentInfo},
    // MapScreen: {screen: MapScreen},
    QRCodeGenScreen: {screen: QRCodeGenerator},
    // ChildrenQRScreen: {screen: ChildrenQR},
}, {
    headerMode: 'none',
})