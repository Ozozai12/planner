import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { Todo } from './Todo'
import { Contacts } from './Contacts';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Todo />} />
                <Route path='/contacts' element={<Contacts/>}/>
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    )
}