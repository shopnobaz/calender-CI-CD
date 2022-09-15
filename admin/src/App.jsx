// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { TeacherList, TeacherCreate, TeacherEdit } from './teachers';
import { SchoolList, SchoolCreate, SchoolEdit } from './schools';
import { ClassList, ClassCreate, ClassEdit } from './classes';
import { CoursesList, CoursesEdit, CoursesCreate } from './courses';
/* import jsonServerProvider from 'ra-data-json-server'; */
import simpleRestProvider from 'ra-data-simple-rest';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import { ApartmentRounded } from "@mui/icons-material";
import Dashboard from "./Dashboard";
/* const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); */

const dataProvider = simpleRestProvider('/data');

// <Resource name="users" list={ListGuesser} />

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="teachers" list={TeacherList} edit={TeacherEdit} create={TeacherCreate} icon={SchoolIcon} />
    <Resource name="schools" list={SchoolList} edit={SchoolEdit} create={SchoolCreate} icon={ApartmentRounded} />
    <Resource name="classes" list={ClassList} edit={ClassEdit} create={ClassCreate} icon={PostIcon} />
    <Resource name="courses" list={CoursesList} edit={CoursesEdit} create={CoursesCreate} icon={PostIcon} />
  </Admin>
);


export default App;