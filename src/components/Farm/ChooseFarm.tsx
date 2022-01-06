import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import ModalDropdown from 'react-native-modal-dropdown';
import Farm from 'src/asset/image/farm.png';
import Truck from 'src/asset/image/truck.png';
import Van from 'src/asset/image/van.png';
import { useStores } from 'src/stores';



type ChooseFarmProps = {
    // name: string;
    // staff?: string;
    // backScreen?: string;
    // backButton?: boolean;
    onPressFarm?: () => void;
    onPressLogistics?: () => void;
    onPressTravel?: () => void;
}

const ChooseFarm: React.FC<ChooseFarmProps> = ({
    onPressFarm = () => { },
    onPressLogistics = () => { },
    onPressTravel = () => { },
}) => {

    const { styles } = useStyles(_styles);
    const { location } = useStores();
    const [dropDownValue, setDropDownValue] = useState('')
    console.log(dropDownValue)
    const setLocationFunction = () => {
        location.setLocation(dropDownValue)
    }
    return (
        <View style={tailwind('w-full')}>
            <View style={tailwind('flex-row items-center mt-4 ml-6')}>
                <Text style={tailwind('text-base font-semibold mr-2')}>Chọn Farm:</Text>

                <ModalDropdown
                    defaultValue="Chọn Farm"
                    options={['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng']}
                    textStyle={tailwind('text-center text-base')}
                    dropdownTextStyle={tailwind('text-base')}
                    onSelect={(index = '', value = '') => setDropDownValue(value)}
                    style={[tailwind('border text-base justify-center items-center'), { width: 81, height: 23 }]} />
            </View>
            <View style={tailwind('flex flex-row mt-6')}>
                <TouchableOpacity style={tailwind('w-1/2 items-center')} onPress={() => { setLocationFunction(); onPressFarm() }}>
                    <Image source={Farm} style={{ width: 60, height: 60 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Farm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-1/2 items-center')} onPress={() => { setLocationFunction(); onPressLogistics() }}>
                    <Image source={Truck} style={{ width: 60, height: 60 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Logistics</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('flex flex-row mt-6')}>
                <TouchableOpacity style={tailwind('w-1/2 items-center')} onPress={() => { setLocationFunction(); onPressTravel() }}>
                    <Image source={Van} style={{ width: 60, height: 60 }}></Image>
                    <Text style={tailwind('text-base font-semibold')}>Travel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default ChooseFarm;
