/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from "react";

// implement a Student component here

export interface StudentType {
  id: number;
  name: string;
  age: number;
  grade: string;
}

export function StudentFn({ student }: { student: StudentType }) {
  return (
    <div data-testid="student">
      <p>{student.id}</p>
      <p>{student.name}</p>
      <p>{student.age}</p>
      <p>{student.grade}</p>
    </div>
  );
}

export class StudentClass extends Component<{ student: StudentType }> {
  render() {
    const { id, name, age, grade } = this.props.student;
    return (
      <div data-testid="student">
        <p>{id}</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{grade}</p>
      </div>
    );
  }
}
