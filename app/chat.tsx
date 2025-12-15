import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
};

export default function ChatScreen() {
  const router = useRouter();
  const listRef = useRef<FlatList<Message>>(null);

  const [input, setInput] = useState('');
  const [showRobot, setShowRobot] = useState(true);

  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'user', text: 'What do I need to get started?' },
    { id: '2', role: 'assistant', text: "You'll need flour, eggs, and a pinch of salt." },
    {
      id: '3',
      role: 'assistant',
      text: "Typically, you'll want about 2 cups of flour for every egg. It's a good ratio to start with!",
    },
    { id: '4', role: 'user', text: 'And how do I mix them together?' },
    {
      id: '5',
      role: 'assistant',
      text:
        'First, make a mound of flour on a clean surface, then create a well in the center. Crack the eggs into the well and sprinkle a little salt. Use a fork to gradually mix the flour into the eggs.',
    },
  ]);

  const canSend = input.trim().length > 0;

  const data = useMemo(() => messages, [messages]);

  const scrollToEnd = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });
  };

  const onSend = () => {
    if (!canSend) return;

    const userMsg: Message = {
      id: String(Date.now()),
      role: 'user',
      text: input.trim(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(scrollToEnd, 50);
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.role === 'user';
    return (
      <View style={[styles.bubbleRow, isUser ? styles.rowRight : styles.rowLeft]}>
        <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleAssistant]}>
          <Text style={[styles.bubbleText, isUser ? styles.textUser : styles.textAssistant]}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
          <Ionicons name="chevron-back" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cooking Pasta</Text>
        <View style={styles.headerRightSpace} />
      </View>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        {/* ROBOT (avant interaction) */}
        {showRobot && (
          <View style={styles.robotContainer}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' }}
              style={styles.robot}
            />
            <Text style={styles.robotText}>Ask me anything 👋</Text>
          </View>
        )}

        {/* Messages */}
        {!showRobot && (
          <FlatList
            ref={listRef}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={scrollToEnd}
          />
        )}

        {/* Input Bar */}
        <View style={styles.inputBar}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Ask me anything..."
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            multiline
            onFocus={() => setShowRobot(false)}
          />
          <TouchableOpacity
            onPress={onSend}
            activeOpacity={0.85}
            style={[styles.sendBtn, !canSend && styles.sendBtnDisabled]}
            disabled={!canSend}
          >
            <Ionicons name="arrow-up" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },

  header: {
    height: 52,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F7',
  },
  headerBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  headerRightSpace: { width: 36 },

  container: { flex: 1 },

  robotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  robot: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  robotText: {
    color: '#6B7280',
    fontSize: 14,
  },

  listContent: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
  },

  bubbleRow: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
  },
  rowLeft: { justifyContent: 'flex-start' },
  rowRight: { justifyContent: 'flex-end' },

  bubble: {
    maxWidth: '78%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },
  bubbleAssistant: {
    backgroundColor: '#EEF2FF',
    borderTopLeftRadius: 6,
  },
  bubbleUser: {
    backgroundColor: '#3F2BD8',
    borderTopRightRadius: 6,
  },

  bubbleText: { fontSize: 13.5, lineHeight: 18.5 },
  textAssistant: { color: '#111827' },
  textUser: { color: '#FFFFFF' },

  inputBar: {
    borderTopWidth: 1,
    borderTopColor: '#EEF2F7',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  input: {
    flex: 1,
    minHeight: 42,
    maxHeight: 110,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: '#F3F4F6',
    color: '#111827',
    fontSize: 13.5,
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#3F2BD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    opacity: 0.5,
  },
});
