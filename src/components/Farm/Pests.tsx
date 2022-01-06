import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import { FlatList } from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';

type PestsProps = {
}

const Pests: React.FC<PestsProps> = ({
}) => {
    const { styles } = useStyles(_styles);
    const data = [
        { "id": "C1", "name": "ABC", "lo": 4, "dateWork": "4/6/2020", "person": "nguyen ngoc lan", "status": "dang phat trien" },
        { "id": "C2", "name": "XYZ", "lo": 6, "dateWork": "2/5/2020", "person": "tran dinh dieu", "status": "sap hoan thanh" },
        { "id": "C4", "name": "RTY", "lo": 3, "dateWork": "10/8/2020", "person": "dinh huyen trang", "status": "tram tien do" },
        { "id": "C6", "name": "JKL", "lo": 2, "dateWork": "20/10/2020", "person": "vo hoai thuong", "status": "da hoan thanh" },
    ]
    const renderItem = ({ item = '' }) => {
        return (
            <View style={tailwind('flex-row mt-4 pb-4 border-b mx-3')}>
                <View style={[tailwind('bg-gray-300 rounded-xl mt-2'), { width: 65, height: 65 }]}>
                    <Image style={{ width: 65 }}></Image>
                </View>

                <View style={tailwind('')}>
                    <Text style={tailwind('text-base ml-2')}>Cây {item.name}</Text>
                    <View style={tailwind('flex-row ml-2')}>
                        <View style={tailwind('w-2/4')}>
                            <View>
                                <Text style={tailwind('text-base')}>Lô thửa</Text>
                                <Text style={tailwind('text-base')}>Ngày thực hiện</Text>
                                <Text style={tailwind('text-base')}>Người thực hiện</Text>
                                <Text style={tailwind('text-base')}>Trạng thái</Text>
                            </View>
                        </View>

                        <View style={tailwind('w-2/4')}>
                            <View>
                                <Text style={tailwind('text-base')}>{item.lo}</Text>
                                <Text style={tailwind('text-base')}>{item.dateWork}</Text>
                                <Text style={tailwind('text-base')}>{item.person}</Text>
                                <Text style={tailwind('text-base')}>{item.status}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Pests;