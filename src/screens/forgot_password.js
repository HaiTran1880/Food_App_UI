import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Modal,
} from 'react-native';
import R from '../assests/R';
import TextField from '../components/TextField';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPopup = props => {
  const {isVisible, onClose} = props;
  return (
    <View>
      {/* Modal */}
      <Modal
        style={{justifyContent: 'center', alignItems: 'center'}}
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modal}>
            <Image source={R.images.recover_password} />
            <Text
              style={{fontSize: 24, fontWeight: '700', textAlign: 'center'}}>
              Your password has {'\n'} been reset
            </Text>
            <Text style={{fontSize: 17, textAlign: 'center'}}>
              You'll shortly receive an email with a {'\n'} code to setup a new
              password.
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.buttonDone}>
              <Text style={{color: '#FFF', fontSize: 17, fontWeight: '600'}}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* End-Modal */}
    </View>
  );
};
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const onClose = () => {
    setModalVisible(false);
  };
  return (
    <View
      style={modalVisible ? [styles.container, styles.bg] : styles.container}>
      <StatusBar barStyle="default" hidden={false} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={R.images.icon_back} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={{fontSize: 36, fontWeight: '700'}}>Forgot password</Text>
          <Text style={{textAlign: 'center', fontSize: 16, marginTop: 10}}>
            Please enter your email address. You will {'\n'}
            receive a link to create a new password {'\n'}
            via email.
          </Text>
        </View>
        <View style={styles.touch}>
          <TextField placeholder={'Enter your email address'} />
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <ModalPopup isVisible={modalVisible} onClose={onClose} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  bg: {
    backgroundColor: 'rgba(30, 36, 50, 0.45)',
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 70 : 30,
    marginHorizontal: 20,
  },
  touch: {
    paddingTop: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 350,
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8C00',
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '700',
  },
  textInput: {
    height: 50,
    width: 350,
    borderRadius: 20,
    marginVertical: 30,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'rgba(142, 142, 147, 0.12)',
    opacity: 0.8,
  },
  modal: {
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 500,
    width: 350,
    borderRadius: 20,
    marginTop: -90,
  },
  buttonDone: {
    height: 50,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ForgotPassword;
