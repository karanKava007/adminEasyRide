import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import FaqAdder from '../container/FaqAdder';
import PincodeAdder from '../container/PincodeAdder';
// import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
export const DrawerNav = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='FAQ' component={FaqAdder}/>
            <Drawer.Screen name='PinCode' component={PincodeAdder}/>
        </Drawer.Navigator>
    )
}