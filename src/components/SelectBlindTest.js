import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../environment/config';

const year = [
    {
        value: "",
        label: "Toutes les années",
    },
    {
        value: "60%s",
        label: "Année 60",
    },
    {
        value: "70%s",
        label: "Année 70",
    },
    {
        value: "80%s",
        label: "Année 80",
    },
    {
        value: "90%s",
        label: "Année 90",
    },
    {
        value: "2000%s",
        label: "Année 2000",
    },
    {
        value: "2010",
        label: "2010",
    },
    {
        value: "2011",
        label: "2011",
    },
    {
        value: "2012",
        label: "2012",
    },
    {
        value: "2013",
        label: "2013",
    },
    {
        value: "2014",
        label: "2014",
    },
    {
        value: "2015",
        label: "2015",
    },
    {
        value: "2016",
        label: "2016",
    },
    {
        value: "2017",
        label: "2017",
    },
    {
        value: "2018",
        label: "2018",
    },
    {
        value: "2019",
        label: "2019",
    },
    {
        value: "2020",
        label: "2020",
    },
    {
        value: "2021",
        label: "2021",
    },
    {
        value: "2022",
        label: "2022",
    },
  ];

  const season = [
    {
        value: "",
        label: "Toutes les saison",
    },
    {
        value: "winter",
        label: "Hiver",
    },
    {
        value: "spring",
        label: "Printemps",
    },
    {
        value: "summer",
        label: "Ete",
    },
    {
        value: "fall",
        label: "Automne",
    },
  ];

var url ="https://api.animethemes.moe/audio?sort=random&page[size]=1";
var varYear = "";
var varSeason = "";

class SelectYear extends Component {
    constructor(props) {
        super(props);
        this.signIn();
        this.state = {
          year: "",
          season: "",
        };
    
        this.setYear = this.setYear.bind(this);
        this.setSeason = this.setSeason.bind(this);
      }

      componentDidMount() {
        console.log("componentDidMount");
        this.signIn();
      }

      signIn() {
        console.log("SignIn");

        //Se coo anonyme
        firebaseAuth.signInAnonymously()
            .then(() => this.props.navigation.navigate('Home',{type:'anonymous'}))
            .catch(error => {
                this.setState({ errorMessage: error.message }, () => {
                    console.log(this.state.errorMessage);
                    
                })
            });
        }
        
      setYear(e) {
        console.log("setYear");
        varYear = e.target.value;
        this.setState({ year: e.target.value });
        if(varYear === "") 
        {
            url = "https://api.animethemes.moe/audio?filter[path-like]="+varYear+"%&sort=random&page[size]=1";
        }else 
        {
            url = "https://api.animethemes.moe/audio?filter[path-like]="+varYear+"/"+varSeason+"%&sort=random&page[size]=1";
        }
        console.log(url);
    }
      
    setSeason(e) {
        console.log("setSeason");
        varSeason = e.target.value;
        console.log({year: e.target.value});
        this.setState({ season: e.target.value });
        if(varYear === "60%s" || varYear === "70%s" || varYear === "80%s" || varYear === "90%s" || varYear === "2000%s")
        {
            url = "https://api.animethemes.moe/audio?filter[path-like]="+varYear+"%&sort=random&page[size]=1";
        } else 
        {
            url = "https://api.animethemes.moe/audio?filter[path-like]="+varYear+"/"+varSeason+"%&sort=random&page[size]=1";
        }
        console.log(url);
    }
    
    render () {
        return (
            <div>
                <div>
                    <div className="select-container">
                        <select value={this.state.year} onChange={this.setYear}>
                            {year.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="select-container">
                        <select value={this.state.season} onChange={this.setSeason}>
                            {season.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                <Link
                    to={{
                        pathname: "/BlindTest",
                        state: url
                    }}
                />
            </div>
        );
  }
};

export default SelectYear;