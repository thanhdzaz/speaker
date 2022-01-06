import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import School from 'src/asset/image/school.png';
import Farm from 'src/asset/image/farm.png';
import BuildingBigIcon from 'src/asset/image/BuildingBigIcon.png';

type DirectorHomeProps = {
    onPress1?: () => void;
    onPress2?: () => void;
}

const DirectorHome: React.FC<DirectorHomeProps> = ({
    onPress1 = () => { },
    onPress2 = () => { },
}) => {
    const { styles } = useStyles(_styles);

    return (
        <View style={tailwind('justify-center items-center')}>
            <View style={[tailwind('flex-row justify-between')]}>
                <TouchableOpacity style={[tailwind('w-1/2 p-5 justify-center items-center mt-4'), styles.boxShadow]} onPress={onPress1}>
                    <Image source={School} style={{ width: 60, height: 60 }}></Image>
                    <Text style={[{ fontWeight: "400" }, tailwind('text-base text-center')]}>Trường học</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[tailwind('w-1/2 p-5 justify-center items-center mt-4'), styles.boxShadow]} onPress={onPress2}>
                    <Image source={Farm} style={{ width: 60, height: 60 }}></Image>
                    <Text style={[{ fontWeight: "400" }, tailwind('text-base text-center')]}>Farm</Text>
                </TouchableOpacity>
            </View>
            <Image source={BuildingBigIcon} style={[{ width: 166, height: 99 },tailwind('mt-4')]}></Image>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }
})

export default DirectorHome;