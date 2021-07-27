import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Platform,
  SafeAreaView,
} from 'react-native';
import R from '../assests/R';
import {SliderBox} from 'react-native-image-slider-box';
import {useNavigation} from '@react-navigation/native';
import TextField from '../components/TextField';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Login = () => {
  const navigation = useNavigation();
  const os = Platform.OS;
  const [images, setImages] = useState([
    R.images.banner,
    R.images.banner1,
    R.images.banner3,
  ]);
  return (
    <View style={styles.container}>
      {os === 'ios' ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar hidden={true} />
      )}
      <View style={styles.banner}>
        <SliderBox
          images={images}
          //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          //currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
          dotColor="#FFF"
          inactiveDotColor="gray"
          sliderBoxHeight={(HEIGHT / 10) * 4}
          autoplay={true}
          dotStyle={{
            width: 13,
            height: 13,
            borderRadius: 15,
            marginHorizontal: -5,
            padding: 0,
            margin: 15,
          }}
        />
      </View>
      <View style={styles.logIn}>
        <View style={styles.text}>
          <Text style={{fontSize: 36, fontWeight: '600'}}>Welcom back</Text>
          <Text style={{color: 'gray', marginVertical: 10, fontSize: 15}}>
            Login to your account
          </Text>
        </View>
        <View style={styles.input}>
          <TextField
            placeholder={'Email'}
            placeholderTextColor="gray"
            // error={'error'}
          />
          <TextField
            placeholder={'Password'}
            placeholderTextColor="gray"
            // error={'error'}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TABBAR')}
            style={[styles.button, styles.bgButtonLogin]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FORGOTPASSWORKSCREEN')}>
            <Text style={{fontSize: 17, marginVertical: 15}}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CREATEACOUNSCREEN')}>
              <Text style={{color: 'gray', fontSize: 15}}>
                Don't have an account?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('CREATEACOUNSCREEN')}>
              <Text style={{color: '#FF8C00', fontSize: 15}}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 4,
  },
  logIn: {
    flex: 6,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: -20,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    marginVertical: 30,
  },
  button: {
    width: 350,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  bgButtonLogin: {
    backgroundColor: '#FF8C00',
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
export default Login;
