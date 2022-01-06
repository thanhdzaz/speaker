import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import EmployeeList from 'src/components/BossScreen/Farm_Logistics/EmployeeList'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';


const EmployeeListScreen: NavigationFunctionComponent = observer(({
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
                    title={'Danh sách nhân viên'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <EmployeeList />
            </ScrollView>
        </SafeAreaView>
    )
});

EmployeeListScreen.options = props => screens.home.options();

export default EmployeeListScreen;
