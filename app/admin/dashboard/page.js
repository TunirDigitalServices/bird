'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [csvData, setCsvData] = useState([])
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    fetchCsv()
  }, [])

const fetchCsv = async () => {
  const res = await fetch('/api/preinscriptions')
  if (res.ok) {
    const text = await res.text()
    const rows = text.split('\n').filter(Boolean)
    if (rows.length === 0) return setCsvData([])

    const headers = rows[0].split(';').map(h => h.replace(/^"|"$/g, ''))
    const data = rows.slice(1).map(row => {
      const values = row.split(';').map(v => v.replace(/^"|"$/g, ''))
      return headers.reduce((acc, header, i) => {
        acc[header] = values[i] || ''
        return acc
      }, {})
    })
    setCsvData(data)
  } else {
    setCsvData([])
  }
}



  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  return (
    <div className="container py-5" style={{marginTop: '80px'}}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Préinscriptions Dashboard</h2>
        <div>
          <a
            href="/api/preinscriptions"
            className="btn btn-warning me-2"
          >
            Download CSV
          </a>
          <button
            onClick={handleLogout}
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="card shadow-sm">
        {csvData.length === 0 ? (
          <div className="card-body">
            <p className="text-muted mb-0">No submissions yet.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover mb-0">
              <thead className="table-light">
                <tr>
                  {Object.keys(csvData[0]).map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
