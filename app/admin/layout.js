"use client";
// app/admin/layout.js
export default function AdminLayout({ children }) {
  return (
    <div>
      {children}  {/* Make sure children are rendered */}
    </div>
  )
}
