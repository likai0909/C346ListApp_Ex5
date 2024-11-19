import React from 'react';
import {View, SectionList, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Menu= [
    {
        title: "Western", bgColor: '#A7C7E7',
        data: [{name: "Classic Beef Burger", image: "https://truththeory.com/wp-content/uploads/2020/10/Beef-Burger-scaled.jpg", description: "A juicy beef patty served with lettuce, tomato, and cheese, all packed in a soft bun.",price:"6.80" },
               {name: "Fish and Chips", image:"https://th.bing.com/th/id/OIP.pACcaagp8Lt5W31kLdb4hAHaFj?rs=1&pid=ImgDetMain", description: "Crispy battered fish fillets served with golden fried potato chips and a side of tartar sauce.",price:"7.80"}]
    },
    {
        title: "Local", bgColor: '#E6A7A7',
        data: [{name: "Minced meat noodle", image:"https://4.bp.blogspot.com/-ml44xt0Axyw/UzSdh-LXlDI/AAAAAAAANoQ/yc-Zy88wsdA/s1600/taiwanese+minced+meat+noodle+dish+recipe.jpg", description: "Delicious noodles topped with savory minced pork, soy sauce, and a sprinkle of fresh herbs.",price:"5.80"},
               {name: "Chicken rice", image:"https://th.bing.com/th/id/R.3aa89eda87655ddb8deaed86497e43d8?rik=m3NRbhQ6XupGKQ&riu=http%3a%2f%2fwww.visitsingapore.com%2fcontent%2fdam%2fdesktop%2fglobal%2fdining-drinks-singapore%2flocal-dishes%2fhainanese-chicken-rice-carousel01-square.jpeg&ehk=rw73zPQiUdGHILU0W5g3ZwhgKDQXt1Jufrk5iDcaemA%3d&risl=&pid=ImgRaw&r=0", description: "Tender poached chicken served with fragrant rice, accompanied by chili sauce and ginger paste.", price:"4.80"}]
    },
];

const renderItem = ({ item }) => {
    return <FoodItem name={item.name} image={item.image} description={item.description} price={item.price} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        marginTop: 20
    },

    image: {
        width: '100%',
        height: 250,
        borderRadius: 15, //Round
        marginTop: 30
    },
    text:{
        fontWeight: 'bold',//Bold
        fontStyle: 'italic',//Italic
        marginTop: 50, //Space
        textAlign: 'center',
        fontSize: 28,
        padding: 10
    },
    name: {
        fontWeight: 'bold',//Bold
        fontStyle: 'italic',
        textAlign:'center',
        marginTop: 50,
        fontSize:24
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
        paddingHorizontal: 10,
    },
    button:{
        marginTop:8,
        marginBottom:8
    },
    menuHeader: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
        padding: 20,
        color: '#fff',
        backgroundColor:'black'
    },
})

function FoodItem({ name, image, description , price}) {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.description}>{description}</Text>
                <Text style={{ textAlign: 'center' }}>${price}</Text>
                <View style={styles.button}>
                    <Button title="Order" onPress={() => alert('Order placed!')}/>
                </View>
            </View>
        </View>
    );
}

const App = () => {
    return (
        <View>
            <StatusBar hidden={true} />
            <Text style={styles.menuHeader}>MY MENU</Text>
            <SectionList
                sections={Menu}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor} }) => (
                    <Text style={[styles.text, {backgroundColor: bgColor}]}>{title}</Text> // Inline function for section header
                )}
            />
        </View>
    );
};

export default App;
