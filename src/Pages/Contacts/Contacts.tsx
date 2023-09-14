import { FC, useState } from 'react'
import styles from './contacts.module.css'
import { usePostContact } from '../../hooks/usePostContact'

const Contacts: FC = () => {
	const [formValue, setFormValue] = useState({
		name: '',
		phone: '',
	})

	const { mutate, isSuccess } = usePostContact(formValue, setFormValue)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		mutate()
	}

	return (
		<div className={styles.contacts}>
			<form method="post" onSubmit={(e) => handleSubmit(e)}>
				<label>
					<p>Name:</p>
					<input
						type="text"
						name="name"
						required
						value={formValue.name}
						onChange={(e) =>
							setFormValue({ ...formValue, [e.target.name]: e.target.value })
						}
					/>
				</label>
				<label>
					<p>Phone number:</p>
					<input
						type="text"
						name="phone"
						required
						value={formValue.phone}
						onChange={(e) =>
							setFormValue({ ...formValue, [e.target.name]: e.target.value })
						}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
			{isSuccess ? <h2>Success!</h2> : null}
		</div>
	)
}

export default Contacts
