import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import HealthCare from 'src/components/BossScreen/ServiceScreen/HealthCare'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';


const HealthCareScreen: NavigationFunctionComponent = observer(({
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
                    title={'Chăm sóc sức khỏe'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <HealthCare />
            </ScrollView>
        </SafeAreaView>
    )
});

HealthCareScreen.options = props => screens.home.options();

export default HealthCareScreen;
