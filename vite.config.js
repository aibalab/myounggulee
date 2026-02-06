import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/myounggulee/', // GitHub Pages 배포 시 레포지토리 이름이 'myounggulee'인 경우 필수 설정입니다.
})
