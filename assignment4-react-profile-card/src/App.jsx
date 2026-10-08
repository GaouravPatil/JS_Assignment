import ProfileCard from './components/ProfileCard'
import './App.css'

/*
 * App — parent component.
 * Holds the list of user profiles and passes each object's data
 * down to the ProfileCard child component via props.
 */
const profiles = [
  {
    id: 1,
    name: 'Swapnaj Tolnure',
    role: 'Full Stack Developer',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    description:
      'Passionate about building scalable web applications using the MERN stack.',
  },
  {
    id: 2,
    name: 'Shreya Shirur',
    role: 'UI/UX Designer',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    description:
      'Designs clean, user-friendly interfaces and interactive design systems.',
  },
  {
    id: 3,
    name: 'Himanshu Soni',
    role: 'Data Analyst',
    imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    description:
      'Turns raw datasets into clear insights using Python, SQL and Power BI.',
  },
  {
    id: 4,
    name: 'Gaourav Patil',
    role: 'Frontend Developer',
    imageUrl: 'https://randomuser.me/api/portraits/men/68.jpg',
    description:
      'Loves crafting responsive React components with reusable props.',
  },
  {
    id: 5,
    name: 'Parth Suryawanshi',
    role: 'Backend Developer',
    imageUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
    description:
      'Builds secure REST APIs with Node.js, Express and MongoDB.',
  },
  {
    id: 6,
    name: 'Ajay Borse',
    role: 'Cloud & DevOps Engineer',
    imageUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
    description:
      'Automates deployments using Docker, CI/CD pipelines and AWS services.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="title">SY MCA Student Profiles</h1>
        <p className="subtitle">
          Reusable ProfileCard component rendered with dynamic data passed as props
        </p>
      </header>

      <main className="grid">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            imageUrl={profile.imageUrl}
            description={profile.description}
          />
        ))}
      </main>
    </div>
  )
}

export default App
