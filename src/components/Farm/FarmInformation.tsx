import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'

type FarmInformationProps = {

    onPressProductInformation?: () => void;

}



const FarmInformation: React.FC<FarmInformationProps> = ({

    onPressProductInformation = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { productChoose } = useStores();
    const { location } = useStores();

    const dataFarm = [
        { "id": 0, "name": "Nông trại", "value": 2 },
        { "id": 1, "name": "Lô thửa", "value": 66 },
        { "id": 2, "name": "Cây trồng", "value": 2 }
    ]

    const dataFarmThuHoachThang = [
        { "id": "ADJ01B", "name": "ổi", "status": "Thu hoạch đóng gói", "image": "https://fujimart.vn/image/cache/catalog/rau%20cu%20qua/1497333763855_9565434-502x502.png", "value": 300 },
        { "id": "CD280S", "name": "chuối", "status": "Thu hoạch đóng gói", "image": "https://fujimart.vn/image/cache/catalog/rau%20cu%20qua/1497333763855_9565434-502x502.png", "value": 1000 }
    ]

    const [checked, setChecked] = useState(false)


    const renderItem = ({ item = '' }) => {
        return (
            <View style={tailwind('flex-row items-center justify-between mx-5 border-b py-2 border-gray-200')}>
                <View style={tailwind('flex-row items-center')}>
                    <Image style={[{ width: 30, height: 30 }, tailwind('bg-gray-300')]}></Image>
                    <Text style={tailwind('text-base ml-2')}>{item.name}</Text>
                </View>
                <Text>{item.value}</Text>
            </View>
        )
    }
    const renderItem2 = ({ item = '' }) => {
        return (
            <TouchableOpacity style={tailwind('border-b p-3 m-2 border-gray-200 flex-row justify-between items-center')} onPress={() => { productChoose.setProduct(item.name); onPressProductInformation() }}>
                <View style={tailwind('flex-row')}>
                    <View style={[{ width: 49, height: 49 }, tailwind('bg-gray-400')]}>
                        <Image source={item.image} style={[styles.boxshadow, { width: 49 }]}></Image>
                    </View>
                    <View style={tailwind('ml-2')}>
                        <Text style={tailwind('text-base capitalize text-yellow-500')}>{item.name}</Text>
                        <Text style={tailwind('text-base')}>{item.status}</Text>
                    </View>
                </View>

                <Text style={tailwind('text-base')}>{item.value}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={tailwind('w-full ')}>
            <View style={tailwind('flex-row pt-4 pl-5')}>
                <Icon name='home-outline' size={18} style={tailwind('mr-2')}></Icon>
                <Text style={tailwind('text-base font-semibold')}>Farm - {location.location}</Text>
            </View>
            <FlatList data={dataFarm} renderItem={(item) => renderItem(item)} keyExtractor={item => item.id} />
            <Text style={tailwind('text-lg font-bold text-center mt-10 mb-1')}>Thu hoạch trong tháng</Text>
            <FlatList data={dataFarmThuHoachThang} renderItem={(item) => renderItem2(item)} keyExtractor={item => item.id} />
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
    boxshadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
})

export default FarmInformation;