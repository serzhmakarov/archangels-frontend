import { socialNetworks } from '../../constants';

const SocialNetworks = () => (
  <div className="footer-social-networks">
    {socialNetworks.map(({ IconComponent, name, link }) => (
      <a 
        key={name} 
        href={link}
        target="_blank"
        rel="nooppener noreferrer"
      >
        <IconComponent />
      </a>
    ))}
  </div>
);

export default SocialNetworks;