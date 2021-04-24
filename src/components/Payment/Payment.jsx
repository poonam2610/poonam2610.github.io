import React, { useState } from 'react';
import AddressCard from '../../helper-components/AddressCard/AddressCard';
import AddressModal from '../../helper-components/AddressModal/AddressModal';
import "./Payment.scss";

function Payment() {
    const data = [
        {
            id: 1,
            name: "piyush Ranjan",
            phone: "+918906838026",
            pincode: "813102",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita nesciunt animi quia voluptatem odio itaque magnam consequatur possimus, optio commodi ",
            city: "banka",
            state: "bihar",
            isDefault: true
        }, {
            id: 2,
            name: "Anusha Jain",
            phone: "+919534767453",
            pincode: "201009",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita nesciunt animi quia voluptatem odio itaque magnam consequatur possimus, optio commodi ",
            city: "gujrat",
            state: "rajasthan",
            isDefault: false
        }
    ];

    const [modalValue, setModalValue] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultAddress = { ...data.filter(x => x.isDefault)[0] };
    const otherAddress = data.filter(x => !x.isDefault);
    // console.log(defaultAddress);

    const handleAddressChange = (e) => {
        
    }

    const removeAddress = (e) => {

    }

    const editAddress = (e) => {
        // console.log("event", e.target.value)
        const id = e.target.value;
        const modalData = { ...data.filter(x => x.id === parseInt(id))[0] };
        console.log({ modalData })
        setModalValue(modalData);
        setIsModalOpen(true)

    }
    const addOrSaveAddress = (value) => {
        console.log("value received from modal = ", value)
        const { id } = value;
        const idPresent = data.filter(value => value.id === id);
        if (idPresent < 1) {
            console.log("includes id")
        }

    }
    const handleAddressModal = () => {
        setModalValue({});
        setIsModalOpen(true)

    }

    return (
        <div className="address__main__container">
            <div className="address__container">
                <div className="address__header">
                    <h1 className="address__title">select delivery address</h1>
                    <button className="add__new__address__button" onClick={handleAddressModal}>ADD NEW ADDRESS</button>
                </div>
                <hr />
                <div className="default__address__container">
                    <div className="default__title">Default Address</div>
                    <AddressCard data={defaultAddress} handleAddressChange={handleAddressChange} removeAddress={removeAddress} editAddress={editAddress} />
                </div>
                <div className="other__address__container">
                    <div className="default__title">Other Address</div>
                    {otherAddress.map((value, index) => {
                        return <AddressCard key={index} data={value} handleAddressChange={handleAddressChange} removeAddress={removeAddress} editAddress={editAddress} />
                    })}
                </div>
            </div>
            <div className="payment__container">
                payment integration comes here
            </div>
            {!!isModalOpen && <AddressModal modalValue={modalValue} setIsModalOpen={setIsModalOpen} addOrSaveAddress={addOrSaveAddress} />}

        </div>
    )
}

export default Payment
