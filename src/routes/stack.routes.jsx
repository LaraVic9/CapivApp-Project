import  { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Profile, Config, PrioritariaOs } from '../screens/Inside'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>



            <Stack.Screen
                name='perfil'
                component={Profile}
            />
            <Stack.Screen
                name='settings'
                component={Config}
            />
            <Stack.Screen
                name='prioritariaOs'
                component={PrioritariaOs}
            />
        </Stack.Navigator>
    )
}