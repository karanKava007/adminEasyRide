import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';

export const getPincode = () => async (dispatch) => {
    try {
        let pincodedata = []
        await firestore()
            .collection('PinCode')
            .get()
            .then(querySnapshot => {
                console.log('Total Pincode: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    pincodedata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        dispatch({ type: ActionType.GET_PIN, payload: pincodedata });
    } catch (error) {
        console.log(error);
    }
}

export const postPincode = (pinCodeValue) => (dispatch) => {

    console.log(pinCodeValue);
    try {
        firestore()
            .collection('PinCode')
            .add(pinCodeValue)
            .then((doc) => {
                dispatch({ type: ActionType.POST_PIN, payload: { id: doc.id, ...pinCodeValue } })
            });
    } catch (error) {
        console.log(error);
    }
}
export const deletePincode = (id) => (dispatch) => {
    try {
        firestore()
            .collection('PinCode')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: ActionType.DELETE_PIN, payload: id })

            });
    } catch (error) {

    }
}
export const putPincode = (upPincode) => (dispatch) => {
    firestore()
        .collection('PinCode')
        .doc(upPincode.id)
        .update(upPincode)
        .then(() => {
            dispatch({ type: ActionType.PUT_PIN, payload: upPincode })
        });
}


