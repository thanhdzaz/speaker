import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import FarmInfor from 'src/components/Farm/FarmInformation'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';

const FarmInformaionScreen: NavigationFunctionComponent = observer(({
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
                    title={'Thông tin Farm'}
                    onPressBack={() => navigation.pop(componentId)}
                />

                <FarmInfor onPressProductInformation={() => nav.pushProductInforScreen(componentId)} />
            </ScrollView>
        </SafeAreaView>

    )
});

FarmInformaionScreen.options = props => screens.home.options();

export default FarmInformaionScreen;
