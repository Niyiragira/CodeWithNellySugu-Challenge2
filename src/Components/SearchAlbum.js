import React, { Component } from 'react'
import { getPhotosAction } from "../Redux/actions/getPhotosAction"
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton"
import { motion } from 'framer-motion';
import "../Assets/Styles/displayAlbum.scss"
import { Link } from 'react-router-dom';


class DisplayPhotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
          albumId: ''
        };
      }
    
      onSubmit = async (e) => {
        e.preventDefault();
        await getPhotosAction(this.state.albumId)
        this.props.getPhotos.loading = 'block'
        console.log(this.state.albumId)
    }

    change=(e)=>{
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="app">
                <form onSubmit={(e) => this.onSubmit(e)} >
                    <input
                        name="albumId" 
                        onChange={(e) => this.change(e)}
                        />
                    <button type="submit" >Get Album Photos By Id</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getPhotos: state.getPhotos
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getPhotosAction: () => dispatch(getPhotosAction())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (DisplayPhotos)
