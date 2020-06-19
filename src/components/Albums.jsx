import React, {Component} from 'react'
import { Button, Container } from 'react-bootstrap'

class Albums extends Component {
    state = {
        albums: [],
        search:""

    }

    addAlbums = async () => {
        let response = await fetch ("https://deezerdevs-deezer.p.rapidapi.com/search?q="+ this.state.search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b41254000bmshb62e314b3254f24p1dac92jsn6f1fc3174939"
            }
        })
        let albums = await response.json()
        this.setState({
            albums:albums.data
        })
    }
 render (){
     return(
         <Container fluid>
             <input type="text" value={this.state.search} onChange ={(e) => this.setState({search:e.currentTarget.value})} />
             <button variant="outline-success" onClick={this.addAlbums}>Search</button>
         </Container>
     )
 }   
}

export default Albums