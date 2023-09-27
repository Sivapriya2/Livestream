import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from './screens/HomePage';
import HostPage from './screens/HostPage';
import AudiencePage from "./screens/AudiencePage";

const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            options={{
                headerShown:false,
            }}
            name="HomePage" component={HomePage} />
            <Stack.Screen
            options={{
                headerShown:false,
            }}
            name="HomePage" component={HostPage} />
            <Stack.Screen
            options={{
                headerShown:false,
            }}
            name="HomePage" component={AudiencePage} />
        </Stack.Navigator>

    )
}

const Navigation =() =>{
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default Navigation