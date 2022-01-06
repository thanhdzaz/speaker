import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import Technology from 'src/components/BossScreen/ServiceScreen/Technology'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';


const TechnologyScreen: NavigationFunctionComponent = observer(({
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
                    title={'Công nghệ'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <Technology />
            </ScrollView>
        </SafeAreaView>
    )
});

TechnologyScreen.options = props => screens.home.options();

export default TechnologyScreen;
