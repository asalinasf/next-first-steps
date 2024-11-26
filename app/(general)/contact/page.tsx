import type {Metadata} from 'next'

export const metadata:Metadata = {
 title: 'Contact Page',
 description: 'Pagina para contactarnos',
 keywords:['Contact Page','Aaron','Email Next']
};

export default function contactPage(){
    return(
        <>
            <span className="text-7xl">
                Contact Page
            </span>
        </>
    )
}