import React,{useState,useEffect} from 'react'
import { Text, View,TextInput ,Button,StyleSheet} from 'react-native'


export default function LoginScreen() {

  const [formData, setFormData] = useState({
    fName:'',
    email:'',
    mobile:'',
    age:'',
    pass:'',
  })
  const HandleChangeText = (value, fieldName) => {
    //rest Operator
    let data = {...formData};
    data[fieldName]= value;
    setFormData(data);
     
  }
  const handleSubmit =() =>{
    alert(JSON.stringify(formData));
  }
  return (
    <View style={{padding:25}}>
      <Text style={{fontWeight:'bold',color:'#000',textAlign:'center',fontSize:20}}>React Native Form</Text>
      <View>
        <View>
            <Text style={css.textType}>Name</Text>
            <TextInput style={css.textInput} placeholder="Enter your Full Name" value={formData.fName}
                                onChangeText={value => HandleChangeText(value,'fName')}/>
        </View>
        <View>
            <Text style={css.textType}>Email</Text>
            <TextInput style={css.textInput} placeholder="Enter your Email" keyboardType='email-address' value={formData.email}
                                onChangeText={value => HandleChangeText(value,'email')}/>
        </View>
        <View>
            <Text style={css.textType}>Mobile</Text>
            <TextInput style={css.textInput} placeholder="Enter your Mobile Number" keyboardType='numeric' value={formData.mobile}
                                onChangeText={value => HandleChangeText(value,'mobile')}/>
        </View>
        <View>
            <Text style={css.textType}>Age</Text>
            <TextInput style={css.textInput} placeholder="Enter your Age" keyboardType='numeric' value={formData.age}
                                onChangeText={value => HandleChangeText(value,'age')}/>
        </View>
        <View>
            <Text style={css.textType}>Password</Text>
            <TextInput style={css.textInput} placeholder="Enter Password" keyboardType='numeric' secureTextEntry={true} value={formData.pass}
                                onChangeText={value => HandleChangeText(value,'pass')}/>
        </View>
        <Button onPress={handleSubmit} title="Submit form"/>
      </View>
   
      
    </View>
  );
}

const css = StyleSheet.create({
  textInput:{
    marginHorizontal:10,
    marginVertical:10,
  
  },
  textType:{
    fontSize:15
  },
});
