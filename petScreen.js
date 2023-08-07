import React from 'react';
import { FlatList, View } from 'react-native';
import Pet from './componet/pet';

const PetScreen = () => {
    const contacts =[
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'93 Shorolino Dr....'},
        {town: 'Raka', animal:'Dog',years:'3 years old', location:'83 Shorolino Dr....'},
        {town: 'Jhony', animal:'Dog',years:'2 years old', location:'Shorolino Dr....'},
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'Shorolino Dr....'},
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'Shorolino Dr....'},
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'Shorolino Dr....'},
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'Shorolino Dr....'},
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'Shorolino Dr....'},
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'Shorolino Dr....'},
        {town: 'Pastel', animal:'Cat',years:'2 years old', location:'Shorolino Dr....'},
    ]
    return (
        <View>
            <FlatList
            data = {contacts}
            renderItem={({item}) =>{
                return <Pet town={item.town} animal={item.animal} year={item.years} location={item.location} />
            }}
            keyExtractor={(item)=> item.number}
            />
                
           
        </View>
    );
}

export default PetScreen;
