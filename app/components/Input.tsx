'use client';

import styles from '@/styles/components/Input.module.scss';

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, value, onChange }: Props) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
