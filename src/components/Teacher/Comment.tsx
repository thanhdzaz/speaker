import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

type CommentProps = {
    onPressComment?: () => void;
}



const Comment: React.FC<CommentProps> = ({

    onPressComment = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { studentChoose } = useStores();

    return (
        <View style={tailwind('px-3')}>
            <Text style={tailwind('text-base mt-4 mb-3')}>Học sinh {studentChoose.studentChoose} - Lớp 1</Text>
            <View style={tailwind('flex-row items-center')}>
                <Icon name="calendar" size={25} style={tailwind('pl-2 pr-1')}></Icon>
                <Text style={tailwind('pr-2')}>Ngày 4/6/2021</Text>
            </View>

            <Text style={tailwind('text-lg font-bold text-center mt-5 mb-2')}>Ghi chú & Đánh giá</Text>
            <TextInput
                placeholder="Ghi Đi"
                defaultValue=""
                multiline
                numberOfLines={10}
                style={[tailwind("w-full p-2 bg-gray-300 rounded-xl text-base")]}
            />
            <View style={tailwind('justify-center items-center mt-4')}>
                <Button
                    title="Chỉ số của bé"
                    raised
                    containerStyle={{ width: 200 }}
                />
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Comment;