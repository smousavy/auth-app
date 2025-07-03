'use client'

import styles from '@/styles/pages/Dashboard.module.scss'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from '../components/Button'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) {
      router.push('/auth')
    } else {
      setUser(JSON.parse(storedUser))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/auth')
  }

  if (!user) return null

  return (
    <div className={styles.wrapper}>
      <h1>به داشبورد خوش آمدی 👋</h1>
      <Button onClick={handleLogout} text="خروج" />
    </div>
  )
}
