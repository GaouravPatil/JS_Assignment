import styles from './ProfileCard.module.css'

/*
 * ProfileCard — child functional component.
 * Receives read-only data from the parent (App) through props.
 * Props: name, imageUrl, description, role
 */
function ProfileCard({ name, imageUrl, description, role }) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={imageUrl} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.role}>{role}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ProfileCard
