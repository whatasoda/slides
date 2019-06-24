const base = require('../../.fusumarc');

const url = 'https://slides.whatasoda.dev';
const title = '';

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description: '',
    thumbnail: ''
  },
  slide: {
    theme: 'nebula'
  },
  extends: {
    css: 'style.css'
  }
};
