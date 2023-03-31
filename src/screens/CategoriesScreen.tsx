import React from 'react'
import { FlatList, Text, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import IItemCategory from '../components/IItemCategory';
import { Categories } from '../model/classes/dummyData';


const CategoriesScreen = ({ navigation: { navigate } }: any) => {
  
  const haldlerPress = (id: string) => {
        navigate('Details', {
          categoryId: id,
        });
  }

  const renderCategoryItem = (category: any) => {
    return (<IItemCategory category={category.item}
      haldlerPress={() => haldlerPress(category.item.id)} />)
  }
  return (
    <FlatList data={ Categories }
    keyExtractor={ (category: { id: any; }) => category.id }
    renderItem={renderCategoryItem }
    numColumns={ 2 }
    />
  )
  
}

export default CategoriesScreen