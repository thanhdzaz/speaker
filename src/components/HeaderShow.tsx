import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions, Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import useStyles from 'src/hooks/useStyles';
import Bounceable from './Bounceable';
import tailwind from 'tailwind-rn';
import Avatar from 'src/asset/image/avatar.png';

type HeaderShowProps = {
    name: string;
    title: string;
    staff: string;
    backButton?: boolean;
    onPressBack?: () => void;
}

const HeaderShow: React.FC<HeaderShowProps> = ({
    name,
    backButton,
    title,
    staff,
    onPressBack = () => { },
}) => {
    const { styles } = useStyles(_styles);

    if (backButton == false) {
        return (
            <SafeAreaView>
                {/* {Platform.OS === 'ios' && <View style={[{ height: 50 }, tailwind('w-full bg-red-300')]}></View>} */}
                {/* {Platform.OS === 'macos' && <View style={[{ height: 50 }, tailwind('w-full bg-red-300')]}></View>} */}
                <View style={[tailwind('p-2 flex-row justify-between items-center justify-end'), { backgroundColor: "#71E4DE", height: 60 }]}>
                    <View style={tailwind('flex-row items-center')}>
                        <View>
                            <Text style={[tailwind('text-black text-right text-base'), { lineHeight: 17 }]}>Xin chào <Text style={[tailwind('text-black text-base capitalize font-bold'),]}>{name}</Text> </Text>
                            <Text style={[tailwind('text-black capitalize text-right text-base'), { lineHeight: 17 }]}>{staff}</Text>
                        </View>
                        <View style={[tailwind('rounded-full m-2'), { width: 23, height: 23 }]}><Image source={Avatar} style={{ width: 23, height: 23 }}></Image></View>
                    </View>
                </View>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView>
                {/* {Platform.OS === 'ios' && <View style={[{ height: 50 }, tailwind('w-full bg-red-300')]}></View>} */}
                {/* {Platform.OS === 'macos' && <View style={[{ height: 50 }, tailwind('w-full bg-red-300')]}></View>} */}
                <View style={[tailwind('p-2 flex-row justify-between items-center'), { backgroundColor: "#71E4DE", height: 60 }]}>
                    <TouchableOpacity onPress={onPressBack}><Icon name='caret-back' size={30} color={'white'}></Icon></TouchableOpacity>
                    <Text style={tailwind('font-bold text-base')}>{title}</Text>
                    <View style={[tailwind('rounded-full m-2'), { width: 23, height: 23 }]}><Image source={Avatar} style={{ width: 23, height: 23 }}></Image></View>
                </View>
            </SafeAreaView>
        )
    }
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default HeaderShow;