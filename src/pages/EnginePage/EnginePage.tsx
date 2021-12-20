import react from 'react'
import EngineForm from '../../components/EngineForm/EngineForm';
import config from "../../config/config.json";

const initialValues = config.map(element => element.data.initialValues)

const EnginePage: React.FC = () => {


return (
  <div className="page-container">
    <header>

    </header>
    <main>
      <EngineForm initialValues={initialValues} />
    </main>
    <footer>

    </footer>
  </div>
)
}

export default EnginePage



