import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';
import { observer } from 'mobx-react';
import navigation from 'src/services/navigation';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from 'src/components/HeaderShow';

type InfrastructureProps = {

}

const Infrastructure: React.FC<InfrastructureProps> = ({

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
                                options={['Học Sinh', 'Giáo viên', 'Trường']}
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

                    <View style={tw('mt-10 w-10/12')}>
                        <View style={tw('mb-5')}>
                            <Text>Thiết kế phát triển: </Text>
                        </View>
                        <View style={tw('mb-5')}>
                            <Text>Quản lý và lập kế hoạch vốn: </Text>
                        </View>
                        <View style={tw('mb-5')}>
                            <Text>Quản lý kiểm tra định kì: </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default Infrastructure;