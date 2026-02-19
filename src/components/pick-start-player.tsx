import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PickStartPlayer = ({
  handleStart,
}: {
  handleStart: (playerGoesFirst: boolean) => void;
}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.subtitle}>Who goes first?</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStart(true)}
        >
          <Text style={styles.buttonText}>You Go First</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStart(false)}
        >
          <Text style={styles.buttonText}>Bot Goes First</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PickStartPlayer;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 32, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 18, marginBottom: 16 },
  row: { flexDirection: "row" },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    margin: 8,
  },
  buttonText: { color: "white", fontWeight: "600" },
});
