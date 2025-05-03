import { Text, View, StyleSheet, Pressable, } from 'react-native';

export function Botoes({ id, preco, comprouButton }) {
  const [button, setButton] = useState(false);

  const marcarBotoes = () => {
    setBotoes(!comprado);

    if (comprado) {
      comprouButton(-preco);
    } else {
      comprouButton(preco);
    }

    // comprado ? comprouAssento(-preco) : comprouAssento(preco);
  };
  return (
  
  <View>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>1</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>2</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>3</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>4</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>5</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>6</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>7</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>8</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>9</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>0</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>+</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>-</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>x</Text></Pressable>
    <Pressable style={styles.botoes} ><Text style={styles.duelar}>/</Text></Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
  botoes: {
    marginTop: 20,
    width: 30,
    height:30,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  duelar:{
    color:'white',
    fontWeight:24,
    fontSize:24
  },
});