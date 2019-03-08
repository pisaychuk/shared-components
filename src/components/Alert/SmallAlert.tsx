import Alert from './Alert';
import defaultProps from 'extensions/defaultProps';

export default defaultProps(Alert, {
  Border: Alert.styles.Border.Small,
  Icon: (Alert.styles.Icon as any).Small,
  Content: (Alert.styles.Content as any).Small,
});
