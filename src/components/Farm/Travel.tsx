import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import Hotel from 'src/asset/image/hotel.png';
import Flight from 'src/asset/image/plane.png';
import Train from 'src/asset/image/train.png';
import Hdct from 'src/asset/image/hdct.png';
import { useStores } from 'src/stores';

type LogisticsProps = {
    ownerFarm: string;
    onPressHotel?: () => void;
    onPressFlight?: () => void;
    onPressTrain?: () => void;
    onPressHdct?: () => void;
}

const Logistics: React.FC<LogisticsProps> = ({
    ownerFarm,
    onPressHotel = () => { },
    onPressFlight = () => { },
    onPressTrain = () => { },
    onPressHdct = () => { },
}) => {
    const { styles } = useStyles(_styles);
    const { location } = useStores();

    return (
        <View style={tailwind('w-full')}>
            <View style={tailwind('flex-row pt-10 pl-10')}>
                <Icon name='business-outline' size={18} style={tailwind('mr-2')}></Icon>
                <Text style={tailwind('text-base font-semibold')}>Quản lý Travel: {ownerFarm}</Text>
            </View>

            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressHotel}>
                    <Image source={Hotel} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Hotel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressFlight}>
                    <Image source={Flight} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Flights</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressTrain}>
                    <Image source={Train} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Trains</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressHdct}>
                    <Image source={Hdct} style={{ width: 50, height: 50 }}></Image>
                    <Text style={[tailwind('text-base font-semibold text-center'),{width:100}]}>Hoạt động cho trẻ</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Logistics;