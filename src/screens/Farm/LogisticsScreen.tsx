import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Logistics from 'src/components/Farm/Logistics'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';


const LogisticsScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();

    return (
        <ScrollView>
            <Header
                name={'Nguyen Ngoc'}
                staff={'giam doc'}
                backButton={true}
                title = {'Logistics'}
                onPressBack={()=>navigation.pop(componentId)}
            />
            <Logistics
                ownerFarm="Tran Van U"
                onPressNhanVien={() => nav.EmployeeList(componentId)}
                onPressPlan={() => nav.Order(componentId)}
                onPressTransport={() => nav.Transport(componentId)}
                onPressPests={() => nav.Pests(componentId)}
            />
        </ScrollView>
    )
});

LogisticsScreen.options = props => screens.home.options();

export default LogisticsScreen;
