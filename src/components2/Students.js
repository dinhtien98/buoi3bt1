import React, { useEffect, useState } from "react";
import Add from "./Add";
import Footer from "./Footer";
import Student from "./Student";
import { Container, ListGroup } from "reactstrap";

export default function Students() {
  const [flag, setFlag] = useState("");
  const [checkAll, setCheckAll] = useState(false);
  const [list, setList] = useState(()=>[
    {
      id: 1,
      name: "lê mèo",
      checked: false,
    },
    {
      id: 2,
      name: "lê nai",
      checked: false,
    },
    {
      id: 3,
      name: "lê thỏ",
      checked: false,
    },
    {
      id: 4,
      name: "lê gà",
      checked: false,
    },
  ]);
  useEffect(() => {
    if(localStorage.getItem("list")){
      setList(JSON.parse(localStorage.getItem("list")))
    }
  }, []);
  const deleteById = (id) => {
    setList(list.filter((std) => std.id !== id));
    localStorage.setItem("list",JSON.stringify(list.filter((std) => std.id !== id)))
  };
  const reChecked = (id) => {
    let newList = list.map((std) =>
      std.id === id ? { ...std, checked: !std.checked } : std
    );
    setList(newList);
    localStorage.setItem("list",JSON.stringify(newList))
  };
  const addNewStudent = (name) => {
    let maxId = list.reduce(
      (index, item) => Math.max(item.id, index),
      -Infinity
    );
    setList([
      ...list,
      { id: list.length == 0 ? 1 : maxId + 1, name: name, checked: false },
    ]);
  };
  const rename = (id, name) => {
    setList(list.map((std) => (std.id === id ? { ...std, name: name } : std)));
    localStorage.setItem("list",JSON.stringify(list.map((std) => (std.id === id ? { ...std, name: name } : std))))
  };
  const filterStudent = (list, flag) => {
    if (flag == "check") {
      return list.filter((std) => std.checked);
    } else if (flag == "nocheck") {
      return list.filter((std) => !std.checked);
    } else if (flag == "deleteAll") {
      setList(list.filter((std) => std.checked == false));
      localStorage.setItem("list",JSON.stringify(list.filter((std) => std.checked == false)))
      setFlag("");
    } else if (flag == "checkAll") {
      setList(list.map((item) => ({ ...item, checked: !checkAll })));
      localStorage.setItem("list",JSON.stringify(list.map((item) => ({ ...item, checked: !checkAll }))))
      setCheckAll(!checkAll);
      setFlag("");
    }
    return list;
  };
  return (
    <>
      <Container className="w-50 text-center p-5 my-5">
        <h1>Danh sách học sinh</h1>
        <Add
          addNewStudent={addNewStudent}
          checkAll={checkAll}
          setFlag={setFlag}
        />
        <ListGroup>
          {filterStudent(list, flag).map((std, index) => (
            <Student
              key={index}
              student={std}
              deleteById={deleteById}
              reChecked={reChecked}
              rename={rename}
            />
          ))}
        </ListGroup>
        <Footer setFlag={setFlag} />
      </Container>
    </>
  );
}
