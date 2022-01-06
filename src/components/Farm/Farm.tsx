import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import Thongtin from 'src/asset/image/thongtin.png';
import Kehoach from 'src/asset/image/kehoach.png';
import Nhatky from 'src/asset/image/nhatky.png';
import Saubenh from 'src/asset/image/saubenh.png';
import Thoitiet from 'src/asset/image/thoitiet.png';
import Lichthuhoach from 'src/asset/image/thuhoach.png';
import Donggoi from 'src/asset/image/donggoi.png';
import { useStores } from 'src/stores';

type FarmProps = {
    ownerFarm: string;
    onPressThongTin?: () => void;
    onPressKeHoach?: () => void;
    onPressNhatKy?: () => void;
    onPressSauBenh?: () => void;
    onPressThoiTiet?: () => void;
    onPressThuHoach?: () => void;
    onPressDongGoi?: () => void;
}

const Farm: React.FC<FarmProps> = ({
    ownerFarm,
    onPressThongTin = () => { },
    onPressKeHoach = () => { },
    onPressNhatKy = () => { },
    onPressSauBenh = () => { },
    onPressThoiTiet = () => { },
    onPressThuHoach = () => { },
    onPressDongGoi = () => { },
}) => {
    const { styles } = useStyles(_styles);
    const { location } = useStores();
    return (
        <View style={tailwind('w-full')}>
            <View style={tailwind('flex-row pt-10 pl-5')}>
                <Icon name='home-outline' size={18} style={tailwind('mr-2')}></Icon>
                <Text style={tailwind('text-base font-semibold')}>Farm - {location.location}</Text>
            </View>

            <Text style={tailwind('text-base font-semibold pl-10 pt-2')}>Quản lý farm: {ownerFarm}</Text>

            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressThongTin}>
                    <Image source={Thongtin} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressKeHoach}>
                    <View style={[{ height: 50 }, tailwind('items-center justify-center')]}>
                        <Image source={Kehoach} style={{ width: 22, height: 42 }}></Image>
                    </View>
                    <Text style={tailwind('text-base font-semibold')}>Kế hoạch</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressNhatKy}>
                    <Image source={Nhatky} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Nhật ký</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressSauBenh}>
                    <View style={[{ height: 50 }, tailwind('items-center justify-center')]}>
                        <Image source={Saubenh} style={{ width: 30, height: 30 }}></Image>
                    </View>
                    <Text style={tailwind('text-base font-semibold')}>Sâu bệnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressThoiTiet}>
                    <Image source={Thoitiet} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Thời tiết</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressThuHoach}>
                    <Image source={Lichthuhoach} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Lịch thu hoạch</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressDongGoi}>
                    <Image source={Donggoi} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Đóng gói</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Farm;