import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';

type ServiceProps = {
    onPressEatingService?: () => void;
    onPressHealthCare?: () => void;
    onPressInfrastructure?: () => void;
    onPressTeachingSyllabus?: () => void;
    onPressMarketing?: () => void;
    onPressHuman?: () => void;
    onPressTechnology?: () => void;
    onPressActivityMonitor?: () => void;
}

const Service: React.FC<ServiceProps> = ({
    onPressEatingService = () => { },
    onPressHealthCare = () => { },
    onPressInfrastructure = () => { },
    onPressTeachingSyllabus = () => { },
    onPressMarketing = () => { },
    onPressHuman = () => { },
    onPressTechnology = () => { },
    onPressActivityMonitor = () => { },
}) => {
    return (
        <View>
            <View style={tw('items-center mt-6')}>
                <View style={tw('flex-row w-full justify-around pl-4 pr-4 mt-16')}>
                    <TouchableOpacity onPress={onPressEatingService} style={tw('items-center w-2/12')}>
                        <Image source={require('../../asset/image/eat.png')} />
                        <Text>Ăn uống</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressHealthCare} style={tw('items-center w-2/12')}>
                        <Image source={require('../../asset/image/earth.png')} />
                        <Text style={tw('text-center')}>Chăm sóc sức khỏe</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressInfrastructure} style={tw('items-center w-2/12')}>
                        <Image source={require('../../asset/image/CSVC.png')} />
                        <Text style={tw('text-center')}>Cơ sở vật chất</Text>
                    </TouchableOpacity>
                </View>

                <View style={tw('flex-row w-full justify-around pl-4 pr-4 mt-12')}>
                    <TouchableOpacity onPress={onPressTeachingSyllabus} style={tw('items-center w-2/12')}>
                        <Image source={require('../../asset/image/teaching.png')} />
                        <Text>Giáo trình giảng dạy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressMarketing} style={tw('items-center w-2/12')}>
                        <Image source={require('../../asset/image/marketing.png')} />
                        <Text style={tw('text-center')}>Marketing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressHuman} style={tw('items-center w-2/12')}>
                        <Image source={require('../../asset/image/human.png')} />
                        <Text style={tw('text-center')}>Nhân lực</Text>
                    </TouchableOpacity>
                </View>

                <View style={tw('flex-row w-11/12 pr-4 mt-12')}>
                    <TouchableOpacity onPress={onPressTechnology} style={tw('items-center w-4/12')}>
                        <Image source={require('../../asset/image/techlogory.png')} />
                        <Text>Công nghệ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressActivityMonitor} style={tw('items-center w-3/12 ml-5')}>
                        <Image source={require('../../asset/image/monitoringHuman.png')} />
                        <Text style={tw('text-center')}>Giám sát hoạt động</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={tw('items-center w-2/12')}></TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
};

export default Service;

// ServiceProps.options = {
//     topBar: {
//         visible: false,
//     }
// };