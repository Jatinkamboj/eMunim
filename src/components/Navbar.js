import React from 'react'


function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-xl navbar-dark bg-dark pmd-navbar pmd-z-depth fixed-top">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="dropdown pmd-dropdown pmd-user-info ml-auto">
        <a href="javascript:void(0);" class="btn-user dropdown-toggle media align-items-center mr-5" data-toggle="dropdown" data-sidebar="true" aria-expanded="false"  style={{textDecoration:"none", color:"white"}}>
            <img class="mr-2" src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" alt="avatar" />
            <div class="media-body">
                <h5>User</h5>
            </div>
            <i class="material-icons md-light ml-2 pmd-sm"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <a class="dropdown-item" href="javascript:void(0);">Edit Profile</a>
            <a class="dropdown-item" href="javascript:void(0);">Logout</a>
        </ul>
    </div>
</nav>
<br></br><br></br>
<br></br>
        {/* <div className="container-full-page" style={{margin: "0 auto",paddingLeft:"30px",maxWidth: "700px",height: "100px",backgroundColor: "#ccc",borderRadius: "3px"}}> */}
        
    </>
  )
}

export default Navbar