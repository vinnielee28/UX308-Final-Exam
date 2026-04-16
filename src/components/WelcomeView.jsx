import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import InputBar from "./InputBar";

const { height } = Dimensions.get("window");

export default function Hero({
  scrollToBottom,
  sendMessage,
  setInputBarText,
  inputBarText
}) {

  const quickActions = ["Manicure", "Pedicure"];

  const handleQuickPress = (item) => {
    setInputBarText(item);
    sendMessage(item);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1522337660859-02fbefca4702"
        }}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.overlay}>

          <Text style={styles.title}>Nailed It 💅</Text>
          <Text style={styles.subtitle}>Select Manicure or Pedicure to Start</Text>

          <View style={styles.inputWrapper}>
            <InputBar
              onSendPressed={sendMessage}
              onSizeChange={() => scrollToBottom(false)}
              onChangeText={setInputBarText}
              text={inputBarText}
            />
          </View>

          <View style={styles.actions}>
            {quickActions.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.button}
                onPress={() => handleQuickPress(item)}
              >
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.5,
    width: "100%",
  },

  hero: {
    flex: 1,
    width: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 182, 193, 0.45)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 6,
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 16,
    color: "#30222f",
    marginBottom: 18,
    textAlign: "center",
  },

  inputWrapper: {
    width: "100%",
    marginBottom: 16,
  },

  actions: {
    flexDirection: "row",
    gap: 12,
  },

  button: {
    backgroundColor: "#ff69b4",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    fontWeight: "700",
    color: "#fff",
  },
});