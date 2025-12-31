import React, { useState } from "react";

function Products() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    discount: "",
    stock: "",
    description: "",
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    alert("Product added successfully (Dummy)");
  };

  return (
    <section className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-5xl mx-auto px-4 py-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
          <p className="text-sm text-gray-500">
            Create and publish a product to your store
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Card: Basics */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Name
                </label>
                <input
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                  required
                >
                  <option value="">Select category</option>
                  <option>Clothes</option>
                  <option>Grocery</option>
                  <option>Electronics</option>
                  <option>Footwear</option>
                </select>
              </div>
            </div>
          </div>

          {/* Card: Pricing */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Pricing</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full rounded-xl border px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  value={product.discount}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>
            </div>
          </div>

          {/* Card: Inventory */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Inventory</h2>

            <div className="max-w-sm">
              <label className="block text-sm font-medium mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Available units"
                className="w-full rounded-xl border px-4 py-3"
                required
              />
            </div>
          </div>

          {/* Card: Media */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Product Media</h2>

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="w-full rounded-xl border px-4 py-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Dummy upload (UI only)
                </p>
              </div>

              {preview && (
                <div className="w-24 h-24 rounded-xl border overflow-hidden">
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Card: Description */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Description</h2>

            <textarea
              name="description"
              rows="4"
              value={product.description}
              onChange={handleChange}
              placeholder="Describe your product"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Sticky Actions */}
          <div className="fixed inset-x-0 bottom-0 bg-white border-t">
            <div className="max-w-5xl mx-auto px-4 py-3 flex gap-3 justify-end">
              <button
                type="reset"
                className="px-6 py-2 rounded-xl border hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                Save Product
              </button>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Products;
