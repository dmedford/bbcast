import React from 'react'
import Characteritem from './Characteritem'
import Spinner from '../../components/ui/Spinner'

const Charactergrid = ({ items, isLoading }) => {
    return isLoading ? <Spinner /> : <section className="cards">
        {items.map(item => (
            <Characteritem key={item.char_id} item={item} />
        ))}
    </section>
}

export default Charactergrid
