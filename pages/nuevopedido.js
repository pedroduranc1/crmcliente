import React, {useContext,useState} from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';
import AsignarProductos from '../components/pedidos/AsignarProductos';
import ResumenPedido from '../components/pedidos/ResumenPedido';
import Total from '../components/pedidos/Total';
import {gql,useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'

//context de pedidos
import PedidoContext from '../context/pedidos/PedidoContext'

const NUEVO_PEDIDO = gql
`
    mutation nuevoPedido($input: PedidoInput){
        nuevoPedido(input: $input){
            id
        }
    }   
`

const OBTENER_PEDIDOS = gql
`
    query obtenerPedidosVendedor{
        obtenerPedidosVendedor{
            id
            pedido{
                id
                cantidad
                nombre
            }
            cliente{
                id
                nombre
                apellido
                email
                telefono
            }
            vendedor
            total
            estado
        }
    }
`

const NuevoPedido = () => {

    const router = useRouter()

    const [mensaje,setMensaje] = useState(null)

    //Utilizar context y extraer sus valores
    const pedidoContext = useContext(PedidoContext)
    const {cliente,productos,total} = pedidoContext

    //mutation para crear un nuevo pedido
    const [ nuevoPedido ] = useMutation(NUEVO_PEDIDO,{
        update(cache,{
            data:{nuevoPedido}
        }){
            const { obtenerPedidosVendedor } = cache.readQuery({
                query: OBTENER_PEDIDOS
            })

            cache.writeQuery({
                query: OBTENER_PEDIDOS,
                data:{
                    obtenerPedidosVendedor: [...obtenerPedidosVendedor,nuevoPedido]
                }
            })
        }  
    })

    const validarPedido = () =>{
        return !productos.every(producto => producto.cantidad > 0) || total === 0 || cliente.length === 0 ? "opacity-50 cursor-not-allowed" : ''
    }

    const crearNuevoPedido = async () =>{

        const { id } = cliente

        //remover lo no deseado de productos
        const pedido = productos.map(({__typename,existencia,...producto})=> producto)

        try {
            const {data} = await nuevoPedido({
                variables:{
                    input:{
                        cliente: id,
                        total,
                        pedido
                    }
                }
            })

            //redireccionar
            router.push('/pedidos')

            //mostrar alerta
            Swal.fire(
                'Correcto',
                'El pedido se registro correctamente',
                'success'
            )
        } catch (error) {
            setMensaje(error.message)
            setTimeout(() => {
                setMensaje(null)
            }, 2000);
        }
    }

    const mostrarMensaje = () =>{
        return(
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm
                text-center mx-auto
            ">
                {mensaje}
            </div>
        )
    }

    return ( 
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
            {mensaje && mostrarMensaje()}
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <AsignarCliente/>
                    <AsignarProductos/>
                    <ResumenPedido/>
                    <Total/>
                    <button
                        type="button"
                        className={`bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 ${validarPedido()}`}
                        onClick={()=>{crearNuevoPedido()}}
                    >Registar Pedido</button>
                </div>
            </div>
        </Layout>
     );
}
 
export default NuevoPedido;