import React, { useId } from "react";

export default function DynamicTable({ columns, data, actions, totalColumn, page, limit }) {
  const id = useId();

  return (
    <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-green-600 text-white">
          <tr className="h-12">
            <th className="px-4">
              <input type="checkbox" id={id} className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
            </th>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className={`px-4 ${col.align === "right" ? "text-right" : "text-left"}`}
              >
                {col.header}
              </th>
            ))}
            {actions && <th className="text-center">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr key={row._id || idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{(page - 1) * limit + idx + 1}</td>
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className={`px-4 py-2 ${col.align === "right" ? "text-right" : ""} ${col.bold ? "font-medium text-gray-900" : ""}`}
                  >
                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
                {actions && (
                  <td className="px-4 py-2 text-center space-x-2">
                    {actions.map((action, i) => (
                      <button
                        key={i}
                        onClick={() => action.onClick(row)}
                        className={`px-3 py-1 rounded-lg text-sm ${action.className}`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + (actions ? 2 : 1)} className="text-center py-6 text-gray-500">
                No data found 🚫
              </td>
            </tr>
          )}
        </tbody>
        {totalColumn && (
          <tfoot className="bg-gray-50">
            <tr className="h-12">
              <td className="px-4 font-medium" colSpan={columns.length}>Total</td>
              <td className="px-4 text-right font-medium text-gray-900">{totalColumn}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
