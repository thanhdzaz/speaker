import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import HeaderChat from 'src/components/Chat/HeaderChat';
import IdCard from 'src/components/Idcard';



const HomeScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { nav, t } = useServices();
  return (
    <>
      <ScrollView>
        <HeaderChat
          backButton={false}
          name={"aaaa"}
          srcImg={"dasdf"}
          HeaderName={"Id Card"}
        />
        <IdCard
          ownerIdcard='Long'
        />
      </ScrollView>
    </>

  )
});

HomeScreen.options = props => screens.home.options();

export default HomeScreen;
