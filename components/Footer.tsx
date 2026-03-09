'use client';

export default function Footer() {
  return (
    <footer className="bg-nike-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Icons */}
          <div>
            <h4 className="nike-body font-semibold text-sm uppercase mb-4 text-gray-400">
              Get Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Payment Options
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Shoes */}
          <div>
            <h4 className="nike-body font-semibold text-sm uppercase mb-4 text-gray-400">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  All Shoes
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Jordan
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Running
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Basketball
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="nike-body font-semibold text-sm uppercase mb-4 text-gray-400">
              About Nike
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="nike-body font-semibold text-sm uppercase mb-4 text-gray-400">
              Follow Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="nike-body text-sm text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="nike-body text-xs text-gray-500">
              © 2026 Nike, Inc. All rights reserved
            </p>
            <div className="flex gap-6">
              <a href="#" className="nike-body text-xs text-gray-500 hover:text-white transition-colors">
                Guides
              </a>
              <a href="#" className="nike-body text-xs text-gray-500 hover:text-white transition-colors">
                Terms of Sale
              </a>
              <a href="#" className="nike-body text-xs text-gray-500 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="nike-body text-xs text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
