import { ss } from '@/utils/storage'
import defaultAvatar from '@/assets/avatar.jpg'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: defaultAvatar,
      name: 'AI极智助手',
      description: '详情 <a href="https://www.aitalkgenie.com/" class="text-blue-500" target="_blank" >AI极智助手</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
