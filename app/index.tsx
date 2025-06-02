import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Olá, me chamo Joana Falcão</Text>
      <Text style={styles.title}>UX/UI e{"\n"}FrontEnd</Text>
      <Text style={styles.paragraph}>
        Criação de experiências digitais intuitivas e eficientes com foco no usuário. 
        Atuação em todas as etapas do desenvolvimento: desde pesquisas e testes até 
        design de interfaces e implementação em aplicações utilizando o framework React e Vue.
      </Text>

      <TouchableOpacity onPress={() => router.push('/sobre')}>
        <Text style={styles.link}>Ir para Sobre →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    lineHeight: 50,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 32,
  },
  link: {
    fontSize: 16,
    color: '#7a42f4',
    textDecorationLine: 'underline',
  },
});
