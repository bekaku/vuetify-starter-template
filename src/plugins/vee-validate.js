import Vue from 'vue'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import {
  email,
  max,
  min,
  numeric,
  required,
  size,
} from 'vee-validate/dist/rules'
import i18n from '@/plugins/i18n';

extend('required', {
  ...required,
  message: '{_field_} '+i18n.tc('error.validateRequire'),
})

extend('numeric', {
  ...numeric,
  message: i18n.tc('error.validateInt'),
})

extend('max', {
  ...max,
  message: `{_field_} ${i18n.tc('error.validateMax')} {length}`,
})

extend('min', {
  ...min,
  message: `{_field_} ${i18n.tc('error.validateMin')} {length}`,
})

extend('email', {
  ...email,
  message: i18n.tc('error.validateEmail'),
})

extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: i18n.tc('error.passwordNotMatch'),
})

extend('size', {
  ...size,
  message: 'video size should be less than 5 MB!',
})

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
