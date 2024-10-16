import React from "react";

const branchData = [
  {
    id: 1,
    name: "Downtown Branch",
    manager: "John Doe",
    employees: 15,
    revenue: "$1.2M",
  },
  {
    id: 2,
    name: "Uptown Branch",
    manager: "Jane Smith",
    employees: 12,
    revenue: "$980K",
  },
  {
    id: 3,
    name: "Westside Branch",
    manager: "Mike Johnson",
    employees: 18,
    revenue: "$1.5M",
  },
  {
    id: 4,
    name: "Eastside Branch",
    manager: "Sarah Brown",
    employees: 10,
    revenue: "$750K",
  },
  {
    id: 5,
    name: "North End Branch",
    manager: "Chris Lee",
    employees: 14,
    revenue: "$1.1M",
  },
  {
    id: 6,
    name: "South End Branch",
    manager: "Emily Chen",
    employees: 11,
    revenue: "$820K",
  },
  {
    id: 7,
    name: "Central Branch",
    manager: "David Wilson",
    employees: 20,
    revenue: "$1.8M",
  },
  {
    id: 8,
    name: "Harbor Branch",
    manager: "Lisa Taylor",
    employees: 13,
    revenue: "$1M",
  },
  {
    id: 9,
    name: "Park Branch",
    manager: "Robert Garcia",
    employees: 9,
    revenue: "$680K",
  },
  {
    id: 10,
    name: "Lake Branch",
    manager: "Amanda White",
    employees: 16,
    revenue: "$1.3M",
  },
  {
    id: 11,
    name: "Hill Branch",
    manager: "Kevin Martin",
    employees: 12,
    revenue: "$950K",
  },
  {
    id: 12,
    name: "Valley Branch",
    manager: "Sophia Lee",
    employees: 17,
    revenue: "$1.4M",
  },
];

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
  },
  card: {
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  cardText: {
    fontSize: "0.875rem",
    marginBottom: "0.25rem",
  },
};

const BranchCard = ({ branch }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{branch.name}</h3>
      <p style={styles.cardText}>Manager: {branch.manager}</p>
      <p style={styles.cardText}>Employees: {branch.employees}</p>
      <p style={styles.cardText}>Revenue: {branch.revenue}</p>
    </div>
  );
};

const BranchCards = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Branch Details</h2>
      <div style={styles.grid}>
        {branchData.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default BranchCards;
