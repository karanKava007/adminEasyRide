import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPincode, deletePincode, getPincode, postPincode, putPincode } from '../redux/action/Pincode.action'
import { horizontalScale, verticalScale } from '../helper/Metric'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { deleteData } from '../redux/action/FaqAdd.action'
import { ScrollView } from 'react-native-gesture-handler'

export default function PincodeAdder() {
    const [id, setId] = useState()
    const [pincode, setPincode] = useState()
    const [update, setupdate] = useState(false)

    const dispatch = useDispatch()
    const getPin = useSelector(state => state.pinCds)
    useEffect(() => {
        dispatch(getPincode())
    }, [])

    const makPincode = () => {
        const pinCodeValue = {
            // id: id,
            pincode: pincode,
        }
        dispatch(postPincode(pinCodeValue))
    }
    const handleDelete = (id) => {
        dispatch(deletePincode(id))
    }

    const handleUpdate = (item) => {
        setId(item.id)
        setPincode(item.pincode)
        setupdate(true)
    }
    const UpdatePincode = () => {
        let upPincode = {
            id: id,
            pincode: pincode
        }
        dispatch(putPincode(upPincode))
        clearState()
    }

    const clearState = () => {
        setPincode('')
        setupdate(false)
    }
    return (
        <ScrollView>
            <View style={styles.fullFlex}>
                <TextInput style={styles.input} placeholder='PinCode' keyboardType='numeric' maxLength={6} placeholderTextColor={'black'} value={pincode} onChangeText={setPincode} />
                <View style={styles.MainTouch}>
                    <TouchableOpacity style={styles.button} onPress={update ? UpdatePincode : makPincode}>
                        <Text style={styles.btnText}>Add/Update PinCode</Text>
                    </TouchableOpacity>
                </View>
                {
                    getPin.PinCodes.map((i, data) => {

                        return (
                            <>
                                <View style={styles.container}>
                                    <View style={styles.container1}>
                                        <Text style={styles.txt1}><Text style={styles.txt2}>Id:--</Text>{i.id}</Text>
                                        <Text style={styles.txt1}><Text style={styles.txt2}>PinCode:--</Text>{i.pincode}
                                            <MaterialCommunityIcons name="delete" size={25} onPress={() => { handleDelete(i.id) }} />
                                            <MaterialIcons name="edit" size={20} onPress={() => handleUpdate(i)}/></Text>
                                    </View>
                                </View>
                            </>
                        )
                    })
                }
            </View >
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    fullFlex: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    input: {
        borderColor: '#777',
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 15,
        color: 'black',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#194AF9',
        paddingVertical: 15,
        width: '70%',
        borderRadius: 10,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    MainTouch: {
        alignItems: 'center'
    },
    // txt: {
    //     color: 'black',
    //     fontSize: 20,
    //     marginLeft: '5%',
    //     marginTop: '2%',
    // },
    txt1: {
        color: '#898989',
        fontSize: 15,
        marginLeft: '5%',
        marginTop: '2%',
    },
    txt2: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
    },
    container: {
        alignItems: 'center',
    },
    container1: {
        backgroundColor: 'white',
        height: verticalScale(150),
        width: horizontalScale(330),
        marginTop: '5%',
        borderRadius: 10,
        // borderWidth: 1,
        borderRadius: 10,
        elevation: 10,
    },
})