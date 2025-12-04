import React from "react";
 
export const ReusableTable = ({ columns, data }) => {
  return (
    <div style={{ margin: 20 }}>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
 
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
                {columns.map((col, index) => (
                    <td key={index}>
                        {row[col.key]}
                    </td>
                ))}
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
// export default ReusableTable;