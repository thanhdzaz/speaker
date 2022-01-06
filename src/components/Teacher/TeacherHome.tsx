import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import Hocphi from 'src/asset/image/hocphi.png';
import Tintuc from 'src/asset/image/tintuc.png';
import Diemdanh from 'src/asset/image/diemdanh.png';
import Hocsinh from 'src/asset/image/hocsinh.png';
import Giaovien from 'src/asset/image/giaovien.png';
import Thongtintruong from 'src/asset/image/thongtintruong.png';
import Abum from 'src/asset/image/abum.png';

type TeacherProps = {
    onPressAlbum?: () => void;
    onPressThongTinTh?: () => void;
    onPressGiaoVien?: () => void;
    onPressHS?: () => void;
    onPressDiemDanh?: () => void;
    onPressTinTuc?: () => void;
    onPressHocPhi?: () => void;
}

const Teacher: React.FC<TeacherProps> = ({
    onPressAlbum = () => { },
    onPressThongTinTh = () => { },
    onPressGiaoVien = () => { },
    onPressHS = () => { },
    onPressDiemDanh = () => { },
    onPressTinTuc = () => { },
    onPressHocPhi = () => { },
}) => {
    const { styles } = useStyles(_styles);
    return (
        <View style={tailwind('w-full')}>
            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressAlbum}>
                    <View style={[{ height: 50 }, tailwind('items-center justify-center')]}>
                        <Image source={Abum} style={{ width: 22, height: 42 }}></Image>
                    </View>
                    <Text style={tailwind('text-base font-semibold')}>Abum</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressThongTinTh}>
                    <Image source={Thongtintruong} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Thông tin trường</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressGiaoVien}>
                    <Image source={Giaovien} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Giáo viên</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressHS}>
                    <View style={[{ height: 50 }, tailwind('items-center justify-center')]}>
                        <Image source={Hocsinh} style={{ width: 30, height: 30 }}></Image>
                    </View>
                    <Text style={tailwind('text-base font-semibold')}>Học sinh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressDiemDanh}>
                    <Image source={Diemdanh} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Điểm danh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressTinTuc}>
                    <Image source={Tintuc} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Tin tức</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('flex flex-row mt-10')}>
                <TouchableOpacity style={tailwind('w-2/6 items-center')} onPress={onPressHocPhi}>
                    <Image source={Hocphi} style={{ width: 50, height: 50 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Học phí</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Teacher;