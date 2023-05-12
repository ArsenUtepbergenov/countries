import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter } from '~/server/trpc/routers/ index'

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
