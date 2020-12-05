import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font, Image } from '@react-pdf/renderer';
import imagemEscolhida from './images/banner-header2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.radioboxChange = this.radioboxChange.bind(this);
        this.getDatasetData = this.getDatasetData.bind(this);
        this.iniciar = this.iniciar.bind(this);
        this.gerarPdf = this.gerarPdf.bind(this);
        this.refazer = this.refazer.bind(this);

        this.state = {
            iniciou: false,
            pdf: false,
            opcoes: [
                { name: 'mastigacao', display: 'Mastigação' },
                { name: 'qualidade_sono', display: 'Qualidade Sono' },
                { name: 'qualidade_alimentacao', display: 'Qualidade Alimentação' },
                { name: 'qtde_alimentacao', display: 'Quantidade Alimentação' },
                { name: 'nivel_energia', display: 'Nível Energia' },
                { name: 'atividade_fisica', display: 'Atividade Física' },
                { name: 'qtde_agua', display: 'Quantidade Água' },
                { name: 'organizacao_rotina', display: 'Organização Rotina' }
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
                        top: /*0*/ 20,
                        bottom: /*50*/ 0
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
                aspectRatio: 1,
                maintainAspectRatio: false,
            }
        };
    }

    iniciar() {
        this.setState({ iniciou: true });
    }

    gerarPdf() {
        this.setState({ pdf: true }, function () {
            return this.renderPdf();
        });
    }

    refazer() {
        this.setState({
            pdf: false,
            mastigacao: 1,
            qualidade_sono: 1,
            qualidade_alimentacao: 1,
            qtde_alimentacao: 1,
            nivel_energia: 1,
            atividade_fisica: 1,
            qtde_agua: 1,
            organizacao_rotina: 1,
        })
    }

    radioboxChange = (event) => {
        const varName = event.target.name;
        const varValue = parseInt(event.target.value);

        this.setState({
            [varName]: varValue
        }, function () {
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
        };
    }

    getDatasetData() {
        const arrData = [];
        arrData.push(this.state.mastigacao);
        arrData.push(this.state.qualidade_sono);
        arrData.push(this.state.qualidade_alimentacao);
        arrData.push(this.state.qtde_alimentacao);
        arrData.push(this.state.nivel_energia);
        arrData.push(this.state.atividade_fisica);
        arrData.push(this.state.qtde_agua);
        arrData.push(this.state.organizacao_rotina);

        return arrData;
    }

    renderPdf() {
        var url_base64jp = document.getElementById("chart").toDataURL("image/jpg");

        const styles = StyleSheet.create({
            page: {
                flexDirection: 'row',
                backgroundColor: '#FFFFFF'
            },
            section: {
                margin: 0,
                padding: 0,
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            },
            title: {
                width: '100%',
                padding: '5%',
                textAlign: 'center',
                backgroundColor: '#FFCFD8',
                color: '#FFF',
                fontSize: 24,
                fontFamily: 'kavivanar',
                marginBottom: 20,
            },
            column: {
                width: '50%'
            },
            notas: {
                width: '98%',
                fontFamily: 'kavivanar',
                float: 'left',
                backgroundColor: '#f7f7f7',
                padding: '1%',
                margin: '0 1% 1% 1%'
            }
        });

        /*Font.register({
            family: 'Kalam',
            src: Kalam
        });
        <Image src="https://lexico.useremarkable.com/production/images/uploads/7126/original/english-language.jpg" style={{ width: 400, height: 400 }} />
        */
        Font.register({
            family: 'kavivanar',
            src: 'http://fonts.gstatic.com/s/kavivanar/v1/VLDrdUtF1irKFc8rFWgDaw.ttf'
        });

        // Create Document Component
        const MyDocument = () => (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.title}>RESULTADO RODA DA SAÚDE</Text>

                        <View style={styles.column}>
                            <Text style={styles.notas}>Mastigação: {this.state.mastigacao}</Text>
                            <Text style={styles.notas}>Qualidade Alimentação: {this.state.qualidade_alimentacao}</Text>
                            <Text style={styles.notas}>Nível Energia: {this.state.nivel_energia}</Text>
                            <Text style={styles.notas}>Quantidade Água: {this.state.qtde_agua}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.notas}>Qualidade Sono: {this.state.qualidade_sono}</Text>
                            <Text style={styles.notas}>Quantidade Alimentação: {this.state.qtde_alimentacao}</Text>
                            <Text style={styles.notas}>Atividade Física: {this.state.atividade_fisica}</Text>
                            <Text style={styles.notas}>Organização Rotina: {this.state.organizacao_rotina}</Text>
                        </View>

                        <Image src={url_base64jp} style={{ width: 375, height: 350, marginLeft: 112 }} />
                        <Text style={{ fontFamily: 'kavivanar', width: '100%', height: 155, marginTop: 40, padding: '5%', backgroundColor: '#FFCFD8', color: '#FFF' }}>Resultado: uhhua ayggya aytayta auhhau aijnaija auauyta uauya anbauy</Text>
                        <Text style={{ fontFamily: 'kavivanar', width: '100%', textAlign: 'center', fontSize: 10, marginTop: 14 }}>Desenvolvido por kkkkkk @ 2020</Text>
                    </View>
                </Page>
            </Document>
        );

        return <PDFDownloadLink document={<MyDocument />} fileName="ResultadoRodaSaude.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Gerando PDF ...' : <><button className="big-button">BAIXAR PDF</button></>)}
        </PDFDownloadLink>;
    }

    renderRoda() {
        /*const arrOpcoes = this.state.opcoes;
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

        return <>
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
        </>;*/

        const arrOpcoes = this.state.opcoes;
        let tbItens = [];
        for (let i = 0; i < arrOpcoes.length; i++) {
            const value = arrOpcoes[i];
            const classes = 'color-info color' + (i + 1);

            tbItens.push(
                <tr key={i}>
                    <td><span className={classes}></span><span className="text">{value.display}</span></td>
                    <td>
                        <select value={this.state[value.name]} name={value.name} onChange={this.radioboxChange}>
                            <option value="1" defaultValue={this.state[value.name] === 1}>1</option>
                            <option value="2" defaultValue={this.state[value.name] === 2}>2</option>
                            <option value="3" defaultValue={this.state[value.name] === 3}>3</option>
                            <option value="4" defaultValue={this.state[value.name] === 4}>4</option>
                            <option value="5" defaultValue={this.state[value.name] === 5}>5</option>
                            <option value="6" defaultValue={this.state[value.name] === 6}>6</option>
                            <option value="7" defaultValue={this.state[value.name] === 7}>7</option>
                            <option value="8" defaultValue={this.state[value.name] === 8}>8</option>
                            <option value="9" defaultValue={this.state[value.name] === 9}>9</option>
                            <option value="10" defaultValue={this.state[value.name] === 10}>10</option>
                        </select>
                    </td>
                </tr>
            )
        }

        return <>
            <div className="mt-5">
                <div className="row">
                    <div className="col-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Nota</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tbItens}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-7">
                        <Polar id="chart" key={Math.random()} data={this.updateData()} options={this.state.options} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="col text-center mt-5 pb-5">
                            {!this.state.pdf ? <button className="big-button" onClick={this.gerarPdf}>GERAR PDF COM RESULTADO</button> : this.renderPdf()}
                            {this.state.pdf && <button className="big-button" onClick={this.refazer}>REFAZER</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }

    renderInitialText() {
        return <>
            <div className="row">
                <div className="col">
                    <p><strong>Esse texto precisa ser atualizado =)</strong></p>
                    <p>A Roda da Vida é uma ferramenta utilizada para realizar avaliações pessoais. O método é baseado em um reflexão sobre as áreas fundamentais da nossa experiência diária, como relacionamentos, qualidade de vida e outros.</p>
                    <p>Esse instrumento teve suas origens na década de 60, criado pelo americano Paul J. Meyer. Ele tornou-se famoso por seus trabalhos e livros na área de motivação e continua ativo, oferecendo palestras sobre o tema.</p>
                    <p>A estrutura da roda da vida pode ser comparada com um gráfico de pizza. O círculo é fatiado em partes, que representam cada área fundamental da vida. O número de áreas varia conforme o modelo utilizado: o círculo pode ser dividido entre oito, dez, doze ou mais categorias. Cada uma dessas partes será dedicada a um setor da vida. A pessoa deverá, então, determinar seu nível de satisfação com cada uma dessas áreas.</p>
                    <p>A Roda da Vida oferece para aquele que a utiliza uma visão mais sistêmica de sua vida, permitindo que leve em conta alguns dos aspectos mais relevantes e que necessitam de mais atenção.</p>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col text-center">
                    <button className="big-button" onClick={this.iniciar}>INICIAR</button>
                </div>
            </div>
        </>;
    }

    render() {
        const html = (this.state.iniciou) ? this.renderRoda() : this.renderInitialText();
        // const pdf = (this.state.pdf) ? this.gerarPdf() : <></>;
        // const pdf = this.gerarPdf();

        return (
            <div className="container">
                <div className="header">
                    <img className="img-responsive" alt="Header Roda da Saúde" src={imagemEscolhida} />
                </div>

                {html}
            </div>
        );
    }
}