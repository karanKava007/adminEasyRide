import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';


export const getData = () => async (dispatch) => {
    try {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data }));
        let Data = []
        await firestore()
            .collection('Post')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    Data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        dispatch({ type: ActionType.GET_FAQ, payload: Data });
    } catch (error) {
        console.log(error);
    }
}
export const postData = (data) => (dispatch) => {
    // console.log(data);
    try {
        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.POST_DATA, payload: data }))
        //     .catch((error) => { console.error("Error:", error); });

        firestore()
            .collection('Post')
            .add(data)
            .then((doc) => {
                dispatch({ type: ActionType.POST_FAQ, payload: { id: doc.id, ...data } })
            });
    } catch (error) {
    }
}
export const putData = (updata) => (dispatch) => {
    // console.log(updata);
    // try {
    //     fetch("https://jsonplaceholder.typicode.com/posts/" + updata.id, {
    //         method: "PUT", // or 'PUT'
    //         headers: {
    //             "Content-Type": "application/json",
    //         },

    //         body: JSON.stringify(updata),
    //     })
    //         .then((response) => response.json())
    //         .then((updata) => dispatch({ type: ActionType.PUT_DATA, payload: updata }))
    //         .catch((error) => { console.error("Error:", error); });
    // } catch (error) {
    // }

    firestore()
        .collection('Post')
        .doc(updata.id)
        .update(updata)
        .then(() => {
            dispatch({ type: ActionType.PUT_FAQ, payload: updata })
        });
}
export const deleteData = (id) => (dispatch) => {
    try {
        // fetch("hhttps://jsonplaceholder.typicode.com/posts/" + id, {
        //     method: "DELETE",
        // })
        //     .then(dispatch({ type: ActionType.DELETE_DATA, payload: id }))
        firestore()
            .collection('Post')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: ActionType.DELETE_FAQ, payload: id })

            });
    } catch (error) {

    }
}
