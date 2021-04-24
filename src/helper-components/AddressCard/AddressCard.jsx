import React from 'react'

function AddressCard({ data, handleAddressChange, removeAddress, editAddress }) {
    const { id, name, address, city, state, pincode, phone, isDefault } = data;
    return (
        <div className="address__card">
            <input type="radio" checked={isDefault} value={id} onChange={handleAddressChange} />
            <div className="name">{name}</div>
            <div className="full__address">{`${address},${city},${state},${pincode}`}</div>
            <div className="phone__number">Mobile: {phone}</div>
            <button onClick={removeAddress} value={id}>Remove</button>
            <button onClick={editAddress} value={id}>Edit</button>
        </div>
    )
}

export default AddressCard
