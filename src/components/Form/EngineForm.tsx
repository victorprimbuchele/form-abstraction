import react from 'react';
import {Field, Form, Formik } from 'formik';

const EngineForm = ({initialValues}: any) => {

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
        >
        {({ values }) => (
            <Form>
                {Object.keys(initialValues).map(value => 
                  (  <div className={value}>
              <label htmlFor={value}>{value}</label>
              <Field
                name={value}
                type="text"
              />
            </div>)
                    )}
               
            </Form>
        )}  
        </Formik>
    )
}
 
export default EngineForm