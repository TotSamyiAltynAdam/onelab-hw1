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
    }

    const onDelete = (index) => {
      const newData = data.filter((person) => person.index !== index);
      setData(newData);
      sessionStorage.setItem("users", JSON.stringify(newData));
    }

    return (
      <div className='listPage'>
        <div className="personList">
          {
            data.map((person) => (
              <Person
                key={person.index}
                person={person}
                onEdit={(newName, newSurname, newPhone) => onEdit(person.index, newName, newSurname, newPhone)}
                onDelete={() => onDelete(person.index)}
              />
            ))
          }
        </div>
      </div>
    )
}

export default List;