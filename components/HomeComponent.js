import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

const Introduction = () =>  {

    return(
        <Card title="Introduction"> 
            <Text>
                Pivot Capital is very excited to have you join our community of investors.
                We are so pleased you have made the right decision.
                Your time and financial contributions to the firm is key to our success.
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
                <Introduction/>
            </ScrollView>
        );
    }
}

export default Home;