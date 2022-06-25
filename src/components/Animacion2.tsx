import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';

export const Animacion2 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450, // Animação vai para esse valor
      duration: 5000, // duração da animação, o tempo que vai levar para chegar ao valor final.
      useNativeDriver: false,
      delay: 1000, // demora para começar a acontecer a animação
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        styles.box,
        {
          width: animacion,
          height: animacion,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
