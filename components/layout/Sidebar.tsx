import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Receipt,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">Marvelle POS</h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <Package size={18} />
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/pos"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <ShoppingCart size={18} />
              POS
            </Link>
          </li>

          <li>
            <Link
              href="/transactions"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <Receipt size={18} />
              Transactions
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <Settings size={18} />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
