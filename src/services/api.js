// Service API pour gérer les appels HTTP
// Couche d'abstraction pour les communications avec le backend

const API_BASE_URL = 'https://api.example.com'; // À remplacer par votre URL

/**
 * Classe pour gérer les appels API
 */
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Effectue une requête HTTP
   * @param {string} endpoint - Point de terminaison
   * @param {Object} options - Options de la requête
   * @returns {Promise} Réponse de l'API
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erreur API:', error);
      throw error;
    }
  }

  /**
   * GET request
   * @param {string} endpoint - Point de terminaison
   * @param {Object} options - Options de la requête
   * @returns {Promise} Réponse de l'API
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, {
      method: 'GET',
      ...options,
    });
  }

  /**
   * POST request
   * @param {string} endpoint - Point de terminaison
   * @param {Object} data - Données à envoyer
   * @param {Object} options - Options de la requête
   * @returns {Promise} Réponse de l'API
   */
  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  }

  /**
   * PUT request
   * @param {string} endpoint - Point de terminaison
   * @param {Object} data - Données à envoyer
   * @param {Object} options - Options de la requête
   * @returns {Promise} Réponse de l'API
   */
  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  }

  /**
   * DELETE request
   * @param {string} endpoint - Point de terminaison
   * @param {Object} options - Options de la requête
   * @returns {Promise} Réponse de l'API
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, {
      method: 'DELETE',
      ...options,
    });
  }
}

// Instance singleton
export const apiService = new ApiService(); 