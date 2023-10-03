import  { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Profile, Config } from '../screens/Inside'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>



            <Stack.Screen
                name='home'
                component={Profile}
            />
            <Stack.Screen
                name='settings'
                component={Config}
            />
        </Stack.Navigator>
    )
}