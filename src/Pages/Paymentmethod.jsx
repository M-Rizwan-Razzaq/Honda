import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Paymentmethod = () => {
    const [contact, setContact] = useState('');
    const [contactError, setContactError] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(''); // For tracking payment method

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);

    const handleContactChange = (e) => {
        setContact(e.target.value);
        setContactError(false);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(false);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setLastNameError(false);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        setAddressError(false);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
        setCityError(false);
    };

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        setZipCodeError(false);
    };

    const validateFields = () => {
        let isValid = true;
        if (contact.trim() === '') {
            setContactError(true);
            isValid = false;
        }
        if (firstName.trim() === '') {
            setFirstNameError(true);
            isValid = false;
        }
        if (lastName.trim() === '') {
            setLastNameError(true);
            isValid = false;
        }
        if (address.trim() === '') {
            setAddressError(true);
            isValid = false;
        }
        if (city.trim() === '') {
            setCityError(true);
            isValid = false;
        }
        if (zipCode.trim() === '') {
            setZipCodeError(true);
            isValid = false;
        }
        return isValid;
    };

    const handlePaymentSelection = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handlePayNow = () => {
        if (validateFields()) {
            if (paymentMethod === "COD") {
                alert("Order placed successfully. You will pay upon delivery.");
            } else {
                alert("Please select Cash on Delivery as the only available payment method.");
            }
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <>
            <div className='flex justify-between px-40 py-5'>
                <h1>Al Shams Honda</h1>
                <FiShoppingCart className='h-6 w-6' />
            </div>
            <div className='border-b-2'></div>
            <div className="flex flex-col md:flex-row justify-between">

                {/* Left Section */}
                <div className="w-full md:w-2/5 space-y-6 ">
                    {/* Contact Section */}
                    <div className='px-10 mt-10'>
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <div className="mt-2">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Email or mobile phone number"
                                    className={`w-full p-2 border rounded-md ${contactError ? 'border-red-500' : ''}`}
                                    value={contact}
                                    onChange={handleContactChange}
                                    onBlur={validateFields}
                                />
                                {contactError && (
                                    <p className="text-red-500 text-sm mt-1">Enter an email or phone number</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Delivery Section */}
                    <div className='px-10'>
                        <h2 className="text-lg font-semibold">Delivery</h2>
                        <div className="mt-2 space-y-4">
                            <select className="w-full p-2 border rounded-sm">
                                <option>Pakistan</option>
                                {/* Add more options here */}
                            </select>
                            <div className="flex space-x-2">
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        placeholder="First name (optional)"
                                        className={`w-full p-2 border rounded-sm ${firstNameError ? 'border-red-500' : ''}`}
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        onBlur={validateFields}
                                    />
                                    {firstNameError && (
                                        <p className="text-red-500 text-sm mt-1">First name is required</p>
                                    )}
                                </div>
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className={`w-full p-2 border rounded-sm ${lastNameError ? 'border-red-500' : ''}`}
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                        onBlur={validateFields}
                                    />
                                    {lastNameError && (
                                        <p className="text-red-500 text-sm mt-1">Last name is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className={`w-full p-2 border rounded-sm ${addressError ? 'border-red-500' : ''}`}
                                    value={address}
                                    onChange={handleAddressChange}
                                    onBlur={validateFields}
                                />
                                {addressError && (
                                    <p className="text-red-500 text-sm mt-1">Address is required</p>
                                )}
                            </div>
                            <input
                                type="text"
                                placeholder="Apartment, suite, etc. (optional)"
                                className="w-full p-2 border rounded-sm"
                            />
                            <div className="flex space-x-2">
                                <div className="w-1/3">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className={`w-full p-2 border rounded-sm ${cityError ? 'border-red-500' : ''}`}
                                        value={city}
                                        onChange={handleCityChange}
                                        onBlur={validateFields}
                                    />
                                    {cityError && (
                                        <p className="text-red-500 text-sm mt-1">City is required</p>
                                    )}
                                </div>
                                <select className="w-1/3 h-[42px] p-2 border rounded-sm">
                                    <option>Lahore</option>
                                    {/* Add more options here */}
                                </select>
                                <div className="w-1/3">
                                    <input
                                        type="text"
                                        placeholder="ZIP code"
                                        className={`w-full p-2 border rounded-sm ${zipCodeError ? 'border-red-500' : ''}`}
                                        value={zipCode}
                                        onChange={handleZipCodeChange}
                                        onBlur={validateFields}
                                    />
                                    {zipCodeError && (
                                        <p className="text-red-500 text-sm mt-1">ZIP code is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="h-4 w-4" />
                                <label className="text-sm text-gray-500">
                                    Save this information for next time
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className='px-10'>
                        <h2 className="text-lg font-semibold">Payment</h2>
                        <p>All transactions are secure and encrypted.</p>
                        <div className="mt-2 space-y-4">
                            <label>
                                <input
                                    type="radio"
                                    value="COD"
                                    checked={paymentMethod === 'COD'}
                                    onChange={handlePaymentSelection}
                                />
                                <span className="ml-2">Cash on Delivery (COD)</span>
                            </label>
                        </div>
                    </div>

                    {/* Pay Now Button */}
                    <div className='px-10 '>
                        <button
                            className="w-full text-center py-2 bg-green-500 text-white font-semibold rounded-sm"
                            onClick={handlePayNow}
                        >
                            Place Order
                        </button>
                        <div className='border-b-[1px] mt-10 mb-5'></div>
                        <p>Refund Policy</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/3 px-10 space-y-5 mt-10">
                    <div className="border p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex">
                                <div className="w-20 h-20 rounded-md bg-gray-300"></div>
                                <div className="ml-4">
                                    <p className="text-md font-medium">Service Title</p>
                                    <p className="text-gray-500 text-sm">Description of the product or service.</p>
                                </div>
                            </div>
                            <p className="font-semibold">$50</p>
                        </div>
                        <div className="border-b-2"></div>
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>$50</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p>Calculated at next step</p>
                        </div>
                        <div className="border-b-2"></div>
                        <div className="flex justify-between">
                            <p>Total</p>
                            <p>$50</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Paymentmethod;
