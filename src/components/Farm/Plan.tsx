import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import ModalDropdown from 'react-native-modal-dropdown';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

type PlanProps = {
    onPressPlan?: () => void;
}



const Plan: React.FC<PlanProps> = ({

    onPressPlan = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { productChoose } = useStores();
    const [DropDownValue, setDropDownValue] = useState('')
    const data = [
        { "date": "2", "plan": "Tưới cây 2 lần" },
        { "date": "3", "plan": "Phun thuốc" },
        { "date": "4", "plan": "Nhổ cỏ" },
        { "date": "5", "plan": "Tưới cây 2 lần" },
        { "date": "6", "plan": "Kệ cây" },
        { "date": "7", "plan": "Tưới nước" },
        { "date": "CN", "plan": "Tưới cây" },
    ]
    const renderItem = ({ item = '' }) => {
        return (
            <View style={tailwind('flex-row border-b border-black')}>
                <Text style={tailwind('text-base w-2/6 border-r p-3')}>{item.date}</Text>
                <Text style={tailwind('text-base w-4/6 p-3')}>{item.plan}</Text>
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
                    <Text style={tailwind('font-bold text-base w-4/6 p-3')}>Kế hoạch</Text>
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

export default Plan;