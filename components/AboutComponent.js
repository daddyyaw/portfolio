import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, Image} from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';



const Vision = () =>  {

    return(
        <Card title="Our Vision"> 
            
            <Text>
                We pledge to provide a unique platform for our members. 
                We are a bridge to world class technology.
                
            </Text>
            <Text></Text>
            <Text>
                We partner with world class organizations. 
                We give you access to the best operators.
            </Text>
        </Card>
        
    );

}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

    
        return (
            <ScrollView>
                
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>

                <View style={styles.container}>
                    <Image source={require('./images/IMG_PC.jpg')} style={styles.aboutImage} />
                </View>
                    <Vision />
                    
                    <Card title="Partners"> 
                <View style={styles.container}>
                    <Image source={require('./images/Bofa.jpg')} style={styles.partnerImage} />
                    <Text></Text>
                    <Image source={require('./images/fidelity.jpg')} style={styles.fidelityImage} />
                    <Image source={require('./images/jpm.jpg')} style={styles.morganImage} />
                </View>
                
                </Card>
                
                </Animatable.View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    aboutImage: {
        margin: 20,
        height: 80,
        width: 80
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f54257'
    },
    partnerImage: {
        margin: 20,
        height: 20,
        width: 200
    },

    fidelityImage: {
        margin: 20,
        height: 30,
        width: 200
    },
    morganImage: {
        margin: 20,
        height: 40,
        width: 200
    }

});


export default About;