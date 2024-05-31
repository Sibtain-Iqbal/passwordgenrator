import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useState } from 'react';
import { LC, NU, Sy, Up } from './Characters';

function App() {

  const [uppercase, setuppercase] = useState(false)
  const [lowercase, setlowercase] = useState(false)
  const [symbolss, setsymbolss] = useState(false)
  const [numbers, setnumbers] = useState(false)
  const [passlentgh ,setpasslength] = useState(20)
  const [finalpassword ,setfinalpassword] = useState('')

  let p= "sibtain"
  let n =p.charAt( Math.floor(Math.random()*12));
  console.log(n);



const cretaePassword = ()=>{



let finalpass =''
  let charAtt = ''
  if(uppercase || lowercase || symbolss || numbers){
    if(uppercase) charAtt +=Up
    if(lowercase) charAtt += LC
    if(symbolss) charAtt +=Sy
    if(numbers) charAtt +=NU  
    

    for(let i=0 ; i<passlentgh; i ++){
      finalpass += charAtt. charAt(Math.floor(Math.random()*charAtt.length))
      
    }
    setfinalpassword(finalpass)
    toast.success("Genrate Succesfully")
  }
  else{
    toast.error("Please atleast select one checkBOx")
  }

  




  // toast.error("hello")
}

const copyText =()=>{
  navigator.clipboard.writeText(finalpassword )
  toast.success( "The password Coppied !!`")
}


  return (
    <div className="App">
      <ToastContainer/>
      <div className="passbox">

        <h1>Password Genrator</h1>
        <div className="passlenth">
          <input type="text" value={finalpassword} /><button onClick={copyText}>Copy</button>
        </div>
        <div className='passwordlenght'>
          <label>Password length</label>
          <input type='number' max={30} min={10} value={passlentgh} onChange={(event)=>setpasslength(event.target.value)} />
        </div>

        <div className='passwordlenght'>
          <label>Including Upper Case</label>
          <input checked={uppercase} onChange={()=>setuppercase(!uppercase)} type='checkbox' />
        </div>

        <div className='passwordlenght'>
          <label>Including lower Case</label>
          <input checked={lowercase} onChange={()=>setlowercase(!lowercase)} type='checkbox' />
        </div>

        <div className='passwordlenght'>
          <label>Including Number</label>
          <input checked={numbers} onChange={()=>setnumbers(!numbers)} type='checkbox' />
        </div>
        <div className='passwordlenght'>
          <label>Including Symbols</label>
          <input checked={symbolss} onChange={()=> setsymbolss(!symbolss)} type='checkbox' />
        </div>

        <button onClick={cretaePassword} className='btn'>Genrate Password</button>

      </div>


    </div>
  );
}

export default App;
