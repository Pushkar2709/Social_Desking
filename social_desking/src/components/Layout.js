import React, { Component } from 'react'
import axios from 'axios'

export class Layout extends Component {
    state = {
        data12: {}
    }
    componentDidMount() {
        axios.get('https://mocki.io/v1/f9a0dfc5-ea66-47de-9c46-63a6a6816933')
        .then(res => {
            // console.log(res)
            const data = res.data;
            console.log(data)
            this.setState({data12: data})
        })
        
    }

    // content123 = () => {
    //     console.log(this.state.data12.layoutMatrix)
    // }

    // content(mat) {
    //     // let con = []
    //     // for (let i = 0 ; i < mat.length ; i++)
    //     // {
    //     //     for (let j = 0 ; j < mat[i].length ; j++)
    //     //     {
    //     //         con.push(<span>{mat[i][j]}, </span>)
    //     //     }
    //     // }
    //     // return con;
    //     let a = Array(mat);
    //     console.log(a)
    //     console.log(mat)
    // }

    render() {
        return (
            <div>
                {
                    
                    this.state.data12.layoutMatrix
                }
            </div>
        )
    }
}

export default Layout
