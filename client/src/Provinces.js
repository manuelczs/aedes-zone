import React, {Component} from 'react';
import axios from 'axios';
<<<<<<< HEAD
=======
import IdProvince from './IdProvince';
>>>>>>> 504ba8f13c7ab6588af437c7638728c96a32a4c8

class Provinces extends Component {
  constructor(props) {
    super();
    this.state = {
<<<<<<< HEAD
      provinces: []
    };

=======
      loading: true,
      province_select: false,
      name_province: '',
      provinces: [],
      province_data: {
        nombre: '',
        enfermedad: '',
        numero_de_casos: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
>>>>>>> 504ba8f13c7ab6588af437c7638728c96a32a4c8
  }

  componentDidMount() {
    axios
    .get("/api/provinces")
    .then(
      response => {
        console.log(response);
        this.setState({
<<<<<<< HEAD
          provinces: response.data
=======
          provinces: response.data,
          loading: false
>>>>>>> 504ba8f13c7ab6588af437c7638728c96a32a4c8
        })
      }
    )
    .catch(
      error => {
        console.log(error);
      }
    )
<<<<<<< HEAD
  }

  render() {
    const provinces = this.state.provinces.map((province, i) => 
        /*change provincia to name*/
        <li key={i}>{province.provincia}</li>
      );
      console.log(provinces)
    return (
      <div>
        <h1>Provincias</h1>
      <ul>
        {provinces}
      </ul>
      </div>
    );
  }
}
=======
  };

  handleClick(name_province) {
    console.log(name_province);
    this.setState ({
      name_province: name_province
    })
  };

  handleSubmit(evt) {
    this.setState({loading: true}, () => {
      axios
      .get('/api/provinces/' + this.state.name_province)
      .then(
        response => {
          console.log("en response");
          console.log(response.data);
          this.setState({
            province_data: {
              nombre: response.data.provincia,
              enfermedad: response.data.enfermedad,
              numero_de_casos: response.data.numero_de_casos
            }
          })
        }
      ).catch(
        error => {
          console.log(error);
        }
      ).finally(() => {
        this.setState({
          loading: false,
          province_select: true
        });
      });
    });
  };

  render() {
    if(this.state.loading) {
      return(
        <h1>Loading...</h1>
      )
    }
    else {
      const provinces = this.state.provinces.map((prov, i) => 
        /*change provincia to name*/
        <option key={i} onClick={() => { this.handleClick(prov.provincia) }}>
            {prov.provincia}
        </option>
      )
      return (
        <div>
          <h2>Provincias</h2>
          <form onSubmit={this.handleSubmit}>
          <select>
            {provinces}
          </select>
          <button>Buscar</button>
          </form>
          { (this.state.province_select) ? (<IdProvince prov_data={this.state.province_data}/>) : ('') }
        </div>
      );
    }
  };
};
>>>>>>> 504ba8f13c7ab6588af437c7638728c96a32a4c8

export default Provinces;