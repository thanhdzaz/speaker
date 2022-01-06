import React from 'react';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';
import ProductInfor from 'src/components/Farm/ProductInformation'
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { SafeAreaView } from 'react-native';

const ProductInformaionScreen: NavigationFunctionComponent = observer(({
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
                title = {'Thông tin sản phẩm'}
                onPressBack={()=>navigation.pop(componentId)}
            />
             
           <ProductInfor/>
        </ScrollView>
        </SafeAreaView>

    )
});

ProductInformaionScreen.options = props => screens.home.options();

export default ProductInformaionScreen;
