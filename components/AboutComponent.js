import React, { Component } from 'react';
import { Text, ScrollView, FlatList} from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';



const Vision = () =>  {

    return(
        <Card title="Our Vision"> 
            <Text>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. 
                We increase access to adventure for the public while promoting safe and respectful use of resources.
                The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. 
                We also present a platform for campers to share reviews on campsites they have visited with each other.
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
                    <Vision />
                
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default About;