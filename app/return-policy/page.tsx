import Link from 'next/link'
import { ArrowLeft, RefreshCcw, Clock, Shield, CreditCard } from 'lucide-react'

export const metadata = {
  title: 'Return Policy | Art Gallery Online',
  description: 'Our return policy at Art Gallery Online - Store credit coupons for returns, 7-day window, and quality guarantee.',
}

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-burgundy py-16">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center text-cream/80 hover:text-cream mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream">
            Return Policy
          </h1>
          <p className="text-cream/80 text-lg mt-4 max-w-2xl">
            Our customer-friendly return policy with store credit coupons
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* How Returns Work */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                  <RefreshCcw className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-charcoal">
                    How Our Returns Work
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ochre rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Request a Return</h3>
                    <p className="text-gray-600">
                      Contact us within 7 days of receiving your order to request a return.
                      Provide your order number and reason for return.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ochre rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Ship Back the Item</h3>
                    <p className="text-gray-600">
                      Pack the item securely in its original packaging and ship it back to us.
                      We'll provide the return address.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ochre rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Receive Your Store Credit Coupon</h3>
                    <p className="text-gray-600">
                      Once we receive and inspect the item, we'll issue a store credit coupon
                      equal to the item's value. This coupon can be used for any future purchase!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ochre rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Shop Again!</h3>
                    <p className="text-gray-600">
                      Use your coupon code on your next order. The coupon never expires
                      and can be combined with other offers!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Credit Benefits */}
            <div className="bg-gradient-to-br from-burgundy to-burgundy-dark rounded-2xl p-8 mb-8 text-cream">
              <div className="flex items-center space-x-4 mb-6">
                <CreditCard className="w-8 h-8 text-ochre" />
                <h2 className="text-2xl font-serif font-bold">
                  Why Store Credit Coupons?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ochre rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Full Value Credit</h3>
                    <p className="text-cream/70 text-sm">
                      Get 100% of your purchase value as store credit
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ochre rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">No Expiration</h3>
                    <p className="text-cream/70 text-sm">
                      Use your coupon anytime - it never expires
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ochre rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Stackable Offers</h3>
                    <p className="text-cream/70 text-sm">
                      Combine with discounts and other promotions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ochre rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Easy to Use</h3>
                    <p className="text-cream/70 text-sm">
                      Simply enter the code at checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                Return Policy Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal">7-Day Return Window</h3>
                    <p className="text-gray-600">
                      You have 7 days from the date of delivery to request a return.
                      After 7 days, unfortunately, we cannot accept returns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal">Condition Requirements</h3>
                    <p className="text-gray-600">
                      Items must be unused, in original packaging, and in the same condition
                      as when you received them. Custom portrait orders cannot be returned
                      due to their personalized nature.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <RefreshCcw className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal">Non-Returnable Items</h3>
                    <ul className="text-gray-600 list-disc list-inside mt-2 space-y-1">
                      <li>Custom portrait sketches (personalized)</li>
                      <li>Items damaged by misuse</li>
                      <li>Items not in original condition</li>
                      <li>Gift cards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Contact */}
            <div className="bg-cream-light rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                How to Initiate a Return
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  To initiate a return, please contact us with:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Your order number</li>
                  <li>• Item(s) you wish to return</li>
                  <li>• Reason for return</li>
                  <li>• Photos of the item (if damaged/defective)</li>
                </ul>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/shop"
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    Continue Shopping
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
