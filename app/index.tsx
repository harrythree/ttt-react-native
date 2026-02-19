import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Board from "../src/components/board";
import GameOver from "../src/components/game-over";
import PickStartPlayer from "../src/components/pick-start-player";
import useGame from "../src/hooks/use-game";

export default function Index() {
  const {
    board,
    playerSymbol,
    botSymbol,
    started,
    gameOver,
    result,
    handleStart,
    handleBoardPress,
    newGame,
  } = useGame();

  const RenderStartPlayerOrBoard = () => {
    if (!started) {
      return <PickStartPlayer handleStart={handleStart} />;
    }

    if (gameOver) {
      return <GameOver result={result} newGame={newGame} />;
    }

    return (
      <Board
        board={board}
        handlePress={handleBoardPress}
        playerSymbol={playerSymbol}
        botSymbol={botSymbol}
      />
    );
  };

  return (
    <View style={styles.container}>
      <RenderStartPlayerOrBoard />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
