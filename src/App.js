import logo from './logo.svg';
//import './App.css';
import Card from './card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck , faTimes} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
library.add(faCheck,faTimes);
function App() {
  let details=[{type:'FREE',place:'$0/month',t1:'Single User',t2:'5GB Storage',t3:'Unlimited Public Projects',t4:'Community Access',t5:'Unlimited Private Projects',t6:'Dedicated Phone Support',t7:'Free subdomain',t8:'Monthly Status Reports'},
  {type:'PLUS',place:'$9/month',t1:'5 Users',t2:'50GB Storage',t3:'Unlimited Public Projects',t4:'Community Access',t5:'Unlimited Private Projects',t6:'Dedicated Phone Support',t7:'Free subdomain',t8:'Monthly Status Reports'},
  {type:'PRO',place:'$49/month',t1:'Unlimited Users',t2:'150GB Storage',t3:'Unlimited Public Projects',t4:'Community Access',t5:'Unlimited Private Projects',t6:'Dedicated Phone Support',t7:'Free subdomain',t8:'Monthly Status Reports'}];
  const [currentplan,setcurrentplan]=useState("No state selected");
  let handleplan=(plan)=>{
setcurrentplan(plan.type);
  }
  return ( 
  <div className='container'>
    <div className="col-sm-12 text-center">
      Selected Plan---{currentplan}
      </div>
    <div className='row bg-primary'>
      {
        details.map((a)=>{
          return <Card data={a} handleclick={handleplan}></Card>
        })
      }
    </div>
   </div>
  );

  }
export default App;
