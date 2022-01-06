import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';

type TechnologyProps = {

}

const Technology: React.FC<TechnologyProps> = ({

}) => {
    const data = [
        {
            type: 'Bảo trì và bảo mật công nghệ'
        },
        {
            type: 'Quản lý hệ thống thông tin học sinh'
        },
        {
            type: 'Lớp học và thiết bị văn phòng, phần cứng và phần mềm'
        },
        {
            type: 'Cài đặt mạng LAN / WAN và kết nối mạng'
        },
        {
            type: 'Hỗ trợ kỹ thuật cấp trang web và xử lý sự cố từ xa'
        }
    ];
    const cloneData = data.slice();
    const dataLength = data.length;
    cloneData.splice(dataLength - 1, 1);
    cloneData.splice(0, 1);
    return (
        <ScrollView>
            <View>
                <View style={tw('items-center mt-5')}>
                    <View style={tw('mt-6 w-10/12')}>
                        <Text style={tw('border p-4 rounded-t-2xl')}>
                            {data[0].type}
                        </Text>
                        {cloneData.map((dt) => (
                            <Text style={tw('border p-4')}>
                                {dt.type}
                            </Text>
                        ))}
                        <Text style={tw('border p-4 rounded-b-2xl')}>
                            {data[dataLength - 1].type}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default Technology;