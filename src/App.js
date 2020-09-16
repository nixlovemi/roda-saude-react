import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.radioboxChange = this.radioboxChange.bind(this);
        this.getDatasetData = this.getDatasetData.bind(this);

        this.state = {
            opcoes: [
                {name: 'mastigacao', display: 'Mastigação'},
                {name: 'qualidade_sono', display: 'Qualidade Sono'},
                {name: 'qualidade_alimentacao', display: 'Qualidade Alimentação'},
                {name: 'qtde_alimentacao', display: 'Quantidade Alimentação'},
                {name: 'nivel_energia', display: 'Nível Energia'},
                {name: 'atividade_fisica', display: 'Atividade Física'},
                {name: 'qtde_agua', display: 'Quantidade Água'},
                {name: 'organizacao_rotina', display: 'Organização Rotina'}
            ],
            mastigacao: 1,
            qualidade_sono: 1,
            qualidade_alimentacao: 1,
            qtde_alimentacao: 1,
            nivel_energia: 1,
            atividade_fisica: 1,
            qtde_agua: 1,
            organizacao_rotina: 1,

            options: {
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 50
                    }
                },
                scale: {
                    ticks: {
                        min: 0,
                        max: 10
                    }
                },
                legend: {
                    display: false,
                    onClick: (e) => { e.stopPropagation() },
                },
            }
        };
    }

    radioboxChange = (event) => {
        const varName = event.target.name;
        const varValue = parseInt(event.target.value);

        this.setState({
            [varName]: varValue
        }, function() {
            /*const arrData = this.getDatasetData();
            let newStateData = this.state.data;
            newStateData.datasets.data = arrData;

            this.setState({data: newStateData});
            console.log(newStateData);*/
        });
    }

    updateData() {
        const arrData = this.getDatasetData();

        return {
            datasets: [{
                data: arrData,
                backgroundColor: ['rgb(231,76,60,0.4)', 'rgb(155,89,182,0.4)', 'rgb(84,153,199,0.4)', 'rgb(26,188,156,0.4)', 'rgb(10,88,43,0.4)', 'rgb(241,196,15,0.4)', 'rgb(243,156,18,0.4)', 'rgb(211,84,0,0.4)'/*, 'rgb(127,140,141,0.4)', 'rgb(100,200,50,0.4)'*/]
            }],
            labels: [
                'Mastigação',
                'Qualidade Sono',
                'Qualidade Alimentação',
                'Quantidade Alimentação',
                'Nível Energia',
                'Atividade Física',
                'Quantidade Água',
                'Organização Rotina'
            ],
            aspectRatio: 0.4,
            maintainAspectRatio: false,
        };
    }

    getDatasetData() {
        const arrData = [];
        arrData.push( this.state.mastigacao );
        arrData.push( this.state.qualidade_sono );
        arrData.push( this.state.qualidade_alimentacao );
        arrData.push( this.state.qtde_alimentacao );
        arrData.push( this.state.nivel_energia );
        arrData.push( this.state.atividade_fisica );
        arrData.push( this.state.qtde_agua );
        arrData.push( this.state.organizacao_rotina );

        return arrData;
    }

    render() {
        const arrOpcoes =  this.state.opcoes;
        let tbItens = [];
        for (let i = 0; i < arrOpcoes.length; i++) {
            const value   = arrOpcoes[i];
            const classes = 'color-info color' + (i+1);

            tbItens.push(
                <tr>
                    <td><span className={classes}></span><span className="text">{value.display}</span></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="1" checked={this.state[value.name] === 1} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="2" checked={this.state[value.name] === 2} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="3" checked={this.state[value.name] === 3} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="4" checked={this.state[value.name] === 4} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="5" checked={this.state[value.name] === 5} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="6" checked={this.state[value.name] === 6} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="7" checked={this.state[value.name] === 7} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="8" checked={this.state[value.name] === 8} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="9" checked={this.state[value.name] === 9} onChange={this.radioboxChange} /></td>
                    <td><input className="form-check-input" type="radio" name={value.name} value="10" checked={this.state[value.name] === 10} onChange={this.radioboxChange} /></td>
                </tr>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th>10</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tbItens}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Polar key={Math.random()} data={this.updateData()} options={this.state.options} />
                    </div>
                </div>
            </div>
        );
    }
}