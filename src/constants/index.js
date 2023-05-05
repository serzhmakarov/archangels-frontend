import PhoneInputMask from '../components/pages/home/phoneInput';
import SergeyPhotoJpg from '../assets/images/team/serhii.jpg';
import KyrylPhotoJpg from '../assets/images/team/kyrylo.jpg';
import AndrewlPhotoJpg from '../assets/images/team/andrew.jpg';
import LanaPhotoJpg from '../assets/images/team/lana.jpg';
import MarynaPhotoJpg from '../assets/images/team/maryna.jpg';
import VadymPhotoJpg from '../assets/images/team/vadym.jpg';
import YanaPhotoJpg from '../assets/images/team/yana.jpg';

import AllaFondJpg from '../assets/images/team/partner_alla.jpg';
import DreamFondJpg from '../assets/images/team/partner_dream.jpg';

import { 
  InstagramIcon,
  TelegramIcon 
} from '../assets/icons';

const achieves = [
  { url: require('../assets/images/achieves/5_a.jpg') },
  { url: require('../assets/images/achieves/6_a.jpg') },
  { url: require('../assets/images/achieves/2_a.jpg') },
  { url: require('../assets/images/achieves/3_a.jpg') },
  { url: require('../assets/images/achieves/1_a.jpg') },
  { url: require('../assets/images/achieves/8_a.jpg') },
  { url: require('../assets/images/achieves/4_a.jpg') },
]

const navLinks = [
  {
    link: '/',
    label: 'home.header.main',
  },
  {
    link: '/about',
    label: 'home.header.about',
  },
  {
    link: '/help',
    label: 'home.header.help',
  },
  {
    link: '/reports',
    label: 'home.header.reports',
  },
  {
    link: '/documents',
    label: 'home.header.documents',
  },
];

const contactFormFields = [
  {
    label: 'home.contacts.form.name',
    key: 'name',
    name: 'name',
    type: 'text',
    required: true,
    as: 'input',
    hint: '',
    placeholder: 'home.contacts.form.name_placeholder',
  },
  {
    label: 'home.contacts.form.phone',
    key: 'phone',
    name: 'phone',
    type: 'text',
    required: true,
    as: PhoneInputMask,
    hint: '',
    placeholder: 'home.contacts.form.phone_placeholder',
  },
  {
    label: 'home.contacts.form.email',
    key: 'email',
    name: 'email',
    type: 'email',
    required: true,
    as: 'input',
    hint: 'home.contacts.form.hint_email_security',
    placeholder: 'home.contacts.form.email_placeholder',
  },
  {
    label: 'home.contacts.form.message',
    key: 'message',
    name: 'message',
    type: 'text',
    required: true,
    as: 'textarea',
    hint: '',
    placeholder: 'home.contacts.form.message_placeholder',
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
    name: 'Яна',
    text: 'Яна - найкрутіший куратор проектів. Піклується про операційну работу фонду. Чудова мама, дружина та волонтер',
    image: YanaPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Вадим',
    text: 'Вадим -  Професійний комірник з 25-річним досвідом роботи. Наймудріший з Архангельєрів😉 Самі він відповідає за роботу складу.',
    image: VadymPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Руслана',
    text: 'Руслана - член команди закупівельників, яка збирає військове спорядження та займається соціальною роботою.',
    image: LanaPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Андрій',
    text: 'Андрій - відданий своїй справі і надає пріоритет обробці заявок та організації роботи складу.',
    image: AndrewlPhotoJpg,
    onHoverImage: '',
  },
  {
    name: 'Марина',
    text: 'Марина - член команди закупівельників, яка збирає військове спорядження та займається соціальною роботою.',
    image: MarynaPhotoJpg,
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
  admin: '/admin',
  about: '/about',
  help: '/help',
  reports: '/reports',
  report: '/reports/:id',
  documents: '/documents',
  terms: '/terms',
  policy: '/policy',
  refund: '/refund-policy',
};

const contacts = [
  {
    key: 'email',
    label: 'home.contacts.form.email',
    value: 'admin@archangels.in.ua',
    link: 'mailto:admin@archangels.in.ua',
  },
  {
    key: 'telegram',
    label: 'home.contacts.form.telegram',
    value: 't.me/Solomka_Help',
    link: 'https://t.me/Solomka_Help',
  },
  {
    key: 'phone',
    label: 'home.contacts.form.phone',
    value: '+380 (97) 815 0273',
    link: 'tel:+380978150273',
  },
]

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
  contacts,
  achieves
}