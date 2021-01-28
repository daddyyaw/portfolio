import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon, View, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
      MailComposer.composeAsync({
          recipients: ['info@pivotcapital.com'],
          subject: 'Inquiry',
          body: 'To whom it may concern:'
      })
  }

    render() {
        return (
            <ScrollView>
              <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card title="HQ Location" wrapperStyle={{ margin: 20 }}>
                  <Text> Pivot Capital</Text>
                  <Text> 1000 Capital Way</Text>
                  <Text> Atlanta, GA 10001</Text>
                  <Text> U.S.A.</Text>
                  <Text></Text>
                </Card>
                <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
                  <Text>Phone: 1-888-666-7777</Text>
                  <Text>Email: info@pivotcapital.com</Text>
                  <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                </Card>
                <Card title="Social Media" wrapperStyle={{ margin: 20 }}>
                
                  <SocialIcon
                          type="facebook"
                          onPress={() => {
                            alert('facebook');
                          }}
                   />
                    
                      <SocialIcon
                          type="twitter"
                          onPress={() => {
                            alert('twitter');
                          }}
                      />
                  
                    <SocialIcon
                      type="instagram"
                      onPress={() => {
                        alert('instagram');
                      }}
                    />
                  
                
                </Card>

              </Animatable.View>
              
            </ScrollView>
          );
        }
}

export default Contact;