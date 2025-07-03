'use client';

import styles from '@/styles/components/Button.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: Props) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}
