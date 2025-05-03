import { Image, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';

export default Home = ({ navigation }) => {
  return (
    <SafeAreaView style={estilo.container}>
      <Image
        style={estilo.logo}
        source={require('../LogoPng/LogoAppilhadeira.png')}
      />
      <Text style={estilo.titulo}>Bem-vindo ao Applhadeira</Text>
      
      <Pressable
        style={estilo.button1}
        onPress={() => navigation.navigate('CriarManobra')}>
        <Text style={estilo.textbutton}>Nova Manobra</Text>
      </Pressable>

      <Pressable
        style={estilo.button1}
        onPress={() => navigation.navigate('Manobras')}>
        <Text style={estilo.textbutton}>Manobras</Text>
      </Pressable>

      <Pressable
        style={estilo.button1}
        onPress={() => navigation.navigate('CriarAvaliacao')}>
        <Text style={estilo.textbutton}>Avaliar</Text>
      </Pressable>

      <Pressable
        style={estilo.button1}
        onPress={() => navigation.navigate('Avaliacoes')}>
        <Text style={estilo.textbutton}>Visualizar Avaliação</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495e', 
    marginVertical: 20,
    textAlign: 'center',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 250,
    backgroundColor: '#3498db', 
    borderRadius: 30,
    marginTop: 15,
    shadowColor: '#2c3e50', 
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  textbutton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold', 
  },
  logo: {
    height: 200,
    width: 250,
    margin:5,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6, 
  },
});
