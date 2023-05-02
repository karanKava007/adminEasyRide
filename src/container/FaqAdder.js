import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, getData, postData, putData } from '../redux/action/FaqAdd.action'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { horizontalScale, verticalScale } from '../helper/Metric'

export default function FaqAdder() {
  const dispatch = useDispatch()
  const postDat = useSelector(state => state.fetcher)
  const [id,setId]=useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [update, setupdate] = useState(false)


  useEffect(() => {
    dispatch(getData())
  }, [])

  const AddData = () => {
    let data = {
      title: title,
      body: description,
    }
    dispatch(postData(data))
  }

  const handleDelete = (id) => {
    dispatch(deleteData(id))
  }
  const handleUpdate = (item) => {
    setId(item.id)
    setTitle(item.title)
    setDescription(item.body)
    setupdate(true)
  }
  const UpdateData = () => {
    let updata = {
      id:id,
      title: title,
      body: description,
    }
    dispatch(putData(updata))
    clearState()
  }

  const clearState = () => {
    setId('')
    setTitle('')
    setDescription('')
    setupdate(false)
  }
  return (
    <ScrollView>
      <View style={styles.fullFlex}>
        <TextInput style={styles.input} value={title} placeholder='Title' placeholderTextColor={'black'} onChangeText={setTitle} />
        <TextInput style={styles.input} value={description} placeholder='Description' placeholderTextColor={'black'} onChangeText={setDescription} />
        <View style={styles.MainTouch}>
          <TouchableOpacity style={styles.button} onPress={update ? UpdateData : AddData}>
            <Text style={styles.btnText}>Add/Update FAQ</Text>
          </TouchableOpacity>
        </View>
        {/* Api Data */}
        {
          postDat.post.map((item, index) => {
            return (
              <>
                <View style={styles.container}>
                  <View style={styles.container1}>
                    <Text style={styles.txt1}><Text style={styles.txt2}>Id:--</Text>{item.id}</Text>
                    <Text style={styles.txt1}><Text style={styles.txt2}>Title:--</Text>{item.title}</Text>
                    <Text style={styles.txt1}><Text style={styles.txt2}>Description:--</Text>{item.body}
                      <MaterialCommunityIcons name="delete" size={25} onPress={() => { handleDelete(item.id) }} />
                      <MaterialIcons name="edit" size={20} onPress={() => handleUpdate(item)} /></Text>
                  </View>
                </View>
              </>
            )
          })
        }
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems:'center',
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
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: '70%',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  MainTouch: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  // txt: {
  //   color: 'black',
  //   fontSize: 20,
  //   marginLeft: '5%',
  //   marginTop: '2%',
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