import React, {createContext, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/screens';
import {Drawer} from 'react-native-drawer-layout';
import {createDrawerNavigator} from '@react-navigation/drawer';
export const RightDrawerContext = createContext();

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator screenOptions={{drawerPosition: 'left'}}>
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
};
function RightDrawerScreen() {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);
  const value = useMemo(() => {
    return {
      openRightDrawer: () => setRightDrawerOpen(true),
      closeRightDrawer: () => setRightDrawerOpen(false),
    };
  }, []);
  return (
    <Drawer
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="right"
      renderDrawerContent={() => <>{/* Right drawer content */}</>}>
      <RightDrawerContext.Provider value={value}>
        <LeftDrawerScreen />
      </RightDrawerContext.Provider>
    </Drawer>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <RightDrawerScreen />
    </NavigationContainer>
  );
};

export default App;
