import React from 'react';
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';
import { services } from 'src/services';

type HeaderShowProps = {
    onPress1?: () => void;
}

const PrincipalScreenHome: React.FC<HeaderShowProps> = ({
    onPress1 = () => { },
}) => {
    return (
        <SafeAreaView style={{flex:1}}>

        <View>
            <View style={tw('mt-3 ml-6')}>
                <Text style={tw('text-base')}>Trường Lê Quý Đôn</Text>
            </View>
            <View style={tw('items-center')}>
                <View style={tw('mt-16 items-center w-7/12 flex-row justify-between')}>
                    <TouchableOpacity style={tw('w-4/12')} onPress={() => services.nav.SchoolInformation()}>
                        <Image style={tw('ml-3')} source={require('../../asset/image/examPaperSchoolTest.png')} />
                        <Text style={tw('text-center')}>Thông tin trường học</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw('w-4/12 -top-2')}>
                        <Image style={tw('ml-3')} source={require('../../asset/image/CustomerSupport.png')} />
                        <Text style={tw('text-center')}>Dịch vụ</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw('mt-32')}>
                    <Image source={require('../../asset/image/school.png')} />
                </View>
            </View>
        </View>
        </SafeAreaView>

    )
};

export default PrincipalScreenHome;