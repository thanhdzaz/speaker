import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Human from 'src/components/BossScreen/ServiceScreen/Human'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';


const HumanScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Header
                    name={''}
                    staff={''}
                    backButton={true}
                    title={'Nhân lực'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <Human />
            </ScrollView>
        </SafeAreaView>
    )
});

HumanScreen.options = props => screens.home.options();

export default HumanScreen;
