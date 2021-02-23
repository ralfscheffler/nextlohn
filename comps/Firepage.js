import {useRouter} from 'next/router'
import Router, { withRouter } from 'next/router'

const Firepage = (url) => {
    
    return (  
        Router.push(url)
    );

}


 
export default Firepage;