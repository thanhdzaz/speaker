import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import ModalDropdown from 'react-native-modal-dropdown';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import navigation from 'src/services/navigation';


type TeacherListProps = {
    onPressTeacherList?: () => void;
    cId?: () => '';
}



const TeacherList: React.FC<TeacherListProps> = ({

    onPressTeacherList = () => { },
    cId = () => {''},

}) => {
    const { styles } = useStyles(_styles);
    const { TeacherData } = useStores();
    const data = [
        { "id": "GV1309", "name": "Nguyễn Thị A" },
        { "id": "GV1310", "name": "Nguyễn Thị B" },
        { "id": "GV1311", "name": "Nguyễn Thị C" },
        { "id": "GV1312", "name": "Nguyễn Thị D" },
  
    ]
    const renderItem = ({ item = '' }) => {
        return (
            <TouchableOpacity style={tailwind('flex-row border-b border-black')} onPress={()=>{TeacherData.setTeacherData(item);navigation.pushTeacherDetailsScreen(cId)}}>
                <Text style={tailwind('text-base w-2/6 border-r p-3')}>{item.id}</Text>
                <Text style={tailwind('text-base w-4/6 p-3')}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={tailwind('w-full px-5')}>
            <ScrollView style={tailwind('border-2 border-gray-400 rounded-2xl pb-3')}>
                <View style={tailwind('flex-row border-b border-black')}>
                    <Text style={tailwind('font-bold text-base w-2/6 border-r border-black p-3')}>MS</Text>
                    <Text style={tailwind('font-bold text-base w-4/6 p-3')}>Họ Tên</Text>
                </View>

                <FlatList data={data} renderItem={(item) => renderItem(item)} keyExtractor={item => item.date} />

                
            </ScrollView>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default TeacherList;