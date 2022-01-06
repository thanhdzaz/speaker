import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';

type ProductInformationProps = {

    onPressProductInformation?: () => void;

}



const ProductInformation: React.FC<ProductInformationProps> = ({

    onPressProductInformation = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { productChoose } = useStores();

    // const dataFarmThuHoachThang = [
    //     { "id": 0, "name": "ổi", "id": "ADJ01B", "image": "https://fujimart.vn/image/cache/catalog/rau%20cu%20qua/1497333763855_9565434-502x502.png", "due":"4/6/2021", "weight":15 , "value": 300 },
    //     { "id": 1, "name": "chuối", "id": "CD280S", "image": "https://fujimart.vn/image/cache/catalog/rau%20cu%20qua/1497333763855_9565434-502x502.png", "due":"2/10/2021", "weight":15 , "value": 1000 }
    // ]

    return (
        <View style={tailwind('w-full ')}>
            <Text style={tailwind('text-lg py-2 px-4 font-bold bg-red-300')}>Thông tin sản phẩm</Text>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base bg-gray-200 py-2 pt-5 pl-3')}>Loại quả</Text>
                <View style={tailwind('w-4/6 ml-5 my-2')}>
                    <Image style={[{width:50,height:50},tailwind('rounded-lg bg-gray-300')]}></Image>
                </View>
            </View>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Mã truy xuất</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base')}>ADJ123</Text>
            </View>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Tên sản phẩm</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base capitalize')}>{productChoose.productChoose}</Text>
            </View>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Ngày đóng gói</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base')}>4/6/2021</Text>
            </View>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Hạn sử dụng</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base')}>30 ngày</Text>
            </View>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Trọng lượng</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base')}>15 Kg</Text>
            </View>
            <Text style={tailwind('text-lg py-2 px-4 font-bold bg-red-300')}>Thông tin nhà sản xuất</Text>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Logo</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base')}>...</Text>
            </View>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Tên nhà sản xuất</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base')}>GreenFarm</Text>
            </View>
            <View style={tailwind('flex-row border-b border-gray-400')}>
                <Text style={tailwind('w-2/6 h-full text-base justify-center items-center bg-gray-200 py-2 pl-3')}>Điện thoại</Text>
                <Text style={tailwind('w-4/6  ml-5 text-base')}>0878667222</Text>
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default ProductInformation;