import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';
import ModalDropdown from 'react-native-modal-dropdown';

type TeachingSyllabusProps = {

}

const TeachingSyllabus: React.FC<TeachingSyllabusProps> = ({

}) => {
    return (
        <View>
            <View style={tw('items-center mt-6')}>
                <View style={tw('flex-row w-7/12')}>
                    <Text>Chọn lớp: </Text>
                    <ModalDropdown
                        style={tw('border w-5/12 pl-2')}
                        options={['Học Sinh', 'Giáo viên']}
                        dropdownStyle={{ width: 99.7, marginLeft: -9, height: 'auto' }}
                    >
                        <Text>Chọn</Text>
                    </ModalDropdown>
                    <Image style={tw('-left-5 top-2')} source={require('../../../asset/image/dropArrow.png')} />
                </View>

                <View style={tw('w-10/12')}>
                    <View style={tw('p-2 border-b')}>
                        <Text>Hat</Text>
                    </View>
                    <View>
                        <Text>Luyen chu</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default TeachingSyllabus;