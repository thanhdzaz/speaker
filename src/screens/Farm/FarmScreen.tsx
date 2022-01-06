import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Farm from 'src/components/Farm/Farm'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';


const FarmScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();

    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <Header
                name={'Nguyen Ngoc'}
                staff={'giam doc'}
                backButton={true}
                title={'Farm'}
                onPressBack={() => navigation.pop(componentId)}
            />
            <Farm
                ownerFarm="Tran Van U"
                onPressThongTin={() => nav.pushFarmInforScreen(componentId)}
                onPressKeHoach={() => nav.pushPlanScreen(componentId)}
                onPressNhatKy={() => nav.pushTimeLineWorkScreen(componentId)}
                onPressSauBenh={()=> nav.pushPestsScreen(componentId)}
                onPressThuHoach={()=> nav.pushHarvestScreen(componentId)}
                onPressThoiTiet={()=> nav.pushWeatherScreen(componentId)}
            />
        </ScrollView>
        </SafeAreaView>
    )
});

FarmScreen.options = props => screens.home.options();

export default FarmScreen;
