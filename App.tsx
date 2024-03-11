/* eslint-disable react/no-unstable-nested-components */
import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SignInScreen, SplashScreen} from './src/screens';
const Stack = createNativeStackNavigator();
export const AuthContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case 'SIGN_OUT': {
          return {
            ...prevState,
            isSignOut: true,
            userToken: null,
          };
        }
        default:
          break;
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
    },
  );
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (error) {}
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => {
    return {
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_UP', token: 'dummy-auth-token'});
      },
    };
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                animationTypeForReplace: state.isSignOut ? 'pop' : 'push',
              }}
            />
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
