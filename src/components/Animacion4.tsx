import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, View} from 'react-native';

export const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // Animação vai para esse valor
      duration: 1000, // duração da animação, o tempo que vai levar para chegar ao valor final.
      useNativeDriver: false,
      delay: 1000, // demora para começar a acontecer a animação
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // OUTPUTRANGE:  você pode querer pensar no seu Animated.Value como indo de 0 a 360, mas animar a posição de 0deg para 360deg
  // a entrada e a saída se relacionam

  const interpolation = animacion.interpolate({
    inputRange: [0, 360], // o valor vai de 0 a 360
    outputRange: ['0deg', '360deg'],
  });

  const styleAnimacion = {
    transform: [{rotate: interpolation}],
  };

  return (
    <View>
      <Animated.View style={[styles.box, styleAnimacion]} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
    margin: 'auto',
  },
});
