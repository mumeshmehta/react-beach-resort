import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/**select Type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/** end select type */}

                {/**Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/**End Guests */}

                {/** Room Price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        id="price"
                        className="form-control" />
                </div>
                {/** End Room Prices */}

                {/** Size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize}
                            onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize}
                            onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/** end size */}

                {/** Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" onChange={handleChange}
                            checked={breakfast}
                            id="breakfast" name="breakfast" />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" onChange={handleChange}
                            checked={pets}
                            id="pets" name="pets" />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/** End Extras */}

            </form>
        </section>
    )
}
