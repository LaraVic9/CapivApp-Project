import  { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes'
import { PrioritariaOs, Config, EsperaOs } from '../screens/Inside'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator 
        screenOptions={{ 
            title: '', 
            drawerStyle:{
                width: 250
            }, headerStyle: {
                backgroundColor: '#001D2A'
            }, headerTintColor: '#FFF' 
            }}>
            <Drawer.Screen
                name='home'
                component={TabRoutes}
                options={{
                    drawerIcon:  ({ color, size }) => <Feather name='home' color={color} size={size}/>,
                    drawerLabel: 'Home'
                }}
            />
             <Drawer.Screen
                name='profile'
                component={StackRoutes}
                options={{
                    drawerIcon:  ({ color, size }) => <Feather name='user' color={color} size={size}/>,
                    drawerLabel: 'Meu Perfil'
                }}
            />
              <Drawer.Screen
                name='config'
                component={Config}
                options={{
                    drawerIcon:  ({ color, size }) => <Feather name='settings' color={color} size={size}/>,
                    drawerLabel: 'Configuração'
                }}
                
            />
             <Drawer.Screen
                name='prioritariasOs'
                component={PrioritariaOs}
                options={{
                    drawerIcon:  ({ color, size }) => <Feather name='settings' color={color} size={size}/>,
                    drawerLabel: 'Os Prioritárias'
                }}
                
            />
            
        </Drawer.Navigator>
    )
}