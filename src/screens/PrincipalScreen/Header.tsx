import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import useStyles from 'src/hooks/useStyles';
import tw from 'tailwind-rn';

type HeaderShowProps = {
    name: string;
    staff?: string;
    backScreen?: string;
    backButton?: boolean;
    link?: object;
    onPress?: () => void;
}

const HeaderShow: React.FC<HeaderShowProps> = ({
    name,
    staff,
    backScreen,
    backButton,
    link,
    onPress = () => { },
}) => {
    const { styles } = useStyles(_styles);

    return (
        <View style={tw('bg-green-300 p-2 pl-4 pr-4 pt-4 flex-row justify-between items-center')}>
            <View>
                {backButton !== false ? <TouchableOpacity onPress={() => link()}><Image source={require('../../asset/image/buttonBack.png')} /></TouchableOpacity> : null}
            </View>
            <View style={tw('flex-row')}>
                <View style={tw('mr-14')}>
                    <Text style={tw('text-black')}><Text style={tw('text-black text-xl capitalize font-bold')}>{name}</Text> </Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../asset/image/avatar2.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default HeaderShow;