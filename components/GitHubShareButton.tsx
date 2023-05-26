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
      <!--<div style="position:absolute; top:0; right:0;"><img src="https://w.nexis.cc/go-home.png" /></div>-->
    </a>
  )
}
