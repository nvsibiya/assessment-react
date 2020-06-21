import React, { Component } from 'react';
import { Row, Button, Container } from 'react-bootstrap'
import Album from './Album'

class Albums extends Component {
    state = {
        albums:[],
        search:""
      }
   search = (e) => {
       let value = e.currentTarget.value;
        this.setState({
            search: value
        })
   }

     addAlbums = async (value) => {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+value,{
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d"
                }
            })
            let albums = await response.json()
            this.setState({
                albums:albums.data
            })
     }
    render() { 
        console.log(this.props)
        return ( 
            <Container>
                <input  onChange = {(e) => this.search(e)} type="text" placeholder="Search" value={this.state.search} />
                <Button onClick={()=> this.addAlbums(this.state.search)}>Search</Button>
                    <Row >
                        {this.state.albums.length > 0 && this.state.albums.map((album,index)=>
                            <Album key={index} source={album.album.cover} title={album.album.title} />
                            )
                        }
                    </Row> 
            </Container> 
         );
    }
}
 
export default Albums;

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'Initial State'
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//       // change code below this line
//   this.setState({
//     name: "React Rocks!"
//   }
//   )
//       // change code above this line
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.handleClick}>Click Me</button>
//           <h1>{this.state.name}</h1>
//         </div>
//       );
//     }
//   };