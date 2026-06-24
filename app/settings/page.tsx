export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Store Information</h2>

          <p className="text-gray-500">
            Manage store name, logo, address and contact information.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Receipt Settings</h2>

          <p className="text-gray-500">Configure receipt printing options.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Tax Settings</h2>

          <p className="text-gray-500">Configure tax and service fees.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>

          <p className="text-gray-500">
            Manage cashier and administrator accounts.
          </p>
        </div>
      </div>
    </div>
  );
}
