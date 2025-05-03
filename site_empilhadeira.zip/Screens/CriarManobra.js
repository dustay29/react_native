import { useState } from 'react';
import {
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default CriarManobra = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [criterios, setCriterios] = useState([]);
  const [novoCriterio, setNovoCriterio] = useState('');

  const salvarManobra = async () => {
    const novaManobra = { titulo, descricao, criterios };
    const manobras = JSON.parse(await AsyncStorage.getItem('manobras')) || [];
    manobras.push(novaManobra);
    await AsyncStorage.setItem('manobras', JSON.stringify(manobras));
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={estilo.container}>
      <Text style={estilo.title} >Adicionar Nova Manobra</Text>
      <TextInput
        style={estilo.input}
        placeholder="Adicione o Título da manobra"
        placeholderTextColor="#A9A9A9"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={estilo.input}
        placeholder="Adicione a Descrição da manobra"
        placeholderTextColor="#A9A9A9"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={estilo.input}
        placeholder="Adicione os Critérios da manobra"
        placeholderTextColor="#A9A9A9"
        value={novoCriterio}
        onChangeText={setNovoCriterio}
      />
      <TouchableOpacity
        style={estilo.button}
        onPress={() => setCriterios([...criterios, novoCriterio])}
      >
        <Text style={estilo.buttonText}>Adicionar Critério</Text>
      </TouchableOpacity>
      <FlatList
        data={criterios}
        renderItem={({ item }) => <Text style={estilo.criterioText}>{item}</Text>}
      />
      <TouchableOpacity
        style={estilo.buttonSave}
        onPress={salvarManobra}
      >
        <Text style={estilo.buttonText}>Salvar Manobra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    color:'black'
  },
  criterioText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4CAF50', // Cor do botão de adicionar critério
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonSave: {
    backgroundColor: '#2196F3', // Cor do botão de salvar manobra
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
