import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';


export const getData = () => (dispatch) => {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data }));
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
            .then(() => {
                console.log('User added!');
            });
    } catch (error) {
    }
}
export const putData = (updata) => (dispatch) => {
    // console.log(updata);
    try {
        fetch("https://jsonplaceholder.typicode.com/posts/" + updata.id, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(updata),
        })
            .then((response) => response.json())
            .then((updata) => dispatch({ type: ActionType.PUT_DATA, payload: updata }))
            .catch((error) => { console.error("Error:", error); });
    } catch (error) {
    }
}
export const deleteData = (id) => (dispatch) => {
    try {
        fetch("hhttps://jsonplaceholder.typicode.com/posts/" + id, {
            method: "DELETE",
        })
            .then(dispatch({ type: ActionType.DELETE_DATA, payload: id }))
    } catch (error) {

    }
}
