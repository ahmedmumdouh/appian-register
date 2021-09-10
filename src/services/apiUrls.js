const URLs = {
    baseURL : "https://naghamdemo.appiancloud.com/suite/webapi",

    // user apis
    registerURL : "/test/register",
    loginURL : "/api/users/login",
    siginOutURL : "/api/signout",
    siginOutAllURL : "/api/signoutAll",
    userInfoURL : "/api/users/currentInfo",
    userDelURL : "/api/users/currentInfo",
    userUpdateURL : "/api/users/currentInfo",
    userImageURL : "/userPhotos/",
    userCheckPass : "/api/users/checkPassword",
    userUpdateShelf : "/api/shelves/books/",
    userGetShelf : "/api/shelves/books/",
    bookImageURL: "/bookPhotos/",
    //admin apis
    adminloginURL : "/api/admin/login",


    
}

export default URLs ;
// axios.post('http://localhost:3200/api/users/currentInfo', {},{
//     headers: {
//       "Content-Type": "application/json",
//       "x-auth": localStorage.getItem("token"),
//     }
//   })
//   .then(res => {
//     if (res.status === 200) {
//       console.log("fetched", res);
//       // this.props.history.push("/home");
//     }           
//   })
//   .catch(err => {            
//     console.log(err);           
//   });