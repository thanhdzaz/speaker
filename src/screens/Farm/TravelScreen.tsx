import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Travel from 'src/components/Farm/Travel'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { useStores } from 'src/stores';
import { SafeAreaView } from 'react-native';

const TravelScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();
    const {location} = useStores();
    return (
        <SafeAreaView style={{flex:1}}>

        <ScrollView>
            <Header
                name={'Nguyen Ngoc'}
                staff={'giam doc'}
                backButton={true}
                title = {'Travel - '+location.location}
                onPressBack={()=>navigation.pop(componentId)}
            />
            <Travel ownerFarm="Tran Van U"/>
        </ScrollView>
        </SafeAreaView>

    )
});

TravelScreen.options = props => screens.home.options();

export default TravelScreen;
