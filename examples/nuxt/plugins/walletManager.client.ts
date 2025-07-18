import { NetworkId, WalletId, WalletManagerPlugin } from '@txnlab/use-wallet-vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WalletManagerPlugin, {
    wallets: [
      WalletId.DEFLY,
      WalletId.DEFLY_WEB,
      WalletId.EXODUS,
      WalletId.PERA,
      {
        id: WalletId.WALLETCONNECT,
        options: { projectId: 'fcfde0713d43baa0d23be0773c80a72b' }
      },
      {
        id: WalletId.BIATEC,
        options: { projectId: 'fcfde0713d43baa0d23be0773c80a72b' }
      },
      WalletId.KMD,
      WalletId.KIBISIS,
      {
        id: WalletId.LIQUID,
        options: {
          origin: 'https://debug.liquidauth.com',
          RTC_config_username: 'liquid-auth',
          RTC_config_credential: 'sqmcP4MiTKMT4TGEDSk9jgHY'
        }
      },
      WalletId.LUTE,
      {
        id: WalletId.MAGIC,
        options: { apiKey: 'pk_live_D17FD8D89621B5F3' }
      },
      WalletId.MNEMONIC,
      WalletId.W3_WALLET
    ],
    defaultNetwork: NetworkId.TESTNET
  })
})
