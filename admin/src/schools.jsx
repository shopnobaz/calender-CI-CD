import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  EmailField,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput
} from 'react-admin';

export const SchoolList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="schools" />
      <TextField source="name" />
      <TextField source="shortName" />
      <EditButton />
    </Datagrid>
  </List>
)

export const SchoolEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField disabled source="id" reference="schools" />
      <TextInput source="name" />
      <TextInput source="shortName" />
    </SimpleForm>
  </Edit>
);

export const SchoolCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source="id" reference="schools" />
      <TextInput source="name" />
      <TextInput source="shortName" />
    </SimpleForm >
  </Create >
);

