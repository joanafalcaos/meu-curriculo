import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.card}>
        <Text style={styles.role}>Desenvolvedora Frontend Júnior</Text>
        <Text style={styles.company}>Um Telecom</Text>
        <Text style={styles.period}>Atual</Text>
        <Text style={styles.description}>
          Atuo no desenvolvimento de aplicações web e mobile com foco em performance, acessibilidade e experiência do usuário. Utilizo frameworks como React, Vue e ferramentas de design responsivo.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Estagiária de UX/UI</Text>
        <Text style={styles.company}>Um Telecom</Text>
        <Text style={styles.period}>Fevereiro de 2024 - Junho de 2025</Text>
        <Text style={styles.description}>
          Participei de projetos focados em melhoria da experiência do usuário, realizando pesquisas, criação de fluxos, wireframes e protótipos no Figma, além de colaborar com o time de desenvolvimento.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Social Media</Text>
        <Text style={styles.company}>Chalés Caiçara Serrambi</Text>
        <Text style={styles.period}>Abril de 2023 - Março de 2025</Text>
        <Text style={styles.description}>
          Responsável pela criação de conteúdo, planejamento de postagens, análise de métricas e fortalecimento da presença digital da marca em redes sociais.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Assistente Administrativa</Text>
        <Text style={styles.company}>RM Terceirização</Text>
        <Text style={styles.period}>Abril de 2023 - Fevereiro de 2024</Text>
        <Text style={styles.description}>
          Auxiliei nos processos administrativos, controle de documentos, atendimento e suporte aos setores internos da empresa.
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
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  role: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7a42f4',
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
  period: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
});
