import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';

type ActivityMonitorProps = {

}

const ActivityMonitor: React.FC<ActivityMonitorProps> = ({

}) => {
    const data = [
        {
            type: 'Kiểm tra hàng ngày và định kỳ các dịch vụ, tiện ích của Tòa nhà'
        },
        {
            type: 'Quản lý, giám sát hoạt động các bộ phận, để duy trì dịch vụ tốt nhất đến khách hàng'
        },
        {
            type: 'Tham gia xây dựng, cập nhật và triển khai hệ thống quy trình quản lý'
        },
        {
            type: 'Thực hiện vai trò là cầu nối thông tin giữa khách hàng,...'
        },
        {
            type: 'Giám sát tính tuân thủ quy trình an ninh, làm sạch, kiểm soát côn trùng, rác thải, sân vườn, bảo trì kỹ thuật… Đảm bảo duy trì các tiêu  chuẩn an toàn, an ninh, vệ sinh, cảnh quan…'
        }
    ];
    const cloneData = data.slice();
    const dataLength = data.length;
    cloneData.splice(dataLength - 1, 1);
    cloneData.splice(0, 1);

    return (
        <ScrollView>
            <View>
                <View style={tw('items-center mt-6')}>
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

export default ActivityMonitor;
