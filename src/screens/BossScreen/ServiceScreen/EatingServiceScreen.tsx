import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import EatingService from 'src/components/BossScreen/ServiceScreen/EatingService'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';



const EatingServiceScreen: NavigationFunctionComponent = observer(({
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
                    title={'Ăn uống'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <EatingService />
            </ScrollView>
        </SafeAreaView>
    )
});

EatingServiceScreen.options = props => screens.home.options();

export default EatingServiceScreen;
