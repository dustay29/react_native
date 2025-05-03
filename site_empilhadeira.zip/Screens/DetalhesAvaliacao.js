import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Video } from 'expo-av';

export default DetalhesAvaliacao = ({ route }) => {
  const avaliacao = route.params.avaliacao;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{avaliacao.titulo}</Text>
      <Text style={styles.subtitle}>Membro: {avaliacao.membro}</Text>

      {avaliacao.video ? (
        <Video
          source={{ uri: avaliacao.video }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      ) : (
        <Text style={styles.noVideo}>Sem vídeo adicionado</Text>
      )}

      <Text style={styles.criteriosTitle}>Critérios Avaliados:</Text>
      <FlatList
        data={avaliacao.criterios}
        renderItem={({ item }) => (
          <View style={styles.criterio}>
            <Text style={styles.criterioText}>{item.nome}</Text>
            <Text style={item.cumprido ? styles.success : styles.fail}>
              {item.cumprido ? '✔ Satisfeito' : '✘ Insatisfeito'}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  noVideo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  criteriosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  criterio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  criterioText: {
    fontSize: 16,
  },
  success: {
    fontSize: 16,
    color: 'green',
  },
  fail: {
    fontSize: 16,
    color: 'red',
  },
});
