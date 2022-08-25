import React, { useState, useRef, useMemo, useEffect, useCallback } from "react";
import { Keyboard } from "react-native";

function HideTabBar(navigation) {

  const _keyboardDidShow = useCallback(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" }
    });
  }, [navigation]);

  const _keyboardDidHide = useCallback(() => {
    navigation.setOptions({
      tabBarStyle: { display: "flex" }
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe_KeyboardDidShow =Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    const unsubscribe_keyboardDidHide =Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      unsubscribe_KeyboardDidShow.remove();
      unsubscribe_keyboardDidHide.remove();
    };
  }, [_keyboardDidHide, _keyboardDidShow]);

}

export default HideTabBar;
