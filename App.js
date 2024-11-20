import React from 'react';
import { View, SectionList, Text, Image, StyleSheet, StatusBar, Button, TouchableOpacity } from 'react-native';

const Menu = [
    {
        title: "Western",
        bgColor: '#A7C7E7',
        data: [
            {
                name: "Classic Beef Burger",
                image: "https://truththeory.com/wp-content/uploads/2020/10/Beef-Burger-scaled.jpg",
                description: "A juicy beef patty served with lettuce, tomato, and cheese, all packed in a soft bun.",
                price: "6.80",
            },
            {
                name: "Fish and Chips",
                image: "https://th.bing.com/th/id/OIP.pACcaagp8Lt5W31kLdb4hAHaFj?rs=1&pid=ImgDetMain",
                description: "Crispy battered fish fillets served with golden fried potato chips and a side of tartar sauce.",
                price: "7.80",
            },
        ],
    },
    {
        title: "Local",
        bgColor: '#E6A7A7',
        data: [
            {
                name: "Minced Meat Noodle",
                image: "https://4.bp.blogspot.com/-ml44xt0Axyw/UzSdh-LXlDI/AAAAAAAANoQ/yc-Zy88wsdA/s1600/taiwanese+minced+meat+noodle+dish+recipe.jpg",
                description: "Delicious noodles topped with savory minced pork, soy sauce, and a sprinkle of fresh herbs.",
                price: "5.80",
            },
            {
                name: "Chicken Rice",
                image: "https://th.bing.com/th/id/R.3aa89eda87655ddb8deaed86497e43d8?rik=m3NRbhQ6XupGKQ&riu=http%3a%2f%2fwww.visitsingapore.com%2fcontent%2fdam%2fdesktop%2fglobal%2fdining-drinks-singapore%2flocal-dishes%2fhainanese-chicken-rice-carousel01-square.jpeg&ehk=rw73zPQiUdGHILU0W5g3ZwhgKDQXt1Jufrk5iDcaemA%3d&risl=&pid=ImgRaw&r=0",
                description: "Tender poached chicken served with fragrant rice, accompanied by chili sauce and ginger paste.",
                price: "4.80",
            },
        ],
    },
];

const renderItem = ({ item }) => {
    return <FoodItem name={item.name} image={item.image} description={item.description} price={item.price} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
        color: '#444',
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    orderButton: {
        backgroundColor: '#007BFF',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    orderButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    menuHeader: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#000',
        paddingVertical: 20,
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#fff',
    },
});

function FoodItem({ name, image, description, price }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>${price}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.orderButton}
                    onPress={() => alert(`${name} order placed!`)}
                >
                    <Text style={styles.orderButtonText}>Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
            <StatusBar hidden={true} />
            <Text style={styles.menuHeader}>MY MENU</Text>
            <SectionList
                sections={Menu}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor } }) => (
                    <Text style={[styles.sectionHeader, { backgroundColor: bgColor }]}>{title}</Text>
                )}
            />
        </View>
    );
};

export default App;
