import * as React from 'react'

import styles from './styles.module.css'

export const GitHubShareButton: React.FC = () => {
  return (
    <a
      href='https://www.nexis.cc'
      target='_blank'
      rel='noopener noreferrer'
      className={styles.githubCorner}
      aria-label='View source on GitHub'
    >
    </a>
  )
}
