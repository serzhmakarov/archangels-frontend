const adminTableFields = [
  {
    key: 'name',
    label: 'Назва',
    type: 'text',
    maxLength: 50,
    as: 'input',
  },
  {
    key: 'date',
    label: 'Дата',
    type: 'date',
    as: 'input'
  },
  {
    key: 'short_description',
    label: 'Короткий опис',
    type: 'textarea',
    rows: 3,
    maxLength: 150,
    as: 'textarea',
    resize: 'none',
  },
  {
    key: 'long_description',
    label: 'Довгий опис',
    type: 'textarea',
    rows: 5,
    maxLength: 10000,
    as: 'textarea',
  },
  {
    key: 'feedback',
    label: 'Вігдук',
    type: 'textarea',
    rows: 3,
    maxLength: 10000,
    as: 'textarea',
    resize: 'none',
  },
  {
    key: 'photo',
    label: 'Фото (jpg, png, jpeg)',
    type: 'file',
    as: 'input',
  },
];

export { adminTableFields };
