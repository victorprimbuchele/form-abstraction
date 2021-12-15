import { useEffect, useState } from 'react';
import EngineForm from '../../components/Form/Form';
import config from '../../config/config.json';

const form = "contact_form";
const id = config.find(element => element.form === form);



const Contact: React.FC<any> = () => {
    const [initialValues, setInitialValues] = useState({})

    useEffect(() => {
        const init = async (): Promise<any> => {
            return new Promise<any>((resolve, reject) => {
                try {
                    if (id) {
                        setInitialValues(id.data.initialValues)
                        return resolve(initialValues)
                    } else {
                        return resolve('id inválido, cara pálida')
                    }
                } catch (e) {
                    console.log(e);
                    return reject(e);
                }
            })
        }

        init()
    }, [id])

    return (
        <div className="contact-container">
            <h1>Entre em Contato</h1>
            
            <EngineForm initialValues={initialValues}/>
        </div>
    )
}

export default Contact