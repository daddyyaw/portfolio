import React, { Component } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Icon, Input, Card } from 'react-native-elements';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const params = {
access_key: 'ae193f3a02666390aa7bcca7dbe5749f'
}

class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stock: ''
        };
    }

    static navigationOptions = {
        title: 'Pick Stock'
    }

    // resetForm() {
    //     this.setState({
    //         stock: ''
    //     });
    // }

    onStockInfo = async () => { 
        params.symbols=this.state.stock
        const response = await axios.get('http://api.marketstack.com/v1/eod/latest', {params});
        const apiResponse = response.data;
      if (Array.isArray(apiResponse['data'])) {
         apiResponse['data'].forEach(stockData => {
            console.log(`Ticker ${stockData['symbol']}\n`,
                    `OPENED at ${stockData['open']}\n`, 
                    `HIGH of ${stockData['high']}\n`,
                    `and LOW of ${stockData['low']}`);
          });
      }

    }

    render() {
        return (
            <ScrollView>

                <View style={styles.cont}>
                    <Input
                        placeholder='stock'
                        leftIconContainerStyle={{paddingRigh:10}}
                        leftIcon={{ type:"font-awesome", name:"exchange"}}
                        value={this.state.stock}
                        onChangeText={text => this.setState({ stock:text})}
                    />
                
                    <View style={styles.stockButton}>
                        <Button onPress={() => this.onStockInfo()}
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

export default Stock;