    app < defines routes >
/         |        \
()        ()       ()
/          |         \
()         ()        ()

class
constructor
render
 this.state: [] <empty to hold from call or set state 
 cDM or did mount 

 cDM() => {

 }<-- fetches initial data sets listener and types

  cDM() => {
      this.setState({
          data: setData
      })
 }

 cDU did update
 cDU() {

 }

 cdm used for call and set state

cDM() {
    axios
    .get
    .then(res=>{
        console.log(res)
        this.setState({doggos: res.data.message})
    })   
    .catch(err => console.log(err))
}