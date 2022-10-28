import SergeyPhotoJpg from '../assets/images/sergey_photo_2.jpg';
import KyrylPhotoJpg from '../assets/images/kyryl_photo_2.jpg';
import SvyatPhotoJpg from '../assets/images/svyat_photo.jpg';

import { 
  InstagramIcon,
  TelegramIcon 
} from '../assets/icons';

const navLinks = [
  {
    link: '/about',
    label: 'Про нас',
  },
  {
    link: '/help',
    label: 'Допомогти',
  },
  {
    link: '/news',
    label: 'Новини',
  },
  {
    link: '/reports',
    label: 'Звіти',
  }
];

const contactFormFields = [
  {
    label: 'ПІБ',
    key: 'name',
    name: 'name',
    type: 'text',
    required: true,
    as: 'input',
    hint: '',
    placeholder: 'Степан Бандера',
  },
  {
    label: 'Телефон',
    key: 'phone',
    name: 'phone',
    type: 'text',
    required: true,
    as: 'input',
    hint: '',
    placeholder: '+380660097041',
  },
  {
    label: 'E-mail',
    key: 'email',
    name: 'email',
    type: 'email',
    required: true,
    as: 'input',
    hint: 'We\'ll never share your email with anyone else.',
    placeholder: 'stepan@bandera.ua',
  },
  {
    label: 'Ваше звернення',
    key: 'reason',
    name: 'reason',
    type: 'text',
    required: true,
    as: 'textarea',
    hint: '',
    placeholder: 'Як ми можемо вам допомогти?',
  },
];

const socialNetworks = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/archangelsofkyiv',
    IconComponent: InstagramIcon,
  },  
  {
    name: 'telegram',
    link: 'https://t.me/Solomka_Help',
    IconComponent: TelegramIcon,
  },
];

const founders = [
  {
    name: 'Сергiй Макаров',
    text: 'Голова правління та співзасновник благодійного фонду, IT Web Engineer, консультант міжнародних веб проектів',
    image: SergeyPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Кирило Курiнов',
    text: 'Президент та співзасновник благодійного фонду, IT web спеціаліст',
    image: KyrylPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Святослав Ляшенко',
    text: 'Креативний мозок, співзасновник українського бренду одягу StiLove',
    image: SvyatPhotoJpg,
    onHoverImage: '',
  },
];

const teamList = [
  'Сергій Макаров',
  'Кирило Курінов',
  'Святослав Ляшенко',
  'Катерина Ключ',
  'Олександр Кравчук',
  'Павло Гоувар',
  'Фонд Dream Ukraine',
  'Фонд Джмiль'
];

const currencyAccounts = [
  {
    name: 'IBAN (гривня)',
    account: 'UA 37 300346 0000026003000002157',
  },
  {
    name: 'IBAN (долари CША)',
    account: 'UA 37 300346 0000026003000002157',
  },
  {
    name: 'IBAN (євро)',
    account: 'UA 37 300346 0000026003000002157',
  },
  {
    name: 'Призначення платежу:',
    account: '"Благодійна допомога"',
  },
];

const reportsList = [
  {
    name: 'Травень 2022',
    link: '#',
  },
  {
    name: 'Травень 2022',
    link: '#',
  },
  {
    name: 'Травень 2022',
    link: '#',
  },
  {
    name: 'Травень 2022',
    link: '#',
  },
  {
    name: 'Травень 2022',
    link: '#',
  },
  {
    name: 'Травень 2022',
    link: '#',
  },
];

const newsList = [
  {
    name: 'ПРЕЗИДЕНТ СКАЗАВ, ЩО НАШ ФОНД НАЙРАЩИЙ',
    date: '05:00 24/02/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '',
  },
  {
    name: 'ПРЕЗИДЕНТ СКАЗАВ, ЩО НАШ ФОНД НАЙРАЩИЙ',
    date: '05:00 24/02/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '',
  },
  {
    name: 'ПРЕЗИДЕНТ СКАЗАВ, ЩО НАШ ФОНД НАЙРАЩИЙ',
    date: '05:00 24/02/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '',
  },
  {
    name: 'ПРЕЗИДЕНТ СКАЗАВ, ЩО НАШ ФОНД НАЙРАЩИЙ',
    date: '05:00 24/02/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '',
  },
  {
    name: 'ПРЕЗИДЕНТ СКАЗАВ, ЩО НАШ ФОНД НАЙРАЩИЙ',
    date: '05:00 24/02/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '',
  },
  {
    name: 'ПРЕЗИДЕНТ СКАЗАВ, ЩО НАШ ФОНД НАЙРАЩИЙ',
    date: '05:00 24/02/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '',
  },
  
];

export {
  contactFormFields,
  navLinks,
  socialNetworks,
  founders,
  teamList,
  currencyAccounts,
  reportsList,
  newsList
}