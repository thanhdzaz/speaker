import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { SearchBar } from 'react-native-elements';


type NotifiProps = {
    ownerNotifi: string;
    onPressNotifiBox?: () => void;
}

const Notifi: React.FC<NotifiProps> = ({
    ownerNotifi,
    onPressNotifiBox = () => { },
}) => {
    const { styles } = useStyles(_styles);
    const data = [
        { "id": "1", "name": "Notification 1", "content": "nice to mett you......." },
        { "id": "2", "name": "Notification 2", "content": "nice to mett you......." },
        { "id": "3", "name": "Notification 3", "content": "nice to mett you......." },
        { "id": "4", "name": "Notification 4", "content": "nice to mett you......." },
        { "id": "5", "name": "Notification 5", "content": "nice to mett you......." },
        { "id": "6", "name": "Notification 6", "content": "nice to mett you......." },
        { "id": "7", "name": "Notification 7", "content": "nice to mett you......." },
        { "id": "8", "name": "Notification 8", "content": "nice to mett you......." },
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

export default Notifi;