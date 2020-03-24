import React, { Component } from "react";
import { Risks, Classifications } from "./json";
import {
  Container,
  Grid,
  FormControl,
  Select,
  InputLabel
} from "@material-ui/core";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipo_de_empresa: "",
      tipo_de_riesgo: ""
    };

    this.forms = {
      Risks,
      Classifications
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleClick() {
    Swal.fire({
      text: `Usted seleccionó el tipo de empresa ${this.state.tipo_de_empresa} con riesgo ${this.state.tipo_de_riesgo}`,
      icon: "success",
      confirmButtonColor: "#388e3c",
      confirmButtonText: "Ok"
    });
  }

  render() {
    const { Risks, Classifications } = this.forms;
    return (
      <Container>
        <Container>
          <div className="text-center mt-5">
            <h1>
              
              <strong className="text-success">
                
                Afiliación de la Empresa
              </strong>
            </h1>
          </div>

          <Grid container className="text-center mb-3 py-5 mx-5 px-5">
            {Classifications.map(label => {
              return (
                <Grid item xs={12} className="mb-3 mx-5 px-5">
                  <FormControl fullWidth>
                    <InputLabel>Tipo de Empresa</InputLabel>
                    <Select
                      native
                      id={label.Id}
                      name="tipo_de_empresa"
                      defaultValue=""
                      onChange={this.handleChange}
                    >
                      {label.options.map(obj => {
                        return (
                          <option key={obj.Id} value={obj.Classification}>
                            {obj.Classification}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              );
            })}
            {Risks.map(label => {
              return (
                <Grid item xs={12} className="mx-5 px-5">
                  <FormControl fullWidth>
                    <InputLabel>Tipo de Riesgo</InputLabel>
                    <Select
                      native
                      id={label.Id}
                      name="tipo_de_riesgo"
                      defaultValue=""
                      onChange={this.handleChange}
                    >
                      {label.options.map(obj => {
                        return (
                          <option key={obj.Id} value={obj.Level}>
                            {obj.Level}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              );
            })}
          </Grid>
          <div className="d-flex justify-content-end mx-5 px-5">
            <Button
              className="btn btn-success"
              type="button"
              onClick={this.handleClick}
            >
              Enviar
            </Button>
          </div>
        </Container>
      </Container>
    );
  }
}
