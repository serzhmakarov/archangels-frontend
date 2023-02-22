import PhoneInputMask from '../components/pages/home/phoneInput';
import SergeyPhotoJpg from '../assets/images/team/serhii.jpg';
import KyrylPhotoJpg from '../assets/images/team/kyrylo.jpg';
import AndrewlPhotoJpg from '../assets/images/team/andrew.jpg';
import LanaPhotoJpg from '../assets/images/team/lana.jpg';
import MarinaPhotoJpg from '../assets/images/team/marina.jpg';

import AllaFondJpg from '../assets/images/team/partner_alla.jpg';
import DreamFondJpg from '../assets/images/team/partner_dream.jpg';

import { 
  InstagramIcon,
  TelegramIcon 
} from '../assets/icons';

const navLinks = [
  {
    link: '/',
    label: 'Головна',
  },
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
    as: PhoneInputMask,
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
    key: 'message',
    name: 'message',
    type: 'text',
    required: true,
    as: 'textarea',
    hint: '',
    placeholder: 'Як ми можемо вам допомогти?',
    maxLength: 255
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
];

const teamList = [
  {
    name: 'Руслана',
    text: 'Руслана - член команди закупівельників, яка збирає військове спорядження та займається соціальною роботою.',
    image: LanaPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Андрій',
    text: 'Андрій відданий своїй справі і надає пріоритет обробці заявок та організації роботи складу.',
    image: AndrewlPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Марина',
    text: 'Марина - член команди закупівельників, яка збирає військове спорядження та займається соціальною роботою.',
    image: MarinaPhotoJpg,
    onHoverImage: '',
  },
];

const partnersList = [
  {
    image: AllaFondJpg,
    link: 'https://www.maibutnie.org/',
  },
  {
    image: DreamFondJpg,
    link: 'https://www.dreamua.win/',
  },
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

const adminTableFields = [
  {
    name: 'id',
    label: 'ID',
  },
  {
    name: 'photo_url',
    label: 'Фото',
  },
  {
    key: 'name',
    label: 'Назва',
  },
  {
    key: 'short_description',
    label: 'Короткий опис',
  },
  {
    key: 'long_description',
    label: 'Довгий опис',
  },
  {
    key: 'feeback',
    label: 'Відгук',
  },
  {
    key: 'created_at',
    label: 'Створено',
  }
];

const routesPath = {
  root: '/',
  admin:'/admin',
  about:'/about',
  help:'/help',
  new:'/news/:id',
  news: '/news',
  reports:'/reports',
  report:'/reports/:id',
  terms:'/terms',
}

export {
  contactFormFields,
  navLinks,
  socialNetworks,
  founders,
  teamList,
  partnersList,
  currencyAccounts,
  adminTableFields,
  routesPath,
}