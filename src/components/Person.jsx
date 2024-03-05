import styled from 'styled-components';
import { useState } from 'react';

const Person = ({person, onDelete, onEdit}) => {
    const [name, setName] = useState(person.name);
    const [surname, setSurname] = useState(person.surname);
    const [phone, setPhone] = useState(person.phone);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    return (
        <StyledContainer>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="text" value={surname} onChange={handleSurnameChange} />
            <input type="text" value={phone} onChange={handlePhoneChange} />
            <p onClick={() => onEdit(name, surname, phone)}>Edit</p>
            <p onClick={onDelete}>Delete</p>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 10px;
    p, input {
        width: 100px;
        margin: 0 5px;
    }
`;

export default Person;