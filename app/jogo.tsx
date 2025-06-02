import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const DIGIT_COUNT = 4;
const MAX_ATTEMPTS = 10;

function generateSecret(): string {
  // Gera uma senha com 4 dígitos únicos
  let digits: string[] = [];
  while (digits.length < DIGIT_COUNT) {
    let rand = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(rand)) digits.push(rand);
  }
  return digits.join('');
}

function getBullsAndCows(secret: string, guess: string) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < DIGIT_COUNT; i++) {
    if (guess[i] === secret[i]) bulls++;
    else if (secret.includes(guess[i])) cows++;
  }
  return { bulls, cows };
}

export default function Jogo() {
  const [secret, setSecret] = useState(generateSecret());
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState<
    { guess: string; bulls: number; cows: number }[]
  >([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (guess.length !== DIGIT_COUNT) {
      Alert.alert(`Digite exatamente ${DIGIT_COUNT} dígitos.`);
      return;
    }
    if (new Set(guess).size !== DIGIT_COUNT) {
      Alert.alert('Os dígitos devem ser únicos!');
      return;
    }

    const { bulls, cows } = getBullsAndCows(secret, guess);
    const newAttempt = { guess, bulls, cows };

    setHistory((prev) => [newAttempt, ...prev]);
    setGuess('');

    if (bulls === DIGIT_COUNT) {
      setMessage('Parabéns! Você acertou a senha!');
      setGameOver(true);
    } else if (history.length + 1 >= MAX_ATTEMPTS) {
      setMessage(`Você perdeu! A senha era ${secret}.`);
      setGameOver(true);
    }
  };

  const handleShowSecret = () => {
    Alert.alert('Senha secreta', secret);
  };

  const handleRestart = () => {
    setSecret(generateSecret());
    setHistory([]);
    setGuess('');
    setGameOver(false);
    setMessage('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <Text style={styles.title}>Jogo Senha (Bulls and Cows)</Text>

        <FlatList
          data={history}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.attemptItem}>
              <Text style={styles.attemptText}>
                Tentativa {history.length - index}: {item.guess} — 
                <Text style={styles.result}> {item.bulls} Bulls, {item.cows} Cows</Text>
              </Text>
            </View>
          )}
          style={styles.historyList}
          inverted
        />

        {!gameOver && (
          <>
            <TextInput
              style={styles.input}
              value={guess}
              onChangeText={(text) =>
                setGuess(text.replace(/[^0-9]/g, '').slice(0, DIGIT_COUNT))
              }
              keyboardType="numeric"
              placeholder={`Digite ${DIGIT_COUNT} dígitos únicos`}
              maxLength={DIGIT_COUNT}
              editable={!gameOver}
            />
            <TouchableOpacity style={styles.button} onPress={handleGuess}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#7B4DEB', marginTop: 10 }]}
          onPress={handleShowSecret}
        >
          <Text style={styles.buttonText}>Mostrar Senha</Text>
        </TouchableOpacity>

        {gameOver && (
          <>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={handleRestart}>
              <Text style={styles.buttonText}>Jogar Novamente</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#7B4DEB',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial Black',
  },
  historyList: {
    flexGrow: 0,
    maxHeight: 300,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#7B4DEB',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F3EFFF',
  },
  attemptItem: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#dcd6f7',
  },
  attemptText: {
    fontSize: 16,
    color: '#4B3B9A',
  },
  result: {
    fontWeight: '700',
    color: '#7B4DEB',
  },
  input: {
    height: 50,
    borderColor: '#7B4DEB',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: '700',
    color: '#7B4DEB',
    fontFamily: 'Arial Black',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#9B68F6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Arial Black',
  },
  message: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7B4DEB',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Arial Black',
  },
});
