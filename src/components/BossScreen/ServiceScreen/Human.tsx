import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';
import ModalDropdown from 'react-native-modal-dropdown';

const data = [
    {
        number: 15,
        type: 'Chính thức'
    },
    {
        number: 5,
        type: 'Thực tập'
    },
    {
        number: 30,
        type: 'Thử việc'
    },
    {
        number: 10,
        type: 'Bỏ việc'
    },
    {
        number: 2,
        type: 'Còn thiếu'
    }
];


type HumanProps = {

}

const Human: React.FC<HumanProps> = ({

}) => {
    const cloneData = data.slice();
    const dataLength = data.length;
    cloneData.splice(dataLength - 1, 1);
    cloneData.splice(0, 1);
    return (
        <ScrollView>
            <View>
                <View style={tw('items-center mt-8')}>
                    <View style={tw('flex-row w-9/12')}>
                        <Text>Vị trí: </Text>
                        <ModalDropdown
                            style={tw('border w-4/12 pl-2 ml-2')}
                            options={['option 1', 'option 2']}
                            dropdownStyle={{ width: 102, marginLeft: -8.7, height: 'auto' }}
                        >
                            <Text>Chọn</Text>
                        </ModalDropdown>
                        <Image style={tw('-left-5 top-2')} source={require('../../../asset/image/dropArrow.png')} />
                    </View>

                    <View style={tw('mt-6 w-10/12')}>
                        <Text style={tw('border p-4 rounded-t-2xl')}>
                            {'Tổng số: ' + data[0].number + ' giáo viên ' + data[0].type}
                        </Text>
                        {cloneData.map((dt) => (
                            <Text style={tw('border p-4')}>
                                {'Tổng số: ' + dt.number + ' giáo viên ' + dt.type}
                            </Text>
                        ))}
                        <Text style={tw('border p-4 rounded-b-2xl')}>
                            {'Tổng số: ' + data[dataLength - 1].number + ' giáo viên ' + data[dataLength - 1].type}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default Human;