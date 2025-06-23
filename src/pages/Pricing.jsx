import React from "react";

export default function Pricing() {
  return (
    <section className="min-h-screen bg-dark text-light p-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gold mb-4">Our Pricing Plans</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Choose the plan that fits your trading needs. No hidden fees. Cancel anytime.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl border border-teal shadow-md">
          <h3 className="text-xl font-bold mb-2 text-teal">Free</h3>
          <p className="text-4xl font-bold mb-4">₹0</p>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li>✅ Basic Signals</li>
            <li>✅ 1 Strategy</li>
            <li>✅ Community Access</li>
          </ul>
          <button className="bg-teal text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl border-2 border-gold shadow-lg scale-105">
          <h3 className="text-xl font-bold mb-2 text-gold">Pro</h3>
          <p className="text-4xl font-bold mb-4">₹999/mo</p>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li>✅ All Free Features</li>
            <li>✅ Unlimited Strategies</li>
            <li>✅ Priority Support</li>
          </ul>
          <button className="bg-gold text-black font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition">
            Subscribe
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl border border-teal shadow-md">
          <h3 className="text-xl font-bold mb-2 text-teal">Enterprise</h3>
          <p className="text-4xl font-bold mb-4">Custom</p>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li>✅ Dedicated Account Manager</li>
            <li>✅ Custom Strategy Integration</li>
            <li>✅ API Access</li>
          </ul>
          <button className="bg-teal text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
