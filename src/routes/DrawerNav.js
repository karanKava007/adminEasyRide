import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import FaqAdder from '../container/FaqAdder';
// import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
export const DrawerNav = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='FAQ' component={FaqAdder}/>
        </Drawer.Navigator>
    )
}