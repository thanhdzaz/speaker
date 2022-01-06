import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Ionicons';


type chatBoxProps = {
    ownerchatBox: string;
}

const chatBox: React.FC<chatBoxProps> = ({
    ownerchatBox,
}) => {
    const { styles } = useStyles(_styles);

    return (
        <View style={[tailwind('w-full pt-2 h-full'), { flex: 1 }]}>
            <View style={[tailwind('flex-row  items-center p-3'),]}>
                <TextInput
                    placeholder="Type a message"
                    style={tailwind('border rounded-xl border-gray-500 w-5/6 px-3')}
                />
                <TouchableOpacity style={tailwind('w-1/6 ml-2')}><Icon name="send" size={30} color="#465efc" style={tailwind('text-center')}/></TouchableOpacity>
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default chatBox;