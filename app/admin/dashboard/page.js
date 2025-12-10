"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("preinscriptions"); // 'preinscriptions' or 'contact'
  const [preData, setPreData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchPreinscriptions();
    fetchContacts();
  }, []);

  const fetchPreinscriptions = async () => {
    const res = await fetch("/api/preinscriptions");
    if (res.ok) {
      const data = await res.json();
      const filteredData = data.map(({ eventId, ...rest }) => ({
        ...rest,
        createdAt: new Date(rest.createdAt).toLocaleString("fr-FR"),
      }));
      setPreData(filteredData);
    }
  };

  const fetchContacts = async () => {
    const res = await fetch("/api/contact");
    if (res.ok) {
      const data = await res.json();
      const formattedData = data.map((msg) => ({
        ...msg,
        createdAt: new Date(msg.createdAt).toLocaleString("fr-FR"),
      }));
      setContactData(formattedData);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const renderTable = (data) => {
    if (!data || data.length === 0) {
      return (
        <div className="card-body">
          <p className="text-muted mb-0">Aucune soumission pour le moment.</p>
        </div>
      );
    }

    return (
      <div className="table-responsive">
        <table className="table table-hover table-custom mb-0">
          <thead className="table-header-custom text-white">
            <tr>
              {Object.keys(data[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
  <h2 className="mb-2 mb-md-0">Admin Dashboard</h2>
  <div className="d-flex flex-wrap gap-2">
    {activeTab === "preinscriptions" && (
      <a
        href="/api/preinscriptions?download=1"
        className="btn btn-warning"
        style={{background:"#C1A698"}}
      >
        Download CSV
      </a>
    )}
    <button onClick={handleLogout} className="btn btn-danger"
        style={{background:"#C1A698"}}
    >
      Logout
    </button>
  </div>
</div>


      {/* Tab Bar */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "preinscriptions" ? "active" : ""}`}
            onClick={() => setActiveTab("preinscriptions")}
          >
            Préinscriptions
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Messages Contact
          </button>
        </li>
      </ul>

      <div className="card shadow-sm p-3 rounded">
        {activeTab === "preinscriptions"
          ? renderTable(preData)
          : renderTable(contactData)}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .table-custom {
          border-radius: 10px;
          overflow: hidden;
        }
        .table-header-custom {
          background: var(--bs-primary);
        }
        .table-custom tbody tr:hover {
          background: rgba(0, 123, 255, 0.1);
        }
        .table-custom th,
        .table-custom td {
          vertical-align: middle;
        }
        .nav-tabs .nav-link.active {
          background-color: var(--bs-primary);
          color: #fff;
          font-weight: 500;
          border-radius: 0.25rem;
        }
        .nav-tabs .nav-link {
          color: var(--bs-dark);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
