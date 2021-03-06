import React, { Component } from 'react'
import { Image,StyleSheet, View, Dimensions , Linking, ViewComponent} from 'react-native';
import { Ionicons,  FontAwesome ,  MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var { width,height } = Dimensions.get('window');
import {Button, Text, Block, Divider} from '../../components';
import ShowEnergy from '../../components/ShowEnergy';

export default class Detail extends Component {
  makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }
    Linking.openURL(phoneNumber);
  };

  render() {
    const  navigation  = this.props.navigation;
    return (
      <View style = {{flex: 1}}>
        <KeyboardAwareScrollView style = {styles.main}>
          <View>
            <Image
              style = {styles.img}
              source={require('../../assets/image-background.png')} 
            /> 
          </View>
          <View style = {{flexDirection: 'column', backgroundColor: '#F6F7F9', justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
            <View style = {{backgroundColor: 'white', borderRadius: 10 , width: width-25}}>
              <Text style={{ marginBottom: 6 , marginLeft : 15, marginTop: 8, fontSize: 24}}>
                Cho thuê nhà nguyên căn, mặt tiền 130 Phan thanh, Đà Nẵng
              </Text>
              <Block center middle style = {{flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 25 }}>
                <View style = {{flexDirection:'row'}}>
                  <ShowEnergy/>
                  <Text style = {{textTransform: 'uppercase', color: '#6E6E6E'}}> Giá: </Text>
                  <Text style = {{ color: '#F83A89'}}> 16 triệu VND/căn</Text>
                </View>
                <View style =  {{ width: width-25, height: 1 , backgroundColor: '#E9E9E9', marginTop: 10}} />
                <View style = {{flexDirection:'row', marginTop: 10}}>
                  <Block center middle style = {{flex: 1, flexDirection: 'column'}}>
                    <Text style = {{fontSize: 10 }}>CÒN PHÒNG</Text>
                    <Text style = {{fontSize: 15, color: '#F83A89'}}>Còn</Text>
                  </Block>
                  <Block center middle style = {{flex: 1, flexDirection: 'column'}}>
                    <Text style = {{fontSize: 10}}>DIỆN TÍCH</Text>
                    <Text style = {{fontSize: 15, color: '#F83A89'}}>100 m2</Text>
                  </Block>
                </View>
              </Block>
            </View>

            <View style = {{backgroundColor: 'white', borderRadius: 10 , width: width-25 , marginTop: 10}} >
              <Text style={{ marginBottom: 6 , marginLeft : 15, marginTop: 8, fontSize: 21}}>
                Địa chỉ
              </Text>
              <View style = {{flexDirection: 'row', marginLeft: 15}}>
                <MaterialCommunityIcons name = 'map-marker-outline' color = 'black' size = {22} style = {{marginTop: 8}} />
                <Text style = {{marginLeft: 8}}>K33/03 Đông Giang, Phường An Hải Tây, Sơn Trà, Đà Nẵng</Text>
              </View>
              <View style = {{flexDirection: 'row', marginLeft: 15, marginBottom: 10}}>
                <Ionicons name = 'ios-call' color = 'black' size = {21} style = {{marginTop: 5, marginLeft: 3}}/>
                <Text style = {{marginLeft: 12, marginTop: 6}}>098717840</Text>
              </View>
            </View>

            <View style = {{backgroundColor: 'white', borderRadius: 10 , width: width-25 , marginTop: 10}} >
              <Text style={{ marginBottom: 6 , marginLeft : 15, marginTop: 8, fontSize: 21}}>
                Ngày đăng
              </Text>
              <View style = {{flexDirection: 'row', marginLeft: 15, marginBottom: 10}}>
                <EvilIcons name = 'calendar' color = 'black' size = {24}  size = {22} style = {{marginTop: 8, marginLeft: 3}}/>
                <Text style = {{marginLeft: 12, marginTop: 6}}>10 Ngày trước - 25/4/2020</Text>
              </View>
            </View>

            <View style = {{backgroundColor: 'white', borderRadius: 10 , width: width-25 , marginTop: 10}} >
              <Text style={{ marginBottom: 6 , marginLeft : 15, marginTop: 8, fontSize: 21}}>
                Chi tiết
              </Text>
              <View style = {{ marginLeft: 15, marginBottom: 10 }}>
                <Text style = {{fontSize: 14, lineHeight: 25}}>Nhà đẹp, kiêng cố, 2 phòng ngủ(30m2), 1 phòng khách và bếp. </Text>
                <Text style = {{fontSize: 14, lineHeight: 25}}>Nội thất đầy đủ tiện nghi. Khu vực an ninh,</Text>
                <Text style = {{fontSize: 14, lineHeight: 25}}>Gần biển,siêu thị, trung tâm thành phố</Text>
              </View>
            </View>

          </View>
        </KeyboardAwareScrollView>
        <View style =  {{width: width, height: 1 , backgroundColor: '#E9E9E9'}} />
        <View style = {styles.below}>
          <View style = {styles.box1}>
            <Button style = {styles.button_below} onPress={this.makeCall}>
              <Ionicons name = 'ios-call' color = '#C6D1D1' size = {24} />
              <Text button style = {[styles.button_text, styles.fontSize]}>Gọi</Text>
            </Button>
          </View>
          <View style = {styles.box1}>
            <Button style = {[styles.button_below, {backgroundColor: '#4D64F0'} ]} >
              <Text button style = {styles.fontSize}>Lưu tin</Text>
            </Button>
          </View>
          <View style = {styles.box1}>
            <Button style = {styles.button_below} >
              <Text button style = {[styles.button_text, styles.fontSize, {marginLeft: 0}]}>Vị trí</Text>
              <FontAwesome name = 'map-marker' color = '#C6D1D1' size = {24} style = {{marginLeft: 10 }} />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    height: height - height/10,
  },
  img : {
    height: height/3+15,
    width: width,
  },
  below:{
    flexDirection: 'row',
    height: height/10,
  },
  box1: {
    flex: 1,
  },
  button_below: {
    borderRadius:18,
    borderWidth: 1,
    borderColor: '#C6D1D1',
    marginTop : 7,
    backgroundColor: 'white', 
    width: width/4, 
    marginLeft: width/30, 
    flexDirection: 'row',
  },
  fontSize:{
    fontSize: 18, 
  },
  button_text: {
    marginLeft : 10, 
    color: '#C6D1D1'
  },
});
 


