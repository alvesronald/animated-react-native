import React, {useState} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

// SPRING: Anima um valor de acordo com um modelo analítico de mola baseado na oscilação
// harmônica amortecida(ação como se fosse uma mola)

// friction: Controla "salto"/superação. Padrão 7.
// tension: Controla a velocidade. Padrão 40.
// speed: Controla a velocidade da animação. Padrão 12.
// bounciness: Controla o salto. Padrão 8.

export const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: false,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animacion, {
      toValue: 1,
      useNativeDriver: false,
      friction: 4, // quanto mais baixo, maior o salto
    }).start();
  };

  const styleAnimacion = {
    transform: [{scale: animacion}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.btn, styleAnimacion]}>
          <Text style={styles.text}>Acessar</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFF',
    fontSize: 28,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
