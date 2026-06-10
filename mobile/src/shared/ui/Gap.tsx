import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';

type props = {
  height?: number;
  width?: number;
};

const Gap = ({ height, width }: props) => {
  return (
    <View
      style={{
        height,
        width,
      }}
    />
  );
};

export default Gap;
