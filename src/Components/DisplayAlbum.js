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
        await this.props.getPhotosAction(this.state.albumId);
        console.log(this.state.albumId); 
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
                        type="number"
                        onChange={(e) => this.change(e)}
                        />
                    <button type="submit" >Get Album Photos By Id</button>
                </form>
                {this.props.getPhotos.loading === 'block'?(
                        <div className="img-grid" >
                            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((photo) => (
                                <div className="post-wrapper">
                                        <Skeleton className="img-wrap"/>
                                    <div className="img-title"><h1>{Skeleton}</h1></div>
                                </div>
                            ))} 
                        </div>
                    ):this.props.getPhotos.loading === 'before' ?(
                                 ""
                    ):this.props.getPhotos.items == [] ?(
                        <span style={{color:"red"}}>No no album with that id was found!</span>
                    ):(
                        <div className="img-grid" >
                        {this.props.getPhotos.items.data.map((photo) => (
                            <div className="post-wrapper">
                                <motion.div className="img-wrap"  
                                    key ={photo.id}
                                    layout
                                    onClick={() => localStorage.setItem("photoUrl", photo.url)}
                                    >
                                    <Link to="/photo">
                                        <motion.img alt={"Image-album"} src={photo.url}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }} />
                                    </Link>
                                </motion.div>  
                                <div className="img-title"><h1>{photo.title}</h1></div>
                            </div>
                        ))} 
                    </div>
                    )
                }
                    {console.log(this.props.getPhotos.items)}
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
        getPhotosAction: (albumId) => dispatch(getPhotosAction(albumId))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (DisplayPhotos)
