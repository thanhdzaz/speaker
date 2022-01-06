import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import News from 'src/components/BossScreen/News'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { useStores } from 'src/stores';
import { SafeAreaView } from 'react-native';



const NewsScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();
    const { schoolName } = useStores();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Header
                    name={'Nguyen Ngoc'}
                    staff={'giam doc'}
                    backButton={true}
                    title={'Tin tức'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <News />
            </ScrollView>
        </SafeAreaView>
    )
});

NewsScreen.options = props => screens.home.options();

export default NewsScreen;
