
import Link from 'next/link'
import Personalform from '../pages/Personalform'


function switchTab(e){
    const tabs = document.getElementsByClassName('tablink');
    for (var i=0;i < tabs.length; i++){
        tabs[i].classList.remove('w3-red');
        
    }
    e.target.classList.add('w3-red');
    if(e.currentTarget.id=='pers'){
        //<Link href='../pages/Personalform'><a>Personalbogen</a></Link>
        window.open('../pages/Personalform');
    }
}

const Navbar = () => {
    return ( 
        <div className="w3-bar w3-black">
        <button id="pers" className="w3-bar-item w3-button tablink w3-red" onClick={(e)=>{switchTab(e)}}>Personal
        Verwaltung</button>
        <button id="stdf" className="w3-bar-item w3-button tablink" onClick={(e)=>{switchTab(e)}}>Stundeneingabe</button>
        <button id="rep" className="w3-bar-item w3-button tablink" onClick={(e)=>{switchTab(e)}}>Reporte</button>
        <button id="einst" className="w3-bar-item w3-button tablink" onClick={(e)=>{switchTab(e)}}>Einstellungen</button>
     
        <select id="locations" className="w3-select w3-bar-item w3-margin-right w3-right" name="option">

        </select>

    
        <button id="login" className="w3-bar-item w3-button w3-right w3-margin-right">anmelden</button>
  </div>
     );
}
 
export default Navbar;