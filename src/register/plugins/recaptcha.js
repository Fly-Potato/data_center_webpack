import Vue from 'vue'
import {
    VueReCaptcha
} from 'vue-recaptcha-v3'
import settings from '../../common/settings'

// For more options see below
Vue.use(VueReCaptcha, {
    siteKey: settings.recaptcha,
    loaderOptions: {
        useRecaptchaNet: true
    }
})