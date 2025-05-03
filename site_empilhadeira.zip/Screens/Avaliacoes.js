import { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default VisualizarAvaliacao = ({ navigation }) => {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const puxarAvaliacao = async () => {
      const data = await AsyncStorage.getItem('avaliacoes');
      setAvaliacoes(data ? JSON.parse(data) : []);
    };
    puxarAvaliacao();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliações</Text>
      <FlatList
        data={avaliacoes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate('DetalhesAvaliacao', { avaliacao: item })
            }>
            <Text style={styles.itemTitle}>{item.titulo}</Text>
            <Text style={styles.itemDetails}>Membro: {item.membro}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});
