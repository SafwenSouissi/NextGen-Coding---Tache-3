import { useState, useEffect } from 'react'
import './UserList.css'

function UserList() {
  // State pour stocker les données des utilisateurs
  const [users, setUsers] = useState([])
  // State pour gérer le loading
  const [loading, setLoading] = useState(true)
  // State pour gérer les erreurs
  const [error, setError] = useState(null)

  // useEffect pour faire l'appel API au montage du composant
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Appel à l'API JSONPlaceholder pour récupérer des utilisateurs
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`)
        }
        
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
        console.error('Erreur lors du fetch:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, []) // Tableau de dépendances vide = exécuté seulement au montage

  // Fonction pour rafraîchir les données
  const refreshData = () => {
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }

  if (loading) {
    return (
      <div className="user-list-container">
        <div className="loading-container">
          <h2>Chargement des utilisateurs...</h2>
          <div className="loading-spinner">⏳</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="user-list-container">
        <div className="error-container">
          <h2>Erreur lors du chargement</h2>
          <p>{error}</p>
          <button onClick={refreshData} className="retry-button">
            Réessayer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2>Liste des Utilisateurs</h2>
      </div>
      
      <button onClick={refreshData} className="refresh-button">
        🔄 Rafraîchir
      </button>
      
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3 className="user-name">{user.name}</h3>
            <div className="user-info">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="user-info">
              <strong>Ville:</strong> {user.address.city}
            </div>
            <div className="user-info">
              <strong>Entreprise:</strong> {user.company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList 