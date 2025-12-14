import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function ChatbotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assistant intelligent</Text>

      <View style={styles.chatArea}>
        <Text style={styles.placeholder}>
          💬 Les messages apparaîtront ici
        </Text>
      </View>

      <View style={styles.inputBar}>
        <TextInput
          placeholder="Posez votre question..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  chatArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  inputBar: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  sendButton: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  sendText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
