import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import NhanVien from 'src/asset/image/nhanhvien.png';
import DonHang from 'src/asset/image/donhang.png';
import VanChuyen from 'src/asset/image/vanchuyen.png';
import LuuTru from 'src/asset/image/luutru.png';
import { useStores } from 'src/stores';

type LogisticsProps = {
    ownerFarm: string;
    onPressNhanVien?: () => void;
    onPressPlan?: () => void;
    onPressTransport?: () => void;
    onPressPests?: () => void;
}

const Logistics: React.FC<LogisticsProps> = ({
    ownerFarm,
    onPressNhanVien = () => { },
    onPressPlan = () => { },
    onPressTransport = () => { },
    onPressPests = () => { },
}) => {
    const { styles } = useStyles(_styles);
    const { location } = useStores();

    return (
        <View style={tailwind('w-full items-center')}>
            <View style={tailwind('flex-row pt-10')}>
                <Image source={require('../../asset/image/Truck2.png')} />
                <View style={tailwind('ml-2')}>
                    <Text style={tailwind('text-base font-semibold')}>Logistics - {location.location}</Text>
                    <Text style={tailwind('text-base font-semibold')}>Quản lý Logistics: {ownerFarm}</Text>
                </View>
            </View>

            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-1/2 items-center')} onPress={onPressNhanVien}>
                    <Image source={NhanVien} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Nhân viên</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-1/2 items-center')} onPress={onPressPlan}>
                    <Image source={DonHang} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Đơn hàng</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-1/2 items-center')} onPress={onPressTransport}>
                    <Image source={VanChuyen} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Nhật ký</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-1/2 items-center')} onPress={onPressPests}>
                    <Image source={LuuTru} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Sâu bệnh</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Logistics;