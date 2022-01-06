import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import ChatBox from 'src/components/Chat/chatBox';
import HeaderChat from 'src/components/Chat/HeaderChat';
import navigation from 'src/services/navigation';
import { screens } from 'src/services/navigation/screens';



const ChatBoxScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {

  return (

    <ScrollView style={{ flex: 1 }}>
      <HeaderChat
        backButton={true}
        name={"aaaa"}
        srcImg={"dasdf"}
        onPressBack={() => navigation.pop(componentId)}
      />
      <ChatBox ownerchatBox='Long' />
    </ScrollView>

  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

ChatBoxScreen.options = props => screens.chat.options();

export default ChatBoxScreen;
