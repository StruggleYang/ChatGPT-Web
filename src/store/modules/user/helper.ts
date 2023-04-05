import { ss } from '@/utils/storage'

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
      avatar: 'https://avatars.githubusercontent.com/u/20719880?v=4',
      name: '公众号:StruggleYang',
      description: '<a href="http://mp.weixin.qq.com/s?__biz=MzAwNzM4NjUzNw==&mid=2452411111&idx=1&sn=c952b29633b7e6633c2cb3045532e6b9&chksm=8ca69621bbd11f3799d2c7965a35732269e9f78c76f628f67f3a48e31e5f01ed80b3af24e0fc#rd" class="text-blue-500" target="_blank" >Github学生认证点我</a>',
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
