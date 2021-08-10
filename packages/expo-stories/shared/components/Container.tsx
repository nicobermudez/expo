import { spacing, lightTheme, ChevronDownIcon, iconSize } from '@expo/styleguide-native';
import * as React from 'react';
import { View, StyleSheet, Text, ViewProps, TouchableOpacity } from 'react-native';

import { Toggle } from './Toggle';

type ContainerProps = ViewProps & {
  labelTop?: string;
  labelBottom?: string;
  children?: React.ReactNode;
};

export function Container({
  children,
  labelTop = 'Description Missing',
  style,
  ...rest
}: ContainerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Toggle>
      <View style={[styles.container, isOpen && styles.openContainer, style]} {...rest}>
        <TouchableOpacity style={styles.descriptionContainer} onPress={() => setIsOpen(!isOpen)}>
          <Text style={styles.description}>{labelTop}</Text>
          <View
            style={[styles.chevonContainer, isOpen ? styles.chevronOpen : styles.chevronClosed]}>
            <ChevronDownIcon size={iconSize.large} color={lightTheme.icon.default} />
          </View>
        </TouchableOpacity>
        {isOpen && <View style={styles.storyComponentContainer}>{children}</View>}
      </View>
    </Toggle>
  );
}

const styles = StyleSheet.create({
  container: {},
  openContainer: {
    marginBottom: spacing[4],
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: lightTheme.border.default,
  },
  descriptionContainer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
    paddingRight: 32,
    minHeight: 56,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: lightTheme.border.default,
  },
  description: {
    fontSize: 18,
    fontWeight: '500',
    color: lightTheme.text.default,
  },
  chevonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronOpen: {
    transform: [
      {
        rotate: '0deg',
      },
    ],
  },
  chevronClosed: {
    transform: [
      {
        rotate: '-90deg',
      },
    ],
  },
  storyComponentContainer: {
    padding: spacing[4],
  },
});
