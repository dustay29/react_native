import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Manobras = ({ navigation }) => {
  const [manobras, setManobras] = useState([]);
  
  useEffect(() => {
    const puxarManobras = async () => {
      const data = await AsyncStorage.getItem('manobras');
      setManobras(data ? JSON.parse(data) : []);
    };
    const unsubscribe = navigation.addListener('focus', puxarManobras); // aqui usa evento focus para atualizar a lista de manobras
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Lista de Manobras</Text>
        {manobras.length > 0 ? (
          <FlatList
            data={manobras}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.manobraItem}>
                <Text style={styles.manobraTitle}>{item.titulo}</Text>
                <Text style={styles.manobraDescription}>{item.descricao}</Text>
              </View>
            )}
            vertical
          />
        ) : (
          <Text style={styles.noManobras}>Nenhuma manobra criada ainda.</Text>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('CriarManobra')}
      >
        <Text style={styles.createButtonText}>Criar Nova Manobra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', 
    paddingBottom: 100, 
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  manobraItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  manobraTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50', 
  },
  manobraDescription: {
    fontSize: 16,
    color: '#7F8C8D', 
    marginTop: 5,
  },
  noManobras: {
    fontSize: 16,
    color: '#BDC3C7',
    textAlign: 'center',
    marginTop: 30,
    fontStyle: 'italic',
  },
  createButton: {
    backgroundColor: '#3498db', 
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30, 
    left: 20,
    right: 20,
    borderRadius: 8,
    elevation: 5, 
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
