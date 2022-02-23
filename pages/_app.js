import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  export default MyApp;
}
function Products({ Component, pageProps}) {
  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
return <Component {...pageProps}/>
export default Products;
}