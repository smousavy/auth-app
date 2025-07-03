'use client'

import styles from '@/styles/pages/Auth.module.scss'
import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

export default function AuthPage() {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    const phoneRegex = /^(\+98|0)?9\d{9}$/

    if (!phoneRegex.test(phone)) {
      setError('شماره موبایل معتبر نیست')
      return
    }

    setError('')

    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us')
      const data = await res.json()

      localStorage.setItem('user', JSON.stringify(data.results[0]))
      window.location.href = '/dashboard'
    } catch (err) {
      console.error(err)
      setError('خطا در دریافت اطلاعات کاربر')
    }
  }

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.title}>ورود به حساب کاربری</h1>
      <div className={styles.inputGroup}>
        <Input
          label="شماره موبایل"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(e.target.value)
            if (error) setError('')
          }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <Button onClick={handleSubmit} text="ورود" />
    </div>
  )
}
