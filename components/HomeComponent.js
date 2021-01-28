import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import { Card, Button, Icon} from 'react-native-elements';
import Login from './LoginComponent';



const Introduction = () =>  {

    return(
        <Card title="Welcome to the Community"> 
            <Text>
                Pivot Capital is very excited to have you join our community of investors.
                You have joined a community of dedicated investors.
            </Text> 
            <Text> </Text>
            <Text>
                You have made the right decision.
            </Text>
            <Text> </Text>
            <Text>
                You will have access to world class information to enable you make great investment choices.
            </Text>
        </Card>

    );

}

class Home extends Component {


    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('./images/IMG_PC.jpg')} style={styles.homeImage} />
                </View>
                <Introduction/>
                <Card title="Partners"> 
                <View style={styles.container}>
                    <Image source={require('./images/Bofa.jpg')} style={styles.partnerImage} />
                    <Text></Text>
                    <Image source={require('./images/fidelity.jpg')} style={styles.fidelityImage} />
                    <Image source={require('./images/jpm.jpg')} style={styles.morganImage} />
                </View>
                
                </Card>
                
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    homeImage: {
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

export default Home;