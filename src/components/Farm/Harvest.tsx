import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import ModalDropdown from 'react-native-modal-dropdown';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

type HarvestProps = {
    onPressHarvest?: () => void;
}



const Harvest: React.FC<HarvestProps> = ({

    onPressHarvest = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { productChoose } = useStores();
    const [DropDownValue, setDropDownValue] = useState('')
    const data = [
        { "date": "2", "HarvestPlan": "10:20 am - Lô 1" },
        { "date": "3", "HarvestPlan": "11:30 am - Lô 2" },
        { "date": "4", "HarvestPlan": "8:00 am - Lô 6" },
        { "date": "5", "HarvestPlan": "7:40 am - Lô 7" },
        { "date": "6", "HarvestPlan": "18:45 am - Lô 4" },
        { "date": "7", "HarvestPlan": "14:50 am - Lô 2" },
        { "date": "CN", "HarvestPlan":"10:10 am - Lô 1" },
    ]
    const renderItem = ({ item = '' }) => {
        return (
            <View style={tailwind('flex-row border-b border-black')}>
                <Text style={tailwind('text-base w-2/6 border-r p-3')}>Thứ {item.date}</Text>
                <Text style={tailwind('text-base w-4/6 p-3 capitalize')}>{item.HarvestPlan}</Text>
            </View>
        )
    }

    return (
        <View style={tailwind('w-full px-5')}>
            <View style={tailwind('flex-row items-center pl-4 pb-3 pt-5')}>
                <Text style={tailwind('text-base pr-2')}>Chọn loại cây:</Text>
                <ModalDropdown
                    defaultValue="Chọn Cây"
                    options={['Tất cả', 'Ổi', 'Chuối']}
                    textStyle={tailwind('text-center text-base')}
                    dropdownTextStyle={tailwind('text-base')}
                    onSelect={(index = '', value = '') => setDropDownValue(value)}
                    style={[tailwind('border text-base justify-center items-center'), { width: 81, height: 23 }]} />

            </View>
            <ScrollView style={tailwind('border-2 border-gray-400 rounded-2xl')}>
                <View style={tailwind('flex-row border-b border-black')}>
                    <Text style={tailwind('font-bold text-base w-2/6 border-r border-black p-3')}>Time</Text>
                    <Text style={tailwind('font-bold text-base w-4/6 p-3')}>Lịch thu hoạch</Text>
                </View>

                <FlatList data={data} renderItem={(item) => renderItem(item)} keyExtractor={item => item.date} />

                <View style={tailwind('flex-row')}>
                    <Text style={tailwind('text-base w-2/6 border-r border-black p-3')}>Notices</Text>
                    <Text style={tailwind('text-base w-4/6 p-3')}>...</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Harvest;