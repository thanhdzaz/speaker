import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Service from 'src/components/BossScreen/ServiceScreen';
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';


const ServiceScreen: NavigationFunctionComponent = observer(({
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
                    title={'Quản lý dịch vụ'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <Service
                    onPressEatingService={() => nav.EatingService(componentId)}
                    onPressHealthCare={() => nav.HealthCare(componentId)}
                    onPressInfrastructure={() => nav.Infrastructure(componentId)}
                    onPressTeachingSyllabus={() => nav.TeachingSyllabus(componentId)}
                    onPressMarketing={() => nav.Marketing(componentId)}
                    onPressHuman={() => nav.Human(componentId)}
                    onPressTechnology={() => nav.Technology(componentId)}
                    onPressActivityMonitor={() => nav.ActivityMonitor(componentId)}
                />
            </ScrollView>
        </SafeAreaView>
    )
});

ServiceScreen.options = props => screens.home.options();

export default ServiceScreen;
