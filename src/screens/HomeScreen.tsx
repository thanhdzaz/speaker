import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from "react-native-elements";
import { screens } from 'src/services/navigation/screens';
import { useStores } from 'src/stores';
import { useServices } from 'src/services';
import Header from 'src/components/HeaderShow';
import DirectorHome from 'src/components/DirectorHome';
import PrincipalScreenHome from 'src/screens/PrincipalScreen/PrincipalScreenHome';
import tailwind from 'tailwind-rn';
import TeacherHome from 'src/components/Teacher/TeacherHome';
import { SafeAreaView } from 'react-native';


const HomeScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();
    const { keyApi } = useStores();
    const logout = () => {
        keyApi.rmKeyApi();
        nav.startApp();
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView>
                <Header
                    name={'Nguyen Ngoc'}
                    staff={'giam doc'}
                    title={''}
                    backButton={false}
                />
                <DirectorHome
                    onPress1={() => nav.pushSchoolsScreen(componentId)}
                    onPress2={() => nav.pushChooseFarmScreen(componentId)}
                />

                {/* <Header
                name={'Nguyen Thi Hồng'}
                staff={'Giáo viên'}
                backButton={false}
            />
            <TeacherHome
                // onPressAlbum
                // onPressThongTinTh
                // onPressGiaoVien
                onPressHS={() => nav.pushStudentListScreen(componentId)}
                onPressDiemDanh={() => nav.pushAttendanceScreen(componentId)}
                // onPressTinTuc
                // onPressHocPhi
            /> */}

            </ScrollView>
        </SafeAreaView>

    )
});

HomeScreen.options = props => screens.home.options();

export default HomeScreen;
