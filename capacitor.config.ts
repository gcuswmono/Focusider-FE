import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'focusider.shop',
  appName: 'focusider',
  webDir: 'out',
  server: {
    url: 'http://focusider.shop', // 배포된 Next.js 앱 URL
    cleartext: true,
  },
};

export default config;
