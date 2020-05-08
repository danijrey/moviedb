import React from 'react';
import axios from 'axios';


class Now extends React.Component {
    constructor(){
        super();

        this.state = {
            loading: true,
            error: false,
            list:[]
        }

    }



    componentDidMount(){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=435c541ff77bb63474aeac62867098ad&language=en-US&page=1")
            .then(res => {
                this.setState({
                    list: res.data
                } )
            } )
            .catch(e => {
                this.setState({
                    error: true
                } )
                console.log(e);
            } )
            .finally( () =>{
                this.setState({
                    loading: false,
                })
                console.log(this.state.list);

            } )


    }


    render(){
        if (this.state.loading === true ){ return <h2> Loading...</h2>}
        if  (this.state.error === true ){ return <h2> ERROR!!...</h2>}

        return(
            <table>
                <tbody>
            { this.state.list.results.map ( item =>
                <tr><td><h4>{item.title} ({item.release_date}) </h4> <p>{item.overview} </p> </td></tr>
                )
            }
                </tbody>
            </table>
        )





    };

}

export default Now;
