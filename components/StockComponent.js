import React, { Component } from 'react';
import { ScrollView, View, Button, StyleSheet, Text, Image } from 'react-native';
import { Icon, Input, Card } from 'react-native-elements';
import axios from 'axios';
import { Alert } from 'react-native';

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
            Alert.alert(`Ticker ${stockData['symbol']}\nOPENED at ${stockData['open']}\nHIGH of ${stockData['high']}\n and LOW of ${stockData['low']}`);
          });
      }

    }

    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <Image source={require('./images/IMG_PC.jpg')} style={styles.homeImage} />
                </View>
                <Card title= "Your Portfolio" wrapperStyle={{ margin: 20 }}>
                
                    <View style={styles.cont}>
                        <Text> Input company sticker symbol </Text>
                        <Text></Text>
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
                </Card>
                
                

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
    },
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
    titlePage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f54257',
        color:'blue'
    }
});

export default Stock;