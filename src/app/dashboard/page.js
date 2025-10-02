'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Buscar eventos únicos da API
    const fetchAnalyticsData = async () => {
      try {
        const response = await fetch('/api/analytics/view')
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      }
    }

    fetchAnalyticsData()
  }, [])

  return (
    <div>
      <h1>Dashboard de Analytics</h1>
      
      {/* Exibir a tabela de eventos */}
      <table>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Usuários Únicos</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.event}</td>
              <td>{event.uniqueUsers}</td>
              <td>{new Date(event.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
