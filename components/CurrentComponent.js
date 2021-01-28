import React, { Component } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import axios from 'axios';

const params = {
access_key: 'ae193f3a02666390aa7bcca7dbe5749f'
}

class Current extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: ''
        };

        this.onStockInfo();
    }

    static navigationOptions = {
        title: 'Pick Currency'
    }
    
    render() {
        return (
            <ScrollView>

                <View style={styles.cont}>
                    <Input
                        placeholder='currency'
                        leftIconContainerStyle={{paddingRigh:10}}
                        leftIcon={{ type:"font-awesome", name:"exchange"}}
                        value={this.state.currency}
                        onChangeText={text => this.setState({ currency:text})}
                    />
                
                    <View style={styles.stockButton}>
                    <Button 
                                color='#5637DD'
                                title='Submit'
                        />
                    </View>
                </View>

            </ScrollView>
          );
        }
}

const styles = StyleSheet.create({
    cont: {
        justifyContent: 'center',
        margin: 20
    },
    stockButton: {
        margin: 40
    }
});

export default Current;