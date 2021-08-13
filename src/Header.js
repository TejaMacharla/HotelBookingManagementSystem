import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component{
  constructor(){
    super()
    this.state={
      username:''
    }
  }
  
  conditionalHeader = () => {
   if(sessionStorage.getItem('username')!==null){
    return(
      <li>
          <a>
          Hi {sessionStorage.getItem('username')}
          </a>
      </li>
  )
    }else{
      sessionStorage.removeItem('username')
    }
}
render(){
  return(
    <div>

    
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div class="navbar-header">
        {/* <img class="navbar-brand" src="https://tse2.mm.bing.net/th?id=OIP.dinwxvjJN55OtoM827c2BwHaIg&pid=Api&P=0&w=300&h=300" style={{height:70,width:70}}/> */}
      </div>
      <ul class="nav navbar-nav">
        <li><Link to="/"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
        <li><Link to="/about"><span className="glyphicon glyphicon-book"></span> About Us</Link></li>
        <li><Link to="/contactus"><span className="glyphicon glyphicon-phone-alt"></span> Contact Us</Link></li>
       
      </ul>
      <ul class="nav navbar-nav navbar-right">
      {this.conditionalHeader()} 
        {/* <li><a href="#">Link</a></li> */}
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-list-alt"></span> Menu <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
            <li><Link to="/profile"><span class="glyphicon glyphicon-user"></span> Profile</Link></li>
            {/* <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li> */}
          </ul>
        </li>
      </ul>
      {/* <ul class="nav navbar-nav navbar-right">
      <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
      <li><Link to="/profile"><span class="glyphicon glyphicon-log-in"></span> Profile</Link></li> 
           
  
      </ul> */}
    </div>
  </nav>
  </div>
)

}
    
}
export default Header;