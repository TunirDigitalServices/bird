'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const router = useRouter()
  const ADMIN_PASSWORD = 'birdadmin123'

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminToken', 'authorized')
      router.push('/admin/dashboard')
    } else {
      alert('Mot de passe incorrect !')
    }
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card shadow p-4" style={{ minWidth: '350px' }}>
        <div className="text-center mb-4">
          <h3>Admin Login</h3>
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}
