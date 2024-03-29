import axios from "axios";
import { useEffect, useState } from "react";

// type Props = {};
type Person = {
  id: number;
  name: string;
};

const PersonList = (/*props: Props*/) => {
  const [persons, setPersons] = useState<Person[]>([]);

  // will run on component's first render/mount(?)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setPersons(res.data);
    });
  }, []);

  return (
    <ul className="list-disc ml-5 mt-1">
      {persons.map((person) => (
        <li key={person.id}>
          <b>[{person.id}]</b> {person.name}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
