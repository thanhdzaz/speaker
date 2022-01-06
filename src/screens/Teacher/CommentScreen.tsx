import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Comment from 'src/components/Teacher/Comment'
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
                title = {'Đánh giá nhận xét'}
                onPressBack={()=>navigation.pop(componentId)}
            />
            <Comment/>
        </ScrollView>
    )
});

StudentListScreen.options = props => screens.home.options();

export default StudentListScreen;
