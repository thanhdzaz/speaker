import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import tw from 'tailwind-rn';

// type HeaderShowProps = {
//     onPress1?: () => void;
// }

type AfterChooseSchoolProps = {
    onPressSurviceScreen?: () => void;
    onPressDetails?: () => void;
    onPressNews?: () => void;
}

const AfterChooseSchool: React.FC<AfterChooseSchoolProps> = ({
    onPressSurviceScreen = () => { },
    onPressDetails = () => { },
    onPressNews = () => { },
}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <View>
                        <View style={tw('items-center mt-6')}>
                            <View style={tw('mt-16 items-center w-7/12 flex-row justify-between')}>
                                <TouchableOpacity style={tw('w-4/12')} onPress={onPressDetails}>
                                    <Image style={tw('ml-3')} source={require('../../asset/image/examPaperSchoolTest.png')} />
                                    <Text style={tw('text-center')}>Thông tin trường học</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={onPressSurviceScreen} style={tw('w-4/12 -top-2')}>
                                    <Image style={tw('ml-3')} source={require('../../asset/image/CustomerSupport.png')} />
                                    <Text style={tw('text-center')}>Dịch vụ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={tw('w-7/12 mt-16')}>
                                <TouchableOpacity onPress={onPressNews} style={tw('w-4/12 -top-2')}>
                                    <Image style={tw('ml-3')} source={require('../../asset/image/news.png')} />
                                    <Text style={tw('text-center')}>Tin Tức</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={tw('mt-14')}>
                                <Image source={require('../../asset/image/BuildingBigIcon.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default AfterChooseSchool;