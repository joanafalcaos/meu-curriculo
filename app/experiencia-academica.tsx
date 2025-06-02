import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <View style={styles.card}>
        <Text style={styles.course}>Sistemas para Internet</Text>
        <Text style={styles.institution}>Universidade Católica de Pernambuco</Text>
        <Text style={styles.description}>
          Atualmente, curso Sistemas para Internet com foco em desenvolvimento web, mobile e experiência do usuário. Aprendizado em linguagens como JavaScript e Java, além de metodologias de design, prototipação e gestão de projetos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.course}>Bacharelado em Letras</Text>
        <Text style={styles.institution}>Universidade Federal de Pernambuco</Text>
        <Text style={styles.description}>
          Cursado de 2020 a 2023, quando tranquei o curso. A formação em Letras contribuiu significativamente para minhas habilidades de escrita, comunicação e pensamento crítico, fortalecendo a minha capacidade de expressão em projetos digitais e interfaces.
        </Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  card: {
    backgroundColor: '#f5f0ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  course: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7a42f4',
    marginBottom: 4,
  },
  institution: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
});
