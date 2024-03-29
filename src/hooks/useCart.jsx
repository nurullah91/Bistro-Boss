import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useCart = () =>{
    const {user, loading} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = []  } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn:  async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
          },


        // queryFn:  async () => {
        //     const res = await fetch(`https://bistro-boss-server-eight-eta.vercel.app/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization:`bearer ${token}`
        //         }
        //     })
        //     return res.json();
        //   },
      })

      return [cart, refetch]
}

export default useCart;