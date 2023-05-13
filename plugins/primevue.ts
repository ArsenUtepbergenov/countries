import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: false })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Image', Image)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('InputText', InputText)
  //other components that you need
})
