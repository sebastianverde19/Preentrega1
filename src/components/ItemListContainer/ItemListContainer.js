import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <div className='title'>{greeting}</div>

            <div className='container-card'>
                <div className="card">
                    <img src={'./img/p1.png'}alt="carrito de compras" width={'200px'} />
                    <h3>Bombacha de Campo</h3>
                    <p>$20.000</p>
                    <p>Bombacha De Campo Pampero Lisa - T38 A T60 - Uso Intensivo</p>
                    <button className='card-button'>Agrecar</button>
                </div>


                 <div className="card">
                    <img src={'./img/p2.png'}alt="carrito de compras" width={'200px'} />
                    <h3>Pantalon de Cargo</h3>
                    <p>$30.000</p>
                    <p>Pantalon Cargo Gabardina Pre Lavada For Men Hard Work</p>
                    <button className='card-button'>Agrecar</button>
                </div>

                <div className="card">
                    <img src={'./img/p3.png'}alt="carrito de compras" width={'200px'} />
                    <h3>Pantalon de Vestir</h3>
                    <p>$50.000</p>
                    <p>Pantalón De Vestir (bolsillo Chino, Semi Chupin, Elastizado)</p>
                    <button className='card-button'>Agrecar</button>
                </div>

            </div>
        </div>
    )
};

export default ItemListContainer;