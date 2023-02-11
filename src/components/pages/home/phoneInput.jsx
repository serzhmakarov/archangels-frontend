import PhoneInput from 'react-phone-input-2'

const PhoneInputMask = (props) => (
  <PhoneInput {...props} country="ua" style={{ zIndex: -1 }}/>
);

export default PhoneInputMask;