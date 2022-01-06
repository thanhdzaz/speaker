import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Ionicons';
import { useStores } from 'src/stores';

type HeaderShowProps = {
    name: string;
    srcImg: string;
    backButton?: boolean;
    HeaderName:string;
    onPressBack?: () => void;
}

const HeaderShow: React.FC<HeaderShowProps> = ({
    name,
    backButton,
    srcImg,
    HeaderName,
    onPressBack = () => { },
}) => {
    const { styles } = useStyles(_styles);
    const { chatBoxMainId } = useStores();

    if (backButton == false) {
        return (
            <SafeAreaView>
                <View style={[tailwind('flex-row items-center px-5'), { backgroundColor: "#71E4DE", height: 60 }]}>
                    <View style={tailwind('flex-row items-center')}>
                        <View style={[tailwind('bg-gray-300 rounded-full mr-2'), { width: 40, height: 40 }]}>
                            <Image source=''></Image>
                        </View>
                        <Text style={tailwind('text-2xl font-bold text-black tracking-wide')}>{HeaderName}</Text>
                    </View>
                </View>

            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView>
                <View style={[tailwind('flex-row items-center px-5 justify-between'), { backgroundColor: "white", height: 60 }]}>
                    <TouchableOpacity onPress={onPressBack}>
                        <Icon name='arrow-back' size={30} color="#465efc"></Icon>
                    </TouchableOpacity>
                    <View style={tailwind('justify-center items-center')}>
                        <Text style={tailwind('text-xl font-bold')}>{chatBoxMainId.chatBoxMainId}</Text>
                        <Text style={tailwind('text-gray-500 text-sm')}>online</Text>
                    </View>
                    <View style={[tailwind('rounded-full bg-gray-400'),{width:40,height:40}]}>
                        <Image></Image>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default HeaderShow;