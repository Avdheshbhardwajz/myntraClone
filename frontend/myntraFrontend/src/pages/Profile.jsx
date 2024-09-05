import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user, orderHistory }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

      {/* Personal Information Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Name:</span> {user.name || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Email:</span> {user.email || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Phone:</span> {user.phone || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Address:</span> {user.address || "N/A"}
        </p>
        <Link
          to="/profile/edit"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Edit Profile
        </Link>
      </div>

      {/* Order History Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order History</h2>
        {orderHistory.length === 0 ? (
          <p className="text-gray-600">You have no orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <tr key={order._id}>
                    {" "}
                    {/* Assuming _id is used as the unique identifier */}
                    <td className="px-4 py-2 whitespace-nowrap">{order._id}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {new Date(order.createdAt).toLocaleDateString()}{" "}
                      {/* Assuming createdAt is the date field */}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      ${order.totalAmount.toFixed(2)}{" "}
                      {/* Assuming totalAmount is the total field */}
                    </td>
                    <td
                      className={`px-4 py-2 whitespace-nowrap ${
                        order.orderStatus === "Delivered"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {order.orderStatus}{" "}
                      {/* Assuming orderStatus is the status field */}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <Link
                        to={`/order/${order._id}`} // Correct link to order details
                        className="text-blue-500 hover:underline"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Account Settings Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <Link
          to="/profile/change-password"
          className="text-blue-500 hover:underline mb-2 inline-block"
        >
          Change Password
        </Link>
        <br />
        <button
          onClick={() => alert("Logout functionality to be implemented")}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
