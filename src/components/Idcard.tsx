import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { SearchBar } from 'react-native-elements';


type IdcardProps = {
    ownerIdcard: string;
    onPressIdcardBox?: () => void;
}

const Idcard: React.FC<IdcardProps> = ({
    ownerIdcard,
    onPressIdcardBox = () => { },
}) => {
    const { styles } = useStyles(_styles);
    const data = [
        { "id": "1", "name": "Name 1", "content": "0904177224" },
        { "id": "2", "name": "Name 2", "content": "0904157324" },
        { "id": "3", "name": "Name 3", "content": "0904177224" },
        { "id": "4", "name": "Name 4", "content": "0904157324" },
        { "id": "5", "name": "Name 5", "content": "0904177224" },
        { "id": "6", "name": "Name 6", "content": "0904157324" },
        { "id": "7", "name": "Name 7", "content": "0904177224" },
        { "id": "8", "name": "Name 8", "content": "0904157324" },
    ]
    const renderItem = ({ item = '' }) => {
        return (
            <TouchableOpacity style={[tailwind('flex-row mx-5 py-3 border-b')]}>
                <View style={[tailwind('bg-gray-200 rounded-lg'), { width: 50, height: 50 }]}>
                    <Image source=''></Image>
                </View>
                <View style={[tailwind('justify-center ml-3')]}>
                    <Text style={[tailwind('text-lg font-bold')]}>{item.name}</Text>
                    <Text style={[tailwind('text-base -mt-1 text-gray-600')]}>{item.content}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={tailwind('w-full pt-2')}>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Idcard;