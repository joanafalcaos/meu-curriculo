import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Projetos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>

      {/* Projeto Minha Dose */}
      <View style={styles.projectCard}>
        <Image
          source={require('../assets/images/projetos/minha-dose.png')}
          style={styles.image}
        />
        <View style={styles.textArea}>
          <Text style={styles.projectTitle}>Minha Dose</Text>
          <Text style={styles.description}>
            Minha Dose é um protótipo desenvolvido como parte de um projeto acadêmico. 
            O aplicativo permite que usuários agendem vacinas na Região Metropolitana do Recife, 
            além de possibilitar que os postos de saúde registrem e gerenciem as vacinas disponíveis.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explorar Projeto</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Projeto HoneyBee */}
      <View style={styles.projectCard}>
        <Image
          source={require('../assets/images/projetos/honeybee.png')}
          style={styles.image}
        />
        <View style={styles.textArea}>
          <Text style={styles.projectTitle}>HoneyBee</Text>
          <Text style={styles.description}>
            Honey Bee é um protótipo desenvolvido para facilitar o onboarding de novos colaboradores. 
            A plataforma reúne as principais informações sobre processos e também conecta os dados pessoais 
            e profissionais de forma prática e organizada.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explorar Projeto</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Projeto PedVeg */}
      <View style={styles.projectCard}>
        <Image
          source={require('../assets/images/projetos/pedeveg.png')}
          style={styles.image}
        />
        <View style={styles.textArea}>
          <Text style={styles.projectTitle}>PedVeg</Text>
          <Text style={styles.description}>
            PedVeg é um protótipo idealizado como um “iFood vegano”, onde é possível listar todos os restaurantes veganos da região, 
            fazer pedidos e ainda descobrir novas opções veganas em sua cidade.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explorar Projeto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    gap: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  projectCard: {
    flexDirection: 'column',
    backgroundColor: '#f4e9ff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  textArea: {
    gap: 8,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7a42f4',
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#7a42f4',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
