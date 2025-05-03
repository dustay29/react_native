import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
  SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default CriarAvaliacao = ({ navigation }) => {
  const [manobras, setManobras] = useState([]);
  const [manobraSelecionada, setManobraSelecionada] = useState(null);
  const [membro, setMembro] = useState('');
  const [video, setVideo] = useState(null);
  const [criterios, setCriterios] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const pegaManobras = async () => {
      const data = await AsyncStorage.getItem('manobras');
      setManobras(data ? JSON.parse(data) : []);
    };
    pegaManobras();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await pegaManobras();
    setRefreshing(false);
  };

  const salvarAvaliacao = async () => {
    const novaAvaliacao = {
      titulo: manobraSelecionada.titulo,
      membro,
      video,
      criterios,
    };

    const avaliacoes =
      JSON.parse(await AsyncStorage.getItem('avaliacoes')) || [];
    avaliacoes.push(novaAvaliacao);
    await AsyncStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    navigation.navigate('Avaliacoes');
  };

  const importarVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.container}   contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.title}>Criar Avaliação</Text>

      <FlatList
        data={manobras}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.manobraButton}
            onPress={() => setManobraSelecionada(item)}
          >
            <Text style={styles.manobraButtonText}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {manobraSelecionada && (
        <View style={styles.manobraInfo}>
          <Text style={styles.selectedManobraTitle}>
            {manobraSelecionada.titulo}
          </Text>
          <Text style={styles.criteriaTitle}>Critérios:</Text>
          {manobraSelecionada.criterios.map((criterio, index) => (
            <View key={index} style={styles.criterioContainer}>
              <Text style={styles.criterioText}>{criterio}</Text>
              <TouchableOpacity
                style={styles.criterioButton}
                onPress={() =>
                  setCriterios([
                    ...criterios,
                    { nome: criterio, cumprido: true },
                  ])
                }
              >
                <Text style={styles.criterioButtonTextPositivo}>✔</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.criterioButton}
                onPress={() =>
                  setCriterios([
                    ...criterios,
                    { nome: criterio, cumprido: false },
                  ])
                }
              >
                <Text style={styles.criterioButtonTextNegativo}>✘</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Nome do Membro"
        placeholderTextColor="#A9A9A9"
        value={membro}
        onChangeText={setMembro}
      />

      <TouchableOpacity
        style={styles.videoButton}
        onPress={importarVideo}
      >
        <Text style={styles.videoButtonText}>Importar Vídeo</Text>
      </TouchableOpacity>

      {video && (
        <View style={styles.videoContainer}>
          <Text style={styles.videoText}>Vídeo selecionado:</Text>
          <Image source={{ uri: video }} style={styles.videoPreview} />
        </View>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={salvarAvaliacao}
      >
        <Text style={styles.saveButtonText}>Salvar Avaliação</Text>
      </TouchableOpacity>
    </ScrollView>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  container: {
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingVertical: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    marginTop:10
  },
  manobraButton: {
    backgroundColor: '#3498db',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  manobraButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  manobraInfo: {
    marginTop: 20,
    marginBottom: 20,
  },
  selectedManobraTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  criteriaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  criterioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  criterioText: {
    fontSize: 16,
    color: '#34495e',
    flex: 1,
  },
  criterioButton: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  criterioButtonTextPositivo: {
    fontSize: 24,
    color: '#00FF00',
    marginHorizontal: 5,
  },
  criterioButtonTextNegativo: {
    fontSize: 24,
    color: '#FF0000',
    marginHorizontal: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#808080',
  },
  videoButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  videoButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  videoContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  videoText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 10,
  },
  videoPreview: {
    width: 300,
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    marginTop: 5,
    marginBottom:10
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
