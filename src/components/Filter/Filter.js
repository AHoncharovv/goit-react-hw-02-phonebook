function Filter({ value, filterChange }) {
    return (
        <label>
            Find contacts by name
            <input value={value} onChange={filterChange}></input>
        </label>
    )
}

export default Filter;
