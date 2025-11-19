import React, { useEffect, useState } from "react";
import axios from "axios";

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/donors"); // your backend URL
        if (res.data.success) {
          setDonors(res.data.donors); // array of donors
        } else {
          setError(res.data.message || "No donors found");
        }
      } catch (err) {
        console.error("Error fetching donors:", err.message);
        setError("Failed to fetch donors from server");
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  if (loading) return <p>Loading donors...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="donors-page" style={{ padding: "20px" }}>
      <h1>Registered Donors</h1>

      {donors.length === 0 ? (
        <p>No donors registered yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Email
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Blood Group
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Phone
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donors) => (
              <tr key={donors._id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {donors.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {donors.email}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {donors.bloodGroup}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {donors.phone}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {donors.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Donors;
