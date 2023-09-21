import React from 'react';
import { NavLink } from 'react-bootstrap';
import {
  InstagramIcon,
  TelegramIcon,
  FacebookIcon,
} from '../../../../assets/icons';

const ReportSocialNetworks = ({ socialNetworks }) =>
  socialNetworks && (
    <div className="report-social-networks">
      {socialNetworks.instagram && (
        <NavLink
          target="_blank"
          className="instagram-link"
          href={`${socialNetworks?.instagram}`}
        >
          <InstagramIcon />
        </NavLink>
      )}

      {socialNetworks.telegram && (
        <NavLink
          target="_blank"
          className="telegram-link"
          href={socialNetworks.telegram}
        >
          <TelegramIcon />
        </NavLink>
      )}

      {socialNetworks.facebook && (
        <NavLink
          target="_blank"
          className="ƒacebook-link"
          href={socialNetworks.facebook}
        >
          <FacebookIcon />
        </NavLink>
      )}
    </div>
  );

export default ReportSocialNetworks;
