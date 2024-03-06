'use client'

export function TokenTable() {
  return (
    <div className="relative overflow-x-auto rounded">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th scope="col" className="px-6 py-3 ">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <th
              scope="row"
              className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium text-blue-600 underline"
            >
              JeffToken
            </th>
            <td className="px-6 py-4">JTK</td>
            <td className="px-6 py-4">0xe2ac869Ae...c402254E</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
