import  { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Profile, Config, Prioridade, Cliente, EsperaOs, New, Historico, OSIndividual } from '../screens/Inside'

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
                name='prioridade'
                component={Prioridade}
            />
            <Stack.Screen
                name='espera'
                component={EsperaOs}
            />
            <Stack.Screen
                name='cliente'
                component={Cliente}
            />
            <Stack.Screen
                name='new'
                component={New}
            />
            <Stack.Screen
                name='historico'
                component={Historico}
            />
            <Stack.Screen
                name='os'
                component={OSIndividual}
            />
        </Stack.Navigator>
    )
}