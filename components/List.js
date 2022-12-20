import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
const globalStyles = require('../styles');

const List = ({ navigation, route, ...props }) => {
    const [product, setProduct] = useState('');
    const { id } = route.params;

    let currentList = props.lists.find(el => {
        return el.id === id;
    });

    useEffect(() => {   
        navigation.setOptions({ title: currentList.title })
    }, [])

    const pressHandler = () => {
        if(product.trim()) {
            onSubmit(product);
            setProduct('');
        } else {
            Alert.alert('Error!', 'Product name cannot be empty');
            setProduct('');
        }
    }

    const onSubmit = (product) => {
        const newProduct = {
            id: nanoid(),
            name: product,
            status: false
        }

        currentList.products ? currentList.products = [newProduct, ...currentList.products] : currentList.products = [newProduct];
        props.changeProduct(currentList);
    }

    const deleteProduct = (id) => {
        Alert.alert(
            'Are you sure you want to delete this product?', 
            'This action cannot be undone', 
            [
              {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => {return}
              }, 
              {
                text: 'Delete',
                onPress: () => {
                    currentList.products = currentList.products.filter((item) => item.id !== id);
                    props.changeProduct(currentList);
                }
              }
            ]
        );
    }

    const toggleStatus = (id) => {
        currentList.products = currentList.products.map((item) => {
            if(item.id === id) {
                item.status = !item.status;
            }
            return item;
        });
        props.changeProduct(currentList);
    }

    return(
        <View style={globalStyles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter list name'
                    autoCorrect={false}
                    value={product}
                    onChangeText={setProduct}
                />

                <TouchableOpacity style={[globalStyles.btn, {width: '30%'}]} onPress={pressHandler}>
                    <Text style={globalStyles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={globalStyles.productsSection} showsVerticalScrollIndicator={false}>
                {currentList.products.length === 0 ? <Text>No products yet</Text> : currentList.products.map((item, index) => 
                    <TouchableOpacity onLongPress={() => {toggleStatus(item.id)}} style={[index === currentList.products.length  - 1 ? globalStyles.blockProduct : [globalStyles.blockProduct, { marginBottom: 10 }], item.status ? styles.completed : '']} key={item.id}>
                        <Text style={globalStyles.title}>{currentList.products.length - index}) {item.name.length > 21 ? item.name.slice(0, 20) + '...' : item.name}</Text>
                        <TouchableOpacity style={globalStyles.btnWhite} onPress={() => {deleteProduct(item.id)}}>
                            <Text style={globalStyles.btnTextWhite}>X</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '50%',
        paddingVertical: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    completed: {
        backgroundColor: '#50c878'
    }
});

export default List;