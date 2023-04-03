import { persisted } from 'svelte-local-storage-store'

export interface User {
    name: string
    level: string
    gender: string
    sign: string
    mood: string

    company: string
    position: string
    career: string
    story: string

}

export const userStore = persisted<User>('user', {
    name: "HELLO",
    level: "LV10",
    gender: "男",
    sign: "天馬座",
    mood: "不錯",
    company: "PSK公司",
    position: "Software Developer",
    career: "star",
    story: "這是這個人的冒險故事"
})

