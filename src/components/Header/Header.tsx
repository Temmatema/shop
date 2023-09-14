import { FC } from 'react'
import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const navigate = useNavigate()
  
	return (
		<div className={styles.header}>
			<a onClick={() => navigate('/')}>Home</a>
			<a onClick={() => navigate('/contacts')}>Contacts</a>
		</div>
	)
}

export default Header
