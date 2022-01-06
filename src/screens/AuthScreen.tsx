import React from 'react';
import {
    SafeAreaView,
    
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { screens } from 'src/services/navigation/screens';
import { useStores } from 'src/stores';
import { useServices } from 'src/services';


const AuthScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {

    const { nav, t } = useServices();
    const { keyApi } = useStores();
  
      if (keyApi.value != '') {
        // nav.App();
      } else {
        nav.AuthApp();
      }
     
  return (
    <SafeAreaView>
    </SafeAreaView>
  );
});



AuthScreen.options = props => screens.auth.options();

export default AuthScreen;
