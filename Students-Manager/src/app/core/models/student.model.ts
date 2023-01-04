import { Grades } from "./grade.model";
import { Subject } from "./subject.model";

export interface Student {
    age: number,
    id: string,
    name: string,
    lastName: string,
    subject1: Subject,
    subject2: Subject,
    subject3: Subject,
    subject4: Subject,
    grade1: Grades,
    grade2: Grades,
    grade3: Grades,
    grade4: Grades,
    literal1: string,
    literal2: string,
    literal3: string,
    literal4: string,
    attendance: string,
    date?: Date,
}