import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const tecnologias = [
  {
    nome: 'Figma',
    descricao: 'Ferramenta de design de interfaces',
    imagem: require('../assets/images/tecnologias/figma.png'),
  },
  {
    nome: 'React Native',
    descricao: 'Framework utilizado para desenvolvimento',
    imagem: require('../assets/images/tecnologias/react.png'),
  },
  {
    nome: 'Expo',
    descricao: 'Ambiente para apps React Native',
    imagem: require('../assets/images/tecnologias/expo.png'),
  },
];

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tecnologias Utilizadas</Text>
      <FlatList
        data={tecnologias}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.icon} />
            <View style={styles.textArea}>
              <Text style={styles.cardTitle}>{item.nome}</Text>
              <Text style={styles.cardDescription}>{item.descricao}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4e9ff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    gap: 16,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textArea: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7a42f4',
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
