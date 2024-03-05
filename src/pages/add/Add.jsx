import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './add.css';

const Add = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'surname':
        setSurname(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  }

  const onSave = () => {
    if(!name || !surname || !phone) return;
    let list = sessionStorage.getItem('users') || '[]';

    list = JSON.parse(list);
    let index = list.length;

    list.push({ index, name, surname, phone})
    sessionStorage.setItem('users', JSON.stringify(list));
    navigate('/');
  };

  return (
    <div className="addPage">
      <div className="form">
        <div className="form-content">
          <input type="text" value={name} onChange={handleInputChange} name="name" placeholder="First Name"/>
          <input type="text" value={surname} onChange={handleInputChange} name="surname" placeholder="Second Name"/>
          <input type="text" value={phone} onChange={handleInputChange} name="phone" placeholder="Phone Number"/>
          <button onClick={onSave}>
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}
export default Add;