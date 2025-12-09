"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [csvData, setCsvData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchCsv();
  }, []);

const fetchCsv = async () => {
  const res = await fetch('/api/preinscriptions')
  if (res.ok) {
    const data= await res.json()
    const filteredData = data.map(({ eventId, createdAt, ...rest }) => {
      // format createdAt
      const date = new Date(createdAt)
      const formattedDate = `${date.getDate().toString().padStart(2,'0')}/${(date.getMonth()+1).toString().padStart(2,'0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`
      return { ...rest, createdAt: formattedDate }
    })
    setCsvData(filteredData)
  } else {
    setCsvData([])
  }
}


  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Préinscriptions Dashboard</h2>
        <div>
          <a href="/api/preinscriptions?download=1" className="btn btn-warning me-2">
            Download CSV
          </a>
          <button onClick={handleLogout} className="btn btn-danger">
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
  );
}
