import { BooleanField, Datagrid, DateField, List, NumberField, TextField, Edit, Create, SimpleForm, TextInput, BooleanInput, NumberInput, DateInput, EditButton } from 'react-admin';

export const ClassList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <BooleanField source="hide" />
      <NumberField source="defaultStartTime" />
      <NumberField source="defaultEndTime" />
      <NumberField source="defaultHoursPerDay" />
      <EditButton />
    </Datagrid>
  </List>
)

export const ClassEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField source="id" reference="classes" />
      <TextInput source="name" />
      <TextInput source="shortName" />
      <TextInput source="school" />
      <TextInput source="blog" />
      <BooleanInput source="hide" />
      <NumberInput source="defaultStartTime" />
      <NumberInput source="defaultEndTime" />
      <NumberInput source="defaultHoursPerDay" />

    </SimpleForm>
  </Edit>
);

export const ClassCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="blog" />
      <TextField source="school" />
      <BooleanField source="hide" />
      <DateField source="defaultStartTime" />
      <DateField source="defaultEndTime" />
      <NumberField source="defaultHoursPerDay" />
    </SimpleForm >
  </Create >
);
