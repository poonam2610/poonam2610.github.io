import React, { useEffect, useState } from 'react'

function AddressCard({ data, handleAddressChange, removeAddress, editAddress, currentSelection }) {
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const { id, name, address, city, state, pincode, phone } = data;
    const [selectAddress, setSelectAddress] = useState(false);

    useEffect(() => {
        if (Object.keys(data).length === 0) {
            setIsDataAvailable(false)
        } else {
            setIsDataAvailable(true)
        }
        if (currentSelection === data.id) {
            setSelectAddress(true)
        } else {
            setSelectAddress(false)
        }
    }, [data, currentSelection])

    const handleChange = (event) => {
        const { value } = event.target;
        // setSelectAddress(checked)
        handleAddressChange(value)
    }
    return (<>
        { !!isDataAvailable && <div className="address__card">
            <input type="radio" checked={selectAddress} value={id} onChange={handleChange} />
            <div className="name">{name}</div>
            <div className="full__address">{`${address},${city},${state},${pincode}`}</div>
            <div className="phone__number">Mobile: {phone}</div>
            <button onClick={removeAddress} value={id}>Remove</button>
            <button onClick={editAddress} value={id}>Edit</button>
        </div>}</>
    )
}

export default AddressCard
