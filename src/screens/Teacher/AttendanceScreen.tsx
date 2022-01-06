import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Attendance from 'src/components/Teacher/Attendance'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';


const AttendanceScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();

    return (
        <ScrollView>
            <Header
                name={'Nguyen Ngoc'}
                staff={'giam doc'}
                backButton={true}
                title = {'Điểm danh'}
                onPressBack={()=>navigation.pop(componentId)}
            />
            <Attendance/>
        </ScrollView>
    )
});

AttendanceScreen.options = props => screens.home.options();

export default AttendanceScreen;
