import moment from 'moment';

export default function normalizeDate(date = new Date()) {
  return moment(date).format('hh:ss YYYY/MM/DD');
};