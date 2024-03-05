import { useState, useEffect } from 'react';
import Person from '../../components/Person';
import './list.css';

const List = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let list = sessionStorage.getItem("users");
        if(!list){
            list = [];
        } else {
            list = JSON.parse(list);
        }
        setData(list);
    }, []);

    const onEdit = (id, newName, newSurname, newPhone) => {
      const newData = [...data];
      newData[id].name = newName;
      newData[id].surname = newSurname;
      newData[id].phone = newPhone;
      setData(newData);
      sessionStorage.setItem("users", JSON.stringify(newData));
      alert('Successfully updated');
    }

    const onDelete = (index) => {
      const newData = data.filter((person) => person.index !== index);
      setData(newData);
      sessionStorage.setItem("users", JSON.stringify(newData));
    }

    return (
      <div className='listPage'>
        <div className="personList">
          { data.length > 0 ?
              data.map((person, i) => (
                <Person
                  key={person.index}
                  person={person}
                  onEdit={(newName, newSurname, newPhone) => onEdit(i, newName, newSurname, newPhone)}
                  onDelete={() => onDelete(person.index)}
                />
              )) : 'There is empty list'
          }
        </div>
      </div>
    )
}

export default List;