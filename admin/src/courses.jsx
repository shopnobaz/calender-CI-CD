import { Datagrid, List, TextField, NumberField, BooleanField, EditButton, Edit, Create, SimpleForm, TextInput, NumberInput, BooleanInput, DateInput, DateField } from 'react-admin';

export const CoursesList = () => (
  <List>
    <Datagrid>
      <TextField source='id' reference='courses' />
      <TextField source='name' />
      <TextField source='shortName' />
      <NumberField source='class' />
      <NumberField source='points' />
      <DateField source='startDate' />
      <DateField source='endDate' />
      <TextField source='plan' />
      <NumberField source='invoiceItem' />
      <NumberField source='hoursPerDay' />
      <BooleanField source='hide' />
      <EditButton />
    </Datagrid>
  </List>
);

export const CoursesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField source='id' reference='courses' />
      <TextField source='name' />
      <TextField source='shortName' />
      <NumberField source='class' />
      <NumberField source='points' />
      <DateField source='startDate' />
      <DateField source='endDate' />
      <TextField source='plan' />
      <NumberField source='invoiceItem' />
      <NumberField source='hoursPerDay' />
      <BooleanField source='hide' />
    </SimpleForm>
  </Edit>
);

export const CoursesCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source='id' reference='courses' />
      <TextInput source='name' />
      <TextInput source='shortName' />
      <NumberInput source='class' />
      <NumberInput source='points' />
      <DateInput source='startDate' />
      <DateInput source='endDate' />
      <TextInput source='plan' />
      <NumberInput source='invoiceItem' />
      <NumberInput source='hoursPerDay' />
      <BooleanInput source='hide' />
    </SimpleForm>
  </Create>
);