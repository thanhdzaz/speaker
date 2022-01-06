import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';
import navigation from 'src/services/navigation';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from 'src/components/HeaderShow';

const data = [
    {
        month: 1,
        day: [
            {
                d: 2,
            },
            {
                d: 5,
            },
            {
                d: 25,
            }
        ]
    },
    {
        month: 2,
        day: [
            {
                d: 2,
            },
            {
                d: 5,
            }
        ]
    },
    {
        month: '',
        day: [

        ]
    },
    {
        month: '',
        day: [

        ]
    },
    {
        month: '',
        day: [

        ]
    },
    {
        month: '',
        day: [

        ]
    }
]

type HealthCareProps = {

}

const HealthCare: React.FC<HealthCareProps> = ({

}) => {
    return (
        <ScrollView>
            <View>
                <View style={tw('items-center mt-6')}>
                    <View style={tw('flex-row w-10/12')}>
                        <View style={tw('flex-row w-6/12')}>
                            <Text>Đối tượng: </Text>
                            <ModalDropdown
                                style={tw('border w-7/12 pl-2')}
                                options={['Học Sinh', 'Giáo viên']}
                                dropdownStyle={{ width: 99.7, marginLeft: -9, height: 'auto' }}
                            >
                                <Text>Chọn</Text>
                            </ModalDropdown>
                            <Image style={tw('-left-5 top-2')} source={require('../../../asset/image/dropArrow.png')} />
                        </View>

                        <View style={tw('w-6/12 ml-6 flex-row')}>
                            <Text>Chọn lớp: </Text>
                            <ModalDropdown
                                style={tw('border w-7/12 pl-2')}
                                options={['option 1', 'option 2']}
                                dropdownStyle={{ width: 99.7, marginLeft: -9, height: 'auto' }}
                            >
                                <Text>Chọn</Text>
                            </ModalDropdown>
                            <Image style={tw('-left-5 top-2')} source={require('../../../asset/image/dropArrow.png')} />
                        </View>
                    </View>

                    <View style={tw('w-10/12 mt-12')}>
                        <View style={tw('p-2 border rounded-t-2xl')}>
                            <Text style={tw('text-center')}>Time</Text>
                        </View>
                        {data?.map((rs) => (
                            <View style={tw('flex-row')}>
                                <View style={tw('w-3/12 border border-t-0 p-2')}>
                                    <Text>{'Tháng ' + rs.month}</Text>
                                </View>
                                <View style={tw('w-9/12 border border-t-0 border-l-0 p-2')}>
                                    {rs.day?.map((d) => (
                                        <Text style={tw('pb-1')}>{' - Ngày ' + d.d}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default HealthCare;
