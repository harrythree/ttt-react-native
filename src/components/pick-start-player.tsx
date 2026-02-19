import { StyleSheet, Text, View } from "react-native";
import Button from "./button";

const PickStartPlayer = ({ handleStart }: any) => {
  return (
    <View style={styles.center}>
      <Text style={styles.subtitle}>Who goes first?</Text>
      <View style={styles.row}>
        <Button title="You Go First" onPress={() => handleStart(true)} />
        <Button title="Bot Goes First" onPress={() => handleStart(false)} />
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
  subtitle: { fontSize: 18, marginBottom: 16 },
  row: { flexDirection: "row" },
});
