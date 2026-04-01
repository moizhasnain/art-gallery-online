import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Trash2, Minus, Plus, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Shopping Cart | Art Gallery Online',
  description: 'Review your selected artworks and proceed to checkout.',
}

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'Sunset Mountain Landscape',
      artist: 'Ahmed Khan',
      price: 250,
      image: '/api/placeholder/120/120',
      quantity: 1,
    },
  ]

  const subtotal = 250
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

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
            Shopping Cart
          </h1>
          <p className="text-white/80 text-lg mt-4">
            Review your selected artworks
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-grey-lighter font-medium text-black">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>

                  {/* Items */}
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid md:grid-cols-12 gap-4 p-6 border-b border-grey-lighter items-center"
                    >
                      {/* Product Info */}
                      <div className="md:col-span-6 flex gap-4">
                        <div className="w-24 h-24 bg-grey-lighter rounded-lg flex-shrink-0 flex items-center justify-center">
                          <span className="text-grey text-xs">Image</span>
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-black">
                            {item.name}
                          </h3>
                          <p className="text-sm text-grey-dark mb-2">
                            by {item.artist}
                          </p>
                          <button className="text-red-500 text-sm flex items-center gap-1 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 text-center md:block flex justify-between py-2">
                        <span className="md:hidden font-medium">Price:</span>
                        <span className="font-medium text-black">₨{item.price * 280}</span>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-2 flex items-center justify-center gap-2">
                        <button className="w-8 h-8 border border-grey-lighter rounded flex items-center justify-center hover:bg-grey-lighter">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button className="w-8 h-8 border border-grey-lighter rounded flex items-center justify-center hover:bg-grey-lighter">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 text-right md:block flex justify-between py-2">
                        <span className="md:hidden font-medium">Total:</span>
                        <span className="font-bold text-black">₨{item.price * item.quantity * 280}</span>
                      </div>
                    </div>
                  ))}

                  {/* Continue Shopping */}
                  <div className="p-6">
                    <Link
                      href="/shop"
                      className="text-[#800000] font-medium flex items-center gap-2 hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-xl font-serif font-bold text-black mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-grey-dark">Subtotal</span>
                      <span className="font-medium text-black">₨{subtotal * 280}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey-dark">Shipping</span>
                      <span className="font-medium text-green-600">
                        {shipping === 0 ? 'Free' : `₨${shipping * 280}`}
                      </span>
                    </div>
                    <div className="border-t border-grey-lighter pt-4 flex justify-between">
                      <span className="font-bold text-black">Total</span>
                      <span className="font-bold text-xl text-black">₨{total * 280}</span>
                    </div>
                  </div>

                  {shipping === 0 && (
                    <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm mb-6">
                      You qualify for free shipping!
                    </div>
                  )}

                  <Link
                    href="/checkout"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  {/* Secure Payment Note */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-grey">
                      Secure checkout powered by Stripe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart */
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-grey-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-grey" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">
                Your cart is empty
              </h2>
              <p className="text-grey-dark mb-8 max-w-md mx-auto">
                Looks like you haven't added any artworks to your cart yet. 
                Start exploring our collection!
              </p>
              <Link href="/shop" className="btn-primary">
                Browse Collection
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
