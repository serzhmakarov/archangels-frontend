import PhoneInputMask from '../components/pages/home/phoneInput';
import SergeyPhotoJpg from '../assets/images/team/serhii.jpg';
import KyrylPhotoJpg from '../assets/images/team/kyrylo.jpg';
import LanaPhotoJpg from '../assets/images/team/lana.jpg';
import VadymPhotoJpg from '../assets/images/team/vadym.jpg';

import { InstagramIcon, TelegramIcon } from '../assets/icons';

const achieves = [
  { url: require('../assets/images/achieves/5_a.jpg') },
  { url: require('../assets/images/achieves/6_a.jpg') },
  { url: require('../assets/images/achieves/2_a.jpg') },
  { url: require('../assets/images/achieves/3_a.jpg') },
  { url: require('../assets/images/achieves/1_a.jpg') },
  { url: require('../assets/images/achieves/8_a.jpg') },
  { url: require('../assets/images/achieves/4_a.jpg') },
];

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
    link: '/reports',
    label: 'home.header.reports',
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
    maxLength: 255,
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

const teamList = [
  {
    name: 'Кирило Курiнов',
    text: 'Директор та співзасновник благодійного фонду.',
    image: KyrylPhotoJpg,
  },
  {
    name: 'Сергiй Макаров',
    text: 'Заступник директора та співзасновник благодійного фонду. IT Web Engineer',
    image: SergeyPhotoJpg,
  },
  {
    name: 'Вадим',
    text: 'Вадим -  Професійний комірник з 25-річним досвідом роботи. Наймудріший з Архангельєрів😉 Самі він відповідає за роботу складу.',
    image: VadymPhotoJpg,
  },
  {
    name: 'Руслана',
    text: 'Руслана - член команди закупівельників, яка збирає військове спорядження та займається соціальною роботою.',
    image: LanaPhotoJpg,
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

const adminTableReportsFields = [
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
    key: 'date',
    label: 'Дата (звiту)',
  },
];

const adminTableProjectsFields = [
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
  },
];

const adminTablePartnersFields = [
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
    key: 'projects',
    label: 'Кількість проектів',
  },
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
  partners: '/partners',
  partner: '/partners/:id',
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
];

export {
  contactFormFields,
  navLinks,
  socialNetworks,
  teamList,
  currencyAccounts,
  adminTableReportsFields,
  adminTablePartnersFields,
  adminTableProjectsFields,
  routesPath,
  contacts,
  achieves,
};
