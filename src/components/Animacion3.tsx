import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, View} from 'react-native';

export const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40, // Animação vai para esse valor
      duration: 1000, // duração da animação, o tempo que vai levar para chegar ao valor final.
      useNativeDriver: false,
      delay: 1000, // demora para começar a acontecer a animação
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.box}>
      <Animated.Text style={{textAlign: 'center', fontSize: animacion}}>
        ANIMATED
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {},
});
