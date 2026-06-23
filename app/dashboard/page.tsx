export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Sales Today</p>
          <h2 className="text-3xl font-bold">Rp 0</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Orders Today</p>
          <h2 className="text-3xl font-bold">0</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Products</p>
          <h2 className="text-3xl font-bold">0</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">QRIS Sales</p>
          <h2 className="text-3xl font-bold">Rp 0</h2>
        </div>
      </div>
    </div>
  );
}
