import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { SearchBar } from 'react-native-elements';


type ChatProps = {
    ownerChat: string;
    onPressChatBox?: () => void;
}

const Chat: React.FC<ChatProps> = ({
    ownerChat,
    onPressChatBox = () => { },
}) => {
    const { styles } = useStyles(_styles);
    const { chatBoxMainId } = useStores();
    const data = [
        { "id": "1", "name": "Azard Ward", "content": "nice to mett you......." },
        { "id": "2", "name": "David Rose", "content": "nice to mett you......." },
        { "id": "3", "name": "WillingTon", "content": "nice to mett you......." },
        { "id": "4", "name": "Jang Kim", "content": "nice to mett you......." },
        { "id": "5", "name": "Zoe", "content": "nice to mett you......." },
        { "id": "6", "name": "Martin John", "content": "nice to mett you......." },
        { "id": "7", "name": "Kaito K", "content": "nice to mett you......." },
        { "id": "8", "name": "Bruhh Lmao", "content": "nice to mett you......." },
    ]
    const renderItem = ({ item = '' }) => {
        return (
            <TouchableOpacity onPress={()=>{chatBoxMainId.setChatBoxMainId(item.name) ; onPressChatBox()}} style={[tailwind('flex-row px-5 py-3')]}>
                <View style={[tailwind('bg-gray-200 rounded-full'), { width: 50, height: 50 }]}>
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
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(text) => setSearch(text)}
                value={''}
                containerStyle={tailwind('rounded-2xl bg-white border-white')}
                inputContainerStyle={[tailwind('bg-gray-200 rounded-xl w-full'),]}
            />
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

export default Chat;