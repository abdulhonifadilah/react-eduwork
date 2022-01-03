import React, { Component } from 'react'

export default class Alamat extends Component {
    state = {
        jalan:"",
        kota: "",
        provinsi: "",
        alamat:""
    }
    handleAlamat=()=>{
      this.setState({alamat: this.state.jalan + " "+this.state.kota +" "+this.state.provinsi})
    }
    render() {
      return (
        <div>
          <h1>{this.props.nama}</h1>
          <label htmlFor="">jalan</label><input type="text" onChange={(e)=>this.setState({jalan: e.target.value})}/>
          <label htmlFor="">kota</label><input type="text" onChange={(e)=> this.setState({kota : e.target.value})}/>
          <label htmlFor="">provinsi</label><input type="text" onChange={(e)=> this.setState({provinsi: e.target.value})}/>
          <br />
          <button onClick={this.handleAlamat}>Ok</button>
          <p>alamat lengkap : {this.state.alamat}</p>
        </div>
      );
    }
}
