import Link from 'next/link'
import { ArrowLeft, User, Package, Heart, CreditCard, Settings, LogOut, Clock } from 'lucide-react'

export const metadata = {
  title: 'My Account | Art Gallery Online',
  description: 'Manage your Art Gallery Online account - view orders, wishlist, and settings.',
}

export default function AccountPage() {
  const menuItems = [
    {
      icon: User,
      title: 'Profile',
      description: 'Update your personal information',
      href: '#',
    },
    {
      icon: Package,
      title: 'Orders',
      description: 'Track your orders and view history',
      href: '#',
    },
    {
      icon: Heart,
      title: 'Wishlist',
      description: 'Your saved artworks',
      href: '#',
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      description: 'Manage your payment options',
      href: '#',
    },
    {
      icon: Settings,
      title: 'Settings',
      description: 'Account preferences',
      href: '#',
    },
  ]

  const recentOrders = [
    {
      id: 'ORD-12345',
      date: 'March 10, 2024',
      status: 'Delivered',
      total: 250,
      items: 1,
    },
    {
      id: 'ORD-12344',
      date: 'February 28, 2024',
      status: 'Delivered',
      total: 420,
      items: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-white-light">
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
            My Account
          </h1>
          <p className="text-white/80 text-lg mt-4">
            Welcome back, John!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar Menu */}
            <div className="lg:col-span-1">
              {/* User Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">John Doe</h3>
                    <p className="text-sm text-grey">john@example.com</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 hover:bg-grey-lighter transition-colors border-b border-grey-lighter last:border-b-0"
                  >
                    <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-black">{item.title}</h4>
                      <p className="text-sm text-grey">{item.description}</p>
                    </div>
                  </Link>
                ))}
                
                {/* Logout */}
                <button className="flex items-center gap-4 p-4 hover:bg-red-50 w-full text-left transition-colors border-t border-grey-lighter">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <LogOut className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600">Logout</h4>
                    <p className="text-sm text-red-400">Sign out of your account</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-black mb-1">5</div>
                  <div className="text-sm text-grey">Total Orders</div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-black mb-1">12</div>
                  <div className="text-sm text-grey">Wishlist Items</div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-black mb-1">$670</div>
                  <div className="text-sm text-grey">Total Spent</div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-serif font-bold text-black">
                    Recent Orders
                  </h2>
                  <Link href="#" className="text-[#800000] font-medium hover:underline">
                    View All
                  </Link>
                </div>

                {recentOrders.length > 0 ? (
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 bg-grey-lighter rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-black">{order.id}</h4>
                            <p className="text-sm text-grey">{order.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-black">${order.total}</div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-600 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Package className="w-12 h-12 text-grey mx-auto mb-4" />
                    <p className="text-grey mb-4">No orders yet</p>
                    <Link href="/shop" className="btn-primary">
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>

              {/* Wishlist Preview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-serif font-bold text-black">
                    Wishlist
                  </h2>
                  <Link href="#" className="text-[#800000] font-medium hover:underline">
                    View All
                  </Link>
                </div>
                
                <div className="text-center py-8">
                  <Heart className="w-12 h-12 text-grey mx-auto mb-4" />
                  <p className="text-grey mb-4">Your wishlist is empty</p>
                  <Link href="/shop" className="btn-primary">
                    Browse Artworks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
