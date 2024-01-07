import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";

const Ball = () => {
  const position = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current

  useEffect(() => {
    Animated.spring(position, {
      toValue: {
        x: 200,
        y: 500
      },
      useNativeDriver: false
    }).start()
  }, [])

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  )
}

const styles = {
  ball: {
    backgroundColor: 'red',
    borderRadius: 30,
    height: 60,
    width: 60,
  }
}

export default Ball
