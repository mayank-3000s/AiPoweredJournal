export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Links + Social */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-[var(--primary-color)] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-[var(--primary-color)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-[var(--primary-color)] transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-[var(--primary-color)] transition-colors"
            >
              {/* Facebook */}
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 
                     2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797
                     c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 
                     2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 
                     1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
                     21.128 22 16.991 22 12z"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-[var(--primary-color)] transition-colors"
            >
              {/* Instagram */}
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 
                     3.808.06 1.064.049 1.791.218 2.427.465a4.902 
                     4.902 0 011.772 1.153 4.902 4.902 0 011.153 
                     1.772c.247.636.416 1.363.465 2.427.048 
                     1.024.06 1.378.06 3.808s-.012 2.784-.06 
                     3.808c-.049 1.064-.218 1.791-.465 
                     2.427a4.902 4.902 0 01-1.153 1.772 
                     4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 
                     4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 
                     4.902 0 011.153-1.772A4.902 4.902 0 016.08 
                     2.525c.636-.247 1.363-.416 
                     2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 
                     5.838a6.162 6.162 0 100 12.324 6.162 
                     6.162 0 000-12.324zM12 16a4 4 0 
                     110-8 4 4 0 010 8zm6.406-11.845a1.44 
                     1.44 0 100 2.88 1.44 1.44 0 
                     000-2.88z"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-[var(--primary-color)] transition-colors"
            >
              {/* Twitter */}
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 
                         11.675-6.253 11.675-11.675 
                         0-.178 0-.355-.012-.53A8.348 
                         8.348 0 0022 5.92a8.19 8.19 
                         0 01-2.357.646 4.118 4.118 
                         0 001.804-2.27 8.224 8.224 
                         0 01-2.605.996 4.107 4.107 
                         0 00-6.993 3.743 11.65 
                         11.65 0 01-8.457-4.287 
                         4.106 4.106 0 001.27 5.477A4.072 
                         4.072 0 012.8 9.71v.052a4.105 
                         4.105 0 003.292 4.022 4.095 
                         4.095 0 01-1.853.07 4.108 
                         4.108 0 003.834 2.85A8.233 
                         8.233 0 012 18.407a11.616 
                         11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-gray-500">
          © 2024 ReflectAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
