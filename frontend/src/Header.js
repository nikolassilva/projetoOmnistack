import React from 'react';
/*- usam-se chaves para chamar 
propriedade de JS no HTML

- children é uma propriedade que
retorna o HTML na função

*/
export default function Header({children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    ) 
}

