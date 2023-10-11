import  { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Profile, Config, Prioridade, Cliente, EsperaOs, New, Historico, NewCliente, NewOS, ClientesList, OSIndividual } from '../screens/Inside'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return (
        <NavigationContainer>
        <Stack.Navigator >



            <Stack.Screen
                name='perfil'
                component={Profile}
            />
            <Stack.Screen
                name='config'
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
                name='NewCliente'
                component={NewCliente}
            />
             <Stack.Screen
                name='NewOS'
                component={NewOS}
            />
             <Stack.Screen
                name='New'
                component={New}
            />
            <Stack.Screen
                name='historico'
                component={Historico}
            />
             <Stack.Screen
                name='ClientesList'
                component={ClientesList}
            />
             <Stack.Screen
                name='OSIndividual'
                component={OSIndividual}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}