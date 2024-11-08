const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://res.cloudinary.com/dlib8c3px/image/upload/v1721739277/vikiasmy-watches/bqnzo1mr5iqay5i12pzw.webp",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4 gap-y-8 py-10">
          <div className="lg:col-span-3">
            <form className="bg-white p-6 rounded-md shadow-lg py-12">
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          name="firstName"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          name="lastName"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          name="email"
                          type="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          name="country"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6 px-1"
                        >
                          <option>Australia</option>
                          <option>New Zealand</option>
                          <option>USA</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          name="street-address"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          name="city"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          name="region"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          name="postal-code"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Payment Method
                      </legend>
                      <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              name="payment-method"
                              type="radio"
                              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label className="font-medium text-gray-900">
                              Mastercard
                            </label>
                          </div>
                        </div>

                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              name="payment-method"
                              type="radio"
                              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label className="font-medium text-gray-900">
                              Visa
                            </label>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              name="payment-method"
                              type="radio"
                              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label className="font-medium text-gray-900">
                              Paypal
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
              <h1 className="mb-2 text-2xl font-bold text-center">Cart</h1>
              <hr />
              <div className="flow-root mt-6">
                <ul role="list" className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt={product.imageAlt}
                          src={product.imageSrc}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div>
                            <p className="text-gray-500 inline mr-2">Qty</p>
                            <select className="border">
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-red-600 hover:text-purple-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <Link
                    to={"/payment"}
                    className="flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700"
                  >
                    Pay and Order
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <Link
                      to={"/products"}
                      className="font-medium text-purple-600 hover:text-purple-500"
                    >
                      Continue Shopping
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
