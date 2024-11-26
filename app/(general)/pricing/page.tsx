import type {Metadata} from 'next'

export const metadata:Metadata = {
 title: 'Pricing Page',
 description: 'Pagina sobre Pricing de nuestra pagina',
 keywords:['Pricing Page','Aaron','price']
};

export default function pricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}