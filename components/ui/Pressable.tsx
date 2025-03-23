

import React, { useCallback } from "react";
import { Pressable as RNPressable } from "react-native";
import { ReactNode } from "react";

interface PressableProps {
  children: ReactNode;
  style?: any;
  [key: string]: any;
  activeOpacity?: number;
}

function Pressable({ children, style, activeOpacity = 1, ...otherProps }: PressableProps) {
  const _style = useCallback(
    ({ pressed }: { pressed: boolean }) => [{ opacity: pressed ? activeOpacity : 1 }, style && style],
    [style]
  );

  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
}

export default Pressable;