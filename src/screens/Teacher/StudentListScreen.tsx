import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import StudentList from 'src/components/Teacher/StudentList'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';


const StudentListScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();

    return (
        <ScrollView>
            <Header
                name={'Nguyen Ngoc'}
                staff={'giam doc'}
                backButton={true}
                title = {'Danh sách học sinh'}
                onPressBack={()=>navigation.pop(componentId)}
            />
            <StudentList onPressStudent={()=> nav.pushCommentScreen(componentId)}/>
        </ScrollView>
    )
});

StudentListScreen.options = props => screens.home.options();

export default StudentListScreen;
