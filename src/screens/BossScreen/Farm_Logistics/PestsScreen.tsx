import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Pests from 'src/components/BossScreen/Farm_Logistics/Pests'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';

const PestsScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Header
                    name={'Nguyen Ngoc'}
                    staff={'giam doc'}
                    backButton={true}
                    title={'Logistics'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <Pests
                />
            </ScrollView>
        </SafeAreaView>
    )
});

PestsScreen.options = props => screens.home.options();

export default PestsScreen;
