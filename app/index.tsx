import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <BlurView intensity={80} tint="light" style={styles.blurBox}>
        <Image
          source={require('../assets/images/joana.jpeg')}
          style={styles.profileImage}
        />

        <Text style={styles.subtitle}>Olá, me chamo Joana Falcão</Text>
        <Text style={styles.title}>UX/UI e{"\n"}FrontEnd</Text>
        <Text style={styles.paragraph}>
          Criação de experiências digitais intuitivas e eficientes com foco no usuário.
          Atuação em todas as etapas do desenvolvimento: desde pesquisas e testes até
          design de interfaces e implementação em aplicações utilizando o framework React e Vue.
        </Text>

      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  blurBox: {
    backgroundColor: 'rgba(124, 66, 244, 0.06)',
    borderRadius: 20,
    padding: 24,
    gap: 16,
    alignItems: 'center', // centraliza a imagem e textos
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#7a42f4',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#7a42f4',
    fontWeight: '600',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 48,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: '#7a42f4',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop: 12,
  },
});
