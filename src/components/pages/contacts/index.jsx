import React from 'react';
import { 
  BsFillTelephoneFill,
  BsHouseDoorFill,
  BsGeoAltFill,
  BsSkype, 
  BsInstagram, 
  BsTwitter, 
  BsFacebook, 
  BsTelegram 
} from 'react-icons/bs';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-page__wrapper">  
        <div className="contacts-page__content-address">
          <div className="contacts-page__content-address-item">
            <BsFillTelephoneFill /> <a href="tel:+380667454091">+380667454091</a>
          </div>
          <div className="contacts-page__content-address-item">
            <BsHouseDoorFill /> <a href="mailto:serzhmakarov.work@gmail.com">serzhmakarov.work@gmail.com</a>
          </div>
          <div className="contacts-page__content-address-item">
            <BsGeoAltFill /> 03186, вул. Антонова, 47, м. Київ
          </div>
          
        </div>

        <div className="contacts-page__social-networks">

        </div>
      </div>
    </div>
  );
};

export default Contacts;