import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated} from 'react-native';

export const Animacion1 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // Animação vai para esse valor
      duration: 4000, // duração da animação, o tempo que vai levar para chegar ao valor final.
      useNativeDriver: false,
      // delay: 1000,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={{opacity: animacion}}>
      <Text style={styles.text}>ANIMACION 1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: 'tomato',
  },
});
