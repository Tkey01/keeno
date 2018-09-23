import { Platform, Dimensions } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

const designedWidth = Platform.OS === 'ios' ? 320 : 320;
const designedHeight = Platform.OS === 'ios' ? 568 : 568;

export const { width, height } = Dimensions.get('window');

export const scale = value => (width / designedWidth) * value;
export const scaleByVertical = value => (height / designedHeight) * value;

export const platformSelect = (ios, android) => (
  Platform.select({ ios, android })
);
